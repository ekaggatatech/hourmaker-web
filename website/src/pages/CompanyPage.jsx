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
} from "lucide-react";
import Layout from "../components/layout/Layout";
import { submitContactForm } from "../services/firebaseService";

const CompanyPage = () => {
  const location = useLocation();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
        setContactForm({ name: "", email: "", subject: "", message: "" });

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-center">
        <div className="container max-w-4xl">
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            About <span className="text-primary">Hourmaker</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            We're on a mission to make workforce management simple, efficient,
            and delightful for teams of all sizes.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4">
                Hourmaker was born from a simple frustration: managing
                timesheets and workforce operations shouldn't be a daily battle.
                We set out to build the workforce management platform we wished
                existed.
              </p>
              <p className="text-muted-foreground mb-4">
                Today, we serve many companies across India and beyond, helping
                them save thousands of hours and millions of rupees in
                administrative costs. Our platform processes over 8 million time
                entries every month.
              </p>
              <p className="text-muted-foreground">
                We believe that great software should be intuitive, affordable,
                and backed by exceptional support. That's why we've built
                Hourmaker with these principles at our core.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Building2,
                  value: "93%",
                  label: "Work load Automation",
                },
                { icon: Users, value: "21K+", label: "Active Users" },
                { icon: Globe, value: "4+", label: "Countries Served" },
                { icon: Award, value: "98.5%", label: "Satisfaction Rate" },
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
      </section>

      {/* Ekaggata Tech Section */}
      <section id="ekaggata" className="py-20 bg-muted">
        <div className="container">
          <div className="section-title">
            <h2>Powered by Ekaggata Tech</h2>
            <p>
              The technology company building the future of enterprise software
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
                    Building Enterprise-Grade SaaS Solutions
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    <strong className="text-primary-dark">
                      Ekaggata Tech Private Limited
                    </strong>{" "}
                    is a Bangalore-based technology company focused on building
                    enterprise-grade SaaS solutions that transform how
                    businesses operate.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {/* "Ekaggata" (एकाग्रता) means "focus" in Sanskrit – a
                    principle that guides everything we build. From architecture
                    to user experience, we maintain relentless focus on solving
                    real problems elegantly. */}
                    Ekaggata Technologies uniquely delivers it’s clients
                    end-to-end IT Consulting, Technology and Digital Marketing
                    capabilities with expertise in investment banking, capital
                    market, risk management, treasury, payment, trading
                    platforms and insurance as well as emerging technologies
                    like Cloud, Artificial Intelligence, and Data Science. This
                    has helped the company to grow to a thriving IT company in
                    Indian IT landscape.
                  </p>
                  <p className="text-muted-foreground">
                    We're proud to be bootstrapped and profitable, which means
                    we answer only to our customers. No venture capital
                    pressure, no shortcuts – just sustainable growth and
                    exceptional products.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-primary-dark">
                        200+ Engineers
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        World-class engineering team from IITs, NITs, and top
                        tech companies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-primary-dark">
                        9+ Products
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Suite of enterprise tools serving diverse business needs
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-primary-dark">
                        SOC 2 Certified
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Enterprise-grade security and compliance standards
                      </p>
                    </div>
                  </div> */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-primary-dark">
                        Customer-First
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Every decision starts with customer impact
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
                {[
                  {
                    icon: Target,
                    title: "Our Mission",
                    description:
                      "Empower businesses to focus on what matters by automating operational complexity",
                  },
                  {
                    icon: Zap,
                    title: "Our Vision",
                    description:
                      "Be the trusted technology partner for enterprises across Asia and beyond",
                  },
                  {
                    icon: Award,
                    title: "Our Values",
                    description:
                      "Transparency, excellence, customer obsession, and continuous innovation",
                  },
                ].map((value, index) => (
                  <div key={index} className="text-center">
                    <value.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h4 className="font-poppins font-semibold text-primary-dark mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-poppins text-xl font-semibold text-primary-dark mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Office Address
                    </h4>
                    <p className="text-muted-foreground">
                      #45, 3rd Floor, Koramangala
                      <br />
                      Bangalore, Karnataka 560034
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+91 (80) 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">hello@hourmaker.in</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-poppins font-semibold text-primary-dark mb-4">
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
            </div>
            <div className="glass-card rounded-xl p-8">
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyPage;
