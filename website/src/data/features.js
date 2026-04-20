import {
  FileText,
  UserCheck,
  CheckSquare,
  FolderKanban,
  UserPlus,
  BarChart3,
  Code,
  Calendar,
  DollarSign,
  Users,
  Briefcase,
  CalendarClock,
  FileSpreadsheet,
  Shield,
  Video,
  Clock,
  Receipt,
  Cloud,
} from "lucide-react";

export const features = [
  {
    id: "automatic-tracking",
    slug: "automatic-tracking",
    icon: Clock,
    image: "feature-autotimesheet.png",
    title: "Automatic Time Tracking",
    shortDescription:
      "Automatic time tracking that captures work hours without manual entry.",
    description:
      "Let Hourmaker automatically track time spent on projects, tasks, and activities. Our intelligent system captures work hours in real-time, eliminating manual entry errors and saving countless hours.",
    details: [
      {
        title: "Automatic Time Capture",
        explanation:
          "Our system intelligently detects when you're working on different tasks and projects, automatically logging time once started.",
        benefits: ["Works in background"],
      },
      {
        title: "Real-time Tracking",
        explanation:
          "Time is tracked in real-time on your active devices. Whether you're on your desktop, or laptop, every minute is captured accurately and synced instantly.",
        benefits: ["Instant updates", "Always accurate"],
      },
      {
        title: "Smart Project Association",
        explanation:
          "The system associates tracked time with the right projects and tasks based on your activity, application usage, and document context.",
        benefits: [],
      },
      {
        title: "Idle Time Detection",
        explanation:
          "Smart algorithms detect when you step away from your desk, automatically pausing the timer and sending gentle reminders when you return to ensure accurate time capture.",
        benefits: [
          "Prevents over-tracking",
          "Gentle reminders",
          "Fair billing",
        ],
      },
      {
        title: "Offline Tracking with Sync",
        explanation:
          "Continue tracking time even without an internet connection. All data is stored locally and automatically syncs when you're back online, ensuring zero data loss.",
        benefits: [
          "Works anywhere",
          "No connection needed",
          "Auto-sync when online",
        ],
      },
      // {
      //   title: "Smart Break Deduction",
      //   explanation:
      //     "Automatic break time deduction based on your work patterns and company policies. Configure custom rules for lunch breaks, short breaks, and overtime calculations.",
      //   benefits: [
      //     "Policy compliant",
      //     "Automatic calculation",
      //     "Customizable rules",
      //   ],
      // },
      // {
      //   title: "Calendar Integration",
      //   explanation:
      //     "Seamlessly integrate with your Google Calendar, Outlook, or other calendar apps. Meetings and appointments are automatically tracked as time entries.",
      //   benefits: ["Auto-track meetings", "Calendar sync", "No double entry"],
      // },
    ],
    benefits: [
      {
        title: "100% Automatic",
        description: "No manual entry required - time tracks itself",
      },
      {
        title: "98% Accuracy",
        description: "Eliminate human errors in time tracking",
      },
      {
        title: "30% More Billable",
        description: "Capture every billable minute automatically",
      },
    ],
  },
  {
    id: "manual-tracking",
    slug: "manual-tracking",
    icon: FileText,
    image: "feature-manualtimesheet.png",
    title: "Manual Time Tracking",
    shortDescription:
      "Flexible manual time entry with approval workflows and payroll integration.",
    description:
      "For teams that prefer manual entry, our intuitive timesheet interface makes it easy to log hours, with smart features that remember past entries and suggest common patterns.",
    details: [
      {
        title: "Intuitive Timesheet Interface",
        explanation:
          "Clean, user-friendly interface designed for quick and accurate time entry. Color-coded entries, drag-and-drop functionality, and keyboard shortcuts make logging time a breeze.",
        benefits: ["Easy to use", "Minimal clicks", "Visual feedback"],
      },
      {
        title: "Flexible Timesheet Periods",
        explanation:
          "Support for weekly, bi-weekly, or monthly timesheets to match your payroll cycle. Customize the view based on your team's preferences and requirements.",
        benefits: [
          "Any period supported",
          "Payroll ready",
          "Customizable views",
        ],
      },
      {
        title: "Smart Copy Functionality",
        explanation:
          "Never enter the same time twice. Copy previous days, or entire timesheets with one click. Smart suggestions based on your history speed up entry even further.",
        benefits: ["One-click copy", "Time-saving"],
      },
      {
        title: "Bulk Time Entry",
        explanation:
          "Enter time for multiple projects, tasks, at once. Perfect for managers who need to submit team timesheets or handle corrections.",
        benefits: [
          "Multiple entries at once",
          "Team management",
          "Quick corrections",
        ],
      },
      // {
      //   title: "Timesheet Templates",
      //   explanation:
      //     "Create and save templates for recurring tasks or projects. Perfect for weekly meetings, regular maintenance work, or any repeated activity.",
      //   benefits: ["Reusable templates", "Consistent entries", "Save time"],
      // },
      {
        title: "Approval Workflows",
        explanation:
          "Multi-level approval workflows ensure accuracy before timesheets are locked and sent to payroll. Managers can approve, reject, or request changes with comments.",
        benefits: ["Manager oversight", "Audit trail", "Change tracking"],
      },
      // {
      //   title: "Payroll Integration",
      //   explanation:
      //     "Seamless integration with popular payroll systems including ADP, QuickBooks, Xero, and more. Export timesheets directly to payroll with one click.",
      //   benefits: ["Direct export", "Error-free", "Multiple formats"],
      // },
    ],
    benefits: [
      {
        title: "90% Faster Entry",
        description: "Smart defaults and copy features speed up entry",
      },
      {
        title: "Flexible Formats",
        description: "Support for any timesheet format your team needs",
      },
      {
        title: "Audit Ready",
        description: "Complete history with approval trails",
      },
    ],
  },
  {
    id: "docs-portal",
    slug: "docs-portal",
    icon: Cloud,
    image: "feature-docs.png",
    title: "Cloud Repo for Documentation",
    shortDescription:
      "Centralized document repository with secure cloud storage.",
    description:
      "Store, organize, and share documents securely in the cloud. From employee contracts to company policies, everything is organized, version-controlled, and easily accessible with proper access controls.",
    details: [
      {
        title: "Secure Cloud Storage",
        explanation:
          "All documents are encrypted and stored securely in the cloud with enterprise-grade security. Access your files from anywhere, anytime, on any device.",
        benefits: ["Anywhere access", "Automatic backup"],
      },
      {
        title: "Smart Organization",
        explanation:
          "Organize documents with folders, tags, and custom metadata.",
        benefits: ["Custom folders", "Tagging system"],
      },
      {
        title: "Secure Sharing",
        explanation:
          "Share documents securely with expiry links, and download restrictions. Control exactly who can view, edit, or share your files.",
        benefits: ["Expiry links", "Access control"],
      },
    ],
    benefits: [
      {
        title: "Anywhere Access",
        description: "Access documents from anywhere, anytime",
      },
      {
        title: "Employee Tagging",
        description:
          "Share Documents with specific users as well as public access for all.",
      },
    ],
  },
  {
    id: "billing",
    slug: "billing",
    icon: DollarSign,
    image: "feature-billing.png",
    title: "Billing Management",
    shortDescription:
      "Complete billing system integrated with time tracking and projects.",
    description:
      "Generate billing automatically from tracked time, manage client billing, and track payments all in one place. Never miss a billable hour again.",
    details: [
      // {
      //   title: "Automated Invoice Generation",
      //   explanation:
      //     "Convert approved timesheets into professional invoices automatically. Set up rules to generate invoices weekly, bi-weekly, or monthly without manual intervention.",
      //   benefits: ["No manual work", "Schedule-based", "Error-free"],
      // },
      {
        title: "Multi-rate Billing",
        explanation:
          "Configure different billing rates per client, project, or team member. Support for hourly, fixed, and tiered pricing models.",
        benefits: [
          "Client-specific rates",
          "Project-based pricing",
          "Flexible models",
        ],
      },
      {
        title: "Proper Billing Dashboard",
        explanation:
          "Visualize ups and downs of you project revenue. Manage and plan strategies based on projections Data.",
        benefits: [
          "Client Based Representation",
          "Detailed Charts & Summery Tables",
          "Export and Share Revenue Records",
        ],
      },
      // {
      //   title: "Recurring Invoices",
      //   explanation:
      //     "Set up recurring invoices for retainer clients or subscription services. Automatically generate and send invoices on a schedule.",
      //   benefits: [
      //     "Automatic recurring",
      //     "Retainer billing",
      //     "Subscription support",
      //   ],
      // },
      {
        title: "Expense Tracking",
        explanation:
          "Track and bill expenses alongside time. Categorize expenses, and automatically add them to client.",
        benefits: ["Expense categorization", "Auto-billing-breakdown"],
      },
      // {
      //   title: "Payment Reconciliation",
      //   explanation:
      //     "Track payments against invoices automatically. Match bank transactions, send receipts, and keep real-time AR reports.",
      //   benefits: ["Auto-reconciliation", "Payment tracking", "AR reporting"],
      // },
      // {
      //   title: "Automated Reminders",
      //   explanation:
      //     "Send automatic payment reminders to clients with overdue invoices. Customize reminder schedules and messages.",
      //   benefits: [
      //     "Reduce late payments",
      //     "Custom reminders",
      //     "Improve cash flow",
      //   ],
      // },
      // {
      //   title: "Tax Compliance",
      //   explanation:
      //     "Automatic tax calculation based on client location and service type. Support for GST, VAT, and other tax regimes.",
      //   benefits: [
      //     "Auto tax calculation",
      //     "Multi-jurisdiction",
      //     "Compliance ready",
      //   ],
      // },
    ],
    benefits: [
      {
        title: "100% Accuracy",
        description: "Every tracked hour gets billed correctly",
      },
      {
        title: "40% Faster",
        description: "Invoices generated automatically",
      },
      {
        title: "Better Cash Flow",
        description: "Automated payment reminders",
      },
    ],
  },
  {
    id: "invoicing",
    slug: "invoicing",
    icon: Receipt,
    image: "feature-invoicing.png",
    title: "Invoicing",
    shortDescription:
      "Professional invoice generation with customizable templates and automated delivery.",
    description:
      "Create stunning, professional invoices in seconds. Customize templates, set up recurring invoices, and automate delivery to clients. Track invoice status and get paid faster.",
    details: [
      // {
      //   title: "Customizable Templates",
      //   explanation:
      //     "Choose from professionally designed templates or create your own. Add your logo, brand colors, and custom fields to match your brand identity.",
      //   benefits: ["Branded invoices", "Multiple templates", "Custom fields"],
      // },
      {
        title: "Auto-generation",
        explanation:
          "Generate invoices automatically from approved timesheets and expenses. Set up rules to include or exclude specific items.",
        benefits: ["Time-based", "Expense-based", "Rule-driven"],
      },
      // {
      //   title: "Recurring Setup",
      //   explanation:
      //     "Create recurring invoice schedules for ongoing work. Set frequency, duration, and automatic adjustments for changing rates.",
      //   benefits: ["Set and forget", "Auto adjustments", "Flexible schedules"],
      // },
      {
        title: "Bulk Operations",
        explanation:
          "Create, send, and manage multiple invoices at once. Perfect for month-end closing or handling multiple clients.",
        benefits: ["Batch processing", "Time-saving", "Efficient"],
      },
      {
        title: "Payment Integration",
        explanation:
          "Embed payment links directly in invoices. Clients can pay with credit card, bank transfer, or UPI with a single click.",
        benefits: [
          "One-click pay",
          "Multiple payment options",
          "Faster collection",
        ],
      },
      // {
      //   title: "Smart Reminders",
      //   explanation:
      //     "Automated payment reminders with customizable timing and messaging. Escalate reminders based on overdue duration.",
      //   benefits: ["Auto reminders", "Custom timing", "Escalation rules"],
      // },
      {
        title: "PDF Generation",
        explanation:
          "Generate professional PDF invoices automatically. Perfect for email delivery, printing, or archiving.",
        benefits: ["Auto PDF", "Print ready", "Email ready"],
      },
    ],
    benefits: [
      {
        title: "Professional Look",
        description: "Branded invoices that impress clients",
      },
      {
        title: "Faster Payments",
        description: "Clients can pay directly from invoices",
      },
      {
        title: "Time Saved",
        description: "80% less time spent on invoicing",
      },
    ],
  },
  {
    id: "analytics",
    slug: "analytics",
    icon: BarChart3,
    image: "feature-analytics.png",
    title: "Reporting & Analytics",
    shortDescription:
      "Powerful analytics and customizable dashboards for data-driven decisions.",
    description:
      "Turn your workforce data into actionable insights. Build custom reports, monitor KPIs in real-time, and make informed decisions with beautiful, interactive dashboards.",
    details: [
      {
        title: "Pre-built Reports",
        explanation:
          "Get started instantly with dozens of pre-built reports covering productivity, utilization, profitability, and compliance.",
        benefits: ["Ready to use", "Comprehensive", "Industry standard"],
      },
      {
        title: "Custom Report Builder",
        explanation:
          "Build exactly the reports you need. Choose data fields, filters, and visualization types.",
        benefits: ["No coding", "Flexible", "Powerful"],
      },
      {
        title: "Interactive Dashboards",
        explanation:
          "Create beautiful, interactive dashboards that update in real-time. Share with stakeholders or embed in your own tools.",
        benefits: ["Real-time data", "Shareable", "Embeddable"],
      },
      {
        title: "KPI Monitoring",
        explanation:
          "Track key performance indicators in real-time. Set targets and get alerts when metrics deviate from goals.",
        benefits: ["Goal tracking", "Instant alerts", "Performance monitoring"],
      },
      {
        title: "Trend Analysis",
        explanation:
          "Identify patterns and trends in your workforce data. Forecast future needs based on historical patterns.",
        benefits: ["Pattern detection", "Forecasting", "Data-driven decisions"],
      },
      {
        title: "Resource Utilization",
        explanation:
          "See exactly how your team's time is allocated. Identify underutilized resources and optimize workload distribution.",
        benefits: [
          "Capacity planning",
          "Workload balance",
          "Efficiency insights",
        ],
      },
      {
        title: "Export Options",
        explanation:
          "Export reports in multiple formats including PDF, Excel, CSV, and more. Schedule automated report delivery to stakeholders.",
        benefits: ["Multiple formats", "Auto-delivery", "Easy sharing"],
      },
    ],
    benefits: [
      {
        title: "Real-time Insights",
        description: "Make decisions with current data",
      },
      {
        title: "Custom Reports",
        description: "Build exactly what you need",
      },
      {
        title: "Shareable Dashboards",
        description: "Align teams with key metrics",
      },
    ],
  },
  {
    id: "onboarding",
    slug: "onboarding",
    icon: UserPlus,
    image: "feature-onboarding.png",
    title: "Candidate Onboarding",
    shortDescription:
      "Streamlined employee onboarding and recruitment integration for seamless hiring.",
    description:
      "Create smooth experiences for candidates and new hires. From onboarding forms to first-day checklists, manage the entire employee lifecycle in one place.",
    details: [
      {
        title: "Applicant Tracking",
        explanation:
          "Manage your entire recruitment pipeline from one place. Track applicants, schedule interviews, and collaborate with hiring teams.",
        benefits: [
          "Centralized tracking",
          "Team collaboration",
          "Pipeline visibility",
        ],
      },
      {
        title: "Interview Management",
        explanation: "Collect feedback, and manage candidate communications. .",
        benefits: ["Onboarding & Referal forms", "Feedback forms"],
      },
      {
        title: "Offer Management",
        explanation: "Track offer acceptance and manage contingencies.",
        benefits: ["Digital offers", "Acceptance tracking"],
      },
      {
        title: "Digital Onboarding",
        explanation:
          "Create personalized onboarding checklists for each new hire. Automate document collection, policy acknowledgment, and task assignments.",
        benefits: ["Paperless", "Automated tasks", "Progress tracking"],
      },
      {
        title: "Document Collection",
        explanation:
          "Collect and verify all required documents digitally. Automatic reminders for pending items and secure storage of completed files.",
        benefits: ["Digital collection", "Auto-verification", "Secure storage"],
      },
      // {
      //   title: "Access Provisioning",
      //   explanation:
      //     "Automate the setup of accounts, equipment, and access permissions. Integration with HRIS and IT systems for seamless provisioning.",
      //   benefits: ["Auto-provisioning", "HRIS integration", "IT workflow"],
      // },
      {
        title: "New Hire Portal",
        explanation:
          "Give new hires a personalized portal with everything they need before day one. Company info, forms, and welcome messages all in one place.",
        benefits: ["Pre-boarding", "Self-service", "Engagement"],
      },
    ],
    benefits: [
      {
        title: "50% Faster Hiring",
        description: "Streamlined recruitment process",
      },
      {
        title: "3x Faster Onboarding",
        description: "Digital workflows replace paperwork",
      },
      {
        title: "Better Experience",
        description: "Professional, organized new hire journey",
      },
    ],
  },
  {
    id: "attendance",
    slug: "attendance",
    icon: UserCheck,
    image: "feature-attendance.png",
    title: "Leave & Attendance Management",
    shortDescription:
      "Comprehensive attendance tracking with automated leave management and policy enforcement.",
    description:
      "Track attendance, manage leave requests, and enforce policies automatically. From check-in/out to complex leave accruals, everything is handled in one place.",
    details: [
      {
        title: "Multiple Check-in Methods",
        explanation:
          "Support web-based check-ins. Employees can mark attendance from anywhere, using any method.",
        benefits: ["Flexible options", "Anywhere access", "Multiple methods"],
      },
      // {
      //   title: "Geofenced Attendance",
      //   explanation:
      //     "Set up virtual boundaries for attendance marking. Employees can only check in when they're at the right location.",
      //   benefits: ["Location-based", "Prevent fraud", "Field staff ready"],
      // },
      {
        title: "Shift Management",
        explanation:
          "Create and manage multiple shifts with flexible scheduling. Support for rotating shifts, night shifts, and split shifts.",
        benefits: ["Any shift type", "Flexible rules", "Easy scheduling"],
      },
      {
        title: "Leave Types",
        explanation:
          "Configure all leave types including PTO, sick leave, casual leave, earned leave, and more. Customize accrual rules for each type.",
        benefits: ["All leave types", "Custom rules", "Auto accrual"],
      },
      {
        title: "Auto Balance Calculation",
        explanation:
          "Leave balances are calculated automatically based on company policy. Track opening balance, accrued, availed, and closing balance in real-time.",
        benefits: [
          "Real-time balance",
          "Accurate tracking",
          "Policy compliant",
        ],
      },
      {
        title: "Holiday Integration",
        explanation:
          "Automatic integration with holiday calendars. Leave balances and attendance rules adjust automatically for holidays.",
        benefits: ["Holiday sync", "Auto adjustment", "Calendar integration"],
      },
      {
        title: "Overtime Tracking",
        explanation:
          "Automatic overtime calculation based on configured rules. Track regular overtime, double time, and compensatory off separately.",
        benefits: [
          "Auto calculation",
          "Multiple OT types",
          "Comp off tracking",
        ],
      },
    ],
    benefits: [
      {
        title: "Zero Manual Work",
        description: "Attendance tracks itself with multiple options",
      },
      {
        title: "Policy Automated",
        description: "Leave rules enforced automatically",
      },
      {
        title: "Compliance Ready",
        description: "Built-in labor law compliance",
      },
    ],
  },
  {
    id: "projects",
    slug: "projects",
    icon: FolderKanban,
    image: "feature-projects.png",
    title: "Project Tracking",
    shortDescription:
      "Comprehensive project management with time tracking, budgets, and profitability analysis.",
    description:
      "Track every aspect of your projects from time and budget to resource allocation. Make data-driven decisions with real-time project insights.",
    details: [
      {
        title: "Project Creation",
        explanation:
          "Create projects with custom fields, hierarchies, and metadata. Set up project teams, budgets, and timelines all in one place.",
        benefits: ["Custom fields", "Project hierarchy", "Team assignment"],
      },
      {
        title: "Task Management",
        explanation:
          "Break down projects into tasks and subtasks. Assign owners, set deadlines, and track progress at the task level.",
        benefits: ["Task breakdown", "Assignment", "Deadline tracking"],
      },
      {
        title: "Time Tracking Integration",
        explanation:
          "Track time directly against projects and tasks. See real-time updates on time spent vs. budget.",
        benefits: ["Direct tracking", "Real-time updates", "Budget vs actual"],
      },
      // {
      //   title: "Budget Monitoring",
      //   explanation:
      //     "Set budgets at project or task level. Get real-time alerts when you're approaching or exceeding budget limits.",
      //   benefits: ["Budget alerts", "Cost control", "Prevent overruns"],
      // },
      {
        title: "Resource Allocation",
        explanation:
          "See who's working on what and balance workloads across your team. Identify overallocated resources and redistribute work.",
        benefits: ["Workload view", "Resource balancing", "Capacity planning"],
      },
      {
        title: "Profitability Analysis",
        explanation:
          "Track project costs vs. revenue in real-time. See exactly which projects are most profitable and why.",
        benefits: ["Cost tracking", "Revenue analysis", "Profit margins"],
      },
      {
        title: "Milestone Tracking",
        explanation:
          "Set and track project milestones. Get visual representation of progress with Gantt charts and timeline views.",
        benefits: ["Key milestones", "Progress tracking", "Timeline views"],
      },
    ],
    benefits: [
      {
        title: "Real-time Visibility",
        description: "Know project status at any moment",
      },
      {
        title: "Budget Control",
        description: "Alerts prevent cost overruns",
      },
      {
        title: "Profitability Insights",
        description: "See exactly which projects make money",
      },
    ],
  },
  {
    id: "holiday",
    slug: "holiday",
    icon: Calendar,
    image: "feature-holiday.png",
    title: "Calendar Management",
    shortDescription:
      "Centralized holiday calendar management with automated calculations and regional support.",
    description:
      "Manage company holidays effortlessly with support for automatic calculations, and seamless integration with leave and attendance.",
    details: [
      {
        title: "Company-wide Calendar",
        explanation:
          "Create and manage a centralized holiday calendar for your entire organization. Add holidays for different regions and locations.",
        benefits: ["Central management", "Easy updates"],
      },
      // {
      //   title: "Regional Support",
      //   explanation:
      //     "Support for holidays across different states, countries, and regions. Employees see only relevant holidays based on their location.",
      //   benefits: ["Location-based", "Regional accuracy", "Global ready"],
      // },
      {
        title: "Holiday Types",
        explanation:
          "Configure different holiday types - mandatory, optional, or restricted. Set rules for holiday work and compensation.",
        benefits: ["Multiple types", "Custom rules", "Flexible options"],
      },
      {
        title: "Auto Balance Adjustment",
        explanation:
          "Leave balances adjust automatically for holidays. No manual calculations needed when holidays fall on workdays.",
        benefits: ["Auto calculation", "Error-free", "Time saving"],
      },
      {
        title: "Holiday Work Tracking",
        explanation:
          "Track and calculate holiday work hours automatically. Apply premium rates or compensatory off as per policy.",
        benefits: ["Premium rates", "Comp off tracking", "Policy compliant"],
      },
      {
        title: "Employee Preview",
        explanation:
          "Give employees visibility into upcoming holidays. Plan time off and schedules with advance notice.",
        benefits: [
          "Advance planning",
          "Employee visibility",
          "Better scheduling",
        ],
      },
      {
        title: "Integration",
        explanation:
          "Seamlessly integrate with attendance and leave modules. Holidays automatically affect attendance rules and leave calculations.",
        benefits: ["Auto sync", "Consistent data", "No duplication"],
      },
    ],
    benefits: [
      // {
      //   title: "Multi-Location Support",
      //   description: "Handle different regions effortlessly",
      // },
      {
        title: "Auto Calculations",
        description: "Leave balances update automatically",
      },
      {
        title: "Employee Clarity",
        description: "Everyone knows holiday schedules",
      },
    ],
  },
  {
    id: "meeting-scheduling",
    slug: "meeting-scheduling",
    icon: CalendarClock,
    image: "feature-meeting.png",
    title: "Meeting Scheduling",
    shortDescription:
      "Smart meeting scheduler that integrates with calendars and automates scheduling.",
    description:
      "Eliminate the back-and-forth of meeting scheduling. Intelligent scheduling that checks availability, sends invites, and syncs with your calendar automatically.",
    details: [
      // {
      //   title: "Calendar Integration",
      //   explanation:
      //     "Connect with Google Calendar, Outlook, iCloud, and more. Availability is checked in real-time across all connected calendars.",
      //   benefits: ["Multi-calendar", "Real-time sync", "No double-booking"],
      // },
      {
        title: "Availability Sharing",
        explanation:
          "Share your availability with others without exposing calendar details. Let people book time based on your preferences.",
        benefits: ["Privacy first", "Controlled access", "Easy sharing"],
      },
      // {
      //   title: "Automated Scheduling",
      //   explanation:
      //     "Send meeting links and let invitees choose from available slots. Meetings are scheduled automatically without back-and-forth.",
      //   benefits: ["Self-service", "No coordination", "Time saving"],
      // },
      // {
      //   title: "Recurring Meetings",
      //   explanation:
      //     "Set up recurring meetings with intelligent scheduling that avoids conflicts and adjusts for changes.",
      //   benefits: ["Auto recurring", "Conflict avoidance", "Flexible patterns"],
      // },
      {
        title: "Resource Booking",
        explanation:
          "Book meeting rooms, equipment, and other resources alongside meeting scheduling. Check availability in real-time.",
        benefits: ["Room booking", "Equipment tracking", "Resource management"],
      },
      // {
      //   title: "Video Integration",
      //   explanation:
      //     "Auto-generate video conference links from Zoom, Teams, or Google Meet. Included automatically in calendar invites.",
      //   benefits: ["Auto links", "Multiple platforms", "One-click join"],
      // },
      {
        title: "Smart Reminders",
        explanation:
          "Send automated reminders before meetings. Customize timing and channels - email, SMS, or push notifications.",
        benefits: ["Reduce no-shows", "Custom timing", "Multi-channel"],
      },
    ],
    benefits: [
      {
        title: "90% Less Scheduling Time",
        description: "No more email tennis",
      },
      {
        title: "Calendar Sync",
        description: "Always up-to-date availability",
      },
      {
        title: "Auto Reminders",
        description: "Reduce no-shows significantly",
      },
    ],
  },
  {
    id: "client-management",
    slug: "client-management",
    icon: Briefcase,
    image: "feature-client.png",
    title: "Client Management",
    shortDescription:
      "Comprehensive client portal with project visibility, billing, and communication.",
    description:
      "Give your clients visibility into their projects while maintaining control. Client updates, project updates, and billing all in one place.",
    details: [
      // {
      //   title: "Client Portal",
      //   explanation:
      //     "Secure, branded portals for each client. Clients can log in to view project status, timesheets, and invoices.",
      //   benefits: ["Secure access", "Branded experience", "Self-service"],
      // },
      {
        title: "Project Visibility",
        explanation:
          "Give clients appropriate visibility into project progress. Choose what they can see - from high-level status to detailed timesheets.",
        benefits: ["Controlled access", "Progress visibility", "Transparency"],
      },
      // {
      //   title: "Timesheet Approval",
      //   explanation:
      //     "Let clients review and approve timesheets directly. Streamlined approval workflow with notifications and audit trail.",
      //   benefits: ["Direct approval", "Faster sign-off", "Audit trail"],
      // },
      // {
      //   title: "Invoice Access",
      //   explanation:
      //     "Clients can view, download, and pay invoices through the portal. Track payment status and history.",
      //   benefits: ["Self-service billing", "Online payment", "Payment history"],
      // },
      // {
      //   title: "Document Sharing",
      //   explanation:
      //     "Share documents securely with clients. Control access, set expiry dates, and track views.",
      //   benefits: ["Secure sharing", "Access control", "Activity tracking"],
      // },
      {
        title: "Communication",
        explanation:
          "Centralized communication channels for each client. Keep all project-related conversations in one place.",
        benefits: ["Central hub", "Thread history", "Team collaboration"],
      },
      {
        title: "Feedback & Approvals",
        explanation:
          "Collect client feedback and approvals digitally. Track decisions and maintain approval history.",
        benefits: ["Digital feedback", "Approval tracking", "Decision log"],
      },
    ],
    benefits: [
      {
        title: "Happy Clients",
        description: "Transparency builds trust",
      },
      {
        title: "Less Client Queries",
        description: "Clients see status themselves",
      },
      {
        title: "Faster Approvals",
        description: "Digital client approvals",
      },
    ],
  },
  {
    id: "user-management",
    slug: "user-management",
    icon: Users,
    image: "feature-user.png",
    title: "User Management",
    shortDescription:
      "Centralized user administration with bulk operations and directory services.",
    description:
      "Manage all users from one place. Add, update, or deactivate users in bulk, sync with your HRIS, and maintain a clean employee directory.",
    details: [
      {
        title: "Bulk Operations",
        explanation:
          "Add, update, or deactivate multiple users at once. Import from CSV or sync with your HRIS automatically.",
        benefits: ["Batch processing", "CSV import", "HRIS sync"],
      },
      {
        title: "User Lifecycle",
        explanation:
          "Manage the complete user lifecycle from onboarding to offboarding. Automate account creation, updates, and deactivation.",
        benefits: ["Auto provisioning", "Lifecycle automation", "Offboarding"],
      },
      {
        title: "Employee Directory",
        explanation:
          "Maintain a complete, searchable employee directory. Include contact info, roles, departments, and custom fields.",
        benefits: ["Searchable", "Complete profiles", "Organization chart"],
      },
      {
        title: "Department Management",
        explanation:
          "Organize users by departments, teams, and cost centers. Set hierarchy and reporting relationships.",
        benefits: [
          "Department structure",
          "Reporting lines",
          "Cost allocation",
        ],
      },
      {
        title: "Profile Customization",
        explanation:
          "Add custom fields to user profiles. Track skills, certifications, emergency contacts, and more.",
        benefits: ["Custom fields", "Skills tracking", "Emergency info"],
      },
      {
        title: "Manager Hierarchies",
        explanation:
          "Set up manager hierarchies for approvals and reporting. Support for matrix organizations and dotted-line reporting.",
        benefits: ["Multiple managers", "Matrix support", "Approval routing"],
      },
      {
        title: "Activity Logs",
        explanation:
          "Track all user activities for audit and security purposes. See who did what and when.",
        benefits: ["Audit trail", "Security monitoring", "Compliance"],
      },
    ],
    benefits: [
      {
        title: "Bulk Operations",
        description: "Manage hundreds of users at once",
      },
      // {
      //   title: "HRIS Sync",
      //   description: "Always up-to-date employee data",
      // },
      {
        title: "Complete Overview",
        description: "See all users and their status",
      },
    ],
  },
  {
    id: "access-management",
    slug: "access-management",
    icon: Shield,
    image: "feature-access.png",
    title: "Access & Role Management",
    shortDescription:
      "Centralized role-based access control with granular permissions and security policies.",
    description:
      "Control exactly who can access what. Define roles, set permissions, and manage access across all modules from one central place with enterprise-grade security.",
    details: [
      {
        title: "Role-Based Access",
        explanation:
          "Create custom roles with specific permissions. Assign roles to users based on their job function and responsibilities.",
        benefits: ["Custom roles", "Granular control", "Easy assignment"],
      },
      {
        title: "Module-Level Control",
        explanation:
          "Control access at the module level. Choose who can view, create, edit, or delete in each part of the system.",
        benefits: [
          "Per-module control",
          "Action-level permissions",
          "Fine-grained",
        ],
      },
      {
        title: "Data Restrictions",
        explanation:
          "Restrict access to specific data based on user role, department, or location. Ensure users see only what they need.",
        benefits: ["Data filtering", "Need-to-know basis", "Privacy compliant"],
      },
      // {
      //   title: "IP Restrictions",
      //   explanation:
      //     "Add an extra layer of security with IP-based access control. Restrict access to trusted locations only.",
      //   benefits: ["Location control", "Security layer", "Fraud prevention"],
      // },
      // {
      //   title: "Session Management",
      //   explanation:
      //     "Monitor and manage active sessions. Force logout, view login history, and set session timeouts.",
      //   benefits: ["Active monitoring", "Force logout", "Timeout control"],
      // },
      // {
      //   title: "Two-Factor Authentication",
      //   explanation:
      //     "Add 2FA for enhanced security. Support for authenticator apps, SMS, and email verification.",
      //   benefits: ["Extra security", "Multiple methods", "User control"],
      // },
      // {
      //   title: "SSO Integration",
      //   explanation:
      //     "Integrate with your existing SSO provider. Support for SAML, OAuth, and LDAP.",
      //   benefits: ["Single sign-on", "Enterprise ready", "Multiple protocols"],
      // },
      {
        title: "Audit Logs",
        explanation:
          "Complete audit trail of all access and permission changes. Meet compliance requirements with detailed logs.",
        benefits: ["Full audit trail", "Compliance ready", "Change tracking"],
      },
    ],
    benefits: [
      {
        title: "Complete Control",
        description: "Set exactly who sees what",
      },
      {
        title: "Security First",
        description: "Enterprise-grade access policies",
      },
      {
        title: "Audit Ready",
        description: "Complete access logs for compliance",
      },
    ],
  },
];

export const getFeatureBySlug = (slug) => {
  return features.find((f) => f.slug === slug);
};
