"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Landmark,
  Shield,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Search,
  Globe,
  FileCheck,
  AlertCircle,
  Briefcase,
  Layers,
  Check,
  X,
  AlertTriangle,
  Zap,
  CreditCard,
  Send,
  Loader2,
  Clock,
  Compass,
  ArrowUpRight,
} from "lucide-react";

export default function BusinessBankAccountTemplate({ countryData }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [faqSearch, setFaqSearch] = useState("");

  // Dynamic form state
  const [formState, setFormState] = useState({});
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  if (!countryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
        <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-200 max-w-md mx-4">
          <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-xl font-medium text-slate-900 mb-2">Page Data Unavailable</h2>
          <p className="text-slate-600 mb-6 text-sm font-normal">Could not load banking account information for this region.</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const {
    country,
    hero,
    howWeWork,
    landscape,
    matrix,
    audience,
    formation,
    process: processData,
    nonResident,
    globalReach,
    faqs,
    leadForm,
    disclaimer,
  } = countryData;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    const el = document.getElementById("lead-capture-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError("");

    try {
      const payload = {
        country,
        ...formState,
      };

      const res = await fetch("/api/eligibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setFormSubmitted(true);
      } else {
        const errorData = await res.json().catch(() => ({}));
        setFormError(errorData.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setFormSubmitted(true);
    } finally {
      setFormLoading(false);
    }
  };

  const filteredFaqs = (faqs || []).filter(
    (item) =>
      item.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      item.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const cleanFormationText = (text) => {
    if (!text) return "";
    return text.replace(/\[Link to [^\]]+\]/gi, "our corporate formation and governance services");
  };

  const renderBadge = (cellText) => {
    const lower = String(cellText || "").toLowerCase();
    if (lower.startsWith("yes") || lower.includes("100% remote") || lower.includes("available")) {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
          {cellText}
        </span>
      );
    }
    if (lower.startsWith("no") || lower.includes("not accepted") || lower.includes("restricted")) {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200">
          {cellText}
        </span>
      );
    }
    if (lower.includes("case") || lower.includes("conditional") || lower.includes("confirm") || lower.includes("partial")) {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
          {cellText}
        </span>
      );
    }
    return <span className="font-normal">{cellText}</span>;
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      {/* =========================================================================
          1. HERO SECTION (CLEAN, AIRY, LIGHT LUXURY AESTHETIC - NO THICK FONTS)
      ========================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/40 pt-28 pb-16 sm:pb-24 border-b border-slate-200/80">
        <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-indigo-100/60 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Country Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/70 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{country} Corporate Banking & Settlement</span>
              </div>

              {/* H1 Headline - Refined Light/Normal Weight */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 leading-[1.2]">
                {hero.h1}
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light sm:font-normal">
                {hero.subheading}
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{hero.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-all text-center"
                >
                  <span>Speak with a Specialist</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              {/* Trust Badges */}
              {hero.trustBadges && hero.trustBadges.length > 0 && (
                <div className="pt-6 border-t border-slate-200 space-y-2.5">
                  {hero.trustBadges.map((badge, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {badge}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Hero Quick Eligibility Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.06)] relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-slate-900">Pre-Assessment Eligibility</h3>
                    <p className="text-xs text-slate-500 font-normal">Free compliance review for {country}</p>
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="text-center py-10 space-y-3">
                    <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-medium text-slate-900">Inquiry Received</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal">
                      Our corporate banking onboarding desk will review your details and contact you within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {formError && (
                      <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-normal">
                        {formError}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g. Michael Smith"
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition font-normal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Corporate Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="founder@company.com"
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition font-normal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Country of Residence <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="countryOfResidence"
                        required
                        placeholder="Your country of tax residence"
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition font-normal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Do you have a registered company in {country}?
                      </label>
                      <select
                        name="hasCompany"
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition font-normal"
                      >
                        <option value="Yes">Yes, registered entity exists</option>
                        <option value="No">No, require company setup first</option>
                        <option value="In Progress">Registration currently in progress</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                    >
                      {formLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Verifying Profile...</span>
                        </>
                      ) : (
                        <>
                          <span>Check My Eligibility (Free)</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center pt-1 font-normal">
                      Zero approval guarantees: 100% compliant execution.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. HOW WE STREAMLINE OPENING
      ========================================================================== */}
      {howWeWork && (
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2 block">
                Execution Framework
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight">
                {howWeWork.title}
              </h2>
              {howWeWork.description && (
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light sm:font-normal">
                  {howWeWork.description}
                </p>
              )}
            </div>

            {howWeWork.features && howWeWork.features.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {howWeWork.features.map((feat, idx) => {
                  const icons = [FileCheck, Landmark, ShieldCheck, Compass, Briefcase, Zap];
                  const IconComp = icons[idx % icons.length];
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/90 bg-white p-8 shadow-xs hover:shadow-md hover:border-blue-200 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-medium text-slate-900 mb-2">
                        {feat.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {feat.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}

      {/* =========================================================================
          3. BANKING LANDSCAPE (TRADITIONAL VS DIGITAL)
      ========================================================================== */}
      {landscape && (landscape.traditionalBanks || landscape.digitalPlatforms) && (
        <section className="py-20 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2 block">
                Institutional Landscape
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight">
                {landscape.title}
              </h2>
              {landscape.overview && (
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light sm:font-normal">
                  {landscape.overview}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Traditional Commercial Banks */}
              {landscape.traditionalBanks && (
                <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 mb-6 border border-slate-200">
                      <Landmark className="w-3.5 h-3.5 text-blue-600" />
                      <span>TRADITIONAL COMMERCIAL CLEARING BANKS</span>
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">
                      {landscape.traditionalBanks.title || "Traditional Commercial Banks"}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                      {landscape.traditionalBanks.description}
                    </p>

                    {landscape.traditionalBanks.strengths && landscape.traditionalBanks.strengths.length > 0 && (
                      <div className="space-y-2 mb-5">
                        <span className="text-xs font-medium uppercase tracking-wider text-slate-500 block">
                          Key Strengths:
                        </span>
                        {landscape.traditionalBanks.strengths.map((str, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-normal">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{str}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {landscape.traditionalBanks.limitations && landscape.traditionalBanks.limitations.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-xs font-medium uppercase tracking-wider text-slate-500 block">
                          Onboarding Realities:
                        </span>
                        {landscape.traditionalBanks.limitations.map((lim, lIdx) => (
                          <div key={lIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-normal">
                            <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span>{lim}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {landscape.traditionalBanks.bestFor && (
                    <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-normal">
                      <span className="text-slate-700 font-medium">Primary Fit:</span> {landscape.traditionalBanks.bestFor}
                    </div>
                  )}
                </div>
              )}

              {/* Digital Platforms / FinTechs */}
              {landscape.digitalPlatforms && (
                <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium bg-indigo-50 text-indigo-700 mb-6 border border-indigo-100">
                      <Zap className="w-3.5 h-3.5 text-indigo-600" />
                      <span>REGULATED DIGITAL BUSINESS PLATFORMS</span>
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">
                      {landscape.digitalPlatforms.title || "Regulated Digital Platforms & EMIs"}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                      {landscape.digitalPlatforms.description}
                    </p>

                    {landscape.digitalPlatforms.strengths && landscape.digitalPlatforms.strengths.length > 0 && (
                      <div className="space-y-2 mb-5">
                        <span className="text-xs font-medium uppercase tracking-wider text-slate-500 block">
                          Key Strengths:
                        </span>
                        {landscape.digitalPlatforms.strengths.map((str, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-normal">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{str}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {landscape.digitalPlatforms.limitations && landscape.digitalPlatforms.limitations.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-xs font-medium uppercase tracking-wider text-slate-500 block">
                          Onboarding Realities:
                        </span>
                        {landscape.digitalPlatforms.limitations.map((lim, lIdx) => (
                          <div key={lIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-normal">
                            <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span>{lim}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {landscape.digitalPlatforms.bestFor && (
                    <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-normal">
                      <span className="text-slate-700 font-medium">Primary Fit:</span> {landscape.digitalPlatforms.bestFor}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          4. PROVIDER COMPARISON MATRIX
      ========================================================================== */}
      {matrix && matrix.headers && matrix.headers.length > 0 && matrix.rows && matrix.rows.length > 0 && (
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2 block">
                Side-by-Side Review
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight">
                {matrix.title}
              </h2>
              {matrix.disclaimer && (
                <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed font-light sm:font-normal">
                  {matrix.disclaimer}
                </p>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-xs border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                      {matrix.headers.map((header, idx) => (
                        <th
                          key={idx}
                          className="py-3.5 px-4 sm:px-6 font-medium text-xs uppercase tracking-wider whitespace-nowrap text-slate-600"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {matrix.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={`hover:bg-blue-50/30 transition-colors ${
                          rIdx % 2 === 1 ? "bg-slate-50/40" : "bg-white"
                        }`}
                      >
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`py-4 px-4 sm:px-6 text-slate-700 leading-relaxed ${
                              cIdx === 0 ? "font-medium text-slate-900" : "font-normal"
                            }`}
                          >
                            {renderBadge(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          5. WHO THIS SERVICE IS FOR VS NOT FOR
      ========================================================================== */}
      {audience && (
        <section className="py-20 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2 block">
                Suitability Evaluation
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight">
                {audience.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Who this is for */}
              <div className="rounded-2xl border border-emerald-200 bg-white p-8 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-medium text-slate-900">Who This Service Is For</h3>
                </div>
                <div className="space-y-3.5">
                  {audience.forPoints && audience.forPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <Check className="w-3 h-3" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who this is NOT for */}
              <div className="rounded-2xl border border-rose-200 bg-white p-8 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center border border-rose-200">
                    <X className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-medium text-slate-900">Who This Service Is Not For</h3>
                </div>
                <div className="space-y-3.5">
                  {audience.notForPoints && audience.notForPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                        <X className="w-3 h-3" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          6. COMPANY FORMATION CROSS-SELL (CLEAN LIGHT CARD)
      ========================================================================== */}
      {formation && (
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/60 border border-blue-200 p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                  <Building2 className="w-3.5 h-3.5 text-blue-700" />
                  <span>Entity Incorporation First</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-slate-900">
                  {formation.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-light sm:font-normal">
                  {cleanFormationText(formation.body)}
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium text-xs sm:text-sm hover:bg-blue-700 transition-colors shadow-sm text-center"
                >
                  Consult on Entity Formation
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          7. STEP-BY-STEP APPLICATION PROCESS (LIGHT WEIGHT NUMERALS & TITLES)
      ========================================================================== */}
      {processData && processData.steps && processData.steps.length > 0 && (
        <section className="py-20 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2 block">
                Roadmap
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight">
                {processData.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processData.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl bg-white border border-slate-200 p-7 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="text-3xl font-light text-blue-500/40 mb-3 tracking-normal">
                      {step.stepNumber}
                    </div>
                    <h3 className="text-sm sm:text-base font-medium text-slate-900 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          8. NON-RESIDENT FOCUS & GLOBAL REACH
      ========================================================================== */}
      {nonResident && nonResident.content && (
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2 block">
                Cross-Border Founders
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight">
                {nonResident.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light sm:font-normal">
                {nonResident.content}
              </p>
            </div>

            {/* Global Reach Examples */}
            {globalReach && globalReach.regions && globalReach.regions.length > 0 && (
              <div>
                <div className="text-center mb-10">
                  <h3 className="text-lg font-medium text-slate-900">
                    {globalReach.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                    {globalReach.claim}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {globalReach.regions.map((reg, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-xl bg-slate-50/70 border border-slate-200 shadow-xs hover:bg-white hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2 font-medium text-slate-900 text-sm">
                        <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                        <h4>{reg.region}</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {reg.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* =========================================================================
          9. FREQUENTLY ASKED QUESTIONS (FAQ SEARCH + ACCORDION)
      ========================================================================== */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2 block">
                Clear Answers
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm text-slate-600 font-light sm:font-normal">
                Everything you need to know about opening a corporate business bank account in {country}.
              </p>

              {/* FAQ Search */}
              <div className="mt-8 relative max-w-md mx-auto">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search questions (e.g. remote, EIN, documents)..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white shadow-xs font-normal"
                />
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span className="font-medium text-slate-900 text-sm sm:text-base">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? "transform rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          10. BOTTOM LEAD CAPTURE FORM SECTION (LIGHT EXECUTIVE THEME)
      ========================================================================== */}
      <section id="lead-capture-section" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-wider text-blue-600 mb-2 block">
              Application Initiation
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 tracking-tight">
              {leadForm.title}
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto font-light sm:font-normal">
              {leadForm.description}
            </p>
          </div>

          <div className="bg-slate-50/70 rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-medium text-slate-900">Application Received</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto font-normal">
                  Thank you. Our compliance team will audit your company profile and respond with verified banking routes within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {formError && (
                  <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-normal">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Jane Doe"
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition font-normal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5">
                      Corporate Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="founder@company.com"
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition font-normal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5">
                      Country of Residence <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="countryOfResidence"
                      required
                      placeholder="e.g. United Kingdom, Singapore, Germany"
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition font-normal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5">
                      Do you have a registered company in {country}? <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="hasCompany"
                      required
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition font-normal"
                    >
                      <option value="Yes">Yes, registered entity exists</option>
                      <option value="No">No, need incorporation assistance</option>
                      <option value="Pending">Registration in progress</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5">
                      Primary Business Activity
                    </label>
                    <select
                      name="businessType"
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition font-normal"
                    >
                      <option value="Software / SaaS">Software / SaaS / Technology</option>
                      <option value="E-Commerce / Retail">E-Commerce / Amazon / Shopify</option>
                      <option value="Consulting / Professional Services">Consulting / Agency / Services</option>
                      <option value="Trading / Import & Export">Trading / Import & Export</option>
                      <option value="Holding Company / Investments">Holding Company / Investments</option>
                      <option value="Other Commercial Activities">Other Commercial Activities</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5">
                      Expected Monthly Turnover
                    </label>
                    <select
                      name="monthlyTurnover"
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition font-normal"
                    >
                      <option value="Under $25,000">Under $25,000 / month</option>
                      <option value="$25,000 - $100,000">$25,000 - $100,000 / month</option>
                      <option value="$100,000 - $500,000">$100,000 - $500,000 / month</option>
                      <option value="Over $500,000">Over $500,000 / month</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">
                    Optional Message or Specific Provider Preferences
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Provide details regarding target financial institutions, entity type, or cross-border payment requirements..."
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition font-normal"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formLoading}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {formLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Eligibility Request...</span>
                    </>
                  ) : (
                    <>
                      <span>{leadForm.submitButtonText || "Check My Eligibility (Free)"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. REGULATORY & LEGAL DISCLAIMER (LIGHT PALETTE)
      ========================================================================== */}
      <footer className="py-12 bg-slate-100/90 text-slate-500 text-xs leading-relaxed border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 mb-3">
            <Shield className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
            <h4 className="font-medium text-slate-700 text-sm">Regulatory Notice & Disclaimer</h4>
          </div>
          <p className="text-slate-600 leading-relaxed font-normal">{disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}
