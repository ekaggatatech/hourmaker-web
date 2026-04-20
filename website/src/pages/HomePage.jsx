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
  PlayCircle,
  X,
  ArrowRight,
  Check,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import DemoModal from "../components/DemoModal";
import { features } from "../data/features";
import { faqData } from "../data/pageFaq";
import { getRandomReviews } from "../data/reviews";

const HomePage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Prevent body scroll when video modal is open
  React.useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVideoModalOpen]);

  // YouTube video embed URL
  const videoId = "-yog_Gext-c";
  const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}?si=MOL1jV-4a8fOYEfk&autoplay=1&rel=0&modestbranding=1`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-primary/5 py-16 lg:py-24 overflow-hidden">
        <div className="container">
          {/* Add H1 for SEO */}
          <h1 className="sr-only">
            Time Tracking Software | Automated Workforce Management Tool
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 animate-fade-in">
              <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Smart Timesheets &{" "}
                <span className="text-primary">Workforce Management</span> for
                Modern Teams
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Automate time tracking, streamline approvals, and gain
                actionable insights with our all-in-one workforce management
                platform. Optimize productivity and reduce administrative
                overhead.
              </p>
              {/* Rest of the component */}
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

            <div className="flex-1 flex justify-center">
              {/* Video Thumbnail - Increased size */}
              <div className="relative w-full max-w-2xl">
                <div
                  className="relative group cursor-pointer"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl border border-white/10">
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt="Hourmaker Demo Video Thumbnail"
                      className="w-full h-auto"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                      <p className="text-white font-medium text-base">
                        Watch Demo: Hourmaker Platform Overview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors border border-white/20"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="relative aspect-video">
              <iframe
                src={videoEmbedUrl}
                title="Hourmaker Platform Overview Demo"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Powerful Features We Provide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your workforce efficiently in one
              integrated platform
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Progress Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 hidden lg:block"></div>

            {/* Feature Items - Ordered as requested */}
            <div className="space-y-16">
              {/* 1. Auto Time Tracking */}
              {features.find((f) => f.id === "automatic-tracking") && (
                <FeatureItem
                  feature={features.find((f) => f.id === "automatic-tracking")}
                  index={0}
                />
              )}

              {/* 2. Manual Time Tracking */}
              {features.find((f) => f.id === "manual-tracking") && (
                <FeatureItem
                  feature={features.find((f) => f.id === "manual-tracking")}
                  index={1}
                />
              )}

              {/* 3. Cloud Repo for Documentation */}
              {features.find((f) => f.id === "docs-portal") && (
                <FeatureItem
                  feature={features.find((f) => f.id === "docs-portal")}
                  index={2}
                />
              )}

              {/* 4. Billing Management */}
              {features.find((f) => f.id === "billing") && (
                <FeatureItem
                  feature={features.find((f) => f.id === "billing")}
                  index={3}
                />
              )}

              {/* 5. Invoicing */}
              {features.find((f) => f.id === "invoicing") && (
                <FeatureItem
                  feature={features.find((f) => f.id === "invoicing")}
                  index={4}
                />
              )}

              {/* 6. Reporting & Analytics */}
              {features.find((f) => f.id === "analytics") && (
                <FeatureItem
                  feature={features.find((f) => f.id === "analytics")}
                  index={5}
                />
              )}

              {/* 7. Onboarding & Recruitment */}
              {features.find((f) => f.id === "onboarding") && (
                <FeatureItem
                  feature={features.find((f) => f.id === "onboarding")}
                  index={6}
                />
              )}
            </div>
          </div>

          {/* View All Features Link */}
          <div className="text-center mt-16">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-poppins font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Explore All Features
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              The Challenge of Modern Workforce Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As teams grow and work becomes more distributed, traditional
              approaches create new obstacles
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Problems */}
            <div className="space-y-8">
              <h3 className="font-poppins text-xl font-semibold text-primary-dark mb-6">
                Common Pain Points
              </h3>

              <div className="space-y-6">
                {[
                  {
                    problem: "Inaccurate billing and payroll errors",
                    description:
                      "Manual time entries lead to mistakes, costing businesses thousands in incorrect payroll and lost billable hours.",
                  },
                  // {
                  //   problem: "Compliance risks and audit failures",
                  //   description:
                  //     "Keeping up with labor laws across regions becomes nearly impossible with spreadsheets and manual tracking.",
                  // },
                  {
                    problem: "Low employee satisfaction with manual processes",
                    description:
                      "Cumbersome timesheets and approval processes frustrate employees and waste their valuable time.",
                  },
                  {
                    problem: "Limited visibility into workforce productivity",
                    description:
                      "Without real-time data, managers struggle to make informed decisions about resource allocation.",
                  },
                  {
                    problem: "Wasted hours on administrative tasks",
                    description:
                      "HR and finance teams spend 10+ hours per week just chasing timesheets and fixing errors.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-sm font-medium">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        {item.problem}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Solutions */}
            <div className="space-y-8">
              <h3 className="font-poppins text-xl font-semibold text-primary-dark mb-6">
                How Hourmaker Solves Them
              </h3>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50">
                <div className="space-y-8">
                  {[
                    {
                      solution: "Automated time capture with 99.9% accuracy",
                      description:
                        "Our system eliminates manual entry errors by automatically tracking time across devices and platforms.",
                    },
                    // {
                    //   solution: "Built-in compliance for 20+ labor laws",
                    //   description:
                    //     "Stay compliant automatically with pre-configured rules for overtime, breaks, and leave policies.",
                    // },
                    {
                      solution: "Employee-first design",
                      description:
                        "Intuitive interfaces that your team will actually enjoy using, with zero training required.",
                    },
                    {
                      solution: "Real-time dashboards and instant insights",
                      description:
                        "See productivity, costs, and project progress as they happen, not weeks later.",
                    },
                    {
                      solution: "85% reduction in administrative work",
                      description:
                        "Automated workflows and approvals free up your team to focus on strategic initiatives.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          {item.solution}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Stats - Subtle */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Time saved", value: "70%" },
                      { label: "Accuracy", value: "99.9%" },
                      { label: "Adoption", value: "98%" },
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xl font-semibold text-primary-dark">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA - Very Subtle */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground">
              Ready to leave these challenges behind?{" "}
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="text-primary hover:underline font-medium"
              >
                See how Hourmaker can help
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Hear What Others Say About Us</h2>
            <p>
              See what top teams say after switching to a smarter workforce
              management platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {getRandomReviews(3).map((testimonial) => (
              <div
                key={testimonial.id}
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
                {/* <div className="flex gap-1 mb-4 text-warning">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? "fill-current" : ""}`}
                    />
                  ))}
                </div> */}
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

      {/* Pricing Preview Section */}
      <section className="py-20 bg-muted">
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

      {/* FAQ Section - Updated with dynamic data */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about Hourmaker</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQSection page="home" />
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-white">
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
      </section> */}

      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </Layout>
  );
};

