import os
from google import genai
from google.genai import types

def search_web(query: str) -> str:
    return "Test result"

client = genai.Client(api_key=os.environ.get("GOOGLE_API_KEY"))

history = [
    types.Content(role="user", parts=[types.Part.from_text(text="Hi")]),
    types.Content(role="model", parts=[types.Part.from_text(text="Hello")]),
]

chat = client.chats.create(
    model="gemini-2.5-flash",
    config=types.GenerateContentConfig(
        system_instruction="You are a helpful assistant.",
        tools=[search_web],
        automatic_function_calling=types.AutomaticFunctionCallingConfig(disable=False),
    ),
    history=history
)

response = chat.send_message("What is your purpose?")
print(response.text)
