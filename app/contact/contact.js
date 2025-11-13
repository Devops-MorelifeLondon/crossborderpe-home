"use client";

import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  ArrowRight,
  Award,
  Clock,
  CheckCircle,
  Github,
  Globe,
  Headphones,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Shield,
  Twitter,
  User,
  Zap,
  XCircle,
} from "lucide-react";

const heroFeatures = [
  { icon: Zap, title: "Fast Response Times" },
  { icon: Shield, title: "Secure Communication" },
  { icon: Globe, title: "Global Support Team" },
  { icon: Award, title: "Dedicated Specialists" },
];

const contactMethods = [
 
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your detailed inquiries for a swift response.",
    contact: "info@crossborderpe.com",
    availability: "Response within 2 hours",
    action: "Send Email",
    href: "mailto:info@crossborderpe.com",
  },
];

const companyStats = [
  { value: "$25B+", label: "Annual Volume" },
  { value: "50K+", label: "Active Businesses" },
  { value: "200+", label: "Countries" },
  { value: "99.99%", label: "Uptime" },
];

const officeLocations = [
  { region: "Americas", cities: "New York • Toronto • Mexico City" },
  { region: "Europe", cities: "London • Zurich • Frankfurt" },
  { region: "Asia Pacific", cities: "Singapore • Hong Kong • Tokyo" },
];

const ContactPage = () => {
  const formRef = useRef(null);
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

    if (!captchaValue) {
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
      const res = await fetch("/api/jotform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          contactNumber,
          email,
          message,
          captcha: captchaValue,
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ fullName: "", contactNumber: "", email: "", message: "" });
        recaptchaRef.current?.reset();
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
    <>
      <Head>
        <title>Contact Us | Let's Start a Conversation</title>
      </Head>

      <div className="bg-gradient-to-b from-slate-50 to-white">
        {/* ===== Hero Section ===== */}
        <section className="w-full pt-20 pb-10 mt-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* --- Left --- */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-800 mb-5 border border-blue-100">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                We're Here to Help You Succeed
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3">
                Let’s Start a <span className="text-blue-600">Conversation</span>
              </h1>
              <p className="text-slate-600 mb-8 text-lg">
                Have a question or need expert support? Fill out the form and our specialists will reach out shortly.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {heroFeatures.map((f, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <f.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{f.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Right (Form) --- */}
            <div className="bg-white rounded-lg shadow-md border border-slate-200 p-5">
              {submitStatus.message && (
                <div
                  className={`mb-3 p-2.5 rounded-md border-l-4 text-xs ${submitStatus.success
                      ? "bg-green-50 border-green-500 text-green-700"
                      : "bg-red-50 border-red-500 text-red-700"
                    }`}
                >
                  <div className="flex items-start space-x-2">
                    {submitStatus.success ? (
                      <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-red-600" />
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-3">
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
                        placeholder="How can we help you?"
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

                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={handleCaptchaChange}

                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-2 rounded-md font-medium text-xs hover:bg-blue-700 transition-all"
                >
                  {isLoading ? "Sending..." : "Send Inquiry"}
                  {!isLoading && <ArrowRight className="w-3 h-3 ml-1 inline" />}
                </button>
              </form>

              <p className="text-[10px] text-slate-500 text-center mt-2">
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Other Ways to Connect ===== */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
                Other Ways to Connect
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We're available through multiple channels. Choose the one that works best for you.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-4 w-fit mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{method.title}</h3>
                  <p className="text-slate-600 mb-4 flex-grow">{method.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="font-semibold text-slate-900">{method.contact}</div>
                    <div className="text-sm text-slate-500">{method.availability}</div>
                  </div>
                  <Link
                    href={method.href}
                    className="mt-auto w-full bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-200 transition-all"
                  >
                    {method.action}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Why Choose + Global Presence ===== */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose CrossborderPe</h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {companyStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-slate-900">Enterprise Security</span>
                </div>
                <p className="text-slate-600 text-sm">
                  Bank-grade security with PCI DSS Level 1 compliance, ensuring your transactions are always protected.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">Global Presence</h3>
              </div>
              <div className="space-y-4">
                {officeLocations.map((loc, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg"
                  >
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">{loc.region}</div>
                      <div className="text-sm text-slate-600">{loc.cities}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Final CTA ===== */}
        <section className="pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Global Payments?
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses who trust CrossborderPe for their international
                  payment needs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
             href={'https://app.crossborderpe.com'}
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
                  >
                    Open Account
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
