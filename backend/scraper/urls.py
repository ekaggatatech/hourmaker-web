# gemini_backend/scraper/urls.py
BASE_URL = "https://hour-maker-vite.vercel.app/"

# ============================================
# STATIC PAGES (from App.jsx routes)
# ============================================
STATIC_URLS = [
    # f"{BASE_URL}",                          # Home
    f"{BASE_URL}pricing",                   # Pricing
    f"{BASE_URL}company",                   # Company
    f"{BASE_URL}company#contact",           # Company Contact
    f"{BASE_URL}privacy-policy",            # Privacy Policy
    f"{BASE_URL}terms",                     # Terms
    f"{BASE_URL}features",                  # Features Overview
    # f"{BASE_URL}documentation",             # Documentation
    f"{BASE_URL}resources",                 # Resources
    # f"{BASE_URL}careers",                   # Careers
]

# ============================================
# FEATURE PAGES (from features.js)
# ============================================
FEATURE_SLUGS = [
    # Dashboard
    "dashboard",
    
    # Time Tracking
    "automatic-tracking",
    "manual-tracking",
    
    # HR & People
    "attendance-management",
    "leave-management",
    "shift-management",
    "holiday-management",
    "team-management",
    "onboarding-management",
    "recruitment-management",
    "referral-management",
    "job-opening-management",
    
    # Work Management
    "project-management",
    "task-management",
    "client-management",
    "meeting-management",
    
    # Administration
    "user-management",
    "permission-management",
    "role-management",
    "activity-management",
    "reporting-analytics",
    
    # Communication
    "communication-announcement",
    "document-management",
    
    # Billing & Finance
    "billing-management",
    "invoicing",
    
    # Support
    "helpdesk-support",
    
    # Company
    "company-management",
]

# ============================================
# BLOG PAGES (from blogPosts.js)
# ============================================
BLOG_SLUGS = [
    "improve-employee-time-tracking-compliance",
    "workforce-management-trends-2025",
    "reduce-overtime-costs-scheduling-optimization",
    "remote-team-time-tracking-best-practices",
    "hr-compliance-automation-guide",
    "employee-onboarding-automation-roi",
]

# ============================================
# GENERATE ALL URLS
# ============================================
def get_all_urls():
    urls = STATIC_URLS.copy()
    
    # Add feature URLs
    for slug in FEATURE_SLUGS:
        urls.append(f"{BASE_URL}features/{slug}")
    
    # Add blog URLs
    for slug in BLOG_SLUGS:
        urls.append(f"{BASE_URL}blog/{slug}")
    
    # Remove duplicates while preserving order
    seen = set()
    unique_urls = []
    for url in urls:
        if url not in seen:
            seen.add(url)
            unique_urls.append(url)
    
    return unique_urls

# For backward compatibility
URLS = get_all_urls()

# ============================================
# DEBUGGING - Print URLs count
# ============================================
if __name__ == "__main__":
    print(f"Total URLs to scrape: {len(URLS)}")
    print("\nURLs:")
    for url in URLS:
        print(f"  - {url}")