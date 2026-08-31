# gemini_backend/run_all.py
import os
import sys
import subprocess
import json
import threading
import time
import itertools

# ============================================
# SPINNER ANIMATION
# ============================================
class Spinner:
    def __init__(self, message="Processing..."):
        self.message = message
        self.running = False
        self.spinner_thread = None
        self.frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
        self.idx = 0

    def spin(self):
        while self.running:
            frame = self.frames[self.idx % len(self.frames)]
            sys.stdout.write(f'\r{frame} {self.message}')
            sys.stdout.flush()
            self.idx += 1
            time.sleep(0.1)

    def start(self, message=None):
        if message:
            self.message = message
        self.running = True
        self.spinner_thread = threading.Thread(target=self.spin)
        self.spinner_thread.daemon = True
        self.spinner_thread.start()

    def stop(self, success=True):
        self.running = False
        if self.spinner_thread:
            self.spinner_thread.join(timeout=0.5)
        sys.stdout.write('\r')
        sys.stdout.flush()
        if success:
            print(f'✅ {self.message} - Done!')
        else:
            print(f'❌ {self.message} - Failed!')

REQUIRED_FILES = [
    "main.py",
    "chatbot.py",
    "config.py",
    "knowledge_base.py",
    "requirements.txt",
    ".env",
]

REQUIRED_FOLDERS = [
    "scraper",
    "scraper/output",
    "scraper/output/html",
]

REQUIRED_PACKAGES = [
    "fastapi",
    "uvicorn",
    "google-generativeai",
    "playwright",
    "beautifulsoup4",
]

# ============================================
# HEALTH CHECK
# ============================================
def health_check():
    print("\n" + "=" * 60)
    print("HEALTH CHECK")
    print("=" * 60)
    
    all_ok = True
    
    print("\nChecking required files...")
    for file in REQUIRED_FILES:
        if os.path.exists(file):
            print(f"  [OK] {file}")
        else:
            print(f"  [MISSING] {file}")
            all_ok = False
    
    print("\nChecking required folders...")
    for folder in REQUIRED_FOLDERS:
        if os.path.exists(folder):
            print(f"  [OK] {folder}/")
        else:
            print(f"  [MISSING] {folder}/")
            all_ok = False
    
    print("\nChecking Python packages...")
    for package in REQUIRED_PACKAGES:
        try:
            if package == "google-generativeai":
                import google.generativeai
            elif package == "playwright":
                import playwright
            elif package == "beautifulsoup4":
                import bs4
            else:
                __import__(package.replace('-', '_'))
            print(f"  [OK] {package}")
        except ImportError:
            print(f"  [MISSING] {package}")
            all_ok = False
    
    print("\nChecking environment...")
    if os.path.exists(".env"):
        with open(".env", "r") as f:
            content = f.read()
            if "GOOGLE_API_KEY" in content:
                print("  [OK] GOOGLE_API_KEY found in .env")
            else:
                print("  [WARN] GOOGLE_API_KEY not found in .env")
                all_ok = False
    else:
        print("  [MISSING] .env file missing")
        all_ok = False
    
    print("\nChecking __init__.py files...")
    for init_file in ["__init__.py", "scraper/__init__.py"]:
        if os.path.exists(init_file):
            print(f"  [OK] {init_file}")
        else:
            with open(init_file, "w") as f:
                f.write("# Auto-generated\n")
            print(f"  [OK] Created {init_file}")
    
    if all_ok:
        print("\n[OK] All health checks passed!")
    else:
        print("\n[WARN] Some issues found.")
    
    return all_ok

# ============================================
# RUN SCRAPER WITH SPINNER
# ============================================
def run_scraper():
    print("\n" + "=" * 60)
    print("RUNNING SCRAPER it will take time :( ...")
    print("=" * 60)
    
    spinner = Spinner("Scraping website content...")
    spinner.start()
    
    try:
        result = subprocess.run(
            [sys.executable, "-m", "scraper.scraper"],
            cwd=os.getcwd(),
            capture_output=True,
            text=True,
            encoding='utf-8',
            errors='replace'
        )
        spinner.stop(success=result.returncode == 0)
        
        # Show summary if successful
        if result.returncode == 0:
            # Count HTML files
            html_dir = "scraper/output/html"
            if os.path.exists(html_dir):
                files = [f for f in os.listdir(html_dir) if f.endswith('.html')]
                print(f"  📁 {len(files)} HTML files saved")
        else:
            print(result.stdout)
            if result.stderr:
                print("Errors:", result.stderr[:500])
        
        return result.returncode == 0
    except Exception as e:
        spinner.stop(success=False)
        print(f"[ERROR] Scraper failed: {e}")
        return False

