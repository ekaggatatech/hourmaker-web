import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  X,
  FileSpreadsheet,
  Shield,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import DemoModal from "../components/DemoModal";
import ScrollReveal from "../components/ui/ScrollReveal";
import { faqData } from "../data/pageFaq";
import { getRandomReviews } from "../data/reviews";
import {
  PRICING_DATA,
  getPlanById,
  getAdditionalFeatures,
  getPreviousPlanId,
  isFeatureIncluded,
} from "../data/price";

// Icon mapping for add-ons
const iconMap = {
  FileSpreadsheet: FileSpreadsheet,
  Shield: Shield,
  GraduationCap: GraduationCap,
};

const PricingPage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("free");

  // Get plans data from PRICING_DATA
  const plans = PRICING_DATA.plans || [];
  const stats = PRICING_DATA.stats || [];
  const addons = PRICING_DATA.addons || [];
  const pricingFaqs = PRICING_DATA.faqs || [];

  // Helper function to open Demo Modal with plan preselected
  const openDemoModal = (plan = "free") => {
    setSelectedPlan(plan);
    setIsDemoModalOpen(false);
    setTimeout(() => {
      setIsDemoModalOpen(true);
    }, 50);
  };

  // Function to get all features for a plan
  const getPlanFeatures = (planId) => {
    const plan = getPlanById(planId);
    if (!plan) return { included: [], excluded: [] };
    return {
      included: plan.features.included || [],
      excluded: plan.features.excluded || [],
    };
  };

  // Get the appropriate CTA text based on plan
  const getCtaText = (planId) => {
    if (planId === "free") return "Get Started";
    if (planId === "enterprise") return "Contact Sales";
    return "1 Month Free";
  };

  // Get the appropriate plan value for the modal
  const getPlanValue = (planId) => {
    if (planId === "free" || planId === "basic") return "basic";
    if (planId === "pro") return "pro";
    if (planId === "proplus") return "proplus";
    if (planId === "enterprise") return "enterprise";
    return "basic";
  };

  // Determine button action based on plan
  const getButtonAction = (planId) => {
    if (planId === "enterprise") {
      return () => {
        window.location.href = "/company#contact";
      };
    }
    const planValue = getPlanValue(planId);
    return () => openDemoModal(planValue);
  };

  // Get employee limit display
  const getEmployeeLimitDisplay = (limit) => {
    if (limit === Infinity) return "Unlimited";
    if (limit === 5) return "Up to 5";
    return `Up to ${limit}`;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-band-light py-20 text-center overflow-hidden">
        <span className="float-orb float-orb-a" aria-hidden />
        <span className="float-orb float-orb-c" aria-hidden />
        <div className="container max-w-4xl relative z-10">
          <ScrollReveal>
            <div className="section-label flex items-center justify-center gap-3 text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <span className="w-5 h-0.5 bg-primary"></span>
              PRICING PLANS
              <span className="w-5 h-0.5 bg-primary"></span>
            </div>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your team. All plans include the same
              powerful features. Pricing is based on your employee count.
            </p>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 my-10">
            {stats.map((stat, index) => (
              <ScrollReveal
                key={index}
                delay={index * 80}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary font-poppins">
                  {stat.value}
                </div>
                <div className="text-muted-foreground mt-1">{stat.label}</div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/company#contact"
                className="px-8 py-4 border-2 border-primary text-primary font-poppins font-semibold rounded-xl transition-all duration-300 hover:bg-primary-light hover:-translate-y-1"
              >
                Discuss Pricing
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Plans Section - New UI */}
      <section
        id="pricing"
        className="section-band-dark py-20 relative overflow-hidden"
      >
        <span className="float-orb float-orb-b" aria-hidden />
        <span className="float-orb float-orb-c" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-white mb-2">
              Simple, Transparent Pricing Plans
            </h2>
            <p className="text-slate-300">
              Choose the perfect plan for your team. All plans include the same
              powerful features. Pricing is based on your employee count.
            </p>
          </ScrollReveal>

          {/* Pricing Cards - Single Row Horizontal Scroll */}
          <div className="w-full overflow-x-auto overflow-y-visible pb-4 scrollbar-thin">
            <div className="flex flex-nowrap items-stretch gap-4 min-w-[1005px]">
              {plans.map((plan, index) => {
                const features = getPlanFeatures(plan.id);
                const ctaText = getCtaText(plan.id);
                const buttonAction = getButtonAction(plan.id);
                const isPopular = plan.id === "pro";
                const isEnterprise = plan.id === "enterprise";

                return (
                  <div
                    key={plan.id}
                    className={`flex-1 min-w-[185px] w-0 bg-white/95 border rounded-xl p-6 flex flex-col min-h-[540px] relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                      isPopular
                        ? "border-2 border-primary shadow-lg"
                        : "border-border"
                    } ${isEnterprise ? "border-2 border-primary/60" : ""}`}
                  >
                    {isPopular && (
                      <div className="absolute -top-px left-0 right-0 h-7 flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold rounded-t-lg">
                        MOST POPULAR
                      </div>
                    )}

                    {/* Plan Category */}
                    <div className="text-center text-primary text-xs font-bold tracking-wider uppercase mt-4 mb-2">
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
                    <h3 className="text-center text-2xl font-bold text-primary-dark mb-4">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-gray-800">
                        {plan.price}
                      </span>
                      <span className="text-sm text-muted-foreground ml-1">
                        /user/month
                      </span>
                    </div>

                    <div className="w-12 h-0.5 bg-primary mx-auto mb-4"></div>

                    {/* Employee Limit */}
                    <div className="text-center font-bold text-primary-dark text-sm mb-1">
                      {getEmployeeLimitDisplay(plan.employeeLimit)} employees
                    </div>

                    {/* Description */}
                    <div className="text-center text-muted-foreground text-sm mb-4 min-h-[40px]">
                      {plan.description}
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-4 flex-1">
                      {features.included.slice(0, 4).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="flex-shrink-0 w-4 h-4 border border-primary rounded-full flex items-center justify-center text-primary text-xs font-bold">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {features.included.length > 4 && (
                        <li className="text-sm text-primary font-semibold pl-6">
                          +{features.included.length - 4} more features
                        </li>
                      )}
                    </ul>

                    {/* Button */}
                    <button
                      onClick={buttonAction}
                      className={`w-full py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                        isPopular || isEnterprise
                          ? "bg-gradient-to-r from-primary to-primary-dark text-white hover:from-primary-dark hover:to-primary-dark"
                          : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                      }`}
                    >
                      {ctaText}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-5 h-5"
                >
                  <path d="M12 3l8 3v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">
                  No Hidden Fees
                </div>
                <div className="text-slate-400 text-xs">
                  What you see is what you pay
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-5 h-5"
                >
                  <path d="M4 21V4h11v17" />
                  <path d="M15 9h5v12" />
                  <path d="M8 8h3" />
                  <path d="M8 12h3" />
                  <path d="M8 16h3" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">
                  Regular Backups
                </div>
                <div className="text-slate-400 text-xs">
                  Your data is always safe
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-5 h-5"
                >
                  <path d="M3 8l4-4 4 4" />
                  <path d="M7 4v12" />
                  <path d="M21 16l-4 4-4-4" />
                  <path d="M17 20V8" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">
                  24/7 Email Support
                </div>
                <div className="text-slate-400 text-xs">
                  Get help when you need it
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-5 h-5"
                >
                  <rect x="5" y="10" width="14" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  <circle cx="12" cy="15" r="1" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">
                  Secure & Compliant
                </div>
                <div className="text-slate-400 text-xs">
                  Enterprise-grade security
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Quotes */}
      <section className="section-band-light py-20 relative overflow-hidden">
        <span className="float-orb float-orb-a" aria-hidden />
        <span className="float-orb float-orb-b" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="section-title">
            <h2>What Companies Say About Our Value</h2>
            <p>
              Real businesses share how Hourmaker transformed their workforce
              management ROI
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {getRandomReviews(3).map((review, index) => (
              <ScrollReveal key={review.id} delay={index * 100}>
                <div className="glass-card rounded-xl p-6 border border-border transition-all duration-300 card-lift card-glow h-full">
                  <div className="flex items-center mb-4">
                    <div className="testimonial-avatar">{review.initials}</div>
                    <div>
                      <h4 className="font-poppins font-semibold text-primary-dark">
                        {review.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground italic mb-4 pl-5 border-l-4 border-primary-light relative">
                    <span className="absolute -left-2 -top-2 text-4xl text-primary-light font-serif">
                      "
                    </span>
                    {review.content}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-success mr-2" />
                    {review.company}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-band-dark py-20 relative overflow-hidden">
        <span className="float-orb float-orb-b" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="section-title">
            <h2 className="!text-white">Frequently Asked Pricing Questions</h2>
            <p className="!text-slate-300">
              Get answers to common questions about our pricing
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80} className="max-w-3xl mx-auto">
            <PricingFAQSection faqs={pricingFaqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-gradient py-20 text-center text-white relative overflow-hidden">
        <span className="float-orb float-orb-c" aria-hidden />
        <ScrollReveal className="container max-w-3xl relative z-10">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Workforce Management?
          </h2>
          <p className="text-lg opacity-90 mb-10">
            Join 27,500+ companies that trust Hourmaker. Start your free trial
            today and see the difference.
          </p>
          <button
            onClick={() => openDemoModal("basic")}
            className="px-10 py-5 bg-white text-primary font-poppins font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-lg"
          >
            Start Free Trial →
          </button>
        </ScrollReveal>
      </section>

      <DemoModal
        key={selectedPlan}
        open={isDemoModalOpen}
        onOpenChange={setIsDemoModalOpen}
        preselectedPlan={selectedPlan}
      />
    </Layout>
  );
};

// FAQ Section Component with Load More for Pricing Page
const PricingFAQSection = ({ faqs }) => {
  const [displayCount, setDisplayCount] = useState(5);
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

// FAQ Item Component
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
          className={`w-5 h-5 text-primary transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div className={`faq-answer ${isOpen ? "active" : ""}`}>
        <p className="text-muted-foreground leading-relaxed py-4">{answer}</p>
      </div>
    </div>
  );
};

export default PricingPage;
