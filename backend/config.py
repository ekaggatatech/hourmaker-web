import os
from dotenv import load_dotenv
load_dotenv()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
LLM_MODEL = "gemini-3.1-flash-lite"  # Use this - it's confirmed working
TOP_K = 3  # Only keep 3 chunks in memory at a time