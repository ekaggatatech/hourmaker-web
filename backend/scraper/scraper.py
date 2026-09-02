import os
import asyncio
from urllib.parse import urlparse
from playwright.async_api import async_playwright
from .urls import URLS

# Directory where the scraped HTML files are saved
SAVE_DIR = "scraper/output/html"

REMOVE_HIDDEN_JS = """
() => {
    const isHidden = (el) => {
        const style = window.getComputedStyle(el);
        if (style.display === 'none') return true;
        if (style.visibility === 'hidden') return true;
        if (parseFloat(style.opacity) === 0) return true;
        if (el.hasAttribute('hidden')) return true;
        if (el.getAttribute('aria-hidden') === 'true') return true;
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) return true;
        return false;
    };
    const all = Array.from(document.querySelectorAll('body *'));
    all.forEach(el => {
        if (document.body.contains(el) && isHidden(el)) {
            el.remove();
        }
    });
    return document.body.innerHTML;
}
"""

# Check if URL is a React-heavy page (needs more time)
def is_react_page(url):
    react_patterns = ['/features/', '/dashboard', '/automatic-tracking', '/manual-tracking']
    return any(pattern in url for pattern in react_patterns)

def filename_from_url(url):
    path = urlparse(url).path.strip("/")
    if path == "":
        return "home.html"
    # Clean up special characters
    clean_path = path.replace("/", "_").replace("#", "_").replace("?", "_")
    return clean_path + ".html"

async def save_html(page, url, retry_count=0):
    print(f"Scraping {url}")
    
    try:
        # Check if it's a React-heavy page
        is_react = is_react_page(url)
        
        # Different wait strategies for different page types
        if is_react:
            # For React pages: wait for content to load
            await page.goto(
                url,
                wait_until="domcontentloaded",
                timeout=45000
            )
            # Wait for React to render (longer for feature pages)
            await page.wait_for_timeout(5000)
            
            # Wait for main content to appear
            try:
                await page.wait_for_selector('main, .content, article, .feature-content', timeout=10000)
            except:
                pass  # Continue even if selector not found
            
        else:
            # For static pages: wait for network idle
            await page.goto(
                url,
                wait_until="networkidle",
                timeout=60000
            )
            await page.wait_for_timeout(2000)
        
        # Get the cleaned HTML
        html = await page.evaluate(REMOVE_HIDDEN_JS)
        
        # Check if we got meaningful content
        if len(html) < 100 and retry_count < 2:
            print(f"  Short content, retrying...")
            await page.wait_for_timeout(3000)
            html = await page.evaluate(REMOVE_HIDDEN_JS)
        
        filename = filename_from_url(url)
        filepath = os.path.join(SAVE_DIR, filename)
        
        # Ensure directory exists
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(html)
        
        print(f"  Saved -> {filename} ({len(html)} bytes)")
        
    except Exception as e:
        # Retry for React pages
        if retry_count < 3 and is_react_page(url):
            print(f"  Retry {retry_count + 1}/3 for {url}")
            await page.wait_for_timeout(5000)
            await save_html(page, url, retry_count + 1)
        else:
            print(f"  Failed : {url}")
            print(f"     Error: {str(e)[:200]}")

async def main():
    # Create output directory if it doesn't exist
    os.makedirs(SAVE_DIR, exist_ok=True)
    
    print(f"Starting scraper for {len(URLS)} URLs...")
    print("=" * 50)
    
    async with async_playwright() as p:
        # Launch browser with more resources for React
        browser = await p.chromium.launch(
            headless=True,
            args=[
                '--disable-dev-shm-usage',
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-gpu',
                '--disable-software-rasterizer'
            ]
        )
        
        # Create a new page with viewport for React
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})
        
        # Set user agent to avoid blocking
        await page.set_extra_http_headers({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        })
        
        # Process each URL
        for i, url in enumerate(URLS, 1):
            print(f"\n[{i}/{len(URLS)}] Processing...")
            try:
                await save_html(page, url)
            except Exception as e:
                print(f"  Failed: {url}")
                print(f"     Error: {str(e)[:200]}")
            # Small delay between requests
            await asyncio.sleep(0.5)
        
        await browser.close()
    
    print("\n" + "=" * 50)
    print("Finished scraping all pages!")
    
    # Show summary
    html_files = os.listdir(SAVE_DIR)
    print(f"Total files saved: {len(html_files)}")
    for f in html_files[:10]:
        size = os.path.getsize(os.path.join(SAVE_DIR, f))
        print(f"  - {f} ({size} bytes)")

if __name__ == "__main__":
    asyncio.run(main())