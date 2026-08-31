import React, { useState, useEffect } from "react";
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
import BookDemoModal from "../components/BookDemoModal";
import ScrollReveal from "../components/ui/ScrollReveal";
import ScrollFeatureShowcase from "../components/ScrollFeatureShowcase";
import { features } from "../data/features";
import { faqData } from "../data/pageFaq";
import { getRandomReviews } from "../data/reviews";
import { PRICING_DATA } from "../data/price";

const HomePage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isBookDemoModalOpen, setIsBookDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("pro");
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
  const videoId = "XphFha33xu0";
  const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  // Helper function to open Demo Modal with plan preselected
  const openDemoModal = (plan = "pro") => {
    setSelectedPlan(plan);
    // Close and reopen modal to force re-render with new plan
    setIsDemoModalOpen(false);
    // Use setTimeout to ensure state update completes before reopening
    setTimeout(() => {
      setIsDemoModalOpen(true);
    }, 50);
  };

  return (
    <Layout>
      {/* Hero Section — light */}
      <section className="relative section-band-light py-16 lg:py-24 overflow-hidden">
        <span className="float-orb float-orb-a" aria-hidden />
        <span className="float-orb float-orb-c" aria-hidden />
        <div className="container relative">
          {/* Add H1 for SEO */}
          <h1 className="sr-only">
            Time Tracking Software | Automated Workforce Management Tool
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <ScrollReveal
              variant="fade-right"
              className="flex-1"
              duration={700}
            >
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Workforce management, simplified
              </p>
              <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Smart Timesheets &{" "}
                <span className="text-primary">Workforce Management</span> for
                Modern Teams
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-xl">
                Automate time tracking, streamline approvals, and gain
                actionable insights with our all-in-one workforce management
                platform. Optimize productivity and reduce administrative
                overhead.
              </p>
              {/* Rest of the component */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openDemoModal("basic")}
                  className="px-6 py-3.5 bg-primary text-white font-poppins font-semibold rounded-xl transition-all duration-300 hover:bg-primary-dark hover:-translate-y-1 text-center"
                >
                  Get Started Free
                </button>
                <button
                  onClick={() => setIsBookDemoModalOpen(true)}
                  className="px-6 py-3.5 border-2 border-primary text-primary font-poppins font-semibold rounded-xl transition-all duration-300 hover:bg-primary-light hover:-translate-y-1 text-center"
                >
                  Book a Demo
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal
              variant="fade-left"
              delay={120}
              duration={700}
              className="flex-1 flex justify-center"
            >
              {/* Video Thumbnail - Increased size */}
              <div className="relative w-full max-w-2xl">
                <div
                  className="relative group cursor-pointer"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl border border-white/10 img-zoom">
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt="Hourmaker Demo Video Thumbnail"
                      className="w-full h-auto"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
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
            </ScrollReveal>
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

      {/* Sticky scroll-synced features — all features */}
      <ScrollFeatureShowcase features={features} />

      {/* Challenge — dark */}
      <section className="section-band-dark py-20">
        <span className="float-orb float-orb-b" aria-hidden />
        <span className="float-orb float-orb-c" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="text-center mb-16">
            <p className="text-primary-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Why teams switch
            </p>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-4">
              The Challenge of Modern Workforce Management
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              As teams grow and work becomes more distributed, traditional
              approaches create new obstacles
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Problems */}
            <ScrollReveal variant="fade-right" className="space-y-8">
              <h3 className="font-poppins text-xl font-semibold text-white mb-6">
                Common Pain Points
              </h3>

              <div className="space-y-6">
                {[
                  {
                    problem: "Inaccurate billing and payroll errors",
                    description:
                      "Manual time entries lead to mistakes, costing businesses thousands in incorrect payroll and lost billable hours.",
                  },
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
                  <div
                    key={index}
                    className="flex gap-4 rounded-xl p-3 -mx-3 transition-colors duration-300 hover:bg-white/10"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary-accent text-sm font-medium">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">
                        {item.problem}
                      </h4>
                      <p className="text-sm text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right Column - Solutions */}
            <ScrollReveal variant="fade-left" delay={100} className="space-y-8">
              <h3 className="font-poppins text-xl font-semibold text-white mb-6">
                How Hourmaker Solves Them
              </h3>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-white/20 card-lift card-glow">
                <div className="space-y-8">
                  {[
                    {
                      solution: "Automated time capture with 99.9% accuracy",
                      description:
                        "Our system eliminates manual entry errors by automatically tracking time across devices and platforms.",
                    },
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
                        <h4 className="font-medium text-slate-900 mb-1">
                          {item.solution}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Stats - Subtle */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Time saved", value: "70%" },
                      { label: "Accuracy", value: "99.9%" },
                      { label: "Adoption", value: "98%" },
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xl font-semibold text-slate-900">
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom CTA - Very Subtle */}
          <ScrollReveal className="text-center mt-16">
            <p className="text-slate-300">
              Ready to leave these challenges behind?{" "}
              <button
                onClick={() => openDemoModal("pro")}
                className="text-primary-accent hover:underline font-medium"
              >
                See how Hourmaker can help
              </button>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials — light */}
      <section className="section-band-light py-20">
        <span className="float-orb float-orb-a" aria-hidden />
        <span className="float-orb float-orb-b" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="section-title">
            <h2 className="!text-slate-900">Hear What Others Say About Us</h2>
            <p className="!text-slate-600">
              See what top teams say after switching to a smarter workforce
              management platform
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {getRandomReviews(3).map((testimonial, index) => (
              <ScrollReveal
                key={testimonial.id}
                delay={index * 100}
                variant="fade-up"
              >
                <div className="rounded-xl p-6 h-full bg-white border border-slate-200 shadow-sm transition-all duration-300 card-lift card-glow">
                  <div className="flex items-center mb-4">
                    <div className="testimonial-avatar">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-slate-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-700 italic mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center text-sm text-slate-500">
                    <Building2 className="w-4 h-4 text-primary mr-2" />
                    {testimonial.company}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section — dark */}
      {/* <section className="section-band-dark py-20">
        <span className="float-orb float-orb-c" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="section-title">
            <p className="text-primary-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Pricing
            </p>
            <h2 className="!text-white">Simple, Transparent Pricing</h2>
            <p className="!text-slate-300">
              Choose the plan that fits your team's needs. No hidden fees, no
              surprises.
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {PRICING_DATA.plans.map((plan, index) => {
              // Map plan IDs to their corresponding plan values
              let planValue = "pro"; // default

              // Check the plan ID from your PRICING_DATA
              if (plan.id === "basic" || plan.id === "starter") {
                planValue = "basic";
              } else if (plan.id === "pro" || plan.id === "professional") {
                planValue = "pro";
              } else if (plan.id === "enterprise" || plan.id === "executive") {
                planValue = "enterprise";
              }

              // Determine the button action based on plan
              let buttonAction = () => openDemoModal(planValue);
              let buttonText = plan.cta || "Get Started";

              // For enterprise/executive, show "Try Free for 14 Days"
              if (plan.id === "enterprise" || plan.id === "executive") {
                buttonText = "Try Free for 14 Days";
              }

              return (
                <ScrollReveal
                  key={plan.id}
                  delay={index * 100}
                  className="flex-1 min-w-[280px] max-w-[350px] flex"
                >
                  <div
                    className={`pricing-card glass-card h-full w-full flex flex-col card-glow !bg-white ${plan.featured ? "featured" : ""}`}
                  >
                    {plan.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        {plan.badge}
                      </span>
                    )}
                    <div className="mb-8">
                      <h3 className="font-poppins text-xl font-semibold text-slate-900 mb-2">
                        {plan.name}
                      </h3>
                      <div className="text-3xl font-bold text-slate-900">
                        {plan.price}
                        <span className="text-base font-normal text-slate-500">
                          {plan.period}
                        </span>
                      </div>
                      <p className="text-slate-600 mt-2">{plan.description}</p>
                    </div>
                    <ul className="text-left space-y-3 mb-8 flex-1">
                      {plan.features.included.slice(0, 5).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckSquare className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-slate-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                      {plan.features.included.length > 5 && (
                        <li className="flex items-center gap-2 text-sm text-slate-500">
                          <span className="w-4 h-4" />
                          <span>
                            +{plan.features.included.length - 5} more features
                          </span>
                        </li>
                      )}
                    </ul>
                    <button
                      onClick={buttonAction}
                      className={`mt-auto block w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                        plan.featured
                          ? "bg-primary text-primary-foreground hover:bg-primary-dark"
                          : "border-2 border-primary text-primary hover:bg-primary-light"
                      }`}
                    >
                      {buttonText}
                    </button>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Link
              to="/pricing"
              className="text-primary-accent font-semibold hover:underline"
            >
              View full pricing details →
            </Link>
          </ScrollReveal>
        </div>
      </section> */}

      {/* Pricing Preview Section — dark */}
      <section className="section-band-dark py-20">
        <span className="float-orb float-orb-c" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="section-title">
            <p className="text-primary-accent text-sm font-semibold tracking-widest uppercase mb-3">
              Pricing
            </p>
            <h2 className="!text-white">Simple, Transparent Pricing</h2>
            <p className="!text-slate-300">
              Choose the plan that fits your team's needs. No hidden fees, no
              surprises.
            </p>
          </ScrollReveal>

          {/* Pricing Cards - Responsive: Stack on mobile, scroll on desktop */}
          <div className="w-full overflow-x-auto overflow-y-visible pb-4 scrollbar-thin">
            <div className="flex flex-wrap lg:flex-nowrap items-stretch gap-4 lg:min-w-[1005px]">
              {PRICING_DATA.plans.map((plan, index) => {
                const planValue =
                  plan.id === "free" || plan.id === "basic"
                    ? "basic"
                    : plan.id === "pro"
                      ? "pro"
                      : plan.id === "proplus"
                        ? "proplus"
                        : "enterprise";

                const buttonText =
                  plan.id === "free"
                    ? "Get Started"
                    : plan.id === "enterprise"
                      ? "Contact Sales"
                      : "1 Month Free";

                const buttonAction =
                  plan.id === "enterprise"
                    ? () => {
                        window.location.href = "/company#contact";
                      }
                    : () => openDemoModal(planValue);

                const getEmployeeLimitDisplay = (limit) => {
                  if (limit === Infinity) return "Unlimited";
                  if (limit === 5) return "Up to 5";
                  return `Up to ${limit}`;
                };

                const isPopular = plan.id === "pro";
                const isEnterprise = plan.id === "enterprise";

                return (
                  <div
                    key={plan.id}
                    className={`flex-1 min-w-[280px] lg:min-w-[185px] lg:w-0 bg-white/95 border rounded-xl p-5 flex flex-col min-h-[460px] lg:min-h-[520px] relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                      isPopular
                        ? "border-2 border-primary shadow-lg"
                        : "border-border"
                    } ${isEnterprise ? "border-2 border-primary/60" : ""}`}
                  >
                    {isPopular && (
                      <div className="absolute -top-px left-0 right-0 h-6 flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark text-white text-[10px] font-bold rounded-t-lg">
                        MOST POPULAR
                      </div>
                    )}

                    {/* Plan Category */}
                    <div className="text-center text-primary text-[10px] font-bold tracking-wider uppercase mt-3 mb-1.5">
                      {plan.id === "free"
                        ? "Starter"
                        : plan.id === "basic"
                          ? "Basic"
                          : plan.id === "pro"
                            ? "Professional"
                            : plan.id === "proplus"
                              ? "Professional"
                              : "Enterprise"}
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-center text-xl font-bold text-primary-dark mb-3">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="text-center mb-3">
                      <span className="text-2xl font-bold text-gray-800">
                        {plan.price}
                      </span>
                      <span className="text-xs text-muted-foreground ml-1">
                        /user/month
                      </span>
                    </div>

                    <div className="w-10 h-0.5 bg-primary mx-auto mb-3"></div>

                    {/* Employee Limit */}
                    <div className="text-center font-bold text-primary-dark text-xs mb-1">
                      {getEmployeeLimitDisplay(plan.employeeLimit)} employees
                    </div>

                    {/* Description */}
                    <div className="text-center text-muted-foreground text-xs mb-3 min-h-[32px]">
                      {plan.description}
                    </div>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-3 flex-1">
                      {plan.features.included.slice(0, 4).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-1.5 text-xs text-gray-600"
                        >
                          <span className="flex-shrink-0 w-3.5 h-3.5 border border-primary rounded-full flex items-center justify-center text-primary text-[8px] font-bold">
                            ✓
                          </span>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                      {plan.features.included.length > 4 && (
                        <li className="text-xs text-primary font-semibold pl-5">
                          +{plan.features.included.length - 4} more features
                        </li>
                      )}
                    </ul>

                    {/* Button */}
                    <button
                      onClick={buttonAction}
                      className={`w-full py-2 rounded-lg text-xs font-bold transition-all duration-300 ${
                        isPopular || isEnterprise
                          ? "bg-gradient-to-r from-primary to-primary-dark text-white hover:from-primary-dark hover:to-primary-dark"
                          : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                      }`}
                    >
                      {buttonText}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <ScrollReveal className="text-center mt-10">
            <Link
              to="/pricing"
              className="text-primary-accent font-semibold hover:underline"
            >
              View full pricing details →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section — light */}
      <section className="section-band-light py-20">
        <span className="float-orb float-orb-a" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="section-title">
            <h2 className="!text-slate-900">Frequently Asked Questions</h2>
            <p className="!text-slate-600">
              Find answers to common questions about Hourmaker
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80} className="max-w-3xl mx-auto">
            <FAQSection page="home" />
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA — dark */}
      <section className="section-band-dark py-16">
        <span className="float-orb float-orb-a" aria-hidden />
        <span className="float-orb float-orb-b" aria-hidden />
        <ScrollReveal className="container relative z-10 text-center max-w-3xl">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to modernize your workforce management?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Start free, book a demo, and see Hourmaker in action with your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openDemoModal("basic")}
              className="px-8 py-4 bg-primary text-white font-poppins font-semibold rounded-xl hover:bg-primary-dark transition-all hover:-translate-y-1"
            >
              Get Started Free
            </button>
            <button
              onClick={() => setIsBookDemoModalOpen(true)}
              className="px-8 py-4 border border-white/30 text-white font-poppins font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              Book a Demo
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* Modals */}
      <DemoModal
        key={selectedPlan} // Force re-render when plan changes
        open={isDemoModalOpen}
        onOpenChange={setIsDemoModalOpen}
        preselectedPlan={selectedPlan}
      />
      <BookDemoModal
        open={isBookDemoModalOpen}
        onOpenChange={setIsBookDemoModalOpen}
      />
    </Layout>
  );
};

// Feature Item Component
const FeatureItem = ({ feature, index }) => {
  const Icon = feature.icon;
  const imagePath = `/src/assets/${feature.image}`;
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal
      variant={isEven ? "fade-right" : "fade-left"}
      className="relative"
      duration={650}
    >
      {/* Progress Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

      <div
        className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-12`}
      >
        {/* Image Side */}
        <div className="lg:w-1/2">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-300"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 img-zoom card-glow">
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
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
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
    </ScrollReveal>
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
