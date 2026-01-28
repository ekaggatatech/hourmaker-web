import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  BookOpen,
  HelpCircle,
  FileText,
  Video,
  ArrowRight,
  ExternalLink,
  Calendar,
  Users,
  Zap,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import { blogPosts } from "../data/blogPosts";

const ResourcesPage = () => {
  const location = useLocation();
  const [showAllBlogs, setShowAllBlogs] = useState(false);

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

  const displayedBlogs = showAllBlogs ? blogPosts : blogPosts.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-center">
        <div className="container max-w-4xl">
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Resources & <span className="text-primary">Learning</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Everything you need to succeed with Hourmaker – from guides and
            tutorials to webinars and case studies.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Latest from the Blog</h2>
            <p>Insights, tips, and best practices for workforce management</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {displayedBlogs.map((post) => (
              <article
                key={post.id}
                className="glass-card rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary-light to-muted flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary/30" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary-light px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-poppins font-semibold text-primary-dark mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            {!showAllBlogs ? (
              <button
                onClick={() => setShowAllBlogs(true)}
                className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary-light transition-colors"
              >
                View All Posts ({blogPosts.length})
              </button>
            ) : (
              <button
                onClick={() => setShowAllBlogs(false)}
                className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary-light transition-colors"
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Help Center Section */}
      <section id="help" className="py-20 bg-muted">
        <div className="container">
          <div className="section-title">
            <h2>Help Center</h2>
            <p>
              Find answers to common questions and learn how to use Hourmaker
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: HelpCircle,
                title: "Getting Started",
                count: "24 articles",
                description: "Setup guides and first steps",
              },
              {
                icon: FileText,
                title: "Time Tracking",
                count: "18 articles",
                description: "Timesheet and clock-in help",
              },
              {
                icon: Calendar,
                title: "Scheduling",
                count: "15 articles",
                description: "Shift and schedule management",
              },
              {
                icon: Users,
                title: "Team Management",
                count: "12 articles",
                description: "User roles and permissions",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              >
                <category.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-poppins font-semibold text-primary-dark mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-primary mb-2">{category.count}</p>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 glass-card rounded-xl p-8 text-center">
            <h3 className="font-poppins text-xl font-semibold text-primary-dark mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is available 24/7 to help you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/company#contact"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary-dark transition-colors"
              >
                Contact Support
              </Link>
              <button className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary-light transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Case Studies</h2>
            <p>
              See how leading companies transformed their workforce management
              with Hourmaker
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                company: "TechNova Solutions",
                industry: "Technology",
                employees: "500+",
                result: "95% improvement in time tracking accuracy",
                quote:
                  "Hourmaker transformed how we manage our distributed team.",
              },
              {
                company: "MediCare Hospitals",
                industry: "Healthcare",
                employees: "1,200+",
                result: "₹8 lakhs annual savings in administrative costs",
                quote: "The ROI was evident within the first quarter.",
              },
              {
                company: "RetailChain India",
                industry: "Retail",
                employees: "3,000+",
                result: "55% reduction in workforce management costs",
                quote: "The pricing transparency was refreshing.",
              },
              {
                company: "Global BPO Inc.",
                industry: "Business Services",
                employees: "1,200+",
                result: "35% reduction in overtime costs",
                quote:
                  "Our team actually enjoys using it compared to our old system.",
              },
            ].map((study, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-8 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-poppins font-semibold text-xl text-primary-dark">
                      {study.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {study.industry} • {study.employees} employees
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
                <div className="bg-success/10 text-success font-semibold px-4 py-2 rounded-lg mb-4 inline-block text-sm">
                  {study.result}
                </div>
                <p className="text-foreground italic">"{study.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section id="webinars" className="py-20 bg-muted">
        <div className="container">
          <div className="section-title">
            <h2>Webinars & Events</h2>
            <p>
              Join our live sessions and learn from workforce management experts
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Upcoming */}
            <div>
              <h3 className="font-poppins text-xl font-semibold text-primary-dark mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" /> Upcoming Webinars
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title:
                      "Mastering Project Management for Multi-Location Teams",
                    date: "Feb 5, 2025",
                    time: "3:00 PM IST",
                  },
                  {
                    title: "Hourmaker Advanced Analytics Deep Dive",
                    date: "Feb 12, 2025",
                    time: "2:00 PM IST",
                  },
                  {
                    title: "Compliance Best Practices for HR Teams",
                    date: "Feb 20, 2025",
                    time: "4:00 PM IST",
                  },
                ].map((webinar, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-5 flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-semibold text-primary-dark">
                        {webinar.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {webinar.date} at {webinar.time}
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg text-sm hover:bg-primary-dark transition-colors">
                      Register
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* On-Demand */}
            <div>
              <h3 className="font-poppins text-xl font-semibold text-primary-dark mb-6 flex items-center gap-2">
                <Video className="w-5 h-5 text-primary" /> On-Demand
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Getting Started with Hourmaker",
                    duration: "45 min",
                    views: "2.4k views",
                  },
                  {
                    title: "Integrating Hourmaker with Your Payroll",
                    duration: "30 min",
                    views: "1.8k views",
                  },
                  {
                    title: "Building Custom Reports & Dashboards",
                    duration: "50 min",
                    views: "1.2k views",
                  },
                ].map((video, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-5 flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-semibold text-primary-dark">
                        {video.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {video.duration} • {video.views}
                      </p>
                    </div>
                    <button className="px-4 py-2 border-2 border-primary text-primary font-semibold rounded-lg text-sm hover:bg-primary-light transition-colors">
                      Watch
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      {/* <section id="integrations" className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Integrations</h2>
            <p>Connect Hourmaker with the tools your team already uses</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Slack",
              "Microsoft Teams",
              "Jira",
              "QuickBooks",
              "Xero",
              "ADP",
              "Workday",
              "BambooHR",
              "Salesforce",
              "Zoom",
              "Google Workspace",
              "Zapier",
            ].map((tool, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary-light rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-primary-dark">
                  {tool}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/documentation#api"
              className="text-primary font-semibold hover:underline"
            >
              View API Documentation →
            </Link>
          </div>
        </div>
      </section> */}

      {/* Updates Section */}
      <section id="updates" className="py-20 bg-muted">
        <div className="container max-w-4xl">
          <div className="section-title">
            <h2>Product Updates</h2>
            <p>Stay updated with the latest features and improvements</p>
          </div>
          <div className="space-y-6">
            {[
              {
                version: "v3.5.0",
                date: "Jan 20, 2025",
                title: "AI-Powered Schedule Optimization",
                description:
                  "New AI engine that automatically suggests optimal schedules based on historical data and employee preferences.",
              },
              {
                version: "v3.4.0",
                date: "Jan 5, 2025",
                title: "Enhanced Mobile App",
                description:
                  "Completely redesigned mobile experience with offline support and biometric authentication.",
              },
              {
                version: "v3.3.0",
                date: "Dec 15, 2024",
                title: "Advanced Reporting Engine",
                description:
                  "New report builder with 50+ pre-built templates and custom visualization options.",
              },
            ].map((update, index) => (
              <div key={index} className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                    {update.version}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {update.date}
                  </span>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-primary-dark mb-2">
                  {update.title}
                </h3>
                <p className="text-muted-foreground">{update.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;
