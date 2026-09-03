# gemini_backend/chatbot.py
from google import genai
from google.genai import types
from config import GOOGLE_API_KEY, LLM_MODEL

# Initialize the client
client = genai.Client(api_key=GOOGLE_API_KEY)

SYSTEM_PROMPT = """
You are Hourmaker AI, a helpful assistant for workforce management.

IMPORTANT RULES:
1. ONLY answer questions related to Hourmaker (workforce management, time tracking, attendance, leave, projects, billing, pricing, features, etc.)
2. If a question is NOT about Hourmaker, politely say: "I'm sorry, I can only answer questions about Hourmaker. Please ask me about our workforce management platform."
3. Answer from your general knowledge about Hourmaker. Do not claim to have scraped or looked up live website content.
4. If you are unsure or do not have enough information, say: "I don't have that information right now. Please contact our support team for more details."
5. Be friendly, concise, and helpful.
"""

def run_chatbot(question: str, history=None):
    if history is None:
        history = []
    
    # Convert history into the format expected by the genai SDK
    formatted_history = []
    for msg in history:
        role = "user" if msg["role"] == "user" else "model"
        formatted_history.append(types.Content(role=role, parts=[types.Part.from_text(text=msg["content"])]))
        
    chat = client.chats.create(
        model=LLM_MODEL,
        config=types.GenerateContentConfig(
            system_instruction=SYSTEM_PROMPT,
            temperature=0.7,
        ),
        history=formatted_history
    )

    response = chat.send_message(question)
    
    return {"answer": response.text}