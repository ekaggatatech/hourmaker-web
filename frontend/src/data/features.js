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
  LayoutDashboard,
  UserCog,
  KeyRound,
  Clock as ClockIcon,
  CalendarDays,
  Building2,
  UsersRound,
  ClipboardList,
  CheckCircle,
  CalendarCheck,
  FolderOpen,
  ChartBar,
  Activity,
  CalendarClock as CalendarClockIcon,
  Megaphone,
  UserRoundPlus,
  UsersRound as UsersIcon,
  UserPlus as UserPlusIcon,
  FileText as FileTextIcon,
  LifeBuoy,
  Receipt as ReceiptIcon,
  Building,
  Timer,
  ShieldCheck,
  Fingerprint,
  GanttChart,
} from "lucide-react";

export const features = [
  // Dashboard & Overview
  {
    id: "dashboard",
    slug: "dashboard",
    icon: LayoutDashboard,
    image: "feature-dashboard.png",
    title: "Dashboard & Overview",
    videoId: "FUKqIZopDGg", // Demo video
    shortDescription:
      "Comprehensive dashboards for every role in your organization.",
    description:
      "Get a complete view of your organization's performance with role-specific dashboards. From employee productivity to team performance and company-wide analytics, track everything in real-time.",
    details: [
      {
        title: "Employee Dashboard",
        explanation:
          "Personal dashboard showing your tasks, timesheets, meetings, and performance metrics.",
        benefits: ["Personal overview", "Task tracking", "Performance metrics"],
      },
      {
        title: "Manager Dashboard",
        explanation:
          "Team performance overview, pending approvals, and resource allocation insights.",
        benefits: ["Team overview", "Approval management", "Resource planning"],
      },
      {
        title: "Admin Dashboard",
        explanation:
          "Complete organizational overview with system health, user activity, and key metrics.",
        benefits: [
          "System overview",
          "User analytics",
          "Compliance monitoring",
        ],
      },
      {
        title: "HR Dashboard",
        explanation:
          "HR-specific metrics including onboarding progress, leave trends, and workforce analytics.",
        benefits: ["HR analytics", "Onboarding tracking", "Leave insights"],
      },
      {
        title: "PR Dashboard",
        explanation:
          "Public relations focused dashboard with referral tracking and onboarding status.",
        benefits: ["Referral tracking", "PR metrics", "Candidate pipeline"],
      },
      {
        title: "Real-time Analytics",
        explanation:
          "Live data updates and visualizations for informed decision-making.",
        benefits: ["Live data", "Interactive charts", "Quick insights"],
      },
    ],
    benefits: [
      {
        title: "Role-Specific Views",
        description: "Customized dashboards for every role",
      },
      {
        title: "Real-time Data",
        description: "Always up-to-date information",
      },
      {
        title: "Quick Decision Making",
        description: "Key metrics at your fingertips",
      },
    ],
  },

  // User Management
  {
    id: "user-management",
    slug: "user-management",
    icon: Users,
    image: "feature-user.png",
    title: "User Management",
    videoId: "FUKqIZopDGg", // Demo video
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
      {
        title: "Complete Overview",
        description: "See all users and their status",
      },
    ],
  },

  // Permission Management
  {
    id: "permission-management",
    slug: "permission-management",
    icon: KeyRound,
    image: "feature-access.png",
    title: "Permission Management",
    videoId: "3w0yI_i9rFk", // Access Management video
    shortDescription:
      "Granular permission controls for every module and action in the system.",
    description:
      "Control exactly what users can see and do in every part of the system. Set permissions at module, feature, and action level for complete security.",
    details: [
      {
        title: "Module-Level Permissions",
        explanation:
          "Control access to specific modules and features based on user role and responsibility.",
        benefits: ["Module control", "Feature access", "Role-based"],
      },
      {
        title: "Action-Level Control",
        explanation:
          "Define specific actions users can perform - view, create, edit, delete, approve.",
        benefits: ["Action control", "Precise access", "Security first"],
      },
      {
        title: "Data Restrictions",
        explanation:
          "Restrict access to specific data based on user role, department, or location.",
        benefits: ["Data filtering", "Need-to-know basis", "Privacy compliant"],
      },
      {
        title: "Permission Inheritance",
        explanation:
          "Permissions automatically inherit based on role hierarchy and department structure.",
        benefits: [
          "Auto inheritance",
          "Simplified management",
          "Consistent access",
        ],
      },
      {
        title: "Audit Logs",
        explanation:
          "Complete audit trail of all permission changes and access attempts.",
        benefits: [
          "Full audit trail",
          "Security monitoring",
          "Compliance ready",
        ],
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

  // Shift Management
  {
    id: "shift-management",
    slug: "shift-management",
    icon: ClockIcon,
    image: "feature-shift.png",
    title: "Shift Management",
    videoId: "FUKqIZopDGg", // Demo video
    shortDescription:
      "Flexible shift scheduling with multiple shift types and automated management.",
    description:
      "Create and manage multiple shifts with flexible scheduling. Support for rotating shifts, night shifts, split shifts, and automated shift allocation.",
    details: [
      {
        title: "Multiple Shift Types",
        explanation:
          "Support for various shift types including fixed, rotating, flexi, and split shifts.",
        benefits: ["Any shift type", "Flexible rules", "Easy scheduling"],
      },
      {
        title: "Shift Scheduling",
        explanation:
          "Schedule shifts with drag-and-drop interface. Auto-assign shifts based on availability and preferences.",
        benefits: ["Drag-and-drop", "Auto assignment", "Conflict detection"],
      },
      {
        title: "Shift Rotation",
        explanation:
          "Automate shift rotations with configurable patterns. Support for weekly, bi-weekly, and monthly rotations.",
        benefits: [
          "Auto rotation",
          "Configurable patterns",
          "Fair distribution",
        ],
      },
      {
        title: "Availability Management",
        explanation:
          "Let employees set their availability preferences. System respects preferences when scheduling.",
        benefits: [
          "Preference-based",
          "Employee satisfaction",
          "Auto scheduling",
        ],
      },
      {
        title: "Overtime Management",
        explanation:
          "Track overtime across shifts. Auto-calculate overtime pay based on shift type and duration.",
        benefits: ["Auto overtime", "Compliant tracking", "Accurate payroll"],
      },
      {
        title: "Shift Swap Management",
        explanation:
          "Allow employees to swap shifts with supervisor approval. Track all swap requests and history.",
        benefits: ["Flexible swaps", "Approval workflow", "Audit trail"],
      },
    ],
    benefits: [
      {
        title: "Flexible Scheduling",
        description: "Support for any shift type",
      },
      {
        title: "Auto Management",
        description: "Automated shift allocation",
      },
      {
        title: "Employee Preferences",
        description: "Respect employee availability",
      },
    ],
  },

  // Holiday Management
  {
    id: "holiday-management",
    slug: "holiday-management",
    icon: CalendarDays,
    image: "feature-holiday.png",
    title: "Holiday Management",
    videoId: "FUKqIZopDGg", // Demo video
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

  // Client Management
  {
    id: "client-management",
    slug: "client-management",
    icon: Building2,
    image: "feature-client.png",
    title: "Client Management",
    videoId: "47uowaxH45o", // Client Management video
    shortDescription:
      "Comprehensive client portal with project visibility, billing, and communication.",
    description:
      "Give your clients visibility into their projects while maintaining control. Client updates, project updates, and billing all in one place.",
    details: [
      {
        title: "Project Visibility",
        explanation:
          "Give clients appropriate visibility into project progress. Choose what they can see - from high-level status to detailed timesheets.",
        benefits: ["Controlled access", "Progress visibility", "Transparency"],
      },
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
      {
        title: "Client Portal",
        explanation:
          "Secure, branded portals for each client. Clients can log in to view project status, timesheets, and invoices.",
        benefits: ["Secure access", "Branded experience", "Self-service"],
      },
      {
        title: "Invoice Access",
        explanation:
          "Clients can view, download, and pay invoices through the portal. Track payment status and history.",
        benefits: ["Self-service billing", "Online payment", "Payment history"],
      },
      {
        title: "Document Sharing",
        explanation:
          "Share documents securely with clients. Control access, set expiry dates, and track views.",
        benefits: ["Secure sharing", "Access control", "Activity tracking"],
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

  // Team Management
  {
    id: "team-management",
    slug: "team-management",
    icon: UsersRound,
    image: "feature-autotimesheet.png",
    title: "Team Management",
    videoId: "FUKqIZopDGg", // Demo video
    shortDescription:
      "Create and manage teams with complete visibility into team performance.",
    description:
      "Organize your workforce into teams for better management. Track team performance, manage team members, and streamline team communication.",
    details: [
      {
        title: "Team Creation",
        explanation:
          "Create teams with custom names, descriptions, and objectives. Add team members and assign team leads.",
        benefits: ["Easy creation", "Team structure", "Lead assignment"],
      },
      {
        title: "Team Member Management",
        explanation:
          "Add or remove team members, assign roles, and manage team composition.",
        benefits: ["Member management", "Role assignment", "Team composition"],
      },
      {
        title: "Team Performance",
        explanation:
          "Track team performance metrics including productivity, task completion, and project progress.",
        benefits: [
          "Performance tracking",
          "Productivity metrics",
          "Project progress",
        ],
      },
      {
        title: "Team Communication",
        explanation:
          "Dedicated communication channels for each team. Announcements, updates, and discussions all in one place.",
        benefits: ["Team channels", "Announcements", "Collaboration"],
      },
      {
        title: "Resource Allocation",
        explanation:
          "View team workload and allocate resources effectively. Identify overallocated teams and balance work.",
        benefits: ["Workload view", "Resource balancing", "Capacity planning"],
      },
    ],
    benefits: [
      {
        title: "Better Organization",
        description: "Organized team structure",
      },
      {
        title: "Performance Tracking",
        description: "Monitor team productivity",
      },
      {
        title: "Collaboration",
        description: "Enhanced team communication",
      },
    ],
  },

  // Automatic Time Tracking
  {
    id: "automatic-tracking",
    slug: "automatic-tracking",
    icon: Timer,
    image: "feature-autotimesheet.png",
    title: "Automatic Time Tracking",
    videoId: "_cDegr5SLh0", // Auto Time Tracking video
    shortDescription:
      "Automatic time tracking that captures work hours without manual entry.",
    description:
      "Let Hourmaker automatically track time spent on projects, tasks, and activities. Our intelligent system captures work hours in real-time, eliminating manual entry errors and saving countless hours.",
    details: [
      {
        title: "Automatic Time Capture",
        explanation:
          "Our system intelligently detects when you're working on different tasks and projects, automatically logging time once started.",
        benefits: ["Works in background", "No manual entry", "Always accurate"],
      },
      {
        title: "Real-time Tracking",
        explanation:
          "Time is tracked in real-time on your active devices. Whether you're on your desktop, or laptop, every minute is captured accurately and synced instantly.",
        benefits: ["Instant updates", "Always accurate", "Multi-device"],
      },
      {
        title: "Smart Project Association",
        explanation:
          "The system associates tracked time with the right projects and tasks based on your activity, application usage, and document context.",
        benefits: ["Auto association", "Accurate allocation", "Context-aware"],
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

  // Manual Time Tracking
  {
    id: "manual-tracking",
    slug: "manual-tracking",
    icon: FileText,
    image: "feature-manualtimesheet.png",
    title: "Manual Time Tracking",
    videoId: "XsA9QcmzHIk", // Manual Timesheet video
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
        benefits: ["One-click copy", "Time-saving", "Smart suggestions"],
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
      {
        title: "Approval Workflows",
        explanation:
          "Multi-level approval workflows ensure accuracy before timesheets are locked and sent to payroll. Managers can approve, reject, or request changes with comments.",
        benefits: ["Manager oversight", "Audit trail", "Change tracking"],
      },
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

  // Attendance Management
  {
    id: "attendance-management",
    slug: "attendance-management",
    icon: Fingerprint,
    image: "feature-attendance.png",
    title: "Attendance Management",
    videoId: "FUKqIZopDGg", // Demo video
    shortDescription:
      "Comprehensive attendance tracking with multiple check-in methods and real-time monitoring.",
    description:
      "Track attendance effortlessly with multiple check-in methods including web application. Monitor attendance in real-time and get instant alerts for absenteeism.",
    details: [
      {
        title: "Multiple Check-in Methods",
        explanation:
          "Support web-based check-ins. Employees can mark attendance from anywhere, using any method.",
        benefits: ["Flexible options", "Anywhere access", "Multiple methods"],
      },
      {
        title: "Real-time Monitoring",
        explanation:
          "Monitor attendance in real-time. See who's checked in, who's late, and who's absent at a glance.",
        benefits: ["Real-time view", "Instant alerts", "Quick overview"],
      },
      {
        title: "Late Check-in Management",
        explanation:
          "Track late check-ins automatically. Configure grace periods and late entry policies.",
        benefits: ["Grace periods", "Late tracking", "Policy enforcement"],
      },
      {
        title: "Absenteeism Tracking",
        explanation:
          "Track absenteeism patterns and get alerts for excessive absences. Generate attendance reports for compliance.",
        benefits: ["Pattern tracking", "Alert system", "Compliance reports"],
      },
      {
        title: "Attendance Reports",
        explanation:
          "Generate comprehensive attendance reports for payroll, compliance, and performance analysis.",
        benefits: ["Payroll ready", "Compliance ready", "Performance insights"],
      },
    ],
    benefits: [
      {
        title: "Zero Manual Work",
        description: "Attendance tracks itself with multiple options",
      },
      {
        title: "Real-time Visibility",
        description: "See attendance status instantly",
      },
      {
        title: "Compliance Ready",
        description: "Built-in attendance compliance",
      },
    ],
  },

  // Task Management
  {
    id: "task-management",
    slug: "task-management",
    icon: CheckSquare,
    image: "feature-task.png",
    title: "Task Management",
    videoId: "FUKqIZopDGg", // Demo video
    shortDescription:
      "Complete task management with assignment, tracking, and completion workflow.",
    description:
      "Manage tasks efficiently with assignment capabilities, progress tracking, and completion workflows. Assign tasks to team members and track progress in real-time.",
    details: [
      {
        title: "Task Creation",
        explanation:
          "Create tasks with descriptions, deadlines, priorities, and attachments. Set task dependencies and relationships.",
        benefits: ["Easy creation", "Deadlines", "Priorities"],
      },
      {
        title: "Task Assignment",
        explanation:
          "Assign tasks to individuals or teams. Track assignments and workload distribution.",
        benefits: [
          "Individual assignment",
          "Team assignment",
          "Workload tracking",
        ],
      },
      {
        title: "Progress Tracking",
        explanation:
          "Track task progress with status updates and comments. View task completion timeline.",
        benefits: [
          "Status tracking",
          "Progress updates",
          "Completion timeline",
        ],
      },
      {
        title: "My Tasks",
        explanation:
          "Personal task dashboard showing assigned tasks, deadlines, and priorities.",
        benefits: ["Personal overview", "Task deadlines", "Priority view"],
      },
      {
        title: "Assigned Tasks",
        explanation:
          "View tasks assigned to others for managers and team leads.",
        benefits: ["Team view", "Workload balance", "Task management"],
      },
    ],
    benefits: [
      {
        title: "Efficient Assignment",
        description: "Quick task assignment and tracking",
      },
      {
        title: "Progress Visibility",
        description: "Real-time task status updates",
      },
      {
        title: "Team Management",
        description: "Manage team tasks effectively",
      },
    ],
  },

  // Leave Management
  {
    id: "leave-management",
    slug: "leave-management",
    icon: CalendarCheck,
    image: "feature-attendance.png",
    title: "Leave Management",
    videoId: "weMwyb996T8", // Leave Management video
    shortDescription:
      "Comprehensive leave management with automated balance calculation and approval workflows.",
    description:
      "Manage all types of leave requests efficiently with automated balance calculations, multiple leave types, and approval workflows.",
    details: [
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
        title: "Leave Requests",
        explanation:
          "Submit leave requests with duration, reason, and supporting documents. Track request status.",
        benefits: ["Easy submission", "Document attachment", "Status tracking"],
      },
      {
        title: "Approval Workflow",
        explanation:
          "Multi-level approval workflow for leave requests. Managers can approve, reject, or request changes.",
        benefits: ["Manager oversight", "Audit trail", "Change tracking"],
      },
      {
        title: "Leave Calendar",
        explanation:
          "Visual leave calendar showing all leave requests. See team availability at a glance.",
        benefits: [
          "Visual calendar",
          "Team availability",
          "Conflict detection",
        ],
      },
      {
        title: "Holiday Integration",
        explanation:
          "Automatic integration with holiday calendars. Leave balances and attendance rules adjust automatically for holidays.",
        benefits: ["Holiday sync", "Auto adjustment", "Calendar integration"],
      },
    ],
    benefits: [
      {
        title: "Zero Manual Work",
        description: "Leave balances update automatically",
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

  // Project Management
  {
    id: "project-management",
    slug: "project-management",
    icon: FolderOpen,
    image: "feature-projects.png",
    title: "Project Management",
    videoId: "FUKqIZopDGg", // Demo video
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

  // Reporting & Analytics
  {
    id: "reporting-analytics",
    slug: "reporting-analytics",
    icon: ChartBar,
    image: "feature-analytics.png",
    title: "Reporting & Analytics",
    videoId: "FUKqIZopDGg", // Demo video
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

  // Activity Management
  {
    id: "activity-management",
    slug: "activity-management",
    icon: Activity,
    image: "feature-activity.png",
    title: "Activity Management",
    videoId: "FUKqIZopDGg", // Demo video
    shortDescription:
      "Track and monitor all user activities across the system with detailed audit logs.",
    description:
      "Complete visibility into user activities across the platform. Monitor actions, track changes, and maintain a comprehensive audit trail for compliance.",
    details: [
      {
        title: "Activity Tracking",
        explanation:
          "Track all user activities including logins, actions, and system interactions.",
        benefits: ["Complete tracking", "User actions", "System events"],
      },
      {
        title: "Audit Logs",
        explanation:
          "Detailed audit logs with timestamps, user information, and action details.",
        benefits: ["Detailed logs", "Timestamps", "User identification"],
      },
      {
        title: "Activity Filters",
        explanation:
          "Filter activities by user, action type, date range, and more for easy monitoring.",
        benefits: ["Advanced filtering", "Search capabilities", "Quick access"],
      },
      {
        title: "Security Monitoring",
        explanation:
          "Monitor suspicious activities and potential security threats in real-time.",
        benefits: [
          "Threat detection",
          "Security alerts",
          "Real-time monitoring",
        ],
      },
      {
        title: "Compliance Reporting",
        explanation:
          "Generate compliance reports with complete activity history for audits.",
        benefits: ["Compliance ready", "Audit reports", "Data export"],
      },
    ],
    benefits: [
      {
        title: "Complete Visibility",
        description: "See all user activities",
      },
      {
        title: "Audit Ready",
        description: "Detailed logs for compliance",
      },
      {
        title: "Security First",
        description: "Monitor suspicious activities",
      },
    ],
  },

  // Role Management
  {
    id: "role-management",
    slug: "role-management",
    icon: UserCog,
    image: "feature-access.png",
    title: "Role Management",
    videoId: "FUKqIZopDGg", // Demo video
    shortDescription:
      "Define and manage roles across your organization with granular control.",
    description:
      "Create custom roles with specific permissions for different job functions. Assign roles to users and manage role hierarchies efficiently.",
    details: [
      {
        title: "Custom Role Creation",
        explanation:
          "Create custom roles with specific permissions tailored to your organization's needs.",
        benefits: ["Custom roles", "Flexible permissions", "Role templates"],
      },
      {
        title: "Role Hierarchy",
        explanation:
          "Establish role hierarchies with clear reporting lines and approval chains.",
        benefits: ["Clear structure", "Approval chains", "Reporting lines"],
      },
      {
        title: "Permission Templates",
        explanation:
          "Use pre-built permission templates for common roles like admin, manager, employee.",
        benefits: ["Quick setup", "Best practices", "Consistent permissions"],
      },
      {
        title: "Role Assignment",
        explanation:
          "Easily assign roles to users with bulk operations and automated workflows.",
        benefits: ["Easy assignment", "Bulk operations", "Auto provisioning"],
      },
      {
        title: "Audit Trail",
        explanation:
          "Track all role changes and permission modifications for compliance purposes.",
        benefits: ["Complete audit", "Change tracking", "Compliance ready"],
      },
    ],
    benefits: [
      {
        title: "Custom Roles",
        description: "Create roles that fit your organization",
      },
      {
        title: "Granular Control",
        description: "Fine-tuned permissions for every role",
      },
      {
        title: "Easy Management",
        description: "Simple role assignment and updates",
      },
    ],
  },

  // Meeting Management
  {
    id: "meeting-management",
    slug: "meeting-management",
    icon: CalendarClockIcon,
    image: "feature-meeting.png",
    title: "Meeting Management",
    videoId: "FUKqIZopDGg", // Demo video
    shortDescription:
      "Smart meeting scheduler that integrates with calendars and automates scheduling.",
    description:
      "Eliminate the back-and-forth of meeting scheduling. Intelligent scheduling that checks availability, sends invites, and syncs with your calendar automatically.",
    details: [
      {
        title: "Availability Sharing",
        explanation:
          "Share your availability with others without exposing calendar details. Let people book time based on your preferences.",
        benefits: ["Privacy first", "Controlled access", "Easy sharing"],
      },
      {
        title: "Resource Booking",
        explanation:
          "Book meeting rooms, equipment, and other resources alongside meeting scheduling. Check availability in real-time.",
        benefits: ["Room booking", "Equipment tracking", "Resource management"],
      },
      {
        title: "Smart Reminders",
        explanation:
          "Send automated reminders before meetings. Customize timing and channels - email, SMS, or push notifications.",
        benefits: ["Reduce no-shows", "Custom timing", "Multi-channel"],
      },
      {
        title: "Calendar Integration",
        explanation:
          "Connect with Google Calendar, Outlook, iCloud, and more. Availability is checked in real-time across all connected calendars.",
        benefits: ["Multi-calendar", "Real-time sync", "No double-booking"],
      },
      {
        title: "Automated Scheduling",
        explanation:
          "Send meeting links and let invitees choose from available slots. Meetings are scheduled automatically without back-and-forth.",
        benefits: ["Self-service", "No coordination", "Time saving"],
      },
      {
        title: "Video Integration",
        explanation:
          "Auto-generate video conference links from Zoom, Teams, or Google Meet. Included automatically in calendar invites.",
        benefits: ["Auto links", "Multiple platforms", "One-click join"],
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

  // Communication / Announcement
  {
    id: "communication-announcement",
    slug: "communication-announcement",
    icon: Megaphone,
    image: "feature-announcement.png",
    title: "Communication & Announcements",
    videoId: "FUKqIZopDGg", // Demo video
    shortDescription:
      "Centralized communication platform for announcements and team updates.",
    description:
      "Keep everyone informed with targeted announcements. Send notifications to specific teams, departments, or the entire organization with scheduled delivery.",
    details: [
      {
        title: "Announcement Creation",
        explanation:
          "Create announcements with rich formatting, attachments, and scheduled delivery times.",
        benefits: ["Rich formatting", "Attachments", "Scheduled delivery"],
      },
      {
        title: "Targeted Distribution",
        explanation:
          "Send announcements to specific teams, departments, or user groups based on criteria.",
        benefits: ["Targeted delivery", "User groups", "Department specific"],
      },
      {
        title: "Multiple Channels",
        explanation:
          "Deliver announcements via email, in-app notifications, and push notifications.",
        benefits: [
          "Email delivery",
          "In-app notifications",
          "Push notifications",
        ],
      },
      {
        title: "Announcement History",
        explanation:
          "Complete history of all announcements with delivery status and read receipts.",
        benefits: ["History tracking", "Delivery status", "Read receipts"],
      },
      {
        title: "Scheduled Delivery",
        explanation:
          "Schedule announcements for future dates and times. Set reminders for important updates.",
        benefits: ["Future scheduling", "Reminders", "Timely delivery"],
      },
    ],
    benefits: [
      {
        title: "Everyone Informed",
        description: "Targeted announcements for all",
      },
      {
        title: "Multiple Channels",
        description: "Reach everyone effectively",
      },
      {
        title: "Audit Trail",
        description: "Complete history of communications",
      },
    ],
  },

  // Onboarding Management
  {
    id: "onboarding-management",
    slug: "onboarding-management",
    icon: UserRoundPlus,
    image: "feature-onboarding.png",
    title: "Onboarding Management",
    videoId: "h80-uXbQ0Qg", // Onboarding video
    shortDescription:
      "Streamlined employee onboarding with digital workflows and form management.",
    description:
      "Create smooth onboarding experiences for new hires. From onboarding forms to first-day checklists, manage the entire employee lifecycle in one place.",
    details: [
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
      {
        title: "Onboarding Forms",
        explanation:
          "Customizable onboarding forms for collecting employee information, preferences, and requirements.",
        benefits: [
          "Custom forms",
          "Information collection",
          "User preferences",
        ],
      },
      {
        title: "Reference Forms",
        explanation:
          "Digital reference verification forms for background checks and employment verification.",
        benefits: [
          "Reference checks",
          "Background verification",
          "Digital forms",
        ],
      },
      {
        title: "New Hire Portal",
        explanation:
          "Give new hires a personalized portal with everything they need before day one. Company info, forms, and welcome messages all in one place.",
        benefits: ["Pre-boarding", "Self-service", "Engagement"],
      },
      {
        title: "Progress Tracking",
        explanation:
          "Track onboarding progress for each new hire. Identify bottlenecks and ensure timely completion.",
        benefits: [
          "Progress tracking",
          "Bottleneck identification",
          "Timely completion",
        ],
      },
    ],
    benefits: [
      {
        title: "3x Faster Onboarding",
        description: "Digital workflows replace paperwork",
      },
      {
        title: "Better Experience",
        description: "Professional, organized new hire journey",
      },
      {
        title: "Complete Tracking",
        description: "Monitor onboarding progress",
      },
    ],
  },

  // Recruitment Management
  {
    id: "recruitment-management",
    slug: "recruitment-management",
    icon: UsersIcon,
    image: "feature-recruitment.png",
    title: "Recruitment Management",
    videoId: "FUKqIZopDGg", // Demo video
    shortDescription:
      "Complete recruitment pipeline management with applicant tracking and interview scheduling.",
    description:
      "Manage your entire recruitment process from job posting to candidate hiring. Track applicants, schedule interviews, and collaborate with hiring teams.",
    details: [
      {
        title: "Applicant Tracking",
        explanation:
          "Track applicants through the recruitment pipeline. Manage candidate profiles, resumes, and application status.",
        benefits: [
          "Application tracking",
          "Candidate profiles",
          "Resume management",
        ],
      },
      {
        title: "Job Posting",
        explanation:
          "Create and publish job postings across multiple platforms. Track application sources and effectiveness.",
        benefits: [
          "Multi-platform posting",
          "Source tracking",
          "Performance analytics",
        ],
      },
      {
        title: "Interview Management",
        explanation:
          "Schedule interviews, collect feedback, and manage candidate communications.",
        benefits: [
          "Interview scheduling",
          "Feedback collection",
          "Candidate communication",
        ],
      },
      {
        title: "Pipeline Management",
        explanation:
          "Visual recruitment pipeline showing candidate progress from application to hiring.",
        benefits: ["Visual pipeline", "Stage tracking", "Progress monitoring"],
      },
      {
        title: "Team Collaboration",
        explanation:
          "Collaborate with hiring teams for candidate evaluation and decision-making.",
        benefits: ["Team collaboration", "Shared feedback", "Hiring decisions"],
      },
    ],
    benefits: [
      {
        title: "50% Faster Hiring",
        description: "Streamlined recruitment process",
      },
      {
        title: "Better Hiring Decisions",
        description: "Complete candidate evaluation",
      },
      {
        title: "Team Collaboration",
        description: "Involve hiring teams effectively",
      },
    ],
  },

  // Referral Management
  {
    id: "referral-management",
    slug: "referral-management",
    icon: UserPlusIcon,
    image: "feature-referral.png",
    title: "Referral Management",
    videoId: "FUKqIZopDGg", // Demo video
    shortDescription:
      "Track and manage employee referrals with automated reward workflows.",
    description:
      "Encourage employee referrals with a streamlined tracking system. Monitor referrals, manage rewards, and track the success of your referral program.",
    details: [
      {
        title: "Referral Tracking",
        explanation:
          "Track all employee referrals from submission to hiring. Monitor status and progress of each referral.",
        benefits: [
          "Complete tracking",
          "Status monitoring",
          "Progress updates",
        ],
      },
      {
        title: "Reward Management",
        explanation:
          "Automate reward distribution for successful referrals. Configure reward rules and track payouts.",
        benefits: ["Auto rewards", "Custom rules", "Payout tracking"],
      },
      {
        title: "Referral Dashboard",
        explanation:
          "Personal dashboard for employees to track their referrals and rewards.",
        benefits: [
          "Personal tracking",
          "Reward visibility",
          "Performance metrics",
        ],
      },
      {
        title: "Program Analytics",
        explanation:
          "Analyze referral program effectiveness. Track conversion rates and cost per hire.",
        benefits: ["Program analytics", "Conversion tracking", "Cost analysis"],
      },
      {
        title: "Employee Engagement",
        explanation:
          "Encourage employee participation with leaderboards, recognition, and communication.",
        benefits: ["Leaderboards", "Recognition", "Engagement features"],
      },
    ],
    benefits: [
      {
        title: "Hire Faster",
        description: "Quality referrals speed up hiring",
      },
      {
        title: "Lower Costs",
        description: "Reduce recruitment costs",
      },
      {
        title: "Better Retention",
        description: "Referrals typically stay longer",
      },
    ],
  },

  // Job Opening Management
  {
    id: "job-opening-management",
    slug: "job-opening-management",
    icon: FileTextIcon,
    image: "feature-jobs.png",
    title: "Job Opening Management",
    videoId: "FUKqIZopDGg", // Demo video
    shortDescription:
      "Create and manage job openings with detailed requirements and tracking.",
    description:
      "Define job openings with detailed requirements, responsibilities, and qualifications. Track openings from creation to filling.",
    details: [
      {
        title: "Job Creation",
        explanation:
          "Create job openings with detailed descriptions, requirements, and qualifications.",
        benefits: [
          "Detailed job descriptions",
          "Requirements",
          "Qualifications",
        ],
      },
      {
        title: "Opening Tracking",
        explanation:
          "Track the status of job openings from creation to filling. Monitor applicant flow.",
        benefits: [
          "Status tracking",
          "Applicant monitoring",
          "Progress updates",
        ],
      },
      {
        title: "Multi-platform Posting",
        explanation:
          "Post openings to multiple job boards and platforms with one click.",
        benefits: ["Multi-platform", "One-click posting", "Wider reach"],
      },
      {
        title: "Application Management",
        explanation:
          "Manage applications for each opening. Track applicant status and progress.",
        benefits: [
          "Application management",
          "Status tracking",
          "Candidate pipeline",
        ],
      },
      {
        title: "Analytics",
        explanation:
          "Track opening performance including views, applications, and conversion rates.",
        benefits: [
          "Performance tracking",
          "Conversion analytics",
          "Source tracking",
        ],
      },
    ],
    benefits: [
      {
        title: "Organized Openings",
        description: "Centralized job management",
      },
      {
        title: "Wider Reach",
        description: "Post to multiple platforms",
      },
      {
        title: "Performance Tracking",
        description: "Monitor opening effectiveness",
      },
    ],
  },

  // Document Management
  {
    id: "document-management",
    slug: "document-management",
    icon: Cloud,
    image: "feature-docs.png",
    title: "Document Management",
    videoId: "gJrgD5kpBX8", // Docs Portal video
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
      {
        title: "Version Control",
        explanation:
          "Track document versions and changes. View revision history and restore previous versions if needed.",
        benefits: ["Version tracking", "History view", "Restore capability"],
      },
      {
        title: "Document Portal",
        explanation:
          "Personalized document portal for employees to access company documents, policies, and resources.",
        benefits: ["Self-service", "Easy access", "Resource center"],
      },
    ],
    benefits: [
      {
        title: "Anywhere Access",
        description: "Access documents from anywhere, anytime",
      },
      {
        title: "Secure Storage",
        description: "Enterprise-grade security",
      },
      {
        title: "Smart Organization",
        description: "Find documents easily",
      },
    ],
  },

  // Helpdesk & Support
  {
    id: "helpdesk-support",
    slug: "helpdesk-support",
    icon: LifeBuoy,
    image: "feature-help.png",
    title: "Helpdesk & Support",
    videoId: "FUKqIZopDGg", // Demo video
    shortDescription:
      "Complete helpdesk system with ticket management and support workflows.",
    description:
      "Streamline employee support with a comprehensive helpdesk system. Manage tickets, categorize requests, and provide timely resolution.",
    details: [
      {
        title: "Ticket Management",
        explanation:
          "Create, assign, and track support tickets. Monitor ticket status and resolution time.",
        benefits: ["Ticket creation", "Assignment", "Status tracking"],
      },
      {
        title: "Category Management",
        explanation:
          "Organize support requests with customizable categories and priorities.",
        benefits: [
          "Custom categories",
          "Priority setting",
          "Easy organization",
        ],
      },
      {
        title: "Multi-level Support",
        explanation:
          "Escalate tickets to appropriate teams. Track escalation history and resolution.",
        benefits: ["Escalation", "Team routing", "Resolution tracking"],
      },
      {
        title: "Employee Portal",
        explanation:
          "Self-service support portal for employees to submit tickets and track requests.",
        benefits: ["Self-service", "Request tracking", "Easy submission"],
      },
      {
        title: "Analytics",
        explanation:
          "Track support metrics including ticket volume, resolution time, and satisfaction scores.",
        benefits: [
          "Performance metrics",
          "Resolution tracking",
          "Satisfaction scores",
        ],
      },
    ],
    benefits: [
      {
        title: "Efficient Support",
        description: "Streamlined ticket management",
      },
      {
        title: "Employee Satisfaction",
        description: "Quick issue resolution",
      },
      {
        title: "Analytics",
        description: "Measure support performance",
      },
    ],
  },

  // Billing Management
  {
    id: "billing-management",
    slug: "billing-management",
    icon: DollarSign,
    image: "feature-billing.png",
    title: "Billing Management",
    videoId: "FUKqIZopDGg", // Demo video
    shortDescription:
      "Comprehensive billing dashboard with client, project, and employee-wise revenue breakdown.",
    description:
      "Get complete visibility into your billing operations with detailed breakdowns by client, project, employee, and time period. Track revenue trends and make data-driven decisions.",
    details: [
      {
        title: "Client-wise Billing",
        explanation:
          "View revenue breakdown by client. Track billing history, outstanding amounts, and revenue trends per client.",
        benefits: ["Client breakdown", "Revenue tracking", "Trend analysis"],
      },
      {
        title: "Project-wise Billing",
        explanation:
          "Track billing by project with detailed revenue analysis. Compare project profitability and resource allocation.",
        benefits: [
          "Project breakdown",
          "Profitability analysis",
          "Resource insights",
        ],
      },
      {
        title: "Employee-wise Billing",
        explanation:
          "Track billing contribution by employee. Identify top performers and optimize resource allocation.",
        benefits: [
          "Employee breakdown",
          "Performance insights",
          "Resource optimization",
        ],
      },
      {
        title: "Monthly & Yearly Reports",
        explanation:
          "Generate comprehensive billing reports by month and year. Track seasonal trends and annual growth.",
        benefits: ["Monthly reports", "Yearly reports", "Growth tracking"],
      },
      {
        title: "Billing Dashboard",
        explanation:
          "Interactive dashboard showing key billing metrics, revenue projections, and financial health indicators.",
        benefits: [
          "Real-time insights",
          "Revenue projections",
          "Financial health",
        ],
      },
      {
        title: "Export & Share",
        explanation:
          "Export billing reports in multiple formats. Share insights with stakeholders and management.",
        benefits: ["Multiple formats", "Easy sharing", "Stakeholder ready"],
      },
    ],
    benefits: [
      {
        title: "Complete Visibility",
        description: "See billing from every angle",
      },
      {
        title: "Data-Driven Decisions",
        description: "Make informed business decisions",
      },
      {
        title: "Financial Health",
        description: "Monitor revenue trends",
      },
    ],
  },

  // Invoicing
  {
    id: "invoicing",
    slug: "invoicing",
    icon: ReceiptIcon,
    image: "feature-invoicing.png",
    title: "Invoicing",
    videoId: "C9I1WreWPtA", // Invoice Generation video
    shortDescription:
      "Professional invoice generation with customizable templates and automated delivery.",
    description:
      "Create stunning, professional invoices in seconds. Choose between manual and automatic invoice generation. Customize templates, and automate delivery to clients.",
    details: [
      {
        title: "Manual Invoicing",
        explanation:
          "Create manual invoices with complete control over line items, rates, and terms. Perfect for custom billing scenarios.",
        benefits: ["Full control", "Custom rates", "Flexible terms"],
      },
      {
        title: "Auto Invoice Generation",
        explanation:
          "Generate invoices automatically from approved timesheets and expenses. Set up rules for automatic billing.",
        benefits: ["Auto generation", "Timesheet-based", "Expense-based"],
      },
      {
        title: "Customizable Templates",
        explanation:
          "Choose from professionally designed templates or create your own with your brand identity.",
        benefits: ["Branded invoices", "Multiple templates", "Custom fields"],
      },
      {
        title: "Payment Integration",
        explanation:
          "Embed payment links directly in invoices. Clients can pay with credit card, bank transfer, or UPI with a single click.",
        benefits: ["One-click pay", "Multiple options", "Faster collection"],
      },
      {
        title: "Bulk Operations",
        explanation:
          "Create, send, and manage multiple invoices at once. Perfect for month-end closing or handling multiple clients.",
        benefits: ["Batch processing", "Time-saving", "Efficient"],
      },
      {
        title: "PDF Generation",
        explanation:
          "Generate professional PDF invoices automatically. Perfect for email delivery, printing, or archiving.",
        benefits: ["Auto PDF", "Print ready", "Email ready"],
      },
      {
        title: "Recurring Invoices",
        explanation:
          "Set up recurring invoices for retainer clients or subscription services. Automatically generate and send invoices on a schedule.",
        benefits: [
          "Automatic recurring",
          "Retainer billing",
          "Subscription support",
        ],
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

  // Company Management
  {
    id: "company-management",
    slug: "company-management",
    icon: Building,
    image: "feature-company.png",
    title: "Company Management",
    videoId: "FUKqIZopDGg", // Demo video
    shortDescription: "Centralized company profile and settings management.",
    description:
      "Manage company profile, settings, and configurations from one place. Maintain accurate company information and configure system-wide settings.",
    details: [
      {
        title: "Company Profile",
        explanation:
          "Manage company details including name, logo, address, and contact information.",
        benefits: ["Profile management", "Logo upload", "Contact details"],
      },
      {
        title: "Company Settings",
        explanation:
          "Configure company-wide settings including policies, preferences, and integrations.",
        benefits: [
          "Centralized settings",
          "Policy configuration",
          "Integration management",
        ],
      },
      {
        title: "Document Management",
        explanation:
          "Store company documents and policies centrally for easy employee access.",
        benefits: ["Document storage", "Policy access", "Central repository"],
      },
      {
        title: "Branding",
        explanation:
          "Customize system appearance with company branding including colors, logos, and themes.",
        benefits: ["Branded appearance", "Custom themes", "Consistent look"],
      },
    ],
    benefits: [
      {
        title: "Centralized Management",
        description: "Manage all company settings in one place",
      },
      {
        title: "Brand Control",
        description: "Consistent company branding",
      },
      {
        title: "Easy Access",
        description: "Information accessible to all",
      },
    ],
  },
];

const featureOrder = [
  "automatic-tracking",
  "manual-tracking",
  "document-management",
  "invoicing",
  "billing-management",
  "project-management",
  "client-management",
  "reporting-analytics",
  "onboarding-management",
  "recruitment-management",
  "referral-management",
  "leave-management",
];

features.sort((firstFeature, secondFeature) => {
  const firstIndex = featureOrder.indexOf(firstFeature.id);
  const secondIndex = featureOrder.indexOf(secondFeature.id);
  const firstPosition = firstIndex === -1 ? featureOrder.length : firstIndex;
  const secondPosition = secondIndex === -1 ? featureOrder.length : secondIndex;

  return firstPosition - secondPosition;
});

export const getFeatureBySlug = (slug) => {
  return features.find((f) => f.slug === slug);
};
