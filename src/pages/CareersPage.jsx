import { useState } from "react";
import {
  Heart,
  Zap,
  Award,
  Globe,
  MapPin,
  Upload,
  X,
  Check,
  Briefcase,
  GraduationCap,
  Clock,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import { useToast } from "../hooks/use-toast";

const jobPositions = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    location: "Bangalore / Remote",
    type: "Full-time",
    department: "Engineering",
    experience: "4-7 years",
    description:
      "Build and scale our core platform using React, Node.js, and PostgreSQL.",
  },
  {
    id: "2",
    title: "Product Designer",
    location: "Bangalore",
    type: "Full-time",
    department: "Design",
    experience: "3-5 years",
    description:
      "Design intuitive user experiences for our workforce management platform.",
  },
  {
    id: "3",
    title: "Customer Success Manager",
    location: "Remote",
    type: "Full-time",
    department: "Customer Success",
    experience: "2-4 years",
    description: "Help enterprise customers achieve success with Hourmaker.",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    location: "Bangalore / Remote",
    type: "Full-time",
    department: "Engineering",
    experience: "3-6 years",
    description:
      "Manage and scale our cloud infrastructure on AWS and Kubernetes.",
  },
  {
    id: "5",
    title: "Content Marketing Specialist",
    location: "Remote",
    type: "Full-time",
    department: "Marketing",
    experience: "2-4 years",
    description:
      "Create compelling content for our blog, case studies, and marketing campaigns.",
  },
  {
    id: "6",
    title: "Sales Development Representative",
    location: "Bangalore",
    type: "Full-time",
    department: "Sales",
    experience: "1-3 years",
    description: "Generate and qualify leads for our growing sales team.",
  },
];

const CareersPage = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolio: "",
    experience: "",
    currentCompany: "",
    noticePeriod: "",
    expectedSalary: "",
    coverLetter: "",
  });
  const [resumeFile, setResumeFile] = useState(null);

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumeFile) {
      toast({
        title: "Resume required",
        description: "Please upload your resume to continue",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Application Submitted!",
      description: `Thank you for applying for ${selectedJob?.title}. We'll review your application and get back to you within 5 business days.`,
    });
    setShowForm(false);
    setSelectedJob(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      linkedIn: "",
      portfolio: "",
      experience: "",
      currentCompany: "",
      noticePeriod: "",
      expectedSalary: "",
      coverLetter: "",
    });
    setResumeFile(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-center">
        <div className="container max-w-4xl">
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Join the <span className="text-primary">Ekaggata</span> Team
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Help us build the future of workforce management. Work with talented
            people, solve meaningful problems, and grow your career.
          </p>
        </div>
      </section>

      {/* Application Form */}
      {showForm && selectedJob && (
        <section className="py-12 bg-white border-b-2 border-primary-light">
          <div className="container max-w-3xl">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="font-poppins text-2xl font-bold text-primary-dark">
                    Apply for {selectedJob.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {selectedJob.location} • {selectedJob.type}
                  </p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      name="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Portfolio/GitHub URL
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      placeholder="https://github.com/yourprofile"
                      className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Total Experience{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors bg-white"
                      required
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-8">5-8 years</option>
                      <option value="8+">8+ years</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Current Company
                    </label>
                    <input
                      type="text"
                      name="currentCompany"
                      value={formData.currentCompany}
                      onChange={handleChange}
                      placeholder="Current or most recent employer"
                      className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Notice Period <span className="text-destructive">*</span>
                    </label>
                    <select
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors bg-white"
                      required
                    >
                      <option value="">Select notice period</option>
                      <option value="immediate">Immediate</option>
                      <option value="15-days">15 days</option>
                      <option value="30-days">30 days</option>
                      <option value="60-days">60 days</option>
                      <option value="90-days">90 days</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Expected Salary (Annual, in INR)
                  </label>
                  <input
                    type="text"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleChange}
                    placeholder="e.g., 15-20 LPA"
                    className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Resume/CV <span className="text-destructive">*</span>
                  </label>
                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary transition-colors">
                    {resumeFile ? (
                      <div className="flex items-center justify-center gap-3">
                        <Check className="w-5 h-5 text-success" />
                        <span className="text-foreground">
                          {resumeFile.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => setResumeFile(null)}
                          className="text-destructive hover:underline text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <label className="cursor-pointer">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground mb-1">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PDF, DOC, DOCX (Max 5MB)
                        </p>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Cover Letter / Why do you want to join Ekaggata?
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell us about yourself and why you're interested in this role..."
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground font-poppins font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Why Join Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Why Join Ekaggata?</h2>
            <p>
              We believe in creating an environment where you can do your best
              work
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Great Culture",
                description:
                  "Collaborative, transparent, and fun workplace where your voice matters",
              },
              {
                icon: Zap,
                title: "Rapid Growth",
                description:
                  "Learn and grow with challenging projects and mentorship from industry experts",
              },
              {
                icon: Award,
                title: "Recognition",
                description:
                  "Competitive compensation, ESOPs, and performance-based bonuses",
              },
              {
                icon: Globe,
                title: "Flexibility",
                description:
                  "Remote-friendly culture with flexible hours and work-from-anywhere options",
              },
            ].map((perk, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <perk.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-primary-dark mb-2">
                  {perk.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="section-title">
            <h2>Benefits & Perks</h2>
            <p>
              We take care of our team so they can take care of our customers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Competitive salary + ESOPs",
              "Health insurance for family",
              "Unlimited paid time off",
              "Learning & development budget",
              "Home office setup allowance",
              "Team retreats and offsites",
              "Mental health support",
              "Parental leave",
              "Referral bonuses",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 glass-card rounded-lg p-4"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Open Positions</h2>
            <p>Find your next opportunity at Ekaggata</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {jobPositions.map((job) => (
              <div
                key={job.id}
                className="glass-card rounded-xl p-6 hover:-translate-y-0.5 transition-transform duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-poppins text-lg font-semibold text-primary-dark mb-2">
                      {job.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" /> {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4" /> {job.experience}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleApply(job)}
                    className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary-dark transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="font-poppins text-2xl md:text-3xl font-bold mb-4">
            Don't See a Perfect Fit?
          </h2>
          <p className="opacity-90 mb-8">
            We're always looking for talented people. Send us your resume and
            we'll reach out when we have a suitable opening.
          </p>
          <a
            href="mailto:careers@ekaggata.in"
            className="inline-block px-8 py-4 bg-white text-primary font-poppins font-semibold rounded-xl hover:bg-primary-light transition-colors"
          >
            Email careers@ekaggata.in
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default CareersPage;