// Feature Item Component
const FeatureItem = ({ feature, index }) => {
  const Icon = feature.icon;
  const imagePath = `/src/assets/${feature.image}`;
  const isEven = index % 2 === 0;

  return (
    <div className="relative">
      {/* Progress Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

      <div
        className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-12`}
      >
        {/* Image Side */}
        <div className="lg:w-1/2">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50">
              <img
                src={imagePath}
                alt={feature.title}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                  // Show icon fallback
                  const parent = e.target.parentElement;
                  const fallback = document.createElement("div");
                  fallback.className =
                    "bg-gradient-to-br from-primary-light to-muted p-16 text-center";
                  fallback.innerHTML = `<svg class="w-24 h-24 text-primary/40 mx-auto" ...></svg>`;
                  parent.appendChild(fallback);
                }}
              />
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2">
          <div className="space-y-4">
            {/* Icon and Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-poppins text-2xl font-bold text-primary-dark">
                {feature.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>

            {/* Key Benefits */}
            <div className="space-y-3 mt-6">
              {feature.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Learn More Link */}
            <div className="pt-4">
              <Link
                to={`/features/${feature.slug}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                Learn More About {feature.title}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Section Component with Load More
const FAQSection = ({ page }) => {
  const [displayCount, setDisplayCount] = useState(5);
  const faqs = faqData[page] || [];
  const displayedFaqs = faqs.slice(0, displayCount);
  const hasMore = faqs.length > displayCount;

  return (
    <>
      {displayedFaqs.map((faq) => (
        <FAQItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          defaultOpen={faq.id === 1}
        />
      ))}

      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={() => setDisplayCount((prev) => prev + 5)}
            className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary-light transition-colors inline-flex items-center gap-2"
          >
            Load More FAQs
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
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
