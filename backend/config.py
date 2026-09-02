import os
from dotenv import load_dotenv
load_dotenv()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
LLM_MODEL = "gemini-1.5-flash"  # Valid model name
TOP_K = 3  # Only keep 3 chunks in memory at a time