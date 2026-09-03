# gemini_backend/rag.py
import os
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

import chromadb
from sentence_transformers import SentenceTransformer

# Force CPU usage
embed_model = SentenceTransformer("all-MiniLM-L6-v2", device='cpu')

# Update path to point to the copied chroma_db
client = chromadb.PersistentClient(path="./embedding/chroma_db")
collection = client.get_collection("hourmaker_docs")