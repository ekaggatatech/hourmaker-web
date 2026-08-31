import React, { useState } from "react";
import {
  Loader2,
  CheckCircle,
  XCircle,
  AlertCircle,
  X,
  Clock,
  Users,
  TrendingUp,
  Zap,
  Check,
  ChevronDown,
} from "lucide-react";
import { submitBookDemo } from "../services/firebaseService";

const BookDemoModal = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    purpose: "",
    preferredDate: "",
    preferredTime: "",
    specificFeatures: "",
    questions: "",
    agreeTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.purpose.trim()) {
      newErrors.purpose = "Please tell us the purpose of the demo";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please select a preferred date";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Please select a preferred time";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms";
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
      const result = await submitBookDemo(formData);

      if (result.success) {
        // Show success popup
        setShowSuccessPopup(true);

        // Clear form after successful submission
        setTimeout(() => {
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            purpose: "",
            preferredDate: "",
            preferredTime: "",
            specificFeatures: "",
            questions: "",
            agreeTerms: false,
          });
          setErrors({});
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
        fullName: "",
        email: "",
        phone: "",
        purpose: "",
        preferredDate: "",
        preferredTime: "",
        specificFeatures: "",
        questions: "",
        agreeTerms: false,
      });
      setErrors({});
      setSubmitStatus(null);
      setShowSuccessPopup(false);
    }, 300);
  };

  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    onOpenChange(false);
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        purpose: "",
        preferredDate: "",
        preferredTime: "",
        specificFeatures: "",
        questions: "",
        agreeTerms: false,
      });
      setErrors({});
      setSubmitStatus(null);
    }, 300);
  };

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2">
        <div className="max-w-4xl w-full max-h-[90vh] md:max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-y-auto">
          <div className="grid md:grid-cols-2">
            {/* Left Section - Image (Hidden on mobile) */}
            <div className="hidden md:flex relative bg-slate-900 p-6 text-white flex-col items-center justify-center overflow-hidden min-h-[600px]">
              <div className="relative w-full max-w-sm flex flex-col items-center">
                <img
                  src="/src/assets/modal_img.png"
                  alt="Book a Demo"
                  className="w-full h-auto object-contain rounded-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/600x800?text=Book+a+Demo";
                  }}
                />
                <div className="mt-6 text-center">
                  <h3 className="font-poppins text-xl font-bold text-white mb-2">
                    Schedule Your Personalized Demo
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Discover how HourMaker can transform your workforce
                    management. Our experts will guide you through the platform
                    and answer all your questions.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="relative">
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
                      Book a Demo
                    </h2>
                    <p className="text-muted-foreground text-[10px]">
                      Schedule a personalized demo with our team
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
                      Book a Demo
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Schedule a personalized demo with our team
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
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-xs">{submitStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-2.5">
                  {/* Row 1: Full Name and Phone */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-medium mb-1 text-foreground">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-2.5 py-2 text-xs border rounded-lg focus:outline-none transition-colors ${
                          errors.fullName
                            ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                            : "border-border focus:ring-1 focus:ring-primary/20 focus:border-primary"
                        } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                        disabled={isSubmitting}
                        placeholder="John Doe"
                      />
                      {errors.fullName && (
                        <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-2.5 h-2.5" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1 text-foreground">
                        Phone Number <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-2.5 py-2 text-xs border rounded-lg focus:outline-none transition-colors ${
                          errors.phone
                            ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                            : "border-border focus:ring-1 focus:ring-primary/20 focus:border-primary"
                        } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                        disabled={isSubmitting}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && (
                        <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-2.5 h-2.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email */}
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

                  {/* Purpose of Demo - Full Width */}
                  <div>
                    <label className="block text-xs font-medium mb-1 text-foreground">
                      Purpose of the Demo{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className={`w-full px-2.5 py-2 text-xs border rounded-lg focus:outline-none transition-colors ${
                        errors.purpose
                          ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                          : "border-border focus:ring-1 focus:ring-primary/20 focus:border-primary"
                      } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                      disabled={isSubmitting}
                      placeholder="e.g., Team management, Time tracking, Project billing"
                    />
                    {errors.purpose && (
                      <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-2.5 h-2.5" />
                        {errors.purpose}
                      </p>
                    )}
                  </div>

                  {/* Preferred Date and Time */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-medium mb-1 text-foreground">
                        Preferred Date{" "}
                        <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        className={`w-full px-2.5 py-2 text-xs border rounded-lg focus:outline-none transition-colors ${
                          errors.preferredDate
                            ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                            : "border-border focus:ring-1 focus:ring-primary/20 focus:border-primary"
                        } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                        disabled={isSubmitting}
                      />
                      {errors.preferredDate && (
                        <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-2.5 h-2.5" />
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1 text-foreground">
                        Preferred Time{" "}
                        <span className="text-destructive">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className={`w-full px-2.5 py-2 text-xs border rounded-lg focus:outline-none transition-colors appearance-none ${
                            errors.preferredTime
                              ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                              : "border-border focus:ring-1 focus:ring-primary/20 focus:border-primary"
                          } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                          disabled={isSubmitting}
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                      {errors.preferredTime && (
                        <p className="text-[10px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-2.5 h-2.5" />
                          {errors.preferredTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Specific Features */}
                  <div>
                    <label className="block text-xs font-medium mb-1 text-foreground">
                      Any specific features or aspects you'd like to see?
                    </label>
                    <textarea
                      name="specificFeatures"
                      value={formData.specificFeatures}
                      onChange={handleChange}
                      rows={2}
                      className={`w-full px-2.5 py-2 text-xs border border-border rounded-lg focus:ring-1 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors resize-none ${
                        isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                      }`}
                      disabled={isSubmitting}
                      placeholder="e.g., Time tracking, Project management, Billing features"
                    />
                  </div>

                  {/* Questions */}
                  <div>
                    <label className="block text-xs font-medium mb-1 text-foreground">
                      Any questions or concerns?
                    </label>
                    <textarea
                      name="questions"
                      value={formData.questions}
                      onChange={handleChange}
                      rows={2}
                      className={`w-full px-2.5 py-2 text-xs border border-border rounded-lg focus:ring-1 focus:ring-primary/20 focus:border-primary focus:outline-none transition-colors resize-none ${
                        isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                      }`}
                      disabled={isSubmitting}
                      placeholder="Any specific questions you'd like us to address during the demo?"
                    />
                  </div>

                  {/* Terms & Privacy - Checkbox */}
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="agree-terms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className={`mt-0.5 w-3.5 h-3.5 rounded focus:ring-1 focus:ring-primary focus:ring-offset-0 ${
                        errors.agreeTerms ? "border-red-300" : "border-border"
                      } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                      disabled={isSubmitting}
                    />
                    <label
                      htmlFor="agree-terms"
                      className="text-[10px] text-muted-foreground leading-snug cursor-pointer"
                    >
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
                    </label>
                  </div>
                  {errors.agreeTerms && (
                    <p className="text-[10px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-2.5 h-2.5" />
                      {errors.agreeTerms}
                    </p>
                  )}

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
                        Book My Demo
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="font-poppins text-2xl font-bold text-primary-dark mb-2">
              Thank You!
            </h3>
            <p className="text-muted-foreground text-base mb-6">
              Our team will contact you soon to schedule your personalized demo.
            </p>
            <button
              onClick={handlePopupClose}
              className="w-full py-3 bg-primary text-primary-foreground font-poppins font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookDemoModal;
