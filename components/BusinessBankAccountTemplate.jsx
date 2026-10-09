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
  HelpCircle,
  AlertCircle,
  Clock,
  Briefcase,
  Store,
  Layers,
  Check,
  Plane,
  X,
  AlertTriangle,
  ExternalLink,
  Zap,
} from "lucide-react";
import ContactInquiryForm from "./ContactInquiryForm";

export default function BusinessBankAccountTemplate({ countryData }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [faqSearch, setFaqSearch] = useState("");

  if (!countryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-slate-200">
          <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Page Data Unavailable</h2>
          <p className="text-slate-600 mb-6">Could not load banking account information for this region.</p>
          <Link href="/" className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const {
    country,
    hero,
    howWeOpen,
    comparisonMatrix,
    audience,
    process,
    pricing,
    nonResident,
    faqs,
    disclaimer,
  } = countryData;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    const el = document.getElementById("hero-inquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredFaqs = faqs.filter(
    (item) =>
      item.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      item.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* =========================================================================
          HERO SECTION
      ========================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-28 pb-16 sm:pb-24 border-b border-slate-200/80">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-indigo-100 blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Left Column: Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Tier-1 Commercial Banks & Digital Alternatives</span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                {hero.h1}
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {hero.subHeadline}
              </p>

              {/* Primary CTA button for mobile / quick scroll */}
              <div className="pt-2">
                <button
                  onClick={scrollToForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>
                    {typeof hero.ctaButton === "string"
                      ? hero.ctaButton
                      : hero.ctaButton?.label ||
                        hero.ctaButton?.button_text ||
                        "Check my eligibility (free)"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Bullets */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                {hero.trustBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Partner Mention */}
              {hero.partnerStatement && (
                <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
                  <div className="flex items-center gap-2 font-semibold text-slate-800 mb-1">
                    <Landmark className="w-4 h-4 text-blue-600" />
                    <span>Banking Institutions & Digital Networks</span>
                  </div>
                  <p>{hero.partnerStatement}</p>
                </div>
              )}
            </div>

            {/* Right Column: Hero Contact / Eligibility Form */}
            <div id="hero-inquiry-form" className="lg:col-span-5">
              <ContactInquiryForm
                title="Check Your Eligibility"
                subtitle="Complete our pre-assessment check to determine your placement strategy."
                buttonText="Check My Eligibility (Free)"
                country={country}
                formId="hero-form"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW WE OPEN YOUR BUSINESS BANK ACCOUNT (DUAL-TRACK)
      ========================================================================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Dual-Track Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              {howWeOpen.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              {howWeOpen.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Track A */}
            <div className="relative rounded-2xl bg-gradient-to-b from-blue-50/70 to-white border-2 border-blue-200 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white mb-6">
                  <Landmark className="w-3.5 h-3.5" />
                  <span>PRIMARY ROUTE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  {howWeOpen.trackA.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {howWeOpen.trackA.description}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-100 flex items-center justify-between text-xs font-semibold text-blue-700">
                <span>Tier-1 Underwriting Compliant</span>
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
            </div>

            {/* Track B */}
            <div className="relative rounded-2xl bg-gradient-to-b from-indigo-50/70 to-white border-2 border-indigo-200 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white mb-6">
                  <Zap className="w-3.5 h-3.5" />
                  <span>CONTINGENCY ROUTE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  {howWeOpen.trackB.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {howWeOpen.trackB.description}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-indigo-100 flex items-center justify-between text-xs font-semibold text-indigo-700">
                <span>Pre-Approved EMI Rails</span>
                <Layers className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPARISON MATRIX TABLE
      ========================================================================== */}
      {comparisonMatrix.headers.length > 0 && comparisonMatrix.rows.length > 0 && (
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
                Side-by-Side Review
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                {comparisonMatrix.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {comparisonMatrix.intro}
              </p>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200">
                      {comparisonMatrix.headers.map((header, idx) => (
                        <th
                          key={idx}
                          className="py-4 px-4 sm:px-6 font-bold text-slate-900 whitespace-nowrap"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {comparisonMatrix.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={`hover:bg-blue-50/40 transition-colors ${
                          rIdx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                        }`}
                      >
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`py-4 px-4 sm:px-6 text-slate-700 ${
                              cIdx === 0 ? "font-semibold text-slate-900" : ""
                            }`}
                          >
                            {cell}
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
          WHO OUR SERVICE IS FOR
      ========================================================================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Applicant Profiles
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              {audience.title}
            </h2>
          </div>

          {/* 3 Personas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {audience.profiles.map((profile, idx) => {
              const icons = [Briefcase, Store, Globe];
              const IconComp = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {profile.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Who this isn't for & Cross-sell */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Who this isn't for */}
            <div className="p-7 rounded-2xl bg-amber-50/60 border border-amber-200 text-amber-950">
              <div className="flex items-center gap-2 mb-3 font-bold text-amber-900 text-base">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <h4>Who this service is not for</h4>
              </div>
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed whitespace-pre-line">
                {audience.whoNotFor}
              </p>
            </div>

            {/* Incorporation cross-sell */}
            <div className="p-7 rounded-2xl bg-blue-50/60 border border-blue-200 text-blue-950">
              <div className="flex items-center gap-2 mb-3 font-bold text-blue-900 text-base">
                <Building2 className="w-5 h-5 text-blue-600 shrink-0" />
                <h4>Need to incorporate your entity first?</h4>
              </div>
              <p className="text-xs sm:text-sm text-blue-900/90 leading-relaxed mb-4">
                {audience.crossSell}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 underline"
              >
                <span>Consult on Company Formation & Structuring</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STEP-BY-STEP PROCESS
      ========================================================================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Structured Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              {process.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.steps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-white border border-slate-200 p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black text-blue-600/30 mb-3 tracking-tighter">
                    {step.stepNumber}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
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

      {/* =========================================================================
          PRICING TRANSPARENCY
      ========================================================================== */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
            Engagement Terms
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            {pricing.title}
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-left sm:text-center">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {pricing.content}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NON-RESIDENT FOCUS & REGIONAL COVERAGE
      ========================================================================== */}
      {nonResident.content && (
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
                Cross-Border Global Reach
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                {nonResident.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {nonResident.content}
              </p>
            </div>

            {nonResident.regions.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {nonResident.regions.map((reg, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <h4 className="font-bold text-slate-900 text-sm">{reg.region}</h4>
                    </div>
                    {reg.countries && (
                      <p className="text-xs text-slate-600 leading-relaxed">{reg.countries}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* =========================================================================
          FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)
      ========================================================================== */}
      {faqs.length > 0 && (
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
                Clear Answers
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Everything you need to know about our business banking applications and compliance requirements.
              </p>

              {/* FAQ Search */}
              <div className="mt-8 relative max-w-md mx-auto">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search questions (e.g., remote, documents, timeline)..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span className="font-semibold text-slate-900 text-sm sm:text-base">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? "transform rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
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
          BOTTOM CONSULTATION / INQUIRY SECTION
      ========================================================================== */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Start Your Application
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Speak with a Cross-Border Banking Specialist
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Submit your inquiry below and we will audit your corporate footprint for banking clearance.
            </p>
          </div>

          <ContactInquiryForm
            title="Banking Pre-Assessment Check"
            subtitle="Send your inquiry directly to our corporate onboarding team."
            buttonText="Submit Banking Inquiry"
            country={country}
            formId="bottom-form"
          />
        </div>
      </section>

      {/* =========================================================================
          REGULATORY AND LEGAL DISCLAIMER
      ========================================================================== */}
      <footer className="py-12 bg-slate-900 text-slate-400 text-xs leading-relaxed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 mb-4">
            <Shield className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
            <h4 className="font-bold text-slate-200 text-sm">Regulatory Notice & Disclaimer</h4>
          </div>
          <p className="text-slate-400">{disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}
