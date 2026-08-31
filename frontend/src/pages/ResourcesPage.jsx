import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  BookOpen,
  HelpCircle,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  FileText,
  UserCheck,
  CheckSquare,
  FolderKanban,
  UserPlus,
  BarChart3,
  Code,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import ScrollReveal from "../components/ui/ScrollReveal";
import { blogPosts } from "../data/blogPosts";
import { features } from "../data/features";

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

  // Group features by category for help section
  const featureCategories = [
    {
      title: "Time Tracking",
      icon: FileText,
      features: features.filter(
        (f) => f.id.includes("timesheet") || f.id.includes("attendance"),
      ),
    },
    {
      title: "Project Management",
      icon: FolderKanban,
      features: features.filter(
        (f) =>
          f.id.includes("project") ||
          f.id.includes("billing") ||
          f.id.includes("client"),
      ),
    },
    {
      title: "HR & People",
      icon: UserCheck,
      features: features.filter(
        (f) =>
          f.id.includes("onboarding") ||
          f.id.includes("user") ||
          f.id.includes("holiday"),
      ),
    },
    {
      title: "Workflow & Analytics",
      icon: BarChart3,
      features: features.filter(
        (f) =>
          f.id.includes("workflow") ||
          f.id.includes("analytics") ||
          f.id.includes("access"),
      ),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-band-light py-20 text-center overflow-hidden">
        <span className="float-orb float-orb-a" aria-hidden />
        <span className="float-orb float-orb-c" aria-hidden />
        <ScrollReveal className="container max-w-4xl relative z-10">
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Resources & <span className="text-primary">Learning</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Explore our blog and feature documentation to get the most out of
            Hourmaker
          </p>
        </ScrollReveal>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-band-dark py-20">
        <span className="float-orb float-orb-b" aria-hidden />
        <span className="float-orb float-orb-c" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="section-title">
            <h2 className="!text-white">Latest from the Blog</h2>
            <p className="!text-slate-300">
              Insights, tips, and best practices for workforce management
            </p>
          </ScrollReveal>

          {blogPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-3 gap-8">
                {displayedBlogs.map((post, index) => (
                  <ScrollReveal key={post.id} delay={(index % 3) * 80}>
                    <article className="glass-card rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 h-full">
                      <div className="h-48 bg-gradient-to-br from-primary-light to-muted flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-primary/30" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold text-primary bg-primary-light px-2 py-1 rounded">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                        </div>
                        <h3 className="font-poppins font-semibold text-primary-dark mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                            <Clock className="w-3 h-3 ml-1" />
                            <span>{post.readTime}</span>
                          </div>
                          <Link
                            to={`/blog/${post.slug}`}
                            className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                          >
                            Read <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>

              {blogPosts.length > 3 && (
                <ScrollReveal className="text-center mt-10">
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
                </ScrollReveal>
              )}
            </>
          ) : (
            <ScrollReveal className="text-center py-12">
              <p className="text-slate-300">Blog posts coming soon!</p>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Help Center Section - Redirects to Features */}
      <section id="help" className="section-band-light py-20">
        <span className="float-orb float-orb-a" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="section-title">
            <h2>Help Center</h2>
            <p>Find answers by exploring our feature documentation</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <ScrollReveal key={index} delay={index * 80}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="font-poppins font-semibold text-lg text-primary-dark">
                        {category.title}
                      </h3>
                    </div>

                    {category.features.length > 0 ? (
                      <div className="space-y-2">
                        {category.features.map((feature) => (
                          <Link
                            key={feature.id}
                            to={`/features/${feature.slug}`}
                            className="block glass-card rounded-lg p-3 hover:-translate-y-0.5 transition-all duration-200 hover:shadow-md"
                          >
                            <div className="flex items-center gap-2">
                              <feature.icon className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium text-foreground">
                                {feature.title}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                              {feature.shortDescription}
                            </p>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground italic">
                        Coming soon...
                      </p>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Can't find what you're looking for banner */}
          <ScrollReveal delay={320} className="mt-12">
            <div className="glass-card rounded-xl p-8 text-center bg-gradient-to-r from-primary/5 to-primary-light/20">
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-poppins text-xl font-semibold text-primary-dark mb-3">
                Can't find what you're looking for?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our team is here to help! Whether you need clarification on a
                feature, help getting started, or have a specific question about
                your use case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/company#contact"
                  className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Contact Support
                </Link>
                <Link
                  to="/features"
                  className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary-light transition-colors"
                >
                  Browse All Features
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Feature Links - Additional Help */}
      <section className="section-band-dark py-20">
        <span className="float-orb float-orb-b" aria-hidden />
        <span className="float-orb float-orb-c" aria-hidden />
        <div className="container relative z-10">
          <ScrollReveal className="section-title">
            <h2 className="!text-white">Popular Features</h2>
            <p className="!text-slate-300">
              Quick access to our most commonly used features
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.slice(0, 8).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={feature.id} delay={(index % 4) * 80}>
                  <Link
                    to={`/features/${feature.slug}`}
                    className="flex items-center gap-3 p-4 glass-card rounded-xl hover:-translate-y-1 transition-all duration-200 hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-poppins font-semibold text-sm text-primary-dark truncate">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        Learn more →
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-gradient py-20 text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Workforce Management?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of companies that trust Hourmaker. Start your free
            trial today.
          </p>
          <Link
            to="/pricing"
            className="inline-block px-8 py-4 bg-white text-primary font-poppins font-semibold rounded-xl hover:bg-primary-light transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;
