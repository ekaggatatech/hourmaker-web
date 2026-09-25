import json
import os
import re
import requests
from bs4 import BeautifulSoup
from ddgs import DDGS
from pricing_data import APP_VERSION, PLANS as BUNDLED_PLANS, PRICING_FACTS

FRONTEND_ROOT = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "frontend"
)
SKIP_URL_PARTS = (
    "cgi-sys",
    "defaultwebpage",
    "cpanel",
    "comingsoon",
    "parked",
)


def _read_frontend(*parts: str) -> str:
    path = os.path.join(FRONTEND_ROOT, *parts)
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def search_web(query: str) -> str:
    """
    Last-resort search of the live Hourmaker website.
    Prefer get_pricing_plans or search_product_knowledge first.
    """
    results = []
    queries = [
        f"{query} site:hourmaker.in",
        f"{query} site:hourmaker.com",
    ]

    try:
        with DDGS() as ddgs:
            for full_query in queries:
                if len(results) >= 3:
                    break
                print(f"[TOOLS] Searching web for: {full_query}")
                ddgs_results = list(ddgs.text(full_query, max_results=3))

                for res in ddgs_results:
                    url = res.get("href") or ""
                    if not url or any(part in url.lower() for part in SKIP_URL_PARTS):
                        print(f"[TOOLS] Skipping junk URL: {url}")
                        continue
                    print(f"[TOOLS] Scraping URL: {url}")
                    try:
                        response = requests.get(url, timeout=5)
                        response.raise_for_status()
                        soup = BeautifulSoup(response.text, "html.parser")
                        for script in soup(["script", "style"]):
                            script.decompose()
                        text = soup.get_text(separator=" ", strip=True)
                        if len(text) < 80:
                            continue
                        results.append(f"Source URL: {url}\nContent: {text[:3000]}...")
                    except Exception as e:
                        print(f"[TOOLS] Error scraping {url}: {e}")

                    if len(results) >= 3:
                        break

        if not results:
            return (
                "No useful website results. Answer from get_pricing_plans or "
                "search_product_knowledge instead. Do not say you lack the information "
                "if those tools already returned product data."
            )

        return "\n\n---\n\n".join(results)

    except Exception as e:
        print(f"[TOOLS] Search failed: {e}")
        return (
            "Website search failed. Use get_pricing_plans or search_product_knowledge. "
            "Do not tell the user you lack the information if those tools returned data."
        )


def _parse_pricing_plans(plans_content: str):
    """Pull plan fields out of the frontend price.js plans array."""
    plans = []
    blocks = re.split(r"id:\s*\"", plans_content)
    for block in blocks[1:]:
        plan_id = block.split("\"", 1)[0]

        def field(name, default=""):
            match = re.search(rf'{name}:\s*"([^"]*)"', block)
            return match.group(1) if match else default

        included_match = re.search(r"included:\s*\[(.*?)\]", block, re.S)
        included = re.findall(r'"([^"]+)"', included_match.group(1)) if included_match else []

        badge_match = re.search(r'badge:\s*(null|"([^"]*)")', block)
        badge = badge_match.group(2) if badge_match and badge_match.group(2) else None

        monthly = field("priceMonthly")
        annual = field("priceAnnual")
        price_line = f"{monthly}/mo"
        if annual and annual != monthly:
            price_line += f" (or {annual}/mo billed annually)"

        plans.append(
            {
                "id": plan_id,
                "name": field("name", plan_id.title()),
                "price_line": price_line,
                "description": field("description"),
                "included": included,
                "badge": badge,
            }
        )
    return plans


def _format_pricing_plans(plans):
    price_lines = []
    detail_lines = []
    for plan in plans:
        included = plan.get("included") or []
        seat = next(
            (item for item in included if "employee" in item.lower() or "seat" in item.lower()),
            "",
        )
        parts = [plan["price_line"]]
        if seat:
            parts.append(seat)
        if plan.get("badge"):
            parts.append(plan["badge"])
        price_lines.append(f"- {plan['name']}: {' — '.join(parts)}")
        description = plan.get("description") or ""
        detail_lines.append(f"{plan['name']} — {description}")
        for item in included:
            detail_lines.append(f"- {item}")

    return (
        "Hourmaker prices are per user per month.\n\n"
        "PRICE SUMMARY — if the user only asks about pricing or cost, use this and do not dump every feature:\n"
        + "\n".join(price_lines)
        + "\n\nWHAT'S INCLUDED — if the user asks about features, what's included, or a specific plan, list that plan's bullets:\n"
        + "\n".join(detail_lines)
    )


def _price_js_candidates():
    here = os.path.dirname(os.path.abspath(__file__))
    repo = os.path.dirname(here)
    return [
        os.path.join(repo, "frontend", "src", "data", "price.js"),
        os.path.join(here, "price.js"),
        os.path.join(here, "data", "price.js"),
    ]


