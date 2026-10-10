"use client";

import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Shield,
  Send,
  Loader2,
  FileCheck,
} from "lucide-react";

export default function ContactInquiryForm({
  title = "Check Your Banking Eligibility",
  subtitle = "Fill out the form below and our banking specialists will review your company structure.",
  buttonText = "Send Inquiry",
  country = "",
  compact = false,
  formId = "inquiry-form",
}) {
  const recaptchaRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (submitStatus.success || submitStatus.error) {
      const timer = setTimeout(() => {
        setSubmitStatus({
          success: false,
          error: false,
          message: "",
        });
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ success: false, error: false, message: "" });

    const { fullName, contactNumber, email, message } = formData;

    if (!fullName || !contactNumber || !email || !message) {
      setSubmitStatus({
        error: true,
        message: "Please fill in all required fields.",
      });
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus({
        error: true,
        message: "Please enter a valid email address.",
      });
      setIsLoading(false);
      return;
    }

    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (recaptchaSiteKey && !captchaValue) {
      setSubmitStatus({
        error: true,
        message: "Please verify the reCAPTCHA verification.",
      });
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/jotform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          contactNumber,
          email,
          message: country ? `[${country} Bank Account Inquiry]\n${message}` : message,
          captcha: captchaValue || "BYPASS_LOCAL_DEV",
        }),
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok && (result.success || !result.error)) {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your inquiry has been sent successfully. Our banking specialists will get back to you shortly.",
        });
        setFormData({ fullName: "", contactNumber: "", email: "", message: "" });
        recaptchaRef.current?.reset();
        setCaptchaValue(null);
      } else {
        throw new Error(result.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setSubmitStatus({
        error: true,
        message: err.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden p-6 sm:p-8">
      {/* Header */}
      <div className="border-b border-slate-100 pb-4 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-blue-600" />
            {title}
          </h3>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            Free Assessment
          </span>
        </div>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
            {subtitle}
          </p>
        )}
      </div>

      {/* Status Alerts */}
      {submitStatus.message && (
        <div
          className={`mb-4 p-3 rounded-lg border-l-4 text-xs ${
            submitStatus.success
              ? "bg-green-50 border-green-500 text-green-700"
              : "bg-red-50 border-red-500 text-red-700"
          }`}
        >
          <div className="flex items-start space-x-2">
            {submitStatus.success ? (
              <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            )}
            <span className="leading-relaxed">{submitStatus.message}</span>
          </div>
        </div>
      )}

      {/* Form */}
      <form id={formId} onSubmit={handleFormSubmit} className="space-y-4">
        {/* Full Name & Contact Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-xs sm:text-sm font-normal placeholder-slate-400"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="contactNumber"
              required
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-xs sm:text-sm font-normal placeholder-slate-400"
              placeholder="+1 555 123 4567"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Business Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-xs sm:text-sm font-normal placeholder-slate-400"
            placeholder="john@company.com"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Message & Company Background <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={compact ? 3 : 4}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-xs sm:text-sm font-normal resize-none placeholder-slate-400"
            placeholder="Tell us about your business activity, expected monthly volume, and current residency status..."
          />
        </div>

        {/* ReCAPTCHA */}
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <div className="flex justify-center pt-1 pb-1">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Security Note */}
      <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
        <Shield className="w-3.5 h-3.5 text-blue-600" />
        <span>Your information is encrypted & strictly confidential.</span>
      </div>
    </div>
  );
}
