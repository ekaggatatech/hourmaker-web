import requests
from bs4 import BeautifulSoup
from ddgs import DDGS

def search_web(query: str) -> str:
    """
    Searches the Hourmaker website for information related to the query and returns the text content of the top results.
    Use this tool whenever you need specific information about Hourmaker that you don't already know.
    """
    # Append site:hourmaker.com to restrict the search
    full_query = f"{query} site:hourmaker.com"
    print(f"[TOOLS] Searching web for: {full_query}")
    
    results = []
    try:
        with DDGS() as ddgs:
            # Get top 3 search results
            ddgs_results = list(ddgs.text(full_query, max_results=3))
            
            for res in ddgs_results:
                url = res.get('href')
                if url:
                    print(f"[TOOLS] Scraping URL: {url}")
                    try:
                        # Fetch the page content
                        response = requests.get(url, timeout=5)
                        response.raise_for_status()
                        soup = BeautifulSoup(response.text, 'html.parser')
                        
                        # Remove script and style elements
                        for script in soup(["script", "style"]):
                            script.decompose()
                            
                        # Get text and clean it up
                        text = soup.get_text(separator=' ', strip=True)
                        # Keep only the first 3000 characters of each page to avoid hitting context limits too quickly
                        results.append(f"Source URL: {url}\nContent: {text[:3000]}...")
                    except Exception as e:
                        print(f"[TOOLS] Error scraping {url}: {e}")
                        results.append(f"Source URL: {url}\nContent: [Failed to retrieve content]")
                        
        if not results:
            return "No relevant information found on the Hourmaker website."
            
        return "\n\n---\n\n".join(results)
        
    except Exception as e:
        print(f"[TOOLS] Search failed: {e}")
        return "Search failed. Could not retrieve information."
