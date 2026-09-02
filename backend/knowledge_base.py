# gemini_backend/knowledge_base.py
import json
import os

def load_knowledge_base():
    """Load the scraped website content"""
    try:
        # Path to your scraped data
        json_path = os.path.join(os.path.dirname(__file__), 'scraper', 'output', 'website_content.json')
        
        print(f"[INFO] Loading knowledge base from: {json_path}")
        
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        print(f"[INFO] Loaded {len(data)} pages from scraped data")
        
        # Extract text content from all pages
        all_text = []
        for page in data:
            page_url = page.get("page", "")
            sections = page.get("sections", [])
            
            page_text = f"URL: {page_url}\n"
            for section in sections:
                heading = section.get("heading", "")
                content = " ".join(section.get("content", []))
                if content.strip():
                    page_text += f"\n{heading}\n{content}\n"
            
            all_text.append(page_text)
        
        full_text = "\n\n---\n\n".join(all_text)
        print(f"[OK] Knowledge base loaded: {len(full_text)} characters, {len(all_text)} pages")
        return full_text
    
    except Exception as e:
        print(f"[ERROR] Error loading knowledge base: {e}")
        return ""

# Load once at startup
KNOWLEDGE_BASE = load_knowledge_base()

# Print summary on import
if KNOWLEDGE_BASE:
    print(f"[OK] KNOWLEDGE_BASE ready with {len(KNOWLEDGE_BASE)} characters")
else:
    print("[WARN] KNOWLEDGE_BASE is empty")