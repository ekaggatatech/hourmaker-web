import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
  PlayCircle,
  X,
} from "lucide-react";
import Layout from "../../components/layout/Layout";
import { getFeatureBySlug, features } from "../../data/features";
import DemoModal from "../../components/DemoModal";
import ScrollReveal from "../../components/ui/ScrollReveal";
import SEO from "../../components/SEO";
import { featureSEO } from "../../config/seoConfig";

const FeatureDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const feature = getFeatureBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Prevent body scroll when video modal is open
  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVideoModalOpen]);

  if (!feature) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <div className="container">
            <h2 className="font-poppins text-2xl font-bold text-primary-dark mb-4">
              Feature Not Found
            </h2>
            <p className="text-muted-foreground mb-6">
              The feature you're looking for doesn't exist.
            </p>
            <Link
              to="/features"
              className="text-primary font-semibold hover:underline"
            >
              ← Back to Features
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const Icon = feature.icon;
  const relatedFeatures = features
    .filter((f) => f.id !== feature.id)
    .slice(0, 3);

  // YouTube video embed URL - use feature's videoId or fallback to demo video
  const videoId = feature.videoId || "FUKqIZopDGg";
  const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  // Construct image path
  const imagePath = `/assets/${feature.image}`;

  //SEO
  const seoData = featureSEO[feature.id] || {
    title: feature.title,
    description: feature.shortDescription,
    keywords: `time tracking, workforce management, ${feature.title.toLowerCase()}`,
  };
  return (
    <Layout>
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={`/features/${slug}`}
        ogType="website"
      />
      {/* Hero Section with Video and Intro in Row - Lighter background */}
      <section className="relative section-band-light py-16 lg:py-20 overflow-hidden">
        <span className="float-orb float-orb-a" aria-hidden />
        <span className="float-orb float-orb-c" aria-hidden />
        <div className="container max-w-6xl relative z-10">
          {/* SEO H1 */}
          <h1 className="sr-only">
            {feature.id === "automatic-tracking" &&
              "Smart Time Tracking Software for Teams"}
            {feature.id === "manual-tracking" &&
              "Manual Timesheet Entry & Approval System"}
            {feature.id === "attendance" &&
              "Employee Attendance Tracking System"}
            {feature.id === "onboarding" &&
              "Leave Management System for Employees"}
            {feature.id === "projects" &&
              "Project Tracking & Productivity Monitoring Tool"}
            {feature.id === "billing" &&
              "Automated Billing Management Software"}
            {feature.id === "invoicing" &&
              "Professional Invoicing Software for Businesses"}
            {feature.id === "analytics" &&
              "Workforce Analytics & Reporting Dashboard"}
            {feature.id === "holiday" && "Holiday & Calendar Management System"}
            {feature.id === "meeting-scheduling" &&
              "Smart Meeting Scheduler with Calendar Integration"}
            {feature.id === "client-management" &&
              "Client Portal & Project Management Software"}
            {feature.id === "user-management" &&
              "Centralized User Management System"}
            {feature.id === "access-management" &&
              "Role-Based Access Control & Security Management"}
            {feature.id === "docs-portal" && "Secure Cloud Document Repository"}
            {feature.id === "permission-management" &&
              "Permission Management & Access Control System"}
            {feature.id === "shift-management" &&
              "Shift Management & Scheduling System"}
            {feature.id === "holiday-management" &&
              "Holiday & Calendar Management System"}
            {feature.id === "team-management" &&
              "Team Management & Collaboration Platform"}
            {feature.id === "attendance-management" &&
              "Employee Attendance Tracking System"}
            {feature.id === "task-management" &&
              "Task Management & Project Tracking System"}
            {feature.id === "leave-management" &&
              "Leave Management System for Employees"}
            {feature.id === "project-management" &&
              "Project Tracking & Productivity Monitoring Tool"}
            {feature.id === "reporting-analytics" &&
              "Workforce Analytics & Reporting Dashboard"}
            {feature.id === "activity-management" &&
              "Activity Management & Audit Trail System"}
            {feature.id === "role-management" &&
              "Role Management & Permission Control System"}
            {feature.id === "meeting-management" &&
              "Smart Meeting Scheduler with Calendar Integration"}
            {feature.id === "communication-announcement" &&
              "Communication & Announcement Management System"}
            {feature.id === "onboarding-management" &&
              "Employee Onboarding & Recruitment Integration"}
            {feature.id === "recruitment-management" &&
              "Recruitment Management & Applicant Tracking"}
            {feature.id === "referral-management" &&
              "Employee Referral Management System"}
            {feature.id === "job-opening-management" &&
              "Job Opening Management & Tracking"}
            {feature.id === "document-management" &&
              "Secure Cloud Document Repository"}
            {feature.id === "helpdesk-support" &&
              "Helpdesk & Support Ticket Management"}
            {feature.id === "billing-management" &&
              "Billing Management & Revenue Tracking"}
            {feature.id === "company-management" &&
              "Company Management & Settings"}
            {feature.id === "dashboard" && "Dashboard & Overview Management"}
            {/* Fallback for any new features */}
            {!feature.id?.match(
              /automatic-tracking|manual-tracking|attendance|onboarding|projects|billing|invoicing|analytics|holiday|meeting-scheduling|client-management|user-management|access-management|docs-portal|permission-management|shift-management|holiday-management|team-management|attendance-management|task-management|leave-management|project-management|reporting-analytics|activity-management|role-management|meeting-management|communication-announcement|onboarding-management|recruitment-management|referral-management|job-opening-management|document-management|helpdesk-support|billing-management|company-management|dashboard/,
            ) && `${feature.title} | HourMaker Workforce Management`}
          </h1>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Intro */}
            <ScrollReveal variant="fade-right">
              <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
                {feature.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {feature.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md">
                {feature.benefits.slice(0, 3).map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-xl card-lift"
                  >
                    <div className="text-xl font-bold text-primary">
                      {benefit.title.split(" ")[0]}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {benefit.description.split(" ").slice(0, 3).join(" ")}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Request Demo
                </button>
                <Link
                  to="/pricing"
                  className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary-light transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </ScrollReveal>

            {/* Right Column - Video Thumbnail - Increased size */}
            <ScrollReveal variant="fade-left" delay={100} className="relative">
              <div
                className="relative group cursor-pointer"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl border border-white/10 img-zoom">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt={`${feature.title} - Demo Video`}
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
                      Watch Demo: {feature.title}
                    </p>
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={() => setIsVideoModalOpen(false)}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

          {/* Modal Content */}
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Container */}
            <div className="relative pt-[56.25%]">
              {" "}
              {/* 16:9 Aspect Ratio */}
              <iframe
                src={videoEmbedUrl}
                title={`${feature.title} Demo Video`}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="bg-white p-4">
              <h3 className="font-poppins font-semibold text-primary-dark">
                {feature.title} - Product Demo
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Watch how {feature.title} can transform your workforce
                management
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Key Capabilities - Left-Right Pattern with Explanations */}
      <section className="section-band-dark py-20 relative overflow-hidden">
        <span className="float-orb float-orb-b" aria-hidden />
        <span className="float-orb float-orb-c" aria-hidden />
        <div className="container max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-4">
              Key Capabilities
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10">
              Discover how {feature.title} transforms your workforce management
              with these powerful features
            </p>
          </div>

          {/* Full Size Screenshot */}
          <div className="mb-16">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/50">
              <img
                src={imagePath}
                alt={`${feature.title} screenshot`}
                className="w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/1200x600?text=Screenshot+Coming+Soon";
                }}
              />
            </div>
          </div>

          <div className="space-y-16">
            {feature.details.map((detail, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16`}
                >
                  {/* Image/Icon Side */}
                  <div className="lg:w-1/3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl transform rotate-2"></div>
                      <div className="relative bg-white rounded-2xl p-8 text-center shadow-md">
                        <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center mb-4">
                          <span className="text-2xl font-bold text-white">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="font-poppins text-xl font-semibold text-slate-900">
                          {detail.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-2/3">
                    <div className="bg-white rounded-2xl p-8 shadow-md space-y-4">
                      <h4 className="font-poppins text-2xl font-bold text-slate-900">
                        {detail.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {detail.explanation}
                      </p>

                      {/* Key benefits of this specific capability */}
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {detail.benefits?.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-band-light py-16 relative overflow-hidden">
        <span className="float-orb float-orb-a" aria-hidden />
        <div className="container max-w-5xl relative z-10">
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-primary-dark mb-12 text-center">
            Why Choose Hourmaker for {feature.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {feature.benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  {index === 0 && <Clock className="w-8 h-8 text-primary" />}
                  {index === 1 && <Users className="w-8 h-8 text-primary" />}
                  {index === 2 && (
                    <TrendingUp className="w-8 h-8 text-primary" />
                  )}
                </div>
                <h3 className="font-poppins font-semibold text-lg text-primary-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="section-band-light py-16 relative overflow-hidden">
        <span className="float-orb float-orb-b" aria-hidden />
        <div className="container max-w-6xl relative z-10">
          <ScrollReveal>
            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-primary-dark mb-12 text-center">
              Explore Related Features
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedFeatures.map((related, index) => {
              const RelatedIcon = related.icon;
              return (
                <ScrollReveal key={related.id} delay={index * 80}>
                  <Link
                    to={`/features/${related.slug}`}
                    className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-border/50 card-glow block h-full"
                  >
                    <RelatedIcon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-poppins font-semibold text-lg text-primary-dark mb-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {related.shortDescription}
                    </p>
                    <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-gradient py-16 text-white text-center relative overflow-hidden">
        <span className="float-orb float-orb-c" aria-hidden />
        <ScrollReveal className="container max-w-3xl relative z-10">
          <h2 className="font-poppins text-2xl md:text-3xl font-bold mb-4">
            Ready to get started with {feature.title}?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            See how this feature can transform your workforce management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-primary-light transition-colors"
            >
              Request Demo
            </button>
            <Link
              to="/pricing"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </Layout>
  );
};

export default FeatureDetail;
