# gemini_backend/chatbot.py
import re
import threading
from google import genai
from google.genai import types
from config import GOOGLE_API_KEY, LLM_MODEL

from pricing_data import PRICING_FACTS
from tools import (
    search_web,
    get_pricing_plans,
    search_product_knowledge,
    is_plan_question,
)

# Initialize the client
client = genai.Client(api_key=GOOGLE_API_KEY)

_warmup_lock = threading.Lock()
_warmed = False


def warmup_model() -> None:
    """Hit Gemini once per process so the first user message is not a cold call."""
    global _warmed
    if _warmed:
        return
    with _warmup_lock:
        if _warmed:
            return
        try:
            print("[WARMUP] Pinging Gemini...")
            chat = client.chats.create(
                model=LLM_MODEL,
                config=types.GenerateContentConfig(
                    system_instruction="Reply with OK.",
                    temperature=0,
                    max_output_tokens=8,
                    tools=[get_pricing_plans, search_product_knowledge, search_web],
                    automatic_function_calling=types.AutomaticFunctionCallingConfig(
                        disable=True
                    ),
                ),
            )
            chat.send_message("ping")
            _warmed = True
            print("[WARMUP] Gemini is warm")
        except Exception as e:
            print(f"[WARMUP] Gemini warmup failed: {e}")

SYSTEM_PROMPT = """
You are Hourmaker AI, a helpful customer support assistant for Hourmaker workforce management.

TOOLS — use them in this order:
1. get_pricing_plans — only for pricing, cost, named plans, seat limits, or what a plan includes.
2. search_product_knowledge — for Hourmaker product questions, FAQs, policies, company info, how something works.
3. search_web — last resort only, if the other tools did not answer.

RULES:
1. Only answer Hourmaker-related questions. If the question is off-topic, say: "I'm sorry, I can only answer questions about Hourmaker. Please ask me about our workforce management platform."
2. Answer the question the user actually asked. Never pivot to a nearby module and list its capabilities unless they asked what that module does or what a plan includes.
3. Follow-ups like "and what are X" are a new topic. Do not keep listing the previous plan or feature.
4. Feature/capability bullets are allowed ONLY when they ask what a named plan includes, or the features/capabilities of a named product module.
5. For policies, privacy, terms, about the company, careers, or contact: give the site/legal answer (links and a short explanation). Do not dump a product feature catalog.
6. If they only ask for pricing, give plan names, prices, billing options, and seat limits only.
7. You may say "I don't have that information right now. Please contact our support team for more details." ONLY after you used the relevant tools and they truly had no answer.
8. Be friendly and concise. Use markdown bullets with "- " only when a list is needed. No HTML or <br> tags.
9. Hourmaker does not have a native mobile app. It works in mobile browsers.
10. For pricing, use only get_pricing_plans or the current plan data injected below. Do not invent plan names or prices. Ignore older catalogs or blank "/mo" prices from search results.
11. Timecard creation means creating a timesheet. If they ask about timecard creation, creating a timecard, or a new timecard, answer with how to create a timesheet using the timesheet result injected below. Do not say Hourmaker has no timecards.

{plan_data}
"""


def _is_timecard_creation(question: str) -> bool:
    """Hourmaker users often say timecard when they mean a timesheet."""
    q = (question or "").lower()
    if not re.search(r"\btime\s*cards?\b", q):
        return False
    return bool(
        re.search(
            r"\b(creat\w*|make|making|add|adding|new|start\w*|submit\w*|fill\w*|log\w*|enter\w*)\b",
            q,
        )
    )


def compact_reply(text: str) -> str:
    """Collapse extra blank lines so chat bubbles stay compact."""
    if not text:
        return text
    text = text.replace("\r\n", "\n")
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = re.sub(r"(^|\n)([-*+] .+)\n{2,}(?=[-*+] )", r"\1\2\n", text)
    text = re.sub(r"(^|\n)(\d+\. .+)\n{2,}(?=\d+\. )", r"\1\2\n", text)
    text = re.sub(r"(^|\n)([-*+] .+)\n(?=[A-Za-z])", r"\1\2\n\n", text)
    return text.strip()


def run_chatbot(question: str, history=None):
    if history is None:
        history = []

    formatted_history = []
    for msg in history:
        role = "user" if msg["role"] == "user" else "model"
        formatted_history.append(
            types.Content(role=role, parts=[types.Part.from_text(text=msg["content"])])
        )

    if is_plan_question(question):
        plan_data = (
            "CURRENT PLAN DATA (use only if this question is about pricing or a named plan):\n"
            + get_pricing_plans()
        )
    else:
        plan_data = (
            PRICING_FACTS
            + "\nThis question is not about pricing or plan inclusions. "
            "Do not list plan or module feature bullets. Call search_product_knowledge."
        )

    if _is_timecard_creation(question):
        plan_data += (
            "\n\nTIMECARD CREATION (answer as timesheet creation):\n"
            + search_product_knowledge("how to create a timesheet")
        )

    chat = client.chats.create(
        model=LLM_MODEL,
        config=types.GenerateContentConfig(
            system_instruction=SYSTEM_PROMPT.replace("{plan_data}", plan_data),
            temperature=0.3,
            tools=[get_pricing_plans, search_product_knowledge, search_web],
        ),
        history=formatted_history,
    )

    response = chat.send_message(question)
    return {"answer": compact_reply(response.text or "")}
