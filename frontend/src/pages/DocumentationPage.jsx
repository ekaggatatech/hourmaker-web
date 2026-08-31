import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  FileText,
  CalendarCheck,
  UserCheck,
  CheckSquare,
  FolderKanban,
  UserPlus,
  BarChart3,
  Code,
  ArrowRight,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import DemoModal from "../components/DemoModal";
import ScrollReveal from "../components/ui/ScrollReveal";

const features = [
  {
    id: "timesheet",
    icon: FileText,
    title: "Timesheet Management",
    description:
      "Automated timesheet generation with approval workflows and integration with payroll systems.",
    details: [
      "Automatic time capture from clock-in/out or manual entry",
      "Multi-level approval workflows with email notifications",
      "Integration with popular payroll systems (ADP, QuickBooks, Xero)",
      "Overtime calculation and policy enforcement",
      "Bulk timesheet operations for managers",
      "Historical timesheet access and audit trails",
      "Custom timesheet templates per department or project",
    ],
  },
  // {
  //   id: "scheduling",
  //   icon: CalendarCheck,
  //   title: "Staff Scheduling",
  //   description:
  //     "Create and manage employee schedules with drag-and-drop interface and conflict detection.",
  //   details: [
  //     "Drag-and-drop schedule builder with visual calendar",
  //     "Automatic conflict detection for double-bookings",
  //     "Shift templates and recurring schedule patterns",
  //     "Employee availability and preference management",
  //     "Real-time schedule publishing and notifications",
  //     "Shift swap requests and approval workflows",
  //     "Overtime tracking and compliance alerts",
  //     "Schedule forecasting based on historical data",
  //   ],
  // },
  {
    id: "attendance",
    icon: UserCheck,
    title: "Leave/Attendance Management",
    description:
      "Track attendance, leaves, and time-off requests with automated policy enforcement.",
    details: [
      "Multiple leave types (PTO, sick, personal, etc.)",
      "Automatic leave balance calculation and accruals",
      "Self-service leave request portal for employees",
      "Manager approval workflows with delegation",
      "Holiday calendar management by location",
      "Attendance tracking with biometric integration",
      "Late arrival and early departure tracking",
      "Compliance reporting for labor regulations",
    ],
  },
  {
    id: "workflow",
    icon: CheckSquare,
    title: "Approval Workflow",
    description:
      "Customizable approval chains for timesheets, leaves, expenses, and schedule changes.",
    details: [
      "Multi-level approval hierarchies",
      "Parallel and sequential approval paths",
      "Automatic escalation for pending approvals",
      "Email and push notifications for approvers",
      "Delegation and out-of-office handling",
      "Audit trail for all approval decisions",
      "Custom approval rules by department or cost center",
    ],
  },
  {
    id: "projects",
    icon: FolderKanban,
    title: "Project Tracking",
    description:
      "Monitor project hours, budgets, and progress with real-time dashboards.",
    details: [
      "Project-based time tracking and allocation",
      "Budget monitoring with alerts for overruns",
      "Task-level time breakdowns",
      "Client billing reports and invoicing",
      "Project profitability analysis",
      "Resource utilization dashboards",
      "Integration with project management tools",
      "Custom project codes and hierarchies",
    ],
  },
  {
    id: "onboarding",
    icon: UserPlus,
    title: "Onboarding/Recruitment",
    description:
      "Streamline employee onboarding and integrate with recruitment platforms.",
    details: [
      "Digital onboarding checklists",
      "Document collection and e-signatures",
      "New hire portal with company information",
      "Equipment and access provisioning workflows",
      "Mentor assignment and tracking",
      "Onboarding progress dashboards",
      "Integration with ATS systems",
      "Compliance documentation management",
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "Gain insights into workforce productivity, project profitability, and operational efficiency.",
    details: [
      "Pre-built reports for common metrics",
      "Custom report builder with drag-and-drop",
      "Real-time dashboards with KPIs",
      "Scheduled report delivery via email",
      "Data export to Excel, PDF, CSV",
      "Trend analysis and forecasting",
      "Benchmark comparisons",
      "API access for BI tool integration",
    ],
  },
  {
    id: "api",
    icon: Code,
    title: "API & Integrations",
    description:
      "Connect Hourmaker with your existing tools through our robust API and pre-built integrations.",
    details: [
      "RESTful API with comprehensive documentation",
      "Webhooks for real-time event notifications",
      "Pre-built integrations with 50+ tools",
      "SSO support (SAML, OAuth, LDAP)",
      "Custom integration development support",
      "Sandbox environment for testing",
      "Rate limiting and security controls",
      "API usage analytics and monitoring",
    ],
  },
];

const DocumentationPage = () => {
  const location = useLocation();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient section-band-light py-16 text-center relative overflow-hidden">
        <span className="float-orb float-orb-a" aria-hidden />
        <ScrollReveal className="container max-w-4xl relative z-10">
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Product <span className="text-primary">Documentation</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Everything you need to know about Hourmaker's powerful features
          </p>
        </ScrollReveal>
      </section>

      {/* Quick Navigation */}
      {/* <section className="py-10 bg-white border-b border-border sticky top-[72px] z-40">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((feature) => (
              <a
                key={feature.id}
                href={`#${feature.id}`}
                className="px-4 py-2 bg-primary-light text-primary-dark font-medium rounded-lg hover:bg-primary hover:text-white transition-colors text-sm"
              >
                {feature.title}
              </a>
            ))}
          </div>
        </div>
      </section> */}

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`py-20 relative overflow-hidden ${index % 2 === 0 ? "section-band-light" : "section-band-dark"}`}
        >
          {index % 2 !== 0 && (
            <span className="float-orb float-orb-b" aria-hidden />
          )}
          <div className="container relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-1/3">
                <ScrollReveal className="sticky top-48">
                  <div className="feature-icon mb-6">
                    <feature.icon />
                  </div>
                  <h2
                    className={`font-poppins text-2xl md:text-3xl font-bold mb-4 ${index % 2 === 0 ? "text-primary-dark" : "text-white"}`}
                  >
                    {feature.title}
                  </h2>
                  <p
                    className={`text-lg ${index % 2 === 0 ? "text-muted-foreground" : "text-slate-300"}`}
                  >
                    {feature.description}
                  </p>
                </ScrollReveal>
              </div>
              <div className="lg:w-2/3">
                <ScrollReveal delay={100}>
                  <div className="glass-card rounded-xl p-8 !bg-white">
                    <h3 className="font-poppins text-xl font-semibold text-slate-900 mb-6">
                      Key Capabilities
                    </h3>
                    <ul className="space-y-4">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => setIsDemoModalOpen(true)}
                        className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary-dark transition-colors text-center"
                      >
                        Request Demo
                      </button>
                      <Link
                        to="/pricing"
                        className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary-light transition-colors text-center"
                      >
                        View Pricing
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="cta-gradient section-band-dark py-20 text-center text-white relative overflow-hidden">
        <span className="float-orb float-orb-c" aria-hidden />
        <ScrollReveal className="container max-w-3xl relative z-10">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
            Need Help Getting Started?
          </h2>
          <p className="text-lg opacity-90 mb-10">
            Our team is here to help you get the most out of Hourmaker. Schedule
            a personalized demo or contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-8 py-4 bg-white text-primary font-poppins font-semibold rounded-xl transition-all duration-300 hover:bg-primary-light hover:-translate-y-1"
            >
              Schedule Demo
            </button>
            <Link
              to="/resources#help"
              className="px-8 py-4 border-2 border-white text-white font-poppins font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            >
              Visit Help Center
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </Layout>
  );
};

export default DocumentationPage;
