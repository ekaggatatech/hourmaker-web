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
} from "lucide-react";
import { submitDemoRequest } from "../services/firebaseService";

const DemoModal = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
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
      // Submit to Firebase
      const result = await submitDemoRequest(formData);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your demo request has been submitted successfully. Our team will contact you within 24 hours.",
        });

        // Clear form after successful submission
        setTimeout(() => {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            phone: "",
            message: "",
            consent: false,
          });
          setErrors({});
          onOpenChange(false);
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.message ||
            "Failed to submit demo request. Please try again.",
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
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2">
      <div className="max-w-4xl w-full max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 h-full">
          {/* Left Section - Visual Content (Hidden on mobile) */}
          <div className="hidden md:flex relative bg-gradient-to-br from-primary via-primary-dark to-primary-dark p-4 text-primary-foreground flex-col justify-start overflow-hidden">
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
          <div className="overflow-y-auto no-scrollbar">
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
                    Request a Demo
                  </h2>
                  <p className="text-muted-foreground text-[10px]">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-muted-foreground hover:text-foreground p-1 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0 mt-0.5"
                  disabled={isSubmitting}
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Desktop Header */}
              <div className="hidden md:block">
                <h3 className="font-poppins text-xl font-bold text-foreground mb-1">
                  Request a Demo
                </h3>
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
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium mb-1 text-foreground">
                      First Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-2.5 py-2 text-xs border rounded-lg focus:outline-none transition-colors ${
                        errors.firstName
                          ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                          : "border-border focus:ring-1 focus:ring-primary/20 focus:border-primary"
                      } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                      disabled={isSubmitting}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-2.5 h-2.5" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1 text-foreground">
                      Last Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-2.5 py-2 text-xs border rounded-lg focus:outline-none transition-colors ${
                        errors.lastName
                          ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                          : "border-border focus:ring-1 focus:ring-primary/20 focus:border-primary"
                      } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                      disabled={isSubmitting}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-2.5 h-2.5" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

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
                  By submitting this form, you agree to our{" "}
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
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-3.5 h-3.5" />
                      Schedule My Demo
                    </>
                  )}
                </button>

                {/* Desktop Close Button */}
                <button
                  onClick={handleClose}
                  className="hidden md:block absolute top-3 right-3 text-muted-foreground hover:text-foreground p-0.5 rounded-full hover:bg-gray-100 transition-colors"
                  disabled={isSubmitting}
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
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