def _read_price_js():
    for path in _price_js_candidates():
        if os.path.isfile(path):
            with open(path, "r", encoding="utf-8") as f:
                print(f"[TOOLS] Reading pricing from {path}")
                return f.read()
    return None


def get_pricing_plans() -> str:
    """
    Returns Hourmaker plan prices and the features included in Basic, Pro, and Enterprise.
    Always uses the bundled catalog so Render (backend-only deploys) cannot fall back
    to an old Free / Pro Plus list.
    """
    formatted = _format_pricing_plans(BUNDLED_PLANS)
    print(f"[TOOLS] Using bundled canonical pricing ({APP_VERSION})")
    return f"{PRICING_FACTS}\n\n{formatted}"


def pricing_status():
    return {
        "version": APP_VERSION,
        "source": "bundled",
        "plans": [
            {"name": p["name"], "price": p["price_line"]} for p in BUNDLED_PLANS
        ],
    }


WEAK_TERMS = {
    "company",
    "hourmaker",
    "employee",
    "employees",
    "team",
    "teams",
    "work",
    "your",
    "our",
    "using",
    "management",
    "system",
    "platform",
}

PLAN_HINTS = (
    "price",
    "pricing",
    "plan",
    "cost",
    "basic",
    "enterprise",
    "included",
    "subscription",
    "billing",
    "seat",
    "pro plan",
    "what's in",
    "whats in",
)

CAPABILITY_LIST_HINTS = (
    "features of",
    "feature of",
    "what are the features",
    "what's included",
    "whats included",
    "what is included",
    "key features",
    "capabilities of",
    "modules in",
    "what can i do with",
    "what's in the",
)

LEAVE_POLICY_PHRASES = (
    "leave policy",
    "leave policies",
    "overtime policy",
    "overtime policies",
    "holiday policy",
    "holiday policies",
    "attendance policy",
    "attendance policies",
)


def _wants_capability_list(query: str) -> bool:
    q = (query or "").lower()
    return any(hint in q for hint in CAPABILITY_LIST_HINTS)


def is_plan_question(question: str) -> bool:
    q = (question or "").lower()
    if _direct_topic_answer(question):
        return False
    return any(hint in q for hint in PLAN_HINTS)


def _query_terms(query: str):
    stop = {
        "the", "a", "an", "of", "for", "and", "or", "is", "are", "what",
        "how", "in", "to", "on", "do", "does", "can", "you", "me", "please",
        "tell", "about", "with",
    }
    return [w for w in re.findall(r"[a-z0-9]+", query.lower()) if w not in stop and len(w) > 2]


def _score_doc(terms, query, title, body):
    title_l = (title or "").lower()
    body_l = (body or "").lower()
    q = (query or "").lower().strip()
    if not terms:
        return 0

    strong = [t for t in terms if t not in WEAK_TERMS]
    score = 0
    for term in terms:
        weight = 1 if term in WEAK_TERMS else 3
        if term in title_l:
            score += weight * 4
        elif term in body_l:
            score += weight

    if q and q in title_l:
        score += 12
    joined = " ".join(terms)
    if len(terms) >= 2 and joined in title_l:
        score += 10
    elif len(terms) >= 2 and joined in body_l:
        score += 6

    if strong:
        if not any(term in title_l or term in body_l for term in strong):
            return 0
        # Ignore passing mentions in a long feature blurb
        if not any(term in title_l for term in strong) and score < 9:
            return 0
    elif score < 8:
        return 0

    return score


def _policy_knowledge():
    return (
        "Hourmaker's published policies:\n"
        "- Privacy Policy: /privacy-policy\n"
        "- Terms of Service: /terms\n"
        "Do not list Document Management or Company Management feature bullets.\n"
        "If they want to store THEIR organization's policy files in the product, "
        "that is the Docs portal on Pro and Enterprise. Basic has company profile "
        "and announcements, not a policy library."
    )


def _about_knowledge():
    return (
        "Hourmaker is a workforce management platform for time tracking, scheduling, "
        "leave, projects, and billing. Company information is on /company.\n"
        "Do not list Company Management product features unless they asked how to "
        "edit a company profile inside the app."
    )


def _careers_knowledge():
    return (
        "Hourmaker hiring and open roles are on /careers.\n"
        "Do not list Recruitment product features unless they asked how Hourmaker "
        "helps them recruit their own employees (job openings, referrals)."
    )


def _contact_knowledge():
    return (
        "Users can contact Hourmaker via Contact Support in this chat, or email "
        "support@hourmaker.com.\n"
        "Do not list Helpdesk product features unless they asked about the in-app helpdesk module."
    )


