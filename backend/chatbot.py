# gemini_backend/chatbot.py
import google.generativeai as genai
from config import GOOGLE_API_KEY, LLM_MODEL
from knowledge_base import KNOWLEDGE_BASE

genai.configure(api_key=GOOGLE_API_KEY)

SYSTEM_PROMPT = """
You are Hourmaker AI, a helpful assistant for workforce management.

IMPORTANT RULES:
1. ONLY answer questions related to Hourmaker (workforce management, time tracking, attendance, leave, projects, billing, pricing, features, etc.)
2. If a question is NOT about Hourmaker, politely say: "I'm sorry, I can only answer questions about Hourmaker. Please ask me about our workforce management platform."
3. Use the provided knowledge base to answer questions accurately.
4. If you don't know something based on the knowledge base, say: "I don't have that information right now. Please contact our support team for more details."
5. Be friendly, concise, and helpful.

KNOWLEDGE BASE (Hourmaker website content):
{knowledge_base}

User Question: {question}
"""

def run_chatbot(question: str, history=None):
    if history is None:
        history = []
    
    # Prepare the full prompt with knowledge base
    knowledge = KNOWLEDGE_BASE if KNOWLEDGE_BASE else "No knowledge base available. Please ask the user to contact support."
    
    full_prompt = SYSTEM_PROMPT.format(
        knowledge_base=knowledge[:50000],  # Limit to 50k chars
        question=question
    )
    
    model = genai.GenerativeModel(LLM_MODEL)
    response = model.generate_content(full_prompt)
    
    return {"answer": response.text}