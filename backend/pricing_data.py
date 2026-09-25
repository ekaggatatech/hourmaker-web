"""Canonical Hourmaker plans. Used on Render when frontend/price.js is not available."""

APP_VERSION = "2026-09-25-plans-v4"

PLANS = [
    {
        "id": "free",
        "name": "Free",
        "price_line": "₹0/mo",
        "description": "Perfect for small teams getting started",
        "included": [
            "Up to 5 employees (incl. admin)",
            "Dashboard & user management",
            "Clients, teams & projects",
            "Manual timesheets & leave",
            "Shifts, holidays & meetings",
            "Announcements & company profile",
        ],
        "badge": None,
    },
    {
        "id": "pro",
        "name": "Pro",
        "price_line": "₹65/mo (or ₹58/mo billed annually)",
        "description": "For growing teams that need more power",
        "included": [
            "Everything in Free",
            "Flexible seats (min 6)",
            "Auto Time Tracker",
            "Reports & analytics",
            "Docs portal",
            "Manual invoicing",
        ],
        "badge": "Most Popular",
    },
    {
        "id": "enterprise",
        "name": "Enterprise",
        "price_line": "₹90/mo (or ₹80/mo billed annually)",
        "description": "For large teams needing advanced features",
        "included": [
            "Everything in Pro",
            "Flexible seats (min 25)",
            "Billing management",
            "Automatic invoicing",
            "Full reporting suite",
            "Recruitment + referrals + docs",
            "Talk to sales for onboarding",
        ],
        "badge": None,
    },
]

PRICING_FACTS = (
    "Hourmaker has exactly 3 plans (per user/month). There is no Basic plan and no Pro Plus plan. "
    "Never use older plan names or blank prices.\n"
    "- Free: ₹0/mo — up to 5 employees (incl. admin)\n"
    "- Pro: ₹65/mo (or ₹58/mo billed annually) — min 6 seats — Most Popular\n"
    "- Enterprise: ₹90/mo (or ₹80/mo billed annually) — min 25 seats"
)
