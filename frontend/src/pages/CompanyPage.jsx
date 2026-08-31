import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Building2,
  Users,
  Target,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin,
  Zap,
  Shield,
  Rocket,
  Code,
  Heart,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  BarChart3,
  Briefcase,
  FileText,
  CreditCard,
  FolderOpen,
  Megaphone,
  Sparkles,
  Eye,
  Lightbulb,
  ArrowRight,
  Check,
  Star,
  Link2,
  ChevronDown,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import ScrollReveal from "../components/ui/ScrollReveal";
import { submitContactForm } from "../services/firebaseService";
import { features } from "../data/features";

const CompanyPage = () => {
  const location = useLocation();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    specificFeature: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitContactForm(contactForm);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setContactForm({
          name: "",
          email: "",
          subject: "",
          message: "",
          specificFeature: "",
        });

        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Get feature titles for dropdown
  const featureOptions = features.map((feature) => ({
    value: feature.title,
    label: feature.title,
  }));

  // Why HourMaker benefits
  const whyBenefits = [
    {
      icon: Building2,
      title: "Everything in One Place",
      description:
        "Replace disconnected tools, spreadsheets and manual records with one integrated platform.",
    },
    {
      icon: Eye,
      title: "Greater Operational Visibility",
      description:
        "Give employees, managers and business leaders access to the information relevant to their responsibilities.",
    },
    {
      icon: Zap,
      title: "Less Administrative Work",
      description:
        "Automate and organise routine processes so teams can spend more time on productive and meaningful work.",
    },
    {
      icon: CheckCircle,
      title: "Improved Accuracy",
      description:
        "Maintain structured records for employee time, leave, projects, clients, billing, invoices and other important operations.",
    },
    {
      icon: Rocket,
      title: "Designed to Grow with You",
      description:
        "Support businesses at different stages—from small teams creating their first structured processes to established organisations managing more complex operations.",
    },
    {
      icon: Star,
      title: "Easy to Use",
      description:
        "Help employees and managers complete everyday tasks without unnecessary complexity or lengthy learning curves.",
    },
  ];

  // Core Values
  const coreValues = [
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "We build around the practical needs and everyday challenges of businesses and their employees.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description:
        "We listen, learn and continuously improve the platform as workplace needs evolve.",
    },
    {
      icon: Sparkles,
      title: "Simplicity",
      description:
        "We remove unnecessary complexity and make important business processes easier to manage.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "We promote clearer workflows, better accountability and greater visibility across teams.",
    },
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      description:
        "We use technology to solve real business problems—not simply to add more features.",
    },
    {
      icon: Shield,
      title: "Security & Responsibility",
      description:
        "We recognise the importance of business and employee information and support responsible, controlled access.",
    },
  ];

  // Commitment items with icons
  const commitmentItems = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce repetitive administrative work",
    },
    {
      icon: FileText,
      title: "Reduce Dependencies",
      description: "Move away from spreadsheets and disconnected apps",
    },
    {
      icon: CheckCircle,
      title: "Maintain Accuracy",
      description: "Keep more accurate business records",
    },
    {
      icon: Briefcase,
      title: "Create Consistency",
      description: "Build consistent operational processes",
    },
    {
      icon: Users,
      title: "Support Teams",
      description: "Easier workflows for employees and managers",
    },
    {
      icon: TrendingUp,
      title: "Make Better Decisions",
      description: "Use meaningful business information",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-band-light py-20 text-center">
        <span className="float-orb float-orb-a" aria-hidden />
        <span className="float-orb float-orb-c" aria-hidden />
        <ScrollReveal className="container max-w-4xl relative z-10">
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            About <span className="text-primary">HourMaker</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Making Every Working Hour Count — An all-in-one workforce and
            business management platform designed to help modern organisations
            manage their people, time, projects and everyday operations from one
            connected system.
          </p>
        </ScrollReveal>
      </section>

      {/* Our Story Section */}
      <section id="story" className="section-band-dark py-20">
        <span className="float-orb float-orb-b" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="max-w-4xl mx-auto">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Our Story
            </h2>
          </ScrollReveal>
          <ScrollReveal className="max-w-4xl mx-auto" delay={80}>
            <div className="space-y-4">
              <p className="text-slate-300 text-lg">
                HourMaker began with a simple observation: businesses were
                spending too much time managing work instead of focusing on the
                work that drives growth.
              </p>
              <p className="text-slate-300 text-lg">
                Employee information was stored in different systems. Timesheets
                were maintained manually. Leave requests were handled through
                emails and messages. Project updates lived in spreadsheets.
                Billing, documents, approvals and reports were often managed
                using separate tools.
              </p>
              <p className="text-slate-300 text-lg">
                This created unnecessary administrative work, limited visibility
                and made everyday processes more complicated than they needed to
                be.
              </p>
              <p className="text-slate-300 text-lg">
                HourMaker was created to change that. We developed a unified
                platform that connects workforce management, project operations
                and business administration in one accessible place.
              </p>
              <p className="text-slate-300 text-lg font-semibold text-white">
                Today, HourMaker continues to evolve around the real needs of
                growing teams—making business management more organised,
                transparent and efficient.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="section-band-light py-20">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal variant="fade-right">
              <div className="glass-card rounded-2xl p-8 md:p-10 card-lift card-glow h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground text-base">
                  To simplify workforce and business operations through one
                  intelligent, reliable and easy-to-use platform. We help
                  organisations reduce administrative effort, improve
                  operational accuracy and give employees, managers and business
                  leaders greater control over their work.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-left" delay={100}>
              <div className="glass-card rounded-2xl p-8 md:p-10 card-lift card-glow h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-base">
                  To become a trusted global platform for managing people,
                  productivity and business operations. We envision a future
                  where organisations of every size can work without relying on
                  disconnected tools, complicated systems or unnecessary manual
                  processes.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why HourMaker Section */}
      <section id="why" className="section-band-dark py-20">
        <span className="float-orb float-orb-a" aria-hidden />
        <span className="float-orb float-orb-c" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="section-title">
            <h2>Why HourMaker?</h2>
            <p className="text-slate-300">
              The value the platform brings to organisations
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyBenefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={(index % 3) * 80}>
                <div className="glass-card rounded-xl p-6 card-lift card-glow h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-poppins font-semibold text-primary-dark text-lg mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="section-band-light py-20">
        <div className="container relative z-10">
          <ScrollReveal className="section-title">
            <h2>Our Approach</h2>
            <p>How we think business software should work</p>
          </ScrollReveal>
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <p className="text-center text-muted-foreground text-lg mb-10">
                We believe business software should make work easier—not create
                additional work. HourMaker is built around three practical
                principles:
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              <ScrollReveal delay={0}>
                <div className="glass-card rounded-xl p-8 text-center card-lift card-glow h-full">
                  <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-poppins font-semibold text-primary-dark text-lg mb-2">
                    Simplicity
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Features and workflows should be easy to understand, adopt
                    and use.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <div className="glass-card rounded-xl p-8 text-center card-lift card-glow h-full">
                  <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                    <Link2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-poppins font-semibold text-primary-dark text-lg mb-2">
                    Connectivity
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Workforce, project and business information should work
                    together instead of remaining isolated across different
                    systems.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <div className="glass-card rounded-xl p-8 text-center card-lift card-glow h-full">
                  <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-poppins font-semibold text-primary-dark text-lg mb-2">
                    Visibility
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    The right information should be available to the right
                    people, helping them make timely and informed decisions.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="section-band-dark py-20">
        <span className="float-orb float-orb-b" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="section-title">
            <h2>Our Core Values</h2>
            <p className="text-slate-100">
              The standards that guide how we build and serve
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <ScrollReveal key={index} delay={(index % 3) * 80}>
                <div className="glass-card rounded-xl p-6 card-lift card-glow h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-poppins font-semibold text-primary-dark text-lg mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Philosophy Section */}
      <section id="philosophy" className="section-band-light py-20">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="section-title">
              <h2>Our Product Philosophy</h2>
              <p>A connected ecosystem—not a collection of isolated features</p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="glass-card rounded-2xl p-8 md:p-12 card-lift">
                <p className="text-muted-foreground text-lg mb-6">
                  HourMaker is not designed to be another collection of
                  disconnected features. Every module is developed as part of a
                  connected business ecosystem.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Time records can support project visibility
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Projects can connect with clients and billing
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Employee information can support attendance, leave and
                      reporting
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Documents, announcements and access controls help teams
                      stay organised
                    </span>
                  </div>
                </div>
                <p className="text-center text-primary-dark font-semibold text-lg">
                  Workforce, projects and business operations — connected in one
                  place.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Commitment Section - Improved UI */}
      <section id="commitment" className="section-band-dark py-20">
        <span className="float-orb float-orb-c" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="section-title">
            <h2>Our Commitment</h2>
            <p className="text-slate-300">
              The outcomes HourMaker is built to support
            </p>
          </ScrollReveal>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commitmentItems.map((item, index) => (
                <ScrollReveal key={index} delay={(index % 3) * 80}>
                  <div className="glass-card rounded-xl p-6 card-lift card-glow h-full group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-poppins font-semibold text-primary-dark text-base mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal className="mt-10 text-center">
              <div className="inline-block glass-card rounded-2xl px-8 py-6">
                <p className="text-muted-foreground text-lg">
                  As HourMaker grows, our focus will remain the same:{" "}
                  <span className="text-primary-dark font-semibold">
                    helping organisations manage work with simplicity, clarity
                    and confidence.
                  </span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="section-band-light py-20">
        <span className="float-orb float-orb-a" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Build a More Organised Workplace
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you are managing five employees or a growing workforce
              across multiple teams, HourMaker gives you the tools to organise
              work, manage people and understand business performance from one
              platform.
            </p>
            <p className="text-muted-foreground mb-8">
              Spend less time managing systems and more time growing your
              business.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                GET STARTED
              </Link>
              <Link
                to="/company#contact"
                className="px-8 py-3 bg-white text-primary-dark font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 border-2 border-primary/20"
              >
                BOOK A DEMO
              </Link>
            </div> */}
            <p className="mt-8 text-sm text-muted-foreground">
              HourMaker — Where people, time and business operations work
              together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-band-dark py-20">
        <span className="float-orb float-orb-b" aria-hidden />
        <span className="float-orb float-orb-c" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="section-title">
            <h2>Contact Us</h2>
            <p className="text-slate-300">We'd love to hear from you</p>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal variant="fade-right">
              <h3 className="font-poppins text-xl font-semibold text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6 mb-8">
                {/* Bangalore Office */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Bangalore Office
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      91springboard, ITPL Main Road, 5th floor,
                      <br />
                      Trifecta Adatto, 21, ITPL Main Rd,
                      <br />
                      Garudachar Palya, Mahadevapura,
                      <br />
                      Bangalore, Karnataka 560034
                    </p>
                  </div>
                </div>

                {/* Noida Office */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      Noida Office
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Sector-16
                      <br />
                      Greater Noida, UP-201301, INDIA
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-slate-300">hello@hourmaker.in</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-poppins font-semibold text-white mb-4">
                  Quick Links
                </h4>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/resources#blog"
                    className="text-primary font-semibold hover:underline"
                  >
                    Blog →
                  </Link>
                  <Link
                    to="/privacy-policy"
                    className="text-primary font-semibold hover:underline"
                  >
                    Privacy Policy →
                  </Link>
                  <Link
                    to="/terms"
                    className="text-primary font-semibold hover:underline"
                  >
                    Terms of Service →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-left" delay={100}>
              <div className="glass-card rounded-xl p-8 card-lift">
                <h3 className="font-poppins text-xl font-semibold text-primary-dark mb-6">
                  Send us a Message
                </h3>

                {submitStatus && (
                  <div
                    className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={contactForm.subject}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                    disabled={isSubmitting}
                  />

                  {/* Specific Feature Dropdown - New Field */}
                  <div>
                    <label
                      htmlFor="specificFeature"
                      className="block text-sm font-medium text-muted-foreground/70 mb-2 ml-1"
                    >
                      Is there any specific feature you want to talk about?
                    </label>
                    <div className="relative">
                      <select
                        name="specificFeature"
                        id="specificFeature"
                        value={contactForm.specificFeature}
                        onChange={handleContactChange}
                        className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors appearance-none bg-white text-foreground"
                        disabled={isSubmitting}
                        style={{
                          color: contactForm.specificFeature
                            ? "#1F2937"
                            : "#9CA3AF",
                        }}
                      >
                        <option value="" className="text-muted-foreground/70">
                          Select a feature (optional)
                        </option>
                        {featureOptions.map((feature) => (
                          <option
                            key={feature.value}
                            value={feature.value}
                            className="text-muted-foreground/70"
                          >
                            {feature.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyPage;

// import { useEffect, useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import {
//   Building2,
//   Users,
//   Target,
//   Award,
//   Globe,
//   Mail,
//   Phone,
//   MapPin,
//   Zap,
//   Shield,
//   Rocket,
//   Code,
//   Heart,
//   CheckCircle,
//   XCircle,
//   Clock,
//   TrendingUp,
//   BarChart3,
//   Briefcase,
//   FileText,
//   CreditCard,
//   FolderOpen,
//   Megaphone,
//   Sparkles,
//   Eye,
//   Lightbulb,
//   ArrowRight,
//   Check,
//   Star,
//   Link2,
// } from "lucide-react";
// import Layout from "../components/layout/Layout";
// import ScrollReveal from "../components/ui/ScrollReveal";
// import { submitContactForm } from "../services/firebaseService";

// const CompanyPage = () => {
//   const location = useLocation();
//   const [contactForm, setContactForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   useEffect(() => {
//     if (location.hash) {
//       const element = document.querySelector(location.hash);
//       if (element) {
//         setTimeout(() => {
//           element.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//       }
//     } else {
//       window.scrollTo(0, 0);
//     }
//   }, [location]);

//   const handleContactSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const result = await submitContactForm(contactForm);

//       if (result.success) {
//         setSubmitStatus({
//           type: "success",
//           message: "Thank you! Your message has been sent successfully.",
//         });
//         setContactForm({ name: "", email: "", subject: "", message: "" });

//         setTimeout(() => {
//           setSubmitStatus(null);
//         }, 5000);
//       } else {
//         setSubmitStatus({
//           type: "error",
//           message: "Failed to send message. Please try again.",
//         });
//       }
//     } catch (error) {
//       setSubmitStatus({
//         type: "error",
//         message: "An error occurred. Please try again.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleContactChange = (e) => {
//     const { name, value } = e.target;
//     setContactForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Why HourMaker benefits
//   const whyBenefits = [
//     {
//       icon: Building2,
//       title: "Everything in One Place",
//       description:
//         "Replace disconnected tools, spreadsheets and manual records with one integrated platform.",
//     },
//     {
//       icon: Eye,
//       title: "Greater Operational Visibility",
//       description:
//         "Give employees, managers and business leaders access to the information relevant to their responsibilities.",
//     },
//     {
//       icon: Zap,
//       title: "Less Administrative Work",
//       description:
//         "Automate and organise routine processes so teams can spend more time on productive and meaningful work.",
//     },
//     {
//       icon: CheckCircle,
//       title: "Improved Accuracy",
//       description:
//         "Maintain structured records for employee time, leave, projects, clients, billing, invoices and other important operations.",
//     },
//     {
//       icon: Rocket,
//       title: "Designed to Grow with You",
//       description:
//         "Support businesses at different stages—from small teams creating their first structured processes to established organisations managing more complex operations.",
//     },
//     {
//       icon: Star,
//       title: "Easy to Use",
//       description:
//         "Help employees and managers complete everyday tasks without unnecessary complexity or lengthy learning curves.",
//     },
//   ];

//   // Core Values
//   const coreValues = [
//     {
//       icon: Users,
//       title: "Customer Focus",
//       description:
//         "We build around the practical needs and everyday challenges of businesses and their employees.",
//     },
//     {
//       icon: TrendingUp,
//       title: "Continuous Improvement",
//       description:
//         "We listen, learn and continuously improve the platform as workplace needs evolve.",
//     },
//     // {
//     //   icon: Shield,
//     //   title: "Reliability",
//     //   description:
//     //     "We are committed to creating dependable processes and accurate information that organisations can trust.",
//     // },
//     {
//       icon: Sparkles,
//       title: "Simplicity",
//       description:
//         "We remove unnecessary complexity and make important business processes easier to manage.",
//     },
//     {
//       icon: Eye,
//       title: "Transparency",
//       description:
//         "We promote clearer workflows, better accountability and greater visibility across teams.",
//     },
//     {
//       icon: Lightbulb,
//       title: "Innovation with Purpose",
//       description:
//         "We use technology to solve real business problems—not simply to add more features.",
//     },
//     {
//       icon: Shield,
//       title: "Security & Responsibility",
//       description:
//         "We recognise the importance of business and employee information and support responsible, controlled access.",
//     },
//   ];

//   // Commitment items with icons
//   const commitmentItems = [
//     {
//       icon: Clock,
//       title: "Save Time",
//       description: "Reduce repetitive administrative work",
//     },
//     // {
//     //   icon: Eye,
//     //   title: "Improve Visibility",
//     //   description: "Better workforce and project oversight",
//     // },
//     {
//       icon: FileText,
//       title: "Reduce Dependencies",
//       description: "Move away from spreadsheets and disconnected apps",
//     },
//     {
//       icon: CheckCircle,
//       title: "Maintain Accuracy",
//       description: "Keep more accurate business records",
//     },
//     {
//       icon: Briefcase,
//       title: "Create Consistency",
//       description: "Build consistent operational processes",
//     },
//     {
//       icon: Users,
//       title: "Support Teams",
//       description: "Easier workflows for employees and managers",
//     },
//     {
//       icon: TrendingUp,
//       title: "Make Better Decisions",
//       description: "Use meaningful business information",
//     },
//   ];

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="section-band-light py-20 text-center">
//         <span className="float-orb float-orb-a" aria-hidden />
//         <span className="float-orb float-orb-c" aria-hidden />
//         <ScrollReveal className="container max-w-4xl relative z-10">
//           <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
//             About <span className="text-primary">HourMaker</span>
//           </h1>
//           <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
//             Making Every Working Hour Count — An all-in-one workforce and
//             business management platform designed to help modern organisations
//             manage their people, time, projects and everyday operations from one
//             connected system.
//           </p>
//         </ScrollReveal>
//       </section>

//       {/* Our Story Section */}
//       <section id="story" className="section-band-dark py-20">
//         <span className="float-orb float-orb-b" aria-hidden />
//         <div className="container relative z-10">
//           <ScrollReveal className="max-w-4xl mx-auto">
//             <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6 text-center">
//               Our Story
//             </h2>
//           </ScrollReveal>
//           <ScrollReveal className="max-w-4xl mx-auto" delay={80}>
//             <div className="space-y-4">
//               <p className="text-slate-300 text-lg">
//                 HourMaker began with a simple observation: businesses were
//                 spending too much time managing work instead of focusing on the
//                 work that drives growth.
//               </p>
//               <p className="text-slate-300 text-lg">
//                 Employee information was stored in different systems. Timesheets
//                 were maintained manually. Leave requests were handled through
//                 emails and messages. Project updates lived in spreadsheets.
//                 Billing, documents, approvals and reports were often managed
//                 using separate tools.
//               </p>
//               <p className="text-slate-300 text-lg">
//                 This created unnecessary administrative work, limited visibility
//                 and made everyday processes more complicated than they needed to
//                 be.
//               </p>
//               <p className="text-slate-300 text-lg">
//                 HourMaker was created to change that. We developed a unified
//                 platform that connects workforce management, project operations
//                 and business administration in one accessible place.
//               </p>
//               <p className="text-slate-300 text-lg font-semibold text-white">
//                 Today, HourMaker continues to evolve around the real needs of
//                 growing teams—making business management more organised,
//                 transparent and efficient.
//               </p>
//             </div>
//           </ScrollReveal>
//         </div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section id="mission-vision" className="section-band-light py-20">
//         <div className="container relative z-10">
//           <div className="grid md:grid-cols-2 gap-8">
//             <ScrollReveal variant="fade-right">
//               <div className="glass-card rounded-2xl p-8 md:p-10 card-lift card-glow h-full">
//                 <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
//                   <Target className="w-7 h-7 text-primary" />
//                 </div>
//                 <h3 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
//                   Our Mission
//                 </h3>
//                 <p className="text-muted-foreground text-base">
//                   To simplify workforce and business operations through one
//                   intelligent, reliable and easy-to-use platform. We help
//                   organisations reduce administrative effort, improve
//                   operational accuracy and give employees, managers and business
//                   leaders greater control over their work.
//                 </p>
//               </div>
//             </ScrollReveal>
//             <ScrollReveal variant="fade-left" delay={100}>
//               <div className="glass-card rounded-2xl p-8 md:p-10 card-lift card-glow h-full">
//                 <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
//                   <Globe className="w-7 h-7 text-primary" />
//                 </div>
//                 <h3 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
//                   Our Vision
//                 </h3>
//                 <p className="text-muted-foreground text-base">
//                   To become a trusted global platform for managing people,
//                   productivity and business operations. We envision a future
//                   where organisations of every size can work without relying on
//                   disconnected tools, complicated systems or unnecessary manual
//                   processes.
//                 </p>
//               </div>
//             </ScrollReveal>
//           </div>
//         </div>
//       </section>

//       {/* Why HourMaker Section */}
//       <section id="why" className="section-band-dark py-20">
//         <span className="float-orb float-orb-a" aria-hidden />
//         <span className="float-orb float-orb-c" aria-hidden />
//         <div className="container relative z-10">
//           <ScrollReveal className="section-title">
//             <h2>Why HourMaker?</h2>
//             <p className="text-slate-300">
//               The value the platform brings to organisations
//             </p>
//           </ScrollReveal>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {whyBenefits.map((benefit, index) => (
//               <ScrollReveal key={index} delay={(index % 3) * 80}>
//                 <div className="glass-card rounded-xl p-6 card-lift card-glow h-full">
//                   <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
//                     <benefit.icon className="w-6 h-6 text-primary" />
//                   </div>
//                   <h4 className="font-poppins font-semibold text-primary-dark text-lg mb-2">
//                     {benefit.title}
//                   </h4>
//                   <p className="text-sm text-muted-foreground">
//                     {benefit.description}
//                   </p>
//                 </div>
//               </ScrollReveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Approach Section */}
//       <section id="approach" className="section-band-light py-20">
//         <div className="container relative z-10">
//           <ScrollReveal className="section-title">
//             <h2>Our Approach</h2>
//             <p>How we think business software should work</p>
//           </ScrollReveal>
//           <div className="max-w-5xl mx-auto">
//             <ScrollReveal>
//               <p className="text-center text-muted-foreground text-lg mb-10">
//                 We believe business software should make work easier—not create
//                 additional work. HourMaker is built around three practical
//                 principles:
//               </p>
//             </ScrollReveal>
//             <div className="grid md:grid-cols-3 gap-6">
//               <ScrollReveal delay={0}>
//                 <div className="glass-card rounded-xl p-8 text-center card-lift card-glow h-full">
//                   <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
//                     <Sparkles className="w-8 h-8 text-primary" />
//                   </div>
//                   <h4 className="font-poppins font-semibold text-primary-dark text-lg mb-2">
//                     Simplicity
//                   </h4>
//                   <p className="text-sm text-muted-foreground">
//                     Features and workflows should be easy to understand, adopt
//                     and use.
//                   </p>
//                 </div>
//               </ScrollReveal>
//               <ScrollReveal delay={80}>
//                 <div className="glass-card rounded-xl p-8 text-center card-lift card-glow h-full">
//                   <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
//                     <Link2 className="w-8 h-8 text-primary" />
//                   </div>
//                   <h4 className="font-poppins font-semibold text-primary-dark text-lg mb-2">
//                     Connectivity
//                   </h4>
//                   <p className="text-sm text-muted-foreground">
//                     Workforce, project and business information should work
//                     together instead of remaining isolated across different
//                     systems.
//                   </p>
//                 </div>
//               </ScrollReveal>
//               <ScrollReveal delay={160}>
//                 <div className="glass-card rounded-xl p-8 text-center card-lift card-glow h-full">
//                   <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
//                     <Eye className="w-8 h-8 text-primary" />
//                   </div>
//                   <h4 className="font-poppins font-semibold text-primary-dark text-lg mb-2">
//                     Visibility
//                   </h4>
//                   <p className="text-sm text-muted-foreground">
//                     The right information should be available to the right
//                     people, helping them make timely and informed decisions.
//                   </p>
//                 </div>
//               </ScrollReveal>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values Section */}
//       <section id="values" className="section-band-dark py-20">
//         <span className="float-orb float-orb-b" aria-hidden />
//         <div className="container relative z-10">
//           <ScrollReveal className="section-title">
//             <h2>Our Core Values</h2>
//             <p className="text-slate-100">
//               The standards that guide how we build and serve
//             </p>
//           </ScrollReveal>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {coreValues.map((value, index) => (
//               <ScrollReveal key={index} delay={(index % 3) * 80}>
//                 <div className="glass-card rounded-xl p-6 card-lift card-glow h-full">
//                   <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
//                     <value.icon className="w-6 h-6 text-primary" />
//                   </div>
//                   <h4 className="font-poppins font-semibold text-primary-dark text-lg mb-2">
//                     {value.title}
//                   </h4>
//                   <p className="text-sm text-muted-foreground">
//                     {value.description}
//                   </p>
//                 </div>
//               </ScrollReveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Product Philosophy Section */}
//       <section id="philosophy" className="section-band-light py-20">
//         <div className="container relative z-10">
//           <div className="max-w-4xl mx-auto">
//             <ScrollReveal className="section-title">
//               <h2>Our Product Philosophy</h2>
//               <p>A connected ecosystem—not a collection of isolated features</p>
//             </ScrollReveal>
//             <ScrollReveal delay={80}>
//               <div className="glass-card rounded-2xl p-8 md:p-12 card-lift">
//                 <p className="text-muted-foreground text-lg mb-6">
//                   HourMaker is not designed to be another collection of
//                   disconnected features. Every module is developed as part of a
//                   connected business ecosystem.
//                 </p>
//                 <div className="grid sm:grid-cols-2 gap-4 mb-8">
//                   <div className="flex items-start gap-3">
//                     <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                     <span className="text-sm text-muted-foreground">
//                       Time records can support project visibility
//                     </span>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                     <span className="text-sm text-muted-foreground">
//                       Projects can connect with clients and billing
//                     </span>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                     <span className="text-sm text-muted-foreground">
//                       Employee information can support attendance, leave and
//                       reporting
//                     </span>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                     <span className="text-sm text-muted-foreground">
//                       Documents, announcements and access controls help teams
//                       stay organised
//                     </span>
//                   </div>
//                 </div>
//                 <p className="text-center text-primary-dark font-semibold text-lg">
//                   Workforce, projects and business operations — connected in one
//                   place.
//                 </p>
//               </div>
//             </ScrollReveal>
//           </div>
//         </div>
//       </section>

//       {/* Our Commitment Section - Improved UI */}
//       <section id="commitment" className="section-band-dark py-20">
//         <span className="float-orb float-orb-c" aria-hidden />
//         <div className="container relative z-10">
//           <ScrollReveal className="section-title">
//             <h2>Our Commitment</h2>
//             <p className="text-slate-300">
//               The outcomes HourMaker is built to support
//             </p>
//           </ScrollReveal>
//           <div className="max-w-5xl mx-auto">
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {commitmentItems.map((item, index) => (
//                 <ScrollReveal key={index} delay={(index % 3) * 80}>
//                   <div className="glass-card rounded-xl p-6 card-lift card-glow h-full group">
//                     <div className="flex items-start gap-4">
//                       <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
//                         <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
//                       </div>
//                       <div>
//                         <h4 className="font-poppins font-semibold text-primary-dark text-base mb-1">
//                           {item.title}
//                         </h4>
//                         <p className="text-sm text-muted-foreground">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </ScrollReveal>
//               ))}
//             </div>
//             <ScrollReveal className="mt-10 text-center">
//               <div className="inline-block glass-card rounded-2xl px-8 py-6">
//                 <p className="text-muted-foreground text-lg">
//                   As HourMaker grows, our focus will remain the same:{" "}
//                   <span className="text-primary-dark font-semibold">
//                     helping organisations manage work with simplicity, clarity
//                     and confidence.
//                   </span>
//                 </p>
//               </div>
//             </ScrollReveal>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section id="cta" className="section-band-light py-20">
//         <span className="float-orb float-orb-a" aria-hidden />
//         <div className="container relative z-10">
//           <ScrollReveal className="max-w-4xl mx-auto text-center">
//             <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary-dark mb-4">
//               Build a More Organised Workplace
//             </h2>
//             <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
//               Whether you are managing five employees or a growing workforce
//               across multiple teams, HourMaker gives you the tools to organise
//               work, manage people and understand business performance from one
//               platform.
//             </p>
//             <p className="text-muted-foreground mb-8">
//               Spend less time managing systems and more time growing your
//               business.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/demo"
//                 className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
//               >
//                 GET STARTED
//               </Link>
//               <Link
//                 to="/contact"
//                 className="px-8 py-3 bg-white text-primary-dark font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 border-2 border-primary/20"
//               >
//                 BOOK A DEMO
//               </Link>
//             </div>
//             <p className="mt-8 text-sm text-muted-foreground">
//               HourMaker — Where people, time and business operations work
//               together.
//             </p>
//           </ScrollReveal>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="section-band-dark py-20">
//         <span className="float-orb float-orb-b" aria-hidden />
//         <span className="float-orb float-orb-c" aria-hidden />
//         <div className="container relative z-10">
//           <ScrollReveal className="section-title">
//             <h2>Contact Us</h2>
//             <p className="text-slate-300">We'd love to hear from you</p>
//           </ScrollReveal>
//           <div className="grid lg:grid-cols-2 gap-12">
//             <ScrollReveal variant="fade-right">
//               <h3 className="font-poppins text-xl font-semibold text-white mb-6">
//                 Get in Touch
//               </h3>
//               <div className="space-y-6 mb-8">
//                 {/* Bangalore Office */}
//                 <div className="flex items-start gap-4">
//                   <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-white mb-1">
//                       Bangalore Office
//                     </h4>
//                     <p className="text-slate-300 text-sm leading-relaxed">
//                       91springboard, ITPL Main Road, 5th floor,
//                       <br />
//                       Trifecta Adatto, 21, ITPL Main Rd,
//                       <br />
//                       Garudachar Palya, Mahadevapura,
//                       <br />
//                       Bangalore, Karnataka 560034
//                     </p>
//                   </div>
//                 </div>

//                 {/* Noida Office */}
//                 <div className="flex items-start gap-4">
//                   <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-white mb-1">
//                       Noida Office
//                     </h4>
//                     <p className="text-slate-300 text-sm leading-relaxed">
//                       Sector-16
//                       <br />
//                       Greater Noida, UP-201301, INDIA
//                     </p>
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div className="flex items-center gap-4">
//                   <Mail className="w-6 h-6 text-primary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold text-white mb-1">Email</h4>
//                     <p className="text-slate-300">hello@hourmaker.in</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8 pt-8 border-t border-white/20">
//                 <h4 className="font-poppins font-semibold text-white mb-4">
//                   Quick Links
//                 </h4>
//                 <div className="flex flex-wrap gap-4">
//                   <Link
//                     to="/resources#blog"
//                     className="text-primary font-semibold hover:underline"
//                   >
//                     Blog →
//                   </Link>
//                   <Link
//                     to="/privacy-policy"
//                     className="text-primary font-semibold hover:underline"
//                   >
//                     Privacy Policy →
//                   </Link>
//                   <Link
//                     to="/terms"
//                     className="text-primary font-semibold hover:underline"
//                   >
//                     Terms of Service →
//                   </Link>
//                 </div>
//               </div>
//             </ScrollReveal>
//             <ScrollReveal variant="fade-left" delay={100}>
//               <div className="glass-card rounded-xl p-8 card-lift">
//                 <h3 className="font-poppins text-xl font-semibold text-primary-dark mb-6">
//                   Send us a Message
//                 </h3>

//                 {submitStatus && (
//                   <div
//                     className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
//                       submitStatus.type === "success"
//                         ? "bg-green-50 text-green-800 border border-green-200"
//                         : "bg-red-50 text-red-800 border border-red-200"
//                     }`}
//                   >
//                     {submitStatus.type === "success" ? (
//                       <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
//                     ) : (
//                       <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
//                     )}
//                     <span>{submitStatus.message}</span>
//                   </div>
//                 )}

//                 <form onSubmit={handleContactSubmit} className="space-y-4">
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Name"
//                       value={contactForm.name}
//                       onChange={handleContactChange}
//                       className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
//                       required
//                       disabled={isSubmitting}
//                     />
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email"
//                       value={contactForm.email}
//                       onChange={handleContactChange}
//                       className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
//                       required
//                       disabled={isSubmitting}
//                     />
//                   </div>
//                   <input
//                     type="text"
//                     name="subject"
//                     placeholder="Subject"
//                     value={contactForm.subject}
//                     onChange={handleContactChange}
//                     className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
//                     disabled={isSubmitting}
//                   />
//                   <textarea
//                     name="message"
//                     placeholder="Your Message"
//                     value={contactForm.message}
//                     onChange={handleContactChange}
//                     rows={4}
//                     className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
//                     required
//                     disabled={isSubmitting}
//                   ></textarea>
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         Sending...
//                       </>
//                     ) : (
//                       "Send Message"
//                     )}
//                   </button>
//                 </form>
//               </div>
//             </ScrollReveal>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default CompanyPage;
