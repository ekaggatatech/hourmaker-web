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
import { faqData } from "../data/pageFaq";
import { getRandomReviews } from "../data/reviews";

const PricingPage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-center">
        <div className="container max-w-4xl">
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Take Our <span className="text-primary">Value Challenge</span>!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            <span className="bg-primary-light px-2 py-1 rounded font-semibold text-primary-dark">
              27,500+ companies
            </span>{" "}
            trust Hourmaker for exceptional workforce management, award-winning
            support, and unbeatable value. Starting at just{" "}
            <span className="bg-primary-light px-2 py-1 rounded font-semibold text-primary-dark">
              INR 45/employee
            </span>{" "}
            - the most competitive pricing in the industry.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 my-10">
            {[
              { value: "27.5K+", label: "Happy Companies" },
              { value: "98.5%", label: "Customer Satisfaction" },
              { value: "72%", label: "Cost Savings" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary font-poppins">
                  {stat.value}
                </div>
                <div className="text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="px-8 py-4 bg-primary text-primary-foreground font-poppins font-semibold rounded-xl transition-all duration-300 hover:bg-primary-dark hover:-translate-y-1 hover:shadow-button"
            >
              View Pricing Plans
            </a>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-8 py-4 border-2 border-primary text-primary font-poppins font-semibold rounded-xl transition-all duration-300 hover:bg-primary-light hover:-translate-y-1"
            >
              Discuss Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Simple, Transparent Pricing Plans</h2>
            <p>
              Choose the perfect plan for your team. No hidden fees, no
              surprises.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Starter */}
            <div className="pricing-card glass-card flex-1 min-w-[280px] max-w-[350px]">
              <div className="mb-8">
                <h3 className="font-poppins text-xl font-semibold text-primary-dark mb-2">
                  Starter
                </h3>
                <div className="text-3xl font-bold text-primary-dark">
                  ₹45
                  <span className="text-base font-normal text-muted-foreground">
                    /employee/month
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Billed annually at ₹540/employee
                </p>
                <p className="text-muted-foreground mt-2">
                  Perfect for small teams getting started
                </p>
              </div>
              <ul className="text-left space-y-3 mb-8">
                {[
                  "Up to 50 employees",
                  "Basic time tracking",
                  "Leave management",
                  "Standard reporting",
                  "Email support",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
                {[
                  "Advanced scheduling",
                  "Approval workflows",
                  "Project tracking",
                ].map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <X className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="block w-full py-3 rounded-xl font-semibold border-2 border-primary text-primary hover:bg-primary-light transition-all duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Professional */}
            <div className="pricing-card glass-card flex-1 min-w-[280px] max-w-[350px] featured">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
              <div className="mb-8">
                <h3 className="font-poppins text-xl font-semibold text-primary-dark mb-2">
                  Professional
                </h3>
                <div className="text-3xl font-bold text-primary-dark">
                  ₹85
                  <span className="text-base font-normal text-muted-foreground">
                    /employee/month
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Billed annually at ₹1,020/employee
                </p>
                <p className="text-muted-foreground mt-2">
                  For growing businesses
                </p>
              </div>
              <ul className="text-left space-y-3 mb-8">
                {[
                  "Unlimited employees",
                  "Advanced time tracking",
                  "Intelligent scheduling",
                  "Leave & attendance",
                  "Approval workflows",
                  "Project tracking",
                  "Advanced analytics",
                  "Priority support",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="block w-full py-3 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-300"
              >
                Try Free for 14 Days
              </button>
            </div>

            {/* Enterprise */}
            <div className="pricing-card glass-card flex-1 min-w-[280px] max-w-[350px]">
              <div className="mb-8">
                <h3 className="font-poppins text-xl font-semibold text-primary-dark mb-2">
                  Enterprise
                </h3>
                <div className="text-3xl font-bold text-primary-dark">
                  Custom
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Tailored pricing for your needs
                </p>
                <p className="text-muted-foreground mt-2">
                  For large organizations
                </p>
              </div>
              <ul className="text-left space-y-3 mb-8">
                {[
                  "All Professional features",
                  "Custom integrations",
                  "Dedicated account manager",
                  "On-premise deployment",
                  "Single sign-on (SSO)",
                  "Advanced security & compliance",
                  "Custom reporting",
                  "24/7 premium support",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="block w-full py-3 rounded-xl font-semibold border-2 border-primary text-primary hover:bg-primary-light transition-all duration-300 text-center"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {/* <section className="py-20 bg-muted">
        <div className="container">
          <div className="section-title">
            <h2>Compare Hourmaker with Alternatives</h2>
            <p>
              See how Hourmaker stacks up against other workforce management
              solutions
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-primary-dark text-white">
                <tr>
                  <th className="p-5 text-left font-semibold">Features</th>
                  <th className="p-5 text-left font-semibold">Hourmaker</th>
                  <th className="p-5 text-left font-semibold">Competitor A</th>
                  <th className="p-5 text-left font-semibold">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Base Price (per employee/month)",
                    hourmaker: "₹45",
                    competitorA: "₹85",
                    competitorB: "₹120",
                    hmGood: true,
                  },
                  {
                    feature: "Time Tracking",
                    hourmaker: "Advanced",
                    competitorA: "Basic",
                    competitorB: "Limited",
                    hmGood: true,
                  },
                  {
                    feature: "Intelligent Scheduling",
                    hourmaker: "Included",
                    competitorA: "Add-on ₹30/emp",
                    competitorB: "Add-on ₹50/emp",
                    hmGood: true,
                  },
                  {
                    feature: "Approval Workflows",
                    hourmaker: "Included",
                    competitorA: "Add-on ₹25/emp",
                    competitorB: "Included",
                    hmGood: true,
                  },
                  {
                    feature: "Advanced Analytics",
                    hourmaker: "Included",
                    competitorA: "Add-on ₹40/emp",
                    competitorB: "Basic Only",
                    hmGood: true,
                  },
                  {
                    feature: "Mobile App",
                    hourmaker: "Full Features",
                    competitorA: "Limited",
                    competitorB: "Full Features",
                    hmGood: true,
                  },
                  {
                    feature: "24/7 Support",
                    hourmaker: "All Plans",
                    competitorA: "Enterprise Only",
                    competitorB: "Professional+",
                    hmGood: true,
                  },
                  {
                    feature: "Implementation Time",
                    hourmaker: "1-2 Days",
                    competitorA: "1-2 Weeks",
                    competitorB: "2-3 Weeks",
                    hmGood: true,
                  },
                  {
                    feature: "Total Cost for 100 Employees",
                    hourmaker: "₹4,500/month",
                    competitorA: "₹11,000/month",
                    competitorB: "₹15,000/month",
                    hmGood: true,
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 1 ? "bg-primary-light" : ""}
                  >
                    <td className="p-5 font-semibold text-primary-dark">
                      {row.feature}
                    </td>
                    <td className="p-5 text-success font-bold">
                      {row.hourmaker}
                    </td>
                    <td className="p-5 text-destructive">{row.competitorA}</td>
                    <td className="p-5 text-destructive">{row.competitorB}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">
            ℹ️ Based on public pricing as of November 2025. Competitor A and B
            are leading workforce management platforms.
          </p>
        </div>
      </section> */}

      {/* Add-ons Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Enhance Your Plan with Add-ons</h2>
            <p>Customize Hourmaker to perfectly fit your team's needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileSpreadsheet,
                title: "Payroll Integration",
                price: "₹15/emp/month",
                description:
                  "Seamlessly integrate with popular payroll systems like ADP, QuickBooks, and Xero for automated payroll processing.",
              },
              {
                icon: Shield,
                title: "Advanced Security",
                price: "₹10/emp/month",
                description:
                  "Enhanced security features including IP restrictions, advanced audit logs, and custom data retention policies.",
              },
              {
                icon: GraduationCap,
                title: "Training & Onboarding",
                price: "One-time fee",
                description:
                  "Comprehensive training sessions for your team, custom onboarding workflows, and dedicated implementation support.",
              },
            ].map((addon, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="feature-icon">
                  <addon.icon />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-poppins text-lg font-semibold text-primary-dark">
                    {addon.title}
                  </h3>
                  <span className="font-bold text-primary-dark">
                    {addon.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {addon.description}
                </p>
                <button className="text-primary font-semibold text-sm hover:underline">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Quotes */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="section-title">
            <h2>What Companies Say About Our Value</h2>
            <p>
              Real businesses share how Hourmaker transformed their workforce
              management ROI
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {getRandomReviews(3).map((review) => (
              <div
                key={review.id}
                className="glass-card rounded-xl p-6 border border-border transition-all duration-300 hover:-translate-y-1"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Updated with dynamic data */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Pricing Questions</h2>
            <p>Get answers to common questions about our pricing</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <PricingFAQSection />
          </div>
        </div>
      </section>

      {/* Old FAQ Section - Commented out */}
      {/* <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Pricing Questions</h2>
            <p>Get answers to common questions about our pricing</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQItem
              question="Is there a free trial available?"
              answer="Yes! We offer a 14-day free trial of our Professional plan with full access to all features. No credit card required to start."
              defaultOpen
            />
            <FAQItem
              question="Can I switch plans at any time?"
              answer="Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle, and we'll prorate any differences."
            />
            <FAQItem
              question="What payment methods do you accept?"
              answer="We accept all major credit cards, debit cards, UPI, net banking, and bank transfers for annual plans. Enterprise customers can also pay via invoice."
            />
            <FAQItem
              question="Do you offer discounts for annual billing?"
              answer="Yes, you save up to 20% when you choose annual billing. Contact our sales team for additional volume discounts for larger teams."
            />
            <FAQItem
              question="What happens when my trial ends?"
              answer="You'll be notified before your trial ends. If you don't choose a plan, your account will be downgraded to our free tier with limited features. Your data is preserved for 30 days."
            />
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="cta-gradient py-20 text-center text-white">
        <div className="container max-w-3xl">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Workforce Management?
          </h2>
          <p className="text-lg opacity-90 mb-10">
            Join 27,500+ companies that trust Hourmaker. Start your free trial
            today and see the difference.
          </p>
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="px-10 py-5 bg-white text-primary font-poppins font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-lg"
          >
            Start Free Trial →
          </button>
        </div>
      </section>

      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </Layout>
  );
};

// FAQ Section Component with Load More for Pricing Page
const PricingFAQSection = () => {
  const [displayCount, setDisplayCount] = useState(5);
  const faqs = faqData.pricing || [];
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
          className={`w-5 h-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`faq-answer ${isOpen ? "active" : ""}`}>
        <p className="text-muted-foreground leading-relaxed py-4">{answer}</p>
      </div>
    </div>
  );
};

export default PricingPage;
