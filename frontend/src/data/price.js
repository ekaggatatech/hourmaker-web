// src/data/price.js

export const PRICING_DATA = {
  // Pricing plans configuration - 5 plans
  plans: [
    {
      id: "free",
      name: "Free",
      price: "₹0",
      period: "/user/month",
      description: "Perfect for small teams getting started",
      employeeLimit: 5,
      features: {
        included: [
          "Up to 5 employees",
          "User Management",
          "Permission Management",
          "Holiday Management",
          "Client Management",
          "Backup (Monthly)",
          "Team Management",
          "Manual Time Tracking",
          "Task Management",
          "Leave Management",
          "Project Management",
          "Role Management",
          "Meeting Management",
          "Communication & Announcements",
          "Company Management",
          "Email Support",
          "Automatic Time Tracking",
          "Reporting & Analytics",
          "Onboarding Management",
          "Recruitment Management",
          "Referral Management",
          "Job Opening Management",
          "Document Management",
          "Billing Management",
          "Manual Invoicing",
          "Automatic Invoicing",
        ],
        excluded: [],
      },
      cta: "Get Started",
      ctaVariant: "outline",
      featured: false,
      badge: null,
    },
    {
      id: "basic",
      name: "Basic",
      price: "₹65",
      period: "/user/month",
      description: "For growing teams with up to 10 employees",
      employeeLimit: 10,
      features: {
        included: [
          "Up to 10 employees",
          "User Management",
          "Permission Management",
          "Holiday Management",
          "Client Management",
          "Backup (Monthly)",
          "Team Management",
          "Manual Time Tracking",
          "Task Management",
          "Leave Management",
          "Project Management",
          "Role Management",
          "Meeting Management",
          "Communication & Announcements",
          "Company Management",
          "Email Support",
          "Automatic Time Tracking",
          "Reporting & Analytics",
          "Onboarding Management",
          "Recruitment Management",
          "Referral Management",
          "Job Opening Management",
          "Document Management",
          "Billing Management",
          "Manual Invoicing",
          "Automatic Invoicing",
        ],
        excluded: [],
      },
      cta: "Try Free for 14 Days",
      ctaVariant: "outline",
      featured: false,
      badge: null,
    },
    {
      id: "pro",
      name: "Pro",
      price: "₹75",
      period: "/user/month",
      description: "For growing teams with 11-25 employees",
      employeeLimit: 25,
      features: {
        included: [
          "Up to 25 employees",
          "User Management",
          "Permission Management",
          "Holiday Management",
          "Client Management",
          "Backup (Weekly)",
          "Team Management",
          "Manual Time Tracking",
          "Task Management",
          "Leave Management",
          "Project Management",
          "Role Management",
          "Meeting Management",
          "Communication & Announcements",
          "Company Management",
          "Email Support",
          "Automatic Time Tracking",
          "Reporting & Analytics",
          "Onboarding Management",
          "Recruitment Management",
          "Referral Management",
          "Job Opening Management",
          "Document Management",
          "Billing Management",
          "Manual Invoicing",
          "Automatic Invoicing",
        ],
        excluded: [],
      },
      cta: "Try Free for 14 Days",
      ctaVariant: "outline",
      featured: false,
      badge: null,
    },
    {
      id: "proplus",
      name: "Pro Plus",
      price: "₹85",
      period: "/user/month",
      description: "For growing teams with 26-50 employees",
      employeeLimit: 50,
      features: {
        included: [
          "Up to 50 employees",
          "User Management",
          "Permission Management",
          "Holiday Management",
          "Client Management",
          "Backup (Weekly)",
          "Team Management",
          "Manual Time Tracking",
          "Task Management",
          "Leave Management",
          "Project Management",
          "Role Management",
          "Meeting Management",
          "Communication & Announcements",
          "Company Management",
          "Email Support",
          "Automatic Time Tracking",
          "Reporting & Analytics",
          "Onboarding Management",
          "Recruitment Management",
          "Referral Management",
          "Job Opening Management",
          "Document Management",
          "Billing Management",
          "Manual Invoicing",
          "Automatic Invoicing",
        ],
        excluded: [],
      },
      cta: "Try Free for 14 Days",
      ctaVariant: "outline",
      featured: true,
      badge: "Most Popular",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "₹125",
      period: "/user/month",
      description: "For large teams with 50+ employees",
      employeeLimit: Infinity,
      features: {
        included: [
          "Unlimited employees",
          "User Management",
          "Permission Management",
          "Holiday Management",
          "Client Management",
          "Backup (Daily)",
          "Team Management",
          "Manual Time Tracking",
          "Task Management",
          "Leave Management",
          "Project Management",
          "Role Management",
          "Meeting Management",
          "Communication & Announcements",
          "Company Management",
          "Email Support",
          "Automatic Time Tracking",
          "Reporting & Analytics",
          "Onboarding Management",
          "Recruitment Management",
          "Referral Management",
          "Job Opening Management",
          "Document Management",
          "Billing Management",
          "Manual Invoicing",
          "Automatic Invoicing",
        ],
        excluded: [],
      },
      cta: "Contact Sales",
      ctaVariant: "primary",
      featured: false,
      badge: null,
    },
  ],

  // Comparison table data - shows what each plan has
  comparisonFeatures: [
    {
      category: "Pricing",
      features: [
        {
          name: "Price (per user/month)",
          values: {
            free: "₹0",
            basic: "₹65",
            pro: "₹75",
            proplus: "₹85",
            enterprise: "₹125",
          },
        },
        {
          name: "Employee Limit",
          values: {
            free: "Up to 5",
            basic: "Up to 10",
            pro: "Up to 25",
            proplus: "Up to 50",
            enterprise: "Unlimited",
          },
        },
      ],
    },
    {
      category: "Management & Security",
      features: [
        {
          name: "User Management",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Role & Permission Management",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Authentication & Security",
          values: {
            free: "Email Login",
            basic: "Email + 2FA",
            pro: "2FA + Audit Logs",
            proplus: "2FA + Audit Logs",
            enterprise: "SSO + SCIM + Audit Logs",
          },
        },
      ],
    },
    {
      category: "Core Features",
      features: [
        {
          name: "Team Management",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Shift Management",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Holiday Management",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Leave Management",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Time Tracking",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Timesheets",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Activity Tracking",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
      ],
    },
    {
      category: "Work Management",
      features: [
        {
          name: "Client Management",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Project Management",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Task Management",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Meeting Management",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
      ],
    },
    {
      category: "Recruitment & Onboarding",
      features: [
        {
          name: "Recruitment",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Job Openings",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Referral Management",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Employee Onboarding",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
      ],
    },
    {
      category: "Documents & Communication",
      features: [
        {
          name: "Document Management",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Announcements",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Helpdesk & Support",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
      ],
    },
    {
      category: "Billing & Finance",
      features: [
        {
          name: "Invoice Generation",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Billing Dashboard",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
      ],
    },
    {
      category: "Reports & Integrations",
      features: [
        {
          name: "Reports",
          values: {
            free: "Advanced",
            basic: "Advanced",
            pro: "Advanced",
            proplus: "Advanced",
            enterprise: "Advanced",
          },
        },
        {
          name: "Export (Excel/PDF)",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "API Access",
          values: {
            free: true,
            basic: true,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Integrations",
          values: {
            free: "All",
            basic: "All",
            pro: "All",
            proplus: "All",
            enterprise: "All",
          },
        },
      ],
    },
    {
      category: "Support",
      features: [
        {
          name: "Email Support",
          values: {
            free: true,
            basic: true,
            pro: "Priority",
            proplus: "Priority",
            enterprise: "Priority",
          },
        },
        {
          name: "Phone Support",
          values: {
            free: false,
            basic: false,
            pro: true,
            proplus: true,
            enterprise: true,
          },
        },
        {
          name: "Dedicated Account Manager",
          values: {
            free: false,
            basic: false,
            pro: false,
            proplus: false,
            enterprise: true,
          },
        },
      ],
    },
  ],

  // Add-ons data
  addons: [
    {
      id: "payroll",
      icon: "FileSpreadsheet",
      title: "Payroll Integration",
      price: "₹15/emp/month",
      description:
        "Seamlessly integrate with popular payroll systems like ADP, QuickBooks, and Xero for automated payroll processing.",
    },
    {
      id: "security",
      icon: "Shield",
      title: "Advanced Security",
      price: "₹10/emp/month",
      description:
        "Enhanced security features including IP restrictions, advanced audit logs, and custom data retention policies.",
    },
    {
      id: "training",
      icon: "GraduationCap",
      title: "Training & Onboarding",
      price: "One-time fee",
      description:
        "Comprehensive training sessions for your team, custom onboarding workflows, and dedicated implementation support.",
    },
  ],

  // Statistics
  stats: [
    { value: "27.5K+", label: "Happy Companies" },
    { value: "98.5%", label: "Customer Satisfaction" },
    { value: "72%", label: "Cost Savings" },
    { value: "24/7", label: "Support" },
  ],

  // Pricing FAQs
  faqs: [
    {
      id: 1,
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial of our paid plans with full access to all features. No credit card required to start.",
    },
    {
      id: 2,
      question: "What happens if my employee count exceeds my plan limit?",
      answer:
        "When your employee count exceeds your current plan limit, your subscription will automatically upgrade to the next plan tier. For example, if you have 5 employees on the Free plan and add a 6th employee, you'll be upgraded to the Basic plan at ₹65/employee/month for all employees.",
    },
    {
      id: 3,
      question: "Can I switch plans at any time?",
      answer:
        "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle, and we'll prorate any differences.",
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, UPI, net banking, and bank transfers for annual plans. Enterprise customers can also pay via invoice.",
    },
    {
      id: 5,
      question: "Do you offer discounts for annual billing?",
      answer:
        "Yes, you save up to 20% when you choose annual billing. Contact our sales team for additional volume discounts for larger teams.",
    },
    {
      id: 6,
      question: "What happens when my trial ends?",
      answer:
        "You'll be notified before your trial ends. If you don't choose a plan, your account will be downgraded to our Free tier with limited employee count. Your data is preserved for 30 days.",
    },
    {
      id: 7,
      question: "Is there a setup fee?",
      answer:
        "No, we don't charge any setup fees. All plans include free setup and onboarding support to get you started quickly.",
    },
    {
      id: 8,
      question: "Can I add more employees mid-cycle?",
      answer:
        "Yes, you can add employees at any time. The charges will be prorated for the remainder of your billing cycle.",
    },
    {
      id: 9,
      question: "What's included in Enterprise support?",
      answer:
        "Enterprise support includes 24/7 priority phone and email support, a dedicated account manager, custom onboarding, and regular check-ins to ensure you're getting maximum value.",
    },
    {
      id: 10,
      question: "Do all plans include the same features?",
      answer:
        "Yes! All plans include the same comprehensive features. The only difference is the employee limit and pricing tier. This means you get access to all features regardless of which plan you choose.",
    },
  ],
};

// Helper function to get plan by ID
export const getPlanById = (id) => {
  return PRICING_DATA.plans.find((plan) => plan.id === id);
};

// Helper function to get plan by employee count
export const getPlanByEmployeeCount = (employeeCount) => {
  const plans = PRICING_DATA.plans;
  // Sort plans by employee limit
  const sortedPlans = [...plans].sort(
    (a, b) => a.employeeLimit - b.employeeLimit,
  );

  // Find the first plan that can accommodate the employee count
  for (const plan of sortedPlans) {
    if (employeeCount <= plan.employeeLimit) {
      return plan;
    }
  }
  // If no plan found (e.g., employeeCount > all limits), return the last plan (Enterprise)
  return sortedPlans[sortedPlans.length - 1];
};

// Helper function to get feature value for a specific plan
export const getFeatureValue = (featureName, planId) => {
  const feature = PRICING_DATA.comparisonFeatures
    .flatMap((cat) => cat.features)
    .find((f) => f.name === featureName);
  return feature ? feature.values[planId] : null;
};

// Helper function to check if feature is included
export const isFeatureIncluded = (featureName, planId) => {
  const value = getFeatureValue(featureName, planId);
  return value === true || (typeof value === "string" && value !== "false");
};

// Helper function to get additional features for a plan
export const getAdditionalFeatures = (planId) => {
  const plan = getPlanById(planId);
  if (!plan) return [];
  return plan.features.included || [];
};

// Get the next lower plan for comparison
export const getPreviousPlanId = (planId) => {
  const order = ["free", "basic", "pro", "proplus", "enterprise"];
  const index = order.indexOf(planId);
  return index > 0 ? order[index - 1] : null;
};

// Helper function to get the next plan if employee count exceeds current limit
export const getNextPlanForEmployeeCount = (currentPlanId, employeeCount) => {
  const currentPlan = getPlanById(currentPlanId);
  if (!currentPlan) return null;

  if (employeeCount <= currentPlan.employeeLimit) {
    return currentPlan;
  }

  // Find the next plan that can accommodate the employee count
  return getPlanByEmployeeCount(employeeCount);
};
