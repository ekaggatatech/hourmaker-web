from contextlib import asynccontextmanager
from fastapi import FastAPI
from pydantic import BaseModel
from chatbot import run_chatbot, warmup_model
from tools import pricing_status
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional, List, Dict
import threading
import uuid


@asynccontextmanager
async def lifespan(_app: FastAPI):
    threading.Thread(target=warmup_model, name="gemini-warmup", daemon=True).start()
    yield


app = FastAPI(lifespan=lifespan)

# ============================================
# CORS - Allow all origins for testing
# ============================================
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
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
    
    try:
        response = run_chatbot(data.message, history)
        
        # Update history
        history.append({"role": "user", "content": data.message})
        history.append({"role": "model", "content": response["answer"]})
        session_store[session_id] = history
        
        return {
            "answer": response["answer"],
            "session_id": session_id
        }
    except Exception as e:
        import traceback
        error_msg = str(e)
        print(f"Error in chat endpoint: {error_msg}")
        traceback.print_exc()
        # Return a friendly error message and the exact error so the frontend can read it
        # without triggering a CORS error on the browser
        return {
            "answer": f"Sorry, I encountered an internal server error: {error_msg}. Please check the backend logs on Render.",
            "session_id": session_id
        }

@app.get("/")
def root():
    return {"message": "Gemini AI Chatbot API is running!", **pricing_status()}

@app.get("/health")
def health():
    return {"status": "healthy", **pricing_status()}

@app.get("/warmup")
def warmup():
    """Wake the process and open the Gemini connection before the first chat."""
    warmup_model()
    return {"status": "warm"}