# ============================================
# RUN PARSER WITH SPINNER
# ============================================
def run_parser():
    print("\n" + "=" * 60)
    print("RUNNING PARSER  it is fast process :) ...")
    print("=" * 60)
    
    spinner = Spinner("Parsing HTML files...")
    spinner.start()
    
    try:
        result = subprocess.run(
            [sys.executable, "scraper/parser.py"],
            cwd=os.getcwd(),
            capture_output=True,
            text=True,
            encoding='utf-8',
            errors='replace'
        )
        spinner.stop(success=result.returncode == 0)
        
        if result.returncode == 0:
            # Show summary
            json_path = "scraper/output/website_content.json"
            if os.path.exists(json_path):
                with open(json_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                print(f"  📄 {len(data)} pages in knowledge base")
                size = os.path.getsize(json_path)
                print(f"  💾 {size/1024:.1f} KB")
        else:
            print(result.stdout)
            if result.stderr:
                print("Errors:", result.stderr[:500])
        
        return result.returncode == 0
    except Exception as e:
        spinner.stop(success=False)
        print(f"[ERROR] Parser failed: {e}")
        return False

# ============================================
# VERIFY KNOWLEDGE BASE
# ============================================
def verify_knowledge_base():
    print("\n" + "=" * 60)
    print("VERIFYING KNOWLEDGE BASE")
    print("=" * 60)
    
    spinner = Spinner("Verifying knowledge base...")
    spinner.start()
    
    json_path = "scraper/output/website_content.json"
    
    if not os.path.exists(json_path):
        spinner.stop(success=False)
        print("[ERROR] website_content.json not found!")
        return False
    
    try:
        with open(json_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        spinner.stop(success=True)
        print(f"  📄 {len(data)} pages loaded")
        
        size = os.path.getsize(json_path)
        print(f"  💾 {size:,} bytes ({size/1024:.1f} KB)")
        
        # Show sample
        if data:
            sample = data[0]
            print(f"  📋 Sample: {sample.get('page', 'N/A')}")
            sections = sample.get('sections', [])
            if sections:
                print(f"     - {len(sections)} sections")
        
        return True
    except Exception as e:
        spinner.stop(success=False)
        print(f"[ERROR] Failed: {e}")
        return False

# ============================================
# TEST CHATBOT
# ============================================
def test_chatbot():
    print("\n" + "=" * 60)
    print("TESTING CHATBOT")
    print("=" * 60)
    
    spinner = Spinner("Loading knowledge base...")
    spinner.start()
    
    try:
        result = subprocess.run(
            [sys.executable, "-c", 
             "from knowledge_base import KNOWLEDGE_BASE; "
             "print(f'{len(KNOWLEDGE_BASE):,} characters')"],
            cwd=os.getcwd(),
            capture_output=True,
            text=True,
            encoding='utf-8',
            errors='replace'
        )
        if result.returncode == 0:
            spinner.stop(success=True)
            print(f"  📚 Knowledge base: {result.stdout.strip()}")
            return True
        else:
            spinner.stop(success=False)
            print(result.stderr)
            return False
    except Exception as e:
        spinner.stop(success=False)
        print(f"[ERROR] Test failed: {e}")
        return False

# ============================================
# MAIN
# ============================================
def main():
    print("\n" + "=" * 60)
    print("🚀 GEMINI BACKEND - COMPLETE SETUP")
    print("=" * 60)
    print(f"📂 Working directory: {os.getcwd()}")
    
    if not health_check():
        print("\n[ERROR] Health check failed.")
        sys.exit(1)
    
    print("\n" + "=" * 60)
    print("Do you want to run the scraper? (y/n)")
    if input().strip().lower() == 'y':
        run_scraper()
    else:
        print("Skipping scraper...")
    
    print("\n" + "=" * 60)
    print("Do you want to run the parser? (y/n)")
    if input().strip().lower() == 'y':
        run_parser()
    else:
        print("Skipping parser...")
    
    verify_knowledge_base()
    test_chatbot()
    
    print("\n" + "=" * 60)
    print("✅ SETUP COMPLETE!")
    print("=" * 60)
    print("\n📋 Next steps:")
    print("  1. Start backend: uvicorn main:app --reload --port 8001")
    print("  2. Test the chatbot")
    print("  3. Ask questions about Hourmaker")
    print("\n🔗 Backend URL: http://localhost:8001")
    print("📚 Knowledge base: scraper/output/website_content.json")

if __name__ == "__main__":
    main()