def _direct_topic_answer(query: str):
    """Return a dedicated answer for site/legal questions that collide with product features."""
    q = (query or "").lower()
    if any(phrase in q for phrase in LEAVE_POLICY_PHRASES):
        return None
    if any(
        phrase in q
        for phrase in (
            "company policy",
            "company policies",
            "privacy policy",
            "privacy",
            "terms of service",
            "terms of use",
            "terms and conditions",
            "legal policy",
            "the terms",
        )
    ) or re.search(r"\bpolicies\b", q):
        return _policy_knowledge()
    if any(
        phrase in q
        for phrase in (
            "about the company",
            "about hourmaker",
            "about your company",
            "who are you",
            "who is hourmaker",
            "tell me about hourmaker",
            "your company",
        )
    ):
        return _about_knowledge()
    if any(
        phrase in q
        for phrase in (
            "career",
            "careers",
            "jobs at hourmaker",
            "work at hourmaker",
            "hiring at hourmaker",
            "join hourmaker",
        )
    ):
        return _careers_knowledge()
    if any(
        phrase in q
        for phrase in (
            "contact support",
            "contact us",
            "contact hourmaker",
            "support email",
            "how do i contact",
            "how to contact",
        )
    ):
        return _contact_knowledge()
    return None


def _answer_style(query: str) -> str:
    if _wants_capability_list(query) or is_plan_question(query):
        return (
            "FORMAT: If they asked what a plan or named feature includes, use a compact "
            "bullet list for that topic only."
        )
    return (
        "FORMAT: Answer the user's question directly in 1-3 short sentences. "
        "Do NOT add a 'Key features include' list. Do NOT describe a different module "
        "that only mentioned this topic in passing. If the match is weak, say you don't "
        "have that specific detail instead of inventing a feature tour."
    )


def _feature_docs():
    docs = []
    try:
        content = _read_frontend("src", "data", "features.js")
        for block in re.split(r'\n\s*slug:\s*"', content)[1:]:
            slug = block.split('"', 1)[0]
            title = re.search(r'title:\s*"([^"]+)"', block)
            short = re.search(r'shortDescription:\s*"([^"]*)"', block)
            desc = re.search(r'description:\s*"([^"]*)"', block)
            docs.append(
                {
                    "title": title.group(1) if title else slug,
                    "body": " ".join(
                        part.group(1) if part else ""
                        for part in (title, short, desc)
                    ),
                }
            )
    except Exception as e:
        print(f"[TOOLS] Failed to read features.js: {e}")
    return docs


def _faq_docs():
    docs = []
    try:
        data = json.loads(_read_frontend("src", "components", "chatbot", "faqData.json"))
        for intent in data.get("intents", []):
            answers = intent.get("answers") or []
            keywords = " ".join(intent.get("keywords") or [])
            docs.append(
                {
                    "title": intent.get("description") or intent.get("intent") or "FAQ",
                    "body": f"{keywords} {answers[0] if answers else ''}",
                    "answer": answers[0] if answers else "",
                    "keywords": intent.get("keywords") or [],
                }
            )
    except Exception as e:
        print(f"[TOOLS] Failed to read faqData.json: {e}")

    try:
        content = _read_frontend("src", "data", "pageFaq.js")
        pairs = re.findall(
            r'question:\s*"([^"]+)"\s*,\s*answer:\s*"([^"]*)"',
            content,
        )
        for question, answer in pairs:
            docs.append({"title": question, "body": f"{question} {answer}", "answer": answer})
    except Exception as e:
        print(f"[TOOLS] Failed to read pageFaq.js: {e}")
    return docs


def search_product_knowledge(query: str) -> str:
    """
    Search Hourmaker's local product docs: plan features, product features, and FAQs.
    Use this FIRST for Hourmaker questions. Return a direct answer — do not dump a nearby feature catalog.
    """
    terms = _query_terms(query)
    print(f"[TOOLS] Searching product knowledge for: {query} terms={terms}")

    direct = _direct_topic_answer(query)
    if direct:
        print("[TOOLS] Direct topic answer")
        return f"{_answer_style(query)}\n\n{direct}"

    scored = []
    q = (query or "").lower()

    if is_plan_question(query):
        pricing = get_pricing_plans()
        scored.append((max(_score_doc(terms, query, "Pricing & plans", pricing), 4), "Pricing & plans", pricing))

    for doc in _feature_docs():
        score = _score_doc(terms, query, doc["title"], doc["body"])
        if score:
            scored.append((score, doc["title"], doc["body"]))

    for doc in _faq_docs():
        score = _score_doc(terms, query, doc["title"], doc.get("body") or "")
        for kw in doc.get("keywords") or []:
            kw_l = kw.lower()
            if kw_l == q or kw_l in q or q in kw_l:
                score += 15
        if score:
            scored.append((score, doc["title"], doc.get("answer") or doc["body"]))

    scored.sort(key=lambda item: item[0], reverse=True)
    top = [item for item in scored if item[0] > 0][:2]

    if not top:
        return (
            f"{_answer_style(query)}\n\n"
            "No strong local match. Do not invent a feature list. "
            "If this is about pricing, use get_pricing_plans. Otherwise say you don't have that specific detail."
        )

    chunks = [f"{title}:\n{body}" for _, title, body in top]
    print(f"[TOOLS] Knowledge hits: {[title for _, title, _ in top]}")
    return f"{_answer_style(query)}\n\n" + "\n\n".join(chunks)
