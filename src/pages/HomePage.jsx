import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  XCircle,
  Timer,
  Calendar,
  BarChart3,
  FileText,
  CalendarCheck,
  UserCheck,
  FolderKanban,
  CheckSquare,
  UserPlus,
  Star,
  Building2,
  ChevronDown,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import DemoModal from "../components/DemoModal";

const HomePage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28 overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 animate-fade-in">
              <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Smart Timesheets &{" "}
                <span className="text-primary">Workforce Management</span> for
                Modern Teams
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Automate time tracking, streamline approvals, and gain
                actionable insights with our all-in-one workforce management
                platform. Optimize productivity and reduce administrative
                overhead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-6 py-3.5 bg-primary text-primary-foreground font-poppins font-semibold rounded-xl transition-all duration-300 hover:bg-primary-dark hover:-translate-y-1 hover:shadow-button text-center"
                >
                  Get Started Free
                </button>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-6 py-3.5 border-2 border-primary text-primary font-poppins font-semibold rounded-xl transition-all duration-300 hover:bg-primary-light hover:-translate-y-1 text-center"
                >
                  Book a Demo
                </button>
              </div>
            </div>
            {/* <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform -rotate-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 bg-primary-light rounded-lg w-3/4"></div>
                    <div className="h-24 bg-muted rounded-lg"></div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 bg-primary/10 rounded-lg"></div>
                      <div className="h-16 bg-success/10 rounded-lg"></div>
                      <div className="h-16 bg-warning/10 rounded-lg"></div>
                    </div>
                    <div className="h-6 bg-muted rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-light/30 to-white/40 rounded-2xl transform rotate-3 animate-pulse"></div>

                {/* Dashboard Main Container */}
                <div className="relative bg-gradient-to-br from-white via-white to-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-5 transform -rotate-1 border border-white/40 overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <div className="h-2.5 bg-primary/30 rounded-full w-24 mb-1"></div>
                        <div className="h-2 bg-muted-foreground/20 rounded-full w-16"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-destructive"></div>
                      <div className="w-2 h-2 rounded-full bg-warning"></div>
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                    </div>
                  </div>

                  {/* Main Dashboard Grid */}
                  <div className="grid grid-cols-12 gap-3">
                    {/* Left Column - Charts */}
                    <div className="col-span-8 space-y-3">
                      {/* Bar Chart Header */}
                      <div className="flex justify-between items-center">
                        <div className="h-3 bg-primary/20 rounded-lg w-28"></div>
                        <div className="flex gap-1">
                          {["W", "M", "Y"].map((period, i) => (
                            <div
                              key={period}
                              className={`px-2 py-0.5 text-xs rounded ${i === 1 ? "bg-primary text-white" : "bg-muted"}`}
                            >
                              {period}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bar Chart */}
                      <div className="relative h-32 bg-gradient-to-b from-primary/5 to-transparent rounded-lg p-3">
                        <div className="absolute bottom-0 left-3 right-3 flex items-end justify-between h-24">
                          {Array.from({ length: 7 }).map((_, i) => (
                            <div key={i} className="flex flex-col items-center">
                              <div
                                className={`w-4 rounded-t-lg transition-all duration-300 hover:opacity-80 ${
                                  i === 3
                                    ? "bg-primary h-20"
                                    : i === 0 || i === 6
                                      ? "bg-primary-light h-12"
                                      : "bg-primary/40 h-" + (14 + i * 8)
                                }`}
                              ></div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {
                                  [
                                    "Mon",
                                    "Tue",
                                    "Wed",
                                    "Thu",
                                    "Fri",
                                    "Sat",
                                    "Sun",
                                  ][i]
                                }
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* Grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between">
                          {[0, 1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="border-t border-border/20"
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Mini Stats */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-success/10 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-success">
                            98%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Adoption
                          </div>
                        </div>
                        <div className="bg-primary/10 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-primary">
                            3x
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Faster
                          </div>
                        </div>
                        <div className="bg-warning/10 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-warning">
                            95%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Accuracy
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Pie Chart */}
                    <div className="col-span-4">
                      <div className="h-3 bg-primary/20 rounded-lg w-20 mb-3"></div>
                      <div className="relative">
                        {/* Donut Chart */}
                        <div className="relative w-28 h-28 mx-auto">
                          <div className="absolute inset-0 rounded-full border-[10px] border-transparent">
                            {/* Primary segment */}
                            <div
                              className="absolute inset-0 rounded-full border-[10px] border-primary"
                              style={{
                                clipPath:
                                  "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)",
                              }}
                            ></div>
                            {/* Success segment */}
                            <div
                              className="absolute inset-0 rounded-full border-[10px] border-success"
                              style={{
                                clipPath:
                                  "polygon(50% 50%, 100% 0%, 100% 100%, 100% 100%, 50% 100%)",
                              }}
                            ></div>
                            {/* Warning segment */}
                            <div
                              className="absolute inset-0 rounded-full border-[10px] border-warning"
                              style={{
                                clipPath:
                                  "polygon(50% 50%, 0% 100%, 0% 0%, 0% 0%, 50% 0%)",
                              }}
                            ></div>
                          </div>
                          {/* Center */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-xl font-bold text-primary-dark">
                                85%
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Utilization
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Chart Legend */}
                        <div className="space-y-2 mt-3">
                          {[
                            {
                              color: "bg-primary",
                              label: "Productive",
                              value: "45%",
                            },
                            {
                              color: "bg-success",
                              label: "Meetings",
                              value: "25%",
                            },
                            {
                              color: "bg-warning",
                              label: "Admin",
                              value: "15%",
                            },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between"
                            >
                              <div className="flex items-center gap-1">
                                <div
                                  className={`w-2 h-2 rounded-full ${item.color}`}
                                ></div>
                                <div className="text-xs text-muted-foreground">
                                  {item.label}
                                </div>
                              </div>
                              <div className="text-xs font-medium text-primary-dark">
                                {item.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row - Recent Activity */}
                    <div className="col-span-12 mt-3 pt-3 border-t border-border">
                      <div className="h-3 bg-primary/20 rounded-lg w-32 mb-2"></div>
                      <div className="space-y-2">
                        {[
                          {
                            time: "09:30 AM",
                            action: "Team sync completed",
                            color: "bg-success",
                          },
                          {
                            time: "11:15 AM",
                            action: "Timesheet approved",
                            color: "bg-primary",
                          },
                          {
                            time: "02:45 PM",
                            action: "Schedule updated",
                            color: "bg-warning",
                          },
                        ].map((activity, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div
                              className={`w-2 h-2 rounded-full ${activity.color}`}
                            ></div>
                            <div className="text-xs text-muted-foreground flex-1">
                              {activity.action}
                            </div>
                            <div className="text-xs font-medium">
                              {activity.time}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Animated Elements */}
                  <div className="absolute top-1/4 -left-4 w-8 h-8 bg-primary/10 rounded-full blur-md animate-pulse"></div>
                  <div className="absolute bottom-1/3 -right-3 w-6 h-6 bg-success/10 rounded-full blur-md animate-pulse delay-700"></div>
                  <div className="absolute top-3/4 left-1/4 w-4 h-4 bg-warning/10 rounded-full blur-md animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 order-2 lg:order-1">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                Why Modern Teams Need Hourmaker
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Manual time tracking and workforce management processes are
                inefficient, error-prone, and don't scale with growing teams.
                This leads to:
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  "Inaccurate billing and payroll errors",
                  "Compliance risks and audit failures",
                  "Low employee satisfaction with manual processes",
                  "Limited visibility into workforce productivity",
                  "Wasted hours on administrative tasks",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                Hourmaker solves these challenges with an intuitive, automated
                platform designed for today's distributed workforce.
              </p>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, label: "Time Saved", value: "70%" },
                  { icon: BarChart3, label: "Accuracy", value: "95%" },
                  { icon: Timer, label: "Adoption", value: "98%" },
                  { icon: Calendar, label: "Faster", value: "3x" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-6 text-center"
                  >
                    <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary-dark mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="section-title">
            <h2>Comprehensive Solutions We Provide</h2>
            <p>
              Hourmaker offers a complete suite of tools to manage your entire
              workforce efficiently
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Timer,
                title: "Automated Time Tracking",
                description:
                  "Track work hours automatically across projects with real-time visibility and accurate reporting.",
              },
              {
                icon: Calendar,
                title: "Intelligent Scheduling",
                description:
                  "Create optimized schedules that match skills with demand while considering employee preferences.",
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description:
                  "Gain insights into workforce productivity, project profitability, and operational efficiency.",
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
              >
                <div className="solution-icon">
                  <solution.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-primary-dark mb-4">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="section-title">
            <h2>Hear What Others Say About Us</h2>
            <p>
              See what top teams say after switching to a smarter workforce
              management platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                initials: "AK",
                name: "Anjali Kumar",
                role: "CTO, TechNova Solutions",
                rating: 5,
                content:
                  "Hourmaker has transformed how we manage our distributed team of 200+ engineers. Time tracking accuracy improved by 95% and administrative workload decreased by 70%.",
                company: "TechNova Solutions • 500+ employees",
              },
              {
                initials: "RS",
                name: "Rajesh Sharma",
                role: "Operations Director, Global BPO Inc.",
                rating: 4.5,
                content:
                  "Switching to Hourmaker saved us 1200+ hours monthly in administrative work. The scheduling features alone have optimized our shift planning, reducing overtime costs by 35%.",
                company: "Global BPO Inc. • 1200+ employees",
              },
              {
                initials: "PS",
                name: "Priya Singh",
                role: "HR Head, GrowthStart Ventures",
                rating: 5,
                content:
                  "The onboarding and leave management features have streamlined our HR processes dramatically. What used to take days now happens in hours.",
                company: "GrowthStart Ventures • 300+ employees",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="testimonial-avatar">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-primary-dark">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4 text-warning">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? "fill-current" : ""}`}
                    />
                  ))}
                </div>
                <p className="text-foreground italic mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Building2 className="w-4 h-4 text-primary mr-2" />
                  {testimonial.company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Powerful Features for Modern Teams</h2>
            <p>
              Everything you need to manage your workforce efficiently in one
              integrated platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "Timesheet Management",
                description:
                  "Automated timesheet generation with approval workflows and integration with payroll systems.",
              },
              {
                icon: CalendarCheck,
                title: "Staff Scheduling",
                description:
                  "Create and manage employee schedules with drag-and-drop interface and conflict detection.",
              },
              {
                icon: UserCheck,
                title: "Leave/Attendance Management",
                description:
                  "Track attendance, leaves, and time-off requests with automated policy enforcement.",
              },
              {
                icon: FolderKanban,
                title: "Project Tracking",
                description:
                  "Monitor project hours, budgets, and progress with real-time dashboards.",
              },
              {
                icon: CheckSquare,
                title: "Approval Workflow",
                description:
                  "Customizable approval chains for timesheets, leaves, expenses, and schedule changes.",
              },
              {
                icon: UserPlus,
                title: "Onboarding/Recruitment",
                description:
                  "Streamline employee onboarding and integrate with recruitment platforms.",
              },
            ].map((feature, index) => (
              <Link
                key={index}
                to={`/documentation#${feature.title.toLowerCase().replace(/[^a-z]/g, "-")}`}
                className="glass-card rounded-xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-primary/30"
              >
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h3 className="font-poppins text-lg font-semibold text-primary-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Simple, Transparent Pricing</h2>
            <p>
              Choose the plan that fits your team's needs. No hidden fees, no
              surprises.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: "Starter",
                price: "₹599",
                period: "/user/month",
                description: "For small teams getting started",
                features: [
                  "Basic time tracking",
                  "Up to 50 employees",
                  "Standard reporting",
                  "Email support",
                ],
                featured: false,
              },
              {
                name: "Professional",
                price: "₹1299",
                period: "/user/month",
                description: "For growing businesses",
                features: [
                  "Advanced time tracking",
                  "Unlimited employees",
                  "Staff scheduling",
                  "Leave management",
                  "Approval workflows",
                  "Priority support",
                ],
                featured: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For large organizations",
                features: [
                  "All Professional features",
                  "Custom integrations",
                  "Advanced analytics",
                  "Dedicated account manager",
                  "On-premise deployment",
                  "24/7 premium support",
                ],
                featured: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`pricing-card glass-card flex-1 min-w-[280px] max-w-[350px] ${plan.featured ? "featured" : ""}`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="font-poppins text-xl font-semibold text-primary-dark mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold text-primary-dark">
                    {plan.price}
                    <span className="text-base font-normal text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    {plan.description}
                  </p>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className={`block w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary-dark"
                      : "border-2 border-primary text-primary hover:bg-primary-light"
                  }`}
                >
                  {plan.featured ? "Try Free for 14 Days" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/pricing"
              className="text-primary font-semibold hover:underline"
            >
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about Hourmaker</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQItem
              question="How does Hourmaker ensure data security?"
              answer="Hourmaker uses enterprise-grade security including end-to-end encryption, SOC 2 compliance, regular security audits, and data residency options. Your data is protected with bank-level security measures."
              defaultOpen
            />
            <FAQItem
              question="Can I integrate Hourmaker with other tools?"
              answer="Yes, Hourmaker offers integrations with popular tools like Slack, Microsoft Teams, Jira, QuickBooks, Xero, ADP, Workday, and many more through our API and pre-built connectors."
            />
            <FAQItem
              question="Is there a free trial available?"
              answer="Yes, we offer a 14-day free trial of our Professional plan with full access to all features. No credit card required to start the trial."
            />
            <FAQItem
              question="How does the pricing work for part-time employees?"
              answer="Part-time employees are billed at the same rate as full-time employees. However, we offer custom pricing for organizations with significant numbers of part-time staff."
            />
            <FAQItem
              question="Can I export my data if I decide to cancel?"
              answer="Absolutely. You can export all your data in multiple formats (CSV, Excel, PDF) at any time, even after cancellation. We ensure no vendor lock-in."
            />
          </div>
        </div>
      </section>

      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </Layout>
  );
};

const FAQItem = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="faq-item">
      <button
        className="faq-question w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-poppins font-semibold text-lg text-left text-primary-dark">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`faq-answer ${isOpen ? "active" : ""}`}>
        <p className="text-muted-foreground leading-relaxed py-4">{answer}</p>
      </div>
    </div>
  );
};

export default HomePage;
