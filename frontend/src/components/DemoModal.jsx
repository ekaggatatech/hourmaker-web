import React, { useState } from "react";
import {
  Loader2,
  CheckCircle,
  XCircle,
  AlertCircle,
  Check,
  Clock,
  Users,
  TrendingUp,
  Zap,
  X,
  ChevronDown,
  Globe,
} from "lucide-react";

const REQUEST_DEMO_URL = "https://requestdemo-lmwl7hv2za-uc.a.run.app";

const DemoModal = ({ open, onOpenChange, preselectedPlan = "pro" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    plan: preselectedPlan || "pro",
    password: "",
    confirmPassword: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Generate slug preview from company name
  const generateSlug = (companyName) => {
    return (
      String(companyName || "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 48) || "company"
    );
  };

  const slugPreview = generateSlug(formData.company);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    } else if (formData.company.trim().length < 2) {
      newErrors.company = "Company name must be at least 2 characters";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to receive communications";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare payload for the API
      const payload = {
        companyName: formData.company.trim(),
        fullName: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
        phone: formData.phone.trim() || "",
        plan: formData.plan,
        captchaToken: "", // You'll need to implement reCAPTCHA if required
      };

      // Submit to the requestDemo API
      const response = await fetch(REQUEST_DEMO_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Your demo tenant has been created successfully! Redirecting to login...",
        });

        // Redirect to login after a short delay
        setTimeout(() => {
          // Redirect to the login URL provided by the API
          if (data.loginUrl) {
            window.location.href = data.loginUrl;
          } else {
            // Fallback redirect if no loginUrl provided
            console.error("No loginUrl provided in response");
            onOpenChange(false);
          }
        }, 2000);
      } else {
        // Handle API errors
        let errorMessage = "Failed to create demo tenant. Please try again.";

        if (data.error === "email_exists") {
          errorMessage =
            "This email is already registered. Please use a different email or try logging in.";
        } else if (data.error === "rate_limited") {
          errorMessage =
            "You've already requested a demo recently. Please wait 24 hours before trying again.";
        } else if (data.error === "weak_password") {
          errorMessage = "Password must be at least 8 characters long.";
        } else if (data.error === "invalid_email") {
          errorMessage = "Please enter a valid email address.";
        } else if (data.error === "validation") {
          errorMessage = "Please check all required fields.";
        } else if (data.error === "origin_not_allowed") {
          errorMessage = "This domain is not allowed. Please contact support.";
        } else if (data.message) {
          errorMessage = data.message;
        }

        setSubmitStatus({
          type: "error",
          message: errorMessage,
        });
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "An unexpected error occurred. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after a short delay to allow animation
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        plan: preselectedPlan || "pro",
        password: "",
        confirmPassword: "",
        message: "",
        consent: false,
      });
      setErrors({});
      setSubmitStatus(null);
    }, 300);
  };

  const stats = [
    { icon: Clock, value: "40%", label: "Time Saved" },
    { icon: Users, value: "10K+", label: "Happy Users" },
    { icon: TrendingUp, value: "99%", label: "Uptime" },
  ];

  const benefits = [
    "Personalized walkthrough of all features",
    "Custom implementation strategy",
    "ROI analysis for your business",
    "Live Q&A with our product experts",
  ];

  const planOptions = [
    { value: "basic", label: "Basic" },
    { value: "pro", label: "Pro" },
    { value: "enterprise", label: "Enterprise" },
  ];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2">
      <div className="max-w-4xl w-full max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-y-scroll no-scrollbar">
        <div className="grid md:grid-cols-2 h-full">
          {/* Left Section - Visual Content (Hidden on mobile) */}
          {/* <div className="hidden md:flex relative bg-gradient-to-br from-primary via-primary-dark to-primary-dark p-4 text-primary-foreground flex-col justify-start overflow-hidden"> */}
          <div className="hidden md:flex relative bg-slate-900 p-4 text-white flex-col justify-start overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/3" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-6 h-6" />
                <span className="font-poppins font-bold text-lg">
                  HourMaker
                </span>
              </div>

              <h2 className="font-poppins text-xl font-bold mb-2">
                Transform Your Workforce Management
              </h2>
              <p className="text-primary-foreground/80 text-xs mb-5">
                Join thousands of businesses that have streamlined their
                operations with HourMaker.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="text-center p-2 bg-white/10 rounded-lg backdrop-blur-sm"
                  >
                    <stat.icon className="w-4 h-4 mx-auto mb-1 text-primary-foreground/90" />
                    <div className="font-poppins font-bold text-base">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-primary-foreground/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits List */}
            <div className="relative z-10">
              <p className="text-xs font-semibold mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                What you'll get:
              </p>
              <ul className="space-y-1.5">
                {benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-1.5 text-xs text-primary-foreground/90"
                  >
                    <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="overflow-y-auto no-scrollbar relative">
            <div className="p-3 md:p-4">
              {/* Mobile Header */}
              <div className="md:hidden flex justify-between items-start mb-3">
                <div className="pr-3">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-poppins font-bold text-lg text-primary-dark">
                      HourMaker
                    </span>
                  </div>
                  <h2 className="font-poppins text-base font-bold text-foreground mb-1">
                    Start Your Free Trial
                  </h2>
                  <p className="text-muted-foreground text-[10px]">
                    Create your account and get started in minutes
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0 mt-0.5"
                  disabled={isSubmitting}
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Desktop Header with Close Button */}
              <div className="hidden md:flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-poppins text-xl font-bold text-foreground mb-1">
                    Start Your Free Trial
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Create your account and get started in minutes
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
                  disabled={isSubmitting}
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitStatus && (
                <div
                  className={`mb-3 p-2.5 rounded-lg flex items-start gap-2 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : submitStatus.type === "warning"
                        ? "bg-yellow-50 text-yellow-800 border border-yellow-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : submitStatus.type === "warning" ? (
                    <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <span className="text-xs">{submitStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-2.5">
                {/* Name and Plan in same row */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium mb-1 text-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-2.5 py-2 text-xs border rounded-lg focus:outline-none transition-colors ${
                        errors.name
                          ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                          : "border-border focus:ring-1 focus:ring-primary/20 focus:border-primary"
                      } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                      disabled={isSubmitting}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-2.5 h-2.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1 text-foreground">
                      Select Plan <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className={`w-full px-2.5 py-2 text-xs border rounded-lg focus:outline-none transition-colors appearance-none ${
                          errors.plan
                            ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                            : "border-border focus:ring-1 focus:ring-primary/20 focus:border-primary"
                        } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                        disabled={isSubmitting}
                      >
                        {planOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                    {errors.plan && (
                      <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-2.5 h-2.5" />
                        {errors.plan}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email and Phone in same row */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium mb-1 text-foreground">
                      Work Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-2.5 py-2 text-xs border rounded-lg focus:outline-none transition-colors ${
                        errors.email
                          ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                          : "border-border focus:ring-1 focus:ring-primary/20 focus:border-primary"
                      } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                      disabled={isSubmitting}
                      placeholder="john.doe@company.com"
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-2.5 h-2.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1 text-foreground">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-2.5 py-2 text-xs border border-border rounded-lg focus:ring-1 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors ${
                        isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                      }`}
                      disabled={isSubmitting}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1 text-foreground">
                    Company Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-2.5 py-2 text-xs border rounded-lg focus:outline-none transition-colors ${
                      errors.company
                        ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                        : "border-border focus:ring-1 focus:ring-primary/20 focus:border-primary"
                    } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                    disabled={isSubmitting}
                    placeholder="Acme Inc."
                  />
                  {errors.company && (
                    <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-2.5 h-2.5" />
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* Slug Preview */}
                {formData.company.trim() && (
                  <div className="flex items-center gap-2 px-1 py-1.5 bg-muted/20 rounded-lg">
                    <Globe className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">
                      Your workspace URL:{" "}
                      <span className="font-mono text-primary-dark font-semibold">
                        {slugPreview}.hourmaker.com
                      </span>
                    </span>
                  </div>
                )}

                {/* Password and Confirm Password in same row */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium mb-1 text-foreground">
                      Password <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-2.5 py-2 text-xs border rounded-lg focus:outline-none transition-colors ${
                        errors.password
                          ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                          : "border-border focus:ring-1 focus:ring-primary/20 focus:border-primary"
                      } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                      disabled={isSubmitting}
                      placeholder="Min 8 characters"
                    />
                    {errors.password && (
                      <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-2.5 h-2.5" />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1 text-foreground">
                      Confirm Password{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-2.5 py-2 text-xs border rounded-lg focus:outline-none transition-colors ${
                        errors.confirmPassword
                          ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                          : "border-border focus:ring-1 focus:ring-primary/20 focus:border-primary"
                      } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                      disabled={isSubmitting}
                      placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && (
                      <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-2.5 h-2.5" />
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1 text-foreground">
                    Tell us about your needs
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    className={`w-full px-2.5 py-2 text-xs border border-border rounded-lg focus:ring-1 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors resize-none ${
                      isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                    disabled={isSubmitting}
                    placeholder="What would you like to learn about our platform?"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-1 p-1 bg-muted/20 rounded-lg">
                  <input
                    type="checkbox"
                    id="modal-consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className={`self-start mt-2 w-3 h-3 rounded focus:ring-1 focus:ring-primary focus:ring-offset-0 ${
                      errors.consent ? "border-red-300" : "border-border"
                    } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                    disabled={isSubmitting}
                  />
                  <div className="flex-1">
                    <label
                      htmlFor="modal-consent"
                      className="text-[11px] text-foreground cursor-pointer"
                    >
                      I agree to receive communications from Hourmaker about
                      product updates, offers, and other relevant information.
                    </label>
                    {errors.consent && (
                      <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-2.5 h-2.5" />
                        {errors.consent}
                      </p>
                    )}
                  </div>
                </div>

                {/* T&C + Privacy */}
                <p className="text-[10px] text-muted-foreground leading-snug px-0.5">
                  By creating an account, you agree to our{" "}
                  <a
                    href="/terms"
                    className="text-primary underline hover:text-primary-dark font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy-policy"
                    className="text-primary underline hover:text-primary-dark font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  . We respect your privacy and will never share your
                  information with third parties.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 text-xs bg-primary text-primary-foreground font-poppins font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-1.5 mt-1"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Creating Your Account...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-3.5 h-3.5" />
                      Start Free Trial
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
