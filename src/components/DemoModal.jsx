import React, { useState } from "react";
import { Check } from "lucide-react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenChange(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      consent: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="max-w-lg max-h-[100vh] overflow-y-auto  no-scrollbar bg-white rounded-2xl p-5">
        <div className="flex justify-evenly items-center mb-3">
          <div>
            <h2 className="font-poppins text-xl font-bold text-primary-dark text-center">
              Request a Demo
            </h2>
            <p className="text-muted-foreground text-center text-xs">
              Fill out the form and we'll get back to you within 24 hours
            </p>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 mt-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1">
                First Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-2.5 py-2 text-sm border-2 rounded-xl focus:border-primary focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">
                Last Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-2.5 py-2 text-sm border-2 rounded-xl focus:border-primary focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">
              Work Email <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-2.5 py-2 text-sm border-2 rounded-xl focus:border-primary focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">
              Company Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-2.5 py-2 text-sm border-2 rounded-xl focus:border-primary focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-2.5 py-2 text-sm border-2 rounded-xl focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">
              Tell us about your needs
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={2}
              className="w-full px-2.5 py-2 text-sm border-2 rounded-xl focus:border-primary focus:outline-none resize-none"
            />
          </div>

          {/* Consent */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="modal-consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 w-4 h-4"
              required
            />
            <label
              htmlFor="modal-consent"
              className="text-xs text-muted-foreground"
            >
              I agree to receive communications from Hourmaker.
            </label>
          </div>

          {/* T&C + Privacy */}
          <p className="text-[11px] text-muted-foreground leading-snug">
            By submitting this form, you agree to our{" "}
            <a
              href="/terms"
              className="text-primary underline hover:text-primary-dark"
            >
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a
              href="/privacy-policy"
              className="text-primary underline hover:text-primary-dark"
            >
              Privacy Policy
            </a>
            .
          </p>

          <button
            type="submit"
            className="w-full py-2.5 text-sm bg-primary text-primary-foreground font-poppins font-semibold rounded-xl hover:bg-primary-dark transition"
          >
            Schedule My Demo
          </button>
        </form>

        {/* <div className="mt-3 pt-3 border-t">
          <div className="grid grid-cols-2 gap-2">
            {[
              "Personalized Demo",
              "Expert Consultation",
              "Custom Pricing",
              "Q&A Session",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 text-[11px] text-muted-foreground"
              >
                <Check className="w-3 h-3 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DemoModal;
