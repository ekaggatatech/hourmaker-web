from fastapi import FastAPI
from pydantic import BaseModel
from chatbot import run_chatbot
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional, List, Dict
import uuid

app = FastAPI()

# ============================================
# CORS - Allow all origins for testing
# ============================================
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5173",
        "https://hour-maker-vite.vercel.app",
        "https://www.hourmaker.com",
        "https://hourmaker.com",
    ],
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

session_store: Dict[str, List[dict]] = {}

class Message(BaseModel):
    message: str
    session_id: Optional[str] = None

@app.post("/chat")
def chat(data: Message):
    session_id = data.session_id or str(uuid.uuid4())
    history = session_store.get(session_id, [])
    
    response = run_chatbot(data.message, history)
    
    # Update history
    history.append({"role": "user", "content": data.message})
    history.append({"role": "model", "content": response["answer"]})
    session_store[session_id] = history
    
    return {
        "answer": response["answer"],
        "session_id": session_id
    }

@app.get("/")
def root():
    return {"message": "Gemini AI Chatbot API is running!"}

@app.get("/health")
def health():
    return {"status": "healthy"}