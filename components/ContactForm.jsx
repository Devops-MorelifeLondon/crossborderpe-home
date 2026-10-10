"use client";

import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

export default function ContactForm({
  country = "",
  formId = "inquiry-form",
  buttonText = "Send Inquiry",
  className = "",
}) {
  const recaptchaRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: "",
    submissionID: null,
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
          submissionID: null,
        });
      }, 5000);
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

  const handleCaptchaChange = (value) => setCaptchaValue(value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ success: false, error: false, message: "" });

    const { fullName, contactNumber, email, message } = formData;

    if (!fullName || !contactNumber || !email || !message) {
      setSubmitStatus({ error: true, message: "Please fill in all fields." });
      setIsLoading(false);
      return;
    }

    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (recaptchaSiteKey && !captchaValue) {
      setSubmitStatus({ error: true, message: "Please verify the reCAPTCHA." });
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus({ error: true, message: "Invalid email address." });
      setIsLoading(false);
      return;
    }

    try {
      const payloadMessage = country
        ? `[Inquiry for ${country} Business Bank Account]\n${message}`
        : message;

      const res = await fetch("/api/jotform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          contactNumber,
          email,
          message: payloadMessage,
          captcha: captchaValue || "LOCAL_DEV_BYPASS",
        }),
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok && (result.success || !result.error)) {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully.",
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
        message: err.message || "Something went wrong. Try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md border border-slate-200 p-5 ${className}`}
    >
      {submitStatus.message && (
        <div
          className={`mb-3 p-2.5 rounded-md border-l-4 text-xs ${
            submitStatus.success
              ? "bg-green-50 border-green-500 text-green-700"
              : "bg-red-50 border-red-500 text-red-700"
          }`}
        >
          <div className="flex items-start space-x-2">
            {submitStatus.success ? (
              <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
            )}
            <span>{submitStatus.message}</span>
          </div>
        </div>
      )}

      <form id={formId} onSubmit={handleFormSubmit} className="space-y-3">
        {["fullName", "contactNumber", "email", "message"].map((field) => (
          <div key={field}>
            <label className="text-xs font-medium text-slate-700 mb-1 block capitalize">
              {field.replace(/([A-Z])/g, " $1")} *
            </label>
            {field === "message" ? (
              <textarea
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                rows={3}
                className="w-full border border-slate-300 text-black rounded-md py-1.5 px-2 text-xs resize-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
                placeholder={
                  country
                    ? `How can we help you with your ${country} business bank account?`
                    : "How can we help you?"
                }
                required
              />
            ) : (
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="w-full border border-slate-300 text-black rounded-md py-1.5 px-2 text-xs focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
                placeholder={
                  field === "email"
                    ? "you@company.com"
                    : field === "contactNumber"
                    ? "+91 0000000000"
                    : "John Doe"
                }
                required
              />
            )}
          </div>
        ))}

        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded-md font-medium text-xs hover:bg-blue-700 transition-all cursor-pointer disabled:opacity-60 flex items-center justify-center gap-1"
        >
          {isLoading ? "Sending..." : buttonText}
          {!isLoading && <ArrowRight className="w-3 h-3 ml-1 inline" />}
        </button>
      </form>

      <p className="text-[10px] text-slate-500 text-center mt-2">
        Your information is secure and will only be used to respond to your inquiry.
      </p>
    </div>
  );
}
