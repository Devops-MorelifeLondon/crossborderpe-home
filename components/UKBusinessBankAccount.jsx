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
  Send,
  HelpCircle,
  AlertCircle,
  Clock,
  Briefcase,
  Store,
  Layers,
  Check,
  Plane,
  X,
  Mail,
  AlertTriangle,
  XCircle,
  ExternalLink,
} from "lucide-react";

export default function UKBusinessBankAccount() {
  // FAQ accordion state & search
  const [openFaq, setOpenFaq] = useState(null);
  const [faqSearch, setFaqSearch] = useState("");

  // Eligibility Pre-Assessment Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryOfResidence: "",
    hasUkCompany: "Yes",
    businessType: "",
    monthlyTurnover: "",
    message: "",
  });

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    const el = document.getElementById("eligibility-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!formData.name || !formData.email || !formData.countryOfResidence) {
      setFormError("Please fill in your Name, Email, and Country of residence.");
      return;
    }

    setFormSubmitting(true);

    try {
      const res = await fetch("/api/eligibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
      setFormSubmitting(false);
    }
  };

  const comparisonData = [
    {
      provider: "HSBC",
      type: "High-Street Bank",
      nonResident: "Case by case; stricter checks",
      remote: "Partly; some steps may need a video call or branch visit",
      ukCompanyAddress: "Usually a UK-registered company and UK address",
      timeline: "Several weeks",
      status: "case-by-case",
    },
    {
      provider: "Barclays",
      type: "High-Street Bank",
      nonResident: "Case by case; stricter checks",
      remote: "Partly; varies by profile",
      ukCompanyAddress: "Usually a UK-registered company",
      timeline: "Several weeks",
      status: "case-by-case",
    },
    {
      provider: "Revolut Business",
      type: "Digital Account / EMI",
      nonResident: "Often, subject to eligibility",
      remote: "Yes",
      ukCompanyAddress: "UK company typically required for a UK account",
      timeline: "Days to a couple of weeks",
      status: "accepted",
    },
    {
      provider: "Wise Business",
      type: "Digital Account / EMI",
      nonResident: "Yes, subject to eligibility",
      remote: "Yes",
      ukCompanyAddress: "Requirements vary by business type",
      timeline: "Hours to several days",
      status: "accepted",
    },
    {
      provider: "Tide",
      type: "Digital Business Account",
      nonResident: "Possible, subject to eligibility",
      remote: "Yes",
      ukCompanyAddress: "UK-registered company",
      timeline: "Days to a couple of weeks",
      status: "accepted",
    },
    {
      provider: "Starling Bank",
      type: "Digital Bank",
      nonResident: "No; UK-resident director required",
      remote: "Yes",
      ukCompanyAddress: "UK-registered company and UK-resident director",
      timeline: "Days to a couple of weeks",
      status: "resident-only",
    },
    {
      provider: "Monzo Business",
      type: "Digital Bank",
      nonResident: "No; UK-resident director required",
      remote: "Yes",
      ukCompanyAddress: "UK-registered company and UK-resident director",
      timeline: "Days to a couple of weeks",
      status: "resident-only",
    },
  ];

  const regionsData = [
    {
      region: "North America",
      countries: ["United States", "Canada"],
    },
    {
      region: "Europe",
      countries: [
        "Germany",
        "France",
        "Netherlands",
        "Ireland",
        "Spain",
        "Italy",
        "Switzerland",
      ],
    },
    {
      region: "Middle East",
      countries: ["United Arab Emirates", "Saudi Arabia", "Turkey", "Israel"],
    },
    {
      region: "Asia-Pacific",
      countries: [
        "India",
        "Singapore",
        "Hong Kong",
        "Australia",
        "Japan",
        "Malaysia",
      ],
    },
    {
      region: "Offshore jurisdictions",
      countries: [
        "British Virgin Islands",
        "Cayman Islands",
        "Seychelles",
        "Jersey",
        "Gibraltar",
      ],
    },
  ];

  const faqs = [
    {
      q: "Can I open a UK business bank account remotely?",
      a: "Often, yes. Digital providers such as Wise, Revolut Business and Tide usually offer fully online onboarding. Some high-street banks, including HSBC and Barclays, may require a video call or in-person step depending on your profile.",
    },
    {
      q: "Can a non-resident open a UK business bank account?",
      a: "Yes, in many cases, but options are narrower. Some high-street banks consider non-resident directors case by case, and providers such as Wise, Revolut Business and Tide may be available. Approval is never guaranteed.",
    },
    {
      q: "Why is it harder for non-residents to open a UK business account?",
      a: "Banks apply stricter anti-money-laundering checks to overseas directors and owners. They need to verify identity, source of funds and the commercial reason for a UK account, which takes more documentation.",
    },
    {
      q: "What happens if HSBC, Barclays or another major bank rejects my application?",
      a: "We review the reason, then move to a digital alternative that fits your profile, such as Wise, Revolut Business or Tide. Some applications may not be eligible for any option.",
    },
    {
      q: "Which high-street banks do you apply to first?",
      a: "We target leading UK banks first, including HSBC, Barclays, Lloyds Bank, NatWest and Santander, depending on your residency, business type and documents.",
    },
    {
      q: "What is the difference between a traditional bank and an EMI?",
      a: "A traditional bank is a licensed deposit-taker, typically offering lending and wider services. An EMI such as Wise or Revolut issues e-money and holds funds safeguarded rather than lent out, and is usually faster and more flexible to open.",
    },
    {
      q: "Can Monzo Business or Starling Bank accept non-resident directors?",
      a: "No. Monzo Business and Starling Bank require a UK-resident director, so we don't offer them to non-resident founders.",
    },
    {
      q: "Do I need a UK company to open a UK business bank account?",
      a: "Usually, yes. Most UK banks and providers require a UK-registered company. If you don't have one, we can help you incorporate first.",
    },
    {
      q: "How long does it take to open a UK business bank account?",
      a: "Digital providers can take hours to a couple of weeks. High-street banks often take several weeks. Timelines depend on document quality and the bank's due diligence, and are not guaranteed.",
    },
    {
      q: "What documents are required?",
      a: "Typically: passport or ID for each director and owner, proof of address, company registration details, ownership structure, and a description of your business and expected activity. Banks may request more.",
    },
    {
      q: "What KYC and AML checks should I expect?",
      a: "Banks verify who owns and controls the business, where your funds come from, and what you'll use the account for. Expect questions about your customers, suppliers and expected volumes.",
    },
    {
      q: "Does the director have to complete onboarding personally?",
      a: "Sometimes. Some banks require the director to complete identity verification or digital onboarding themselves. We prepare, manage and submit (where permitted) the rest on your behalf.",
    },
    {
      q: "Can you guarantee my account will be approved?",
      a: "No. Banks and providers make the final decision. We improve the quality and readiness of your application and plan alternatives.",
    },
    {
      q: "Which business entities are eligible?",
      a: "UK limited companies are the most common. Some providers also accept sole traders, LLPs or overseas companies, depending on their own policies.",
    },
    {
      q: "Can I get a multi-currency business account?",
      a: "Yes, with certain providers. Wise, Revolut Business and some high-street banks offer multi-currency features, though fees and supported currencies vary.",
    },
    {
      q: "Can I open an account for an e-commerce or online business?",
      a: "Often, yes, provided the business model is clear and compliant. Be ready to explain your products, suppliers, payment processors and expected volumes.",
    },
    {
      q: "Can an overseas company open a UK business account?",
      a: "Sometimes. It depends on the provider and corporate structure. Banks typically want detailed ownership documents and a clear reason for needing a UK account.",
    },
    {
      q: "Which industries are considered high-risk?",
      a: "Banks commonly restrict or decline areas such as certain crypto, gambling, adult content, and some money-transfer or trading businesses. If your sector is restricted, we'll tell you honestly.",
    },
    {
      q: "Can I get an account if I have no UK address?",
      a: "Possibly with some digital providers, but many require a UK company address or UK presence. We'll check what applies to your situation.",
    },
    {
      q: "Is your service free?",
      a: "The eligibility check is free. Our fees for application preparation and management are explained under pricing, and bank or provider fees are separate.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      item.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const countriesList = [
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Netherlands",
    "Ireland",
    "Spain",
    "Italy",
    "Switzerland",
    "United Arab Emirates",
    "Saudi Arabia",
    "Turkey",
    "Israel",
    "India",
    "Singapore",
    "Hong Kong",
    "Japan",
    "Malaysia",
    "British Virgin Islands",
    "Cayman Islands",
    "Seychelles",
    "Jersey",
    "Gibraltar",
    "Austria",
    "Belgium",
    "Brazil",
    "Bulgaria",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Egypt",
    "Estonia",
    "Finland",
    "Greece",
    "Hungary",
    "Indonesia",
    "Kuwait",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Mexico",
    "New Zealand",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "South Africa",
    "South Korea",
    "Sweden",
    "Thailand",
    "Vietnam",
    "Other Country",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 pt-20">
      {/* =========================================================================
          HERO SECTION
      ========================================================================== */}
      <section className="bg-gradient-to-b from-slate-50 via-slate-50 to-white pt-10 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column - Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-sm font-semibold text-blue-800 border border-blue-100 shadow-sm">
                <Shield className="w-4 h-4 mr-2 text-blue-600" />
                <span>UK Business Bank Account Application Management</span>
              </div>

              {/* H1 */}
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                Open a UK Business Bank Account
              </h1>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
                Whether you live in the UK or run your company from overseas, we
                audit your documents, prepare and manage your application, and
                submit it where the bank allows. We start with high-street banks
                and have a realistic digital backup plan if they say no.
              </p>

              {/* CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={scrollToForm}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <span>Check my eligibility (free)</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="text-sm text-slate-500 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Free pre-assessment & prompt response</span>
                </div>
              </div>

              {/* Trust Bullets */}
              <div className="pt-6 border-t border-slate-200 space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-blue-700" />
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                    <strong className="font-semibold text-slate-900">
                      Pre-vetted compliance:
                    </strong>{" "}
                    your documents are reviewed before any bank sees them
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-blue-700" />
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                    <strong className="font-semibold text-slate-900">
                      Realistic backup plans:
                    </strong>{" "}
                    if a high-street bank declines, we move you to a suitable
                    digital alternative
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-blue-700" />
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                    <strong className="font-semibold text-slate-900">
                      Remote opening where possible:
                    </strong>{" "}
                    many applications can be completed without travelling to the
                    UK
                  </p>
                </div>
              </div>

              {/* Intro / Providers note */}
              <div className="pt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  We prepare applications for high-street banks such as HSBC,
                  Barclays, Lloyds Bank, NatWest and Santander, and match you with
                  digital providers such as Revolut Business, Wise, Tide, Monzo
                  Business and Starling Bank where your profile fits.
                </p>
                <p className="text-sm font-medium text-slate-900 mt-2 italic">
                  Supporting founders from over 50+ countries.
                </p>
              </div>
            </div>

            {/* Right Column - Hero Contact / Eligibility Form */}
            <div id="eligibility-form" className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden p-6 sm:p-8">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-blue-600" />
                      Check Your Eligibility
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      Free Assessment
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                    Get pre-screened for high-street & digital UK business accounts.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">
                      Inquiry Received!
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      Thank you! Our compliance specialists will review your details and get back to you with your tailored banking assessment.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          countryOfResidence: "",
                          hasUkCompany: "Yes",
                          businessType: "",
                          monthlyTurnover: "",
                          message: "",
                        });
                      }}
                      className="mt-2 text-xs font-semibold text-blue-600 hover:text-blue-700 underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {formError && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                        <span>{formError}</span>
                      </div>
                    )}

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-xs sm:text-sm font-normal"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-xs sm:text-sm font-normal"
                        />
                      </div>
                    </div>

                    {/* Country of Residence & UK Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Country of residence <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="countryOfResidence"
                          required
                          value={formData.countryOfResidence}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-xs sm:text-sm font-normal"
                        >
                          <option value="">Select country</option>
                          {countriesList.map((c, i) => (
                            <option key={i} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          UK Company?
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {["Yes", "No"].map((opt) => (
                            <label
                              key={opt}
                              className={`flex items-center justify-center py-2 px-3 rounded-lg border text-xs font-semibold cursor-pointer transition-all ${
                                formData.hasUkCompany === opt
                                  ? "bg-blue-50 border-blue-600 text-blue-700"
                                  : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <input
                                type="radio"
                                name="hasUkCompany"
                                value={opt}
                                checked={formData.hasUkCompany === opt}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <span>{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Business Type & Turnover */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Primary business type
                        </label>
                        <input
                          type="text"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          placeholder="e.g. E-commerce / SaaS"
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-xs sm:text-sm font-normal"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Monthly turnover
                        </label>
                        <input
                          type="text"
                          name="monthlyTurnover"
                          value={formData.monthlyTurnover}
                          onChange={handleInputChange}
                          placeholder="e.g. £10k - £50k"
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-xs sm:text-sm font-normal"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Message (optional)
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Any specific bank preference or requirements..."
                        className="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-xs sm:text-sm resize-none font-normal"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center space-x-2 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                    >
                      {formSubmitting ? (
                        <span>Checking eligibility...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Check my eligibility (free)</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-normal pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      <span>100% confidential & compliance pre-vetted</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW WE OPEN YOUR UK BUSINESS BANK ACCOUNT
      ========================================================================== */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
              <Layers className="w-4 h-4 mr-2" />
              Strategic Application Strategy
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              How we open your UK business bank account
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Banks make the final decision on every application. Our job is to
              make sure yours is complete, consistent and presented in the
              strongest, most compliant way, and to have a plan ready if the
              first choice doesn't work out.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Track A */}
            <div className="bg-slate-50/70 rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                  <Landmark className="w-3.5 h-3.5" />
                  <span>Track A</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Track A: High-street business bank applications
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  This is the ideal outcome. Established banks offer the broadest
                  services, strong credibility with clients and suppliers, and
                  lending and credit options as you grow.
                </p>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  We prepare, manage and submit (where permitted) your
                  application on your behalf to leading UK banks, including:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {[
                    "HSBC",
                    "Barclays",
                    "Lloyds Bank",
                    "NatWest",
                    "Santander",
                  ].map((bank, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-2 text-slate-800 text-sm font-medium bg-white px-3 py-2 rounded-lg border border-slate-200"
                    >
                      <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{bank}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 text-sm leading-relaxed font-normal pt-2">
                  Some banks require the director to complete identity
                  verification or digital onboarding personally. Where that
                  applies, we guide you through each step so nothing is delayed
                  by avoidable mistakes.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500">
                <span className="font-medium text-blue-600 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1.5" />
                  Established Credibility
                </span>
                <span className="font-semibold text-slate-700">Primary Goal</span>
              </div>
            </div>

            {/* Track B */}
            <div className="bg-slate-50/70 rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Track B</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Track B: Digital business accounts and EMIs as a backup
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  If a high-street bank declines your application or can't
                  onboard your profile, we move to Track B: matching you with a
                  regulated digital business account or e-money institution
                  (EMI).
                </p>
                <p className="text-slate-600 text-base leading-relaxed font-normal">
                  Digital providers often have faster, fully remote onboarding
                  and are well suited to international trading and multi-currency
                  needs. Eligibility differs by provider:
                </p>
                <div className="space-y-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 leading-relaxed font-normal">
                    <strong className="font-semibold text-slate-900">
                      Wise, Revolut Business and Tide
                    </strong>{" "}
                    are options that may be available to overseas directors,
                    subject to each provider's own checks.
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 leading-relaxed font-normal">
                    <strong className="font-semibold text-slate-900">
                      Monzo Business and Starling Bank
                    </strong>{" "}
                    require a UK-resident director. We don't offer these to
                    non-resident founders.
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-normal pt-2 italic">
                  Track B is a safety net, not a guarantee. We recommend options
                  that genuinely match your residency, business model and
                  documents.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500">
                <span className="font-medium text-sky-700 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1.5 text-sky-600" />
                  Speed & Digital Agility
                </span>
                <span className="font-semibold text-slate-700">Safety Net</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          UK BUSINESS BANK AND EMI COMPARISON TABLE
      ========================================================================== */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
              <Landmark className="w-4 h-4 mr-2" />
              Provider Comparison
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              UK business bank and EMI comparison
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Requirements and timelines change, and every application is
              assessed individually. Treat this table as a general guide, not a
              promise.
            </p>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200 text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
                    <th className="py-4 px-6">Provider</th>
                    <th className="py-4 px-6">Non-resident accepted?</th>
                    <th className="py-4 px-6">Remote onboarding?</th>
                    <th className="py-4 px-6">UK address/company needed?</th>
                    <th className="py-4 px-6">Typical timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm text-slate-700 font-normal">
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="py-4 px-6 font-semibold text-slate-900 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>{row.provider}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${
                            row.status === "accepted"
                              ? "bg-green-50 text-green-800 border border-green-200"
                              : row.status === "resident-only"
                              ? "bg-red-50 text-red-800 border border-red-200"
                              : "bg-amber-50 text-amber-800 border border-amber-200"
                          }`}
                        >
                          {row.nonResident}
                        </span>
                      </td>
                      <td className="py-4 px-6">{row.remote}</td>
                      <td className="py-4 px-6">{row.ukCompanyAddress}</td>
                      <td className="py-4 px-6 font-medium text-slate-900 whitespace-nowrap">
                        {row.timeline}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs sm:text-sm text-slate-500 italic">
              *Timelines are indicative only. Delays are common when documents
              are incomplete or additional due diligence is requested.*
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHO OUR UK BUSINESS BANK ACCOUNT SERVICE IS FOR
      ========================================================================== */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
              <Briefcase className="w-4 h-4 mr-2" />
              Tailored Customer Profiles
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Who our UK business bank account service is for
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              We guide business founders across varied operational models, from
              local startups to cross-border enterprises.
            </p>
          </div>

          {/* 3 Personas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* The local resident startup */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  The local resident startup
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  You're a UK-resident founder with a new or growing limited
                  company. You want an application that is right the first time,
                  and a second option ready if your first-choice bank declines.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-blue-700 flex items-center">
                <CheckCircle className="w-4 h-4 mr-1.5" />
                UK Resident Founders
              </div>
            </div>

            {/* The e-commerce founder */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  The e-commerce founder
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  You sell online, may use payment processors or marketplaces,
                  and need an account that handles multiple currencies and
                  supports your business model. We help you present your trading
                  activity clearly so the bank understands it.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-blue-700 flex items-center">
                <CheckCircle className="w-4 h-4 mr-1.5" />
                Multi-currency & Online Sellers
              </div>
            </div>

            {/* The foreign corporate entity */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  The foreign corporate entity
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  You run or own a business based outside the UK and need a UK
                  business account for GBP payments, UK customers or a UK
                  subsidiary. We prepare the corporate and ownership documents
                  banks expect for international structures.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-blue-700 flex items-center">
                <CheckCircle className="w-4 h-4 mr-1.5" />
                International & Cross-Border
              </div>
            </div>
          </div>

          {/* Who this isn't for & No company yet */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Who this isn't for */}
            <div className="lg:col-span-7 bg-red-50/50 rounded-2xl p-6 sm:p-8 border border-red-200/80 space-y-4">
              <div className="flex items-center space-x-2 text-red-800 font-bold text-lg">
                <XCircle className="w-5 h-5 text-red-600" />
                <h3>Who this isn't for</h3>
              </div>
              <p className="text-slate-700 text-sm sm:text-base font-normal">
                We're not the right fit if:
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 font-normal">
                <li className="flex items-start space-x-2.5">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span>
                    Your business operates in an industry that banks and EMIs
                    consider unsupported or high-risk, or that we can't support
                  </span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span>
                    You expect a guaranteed approval, or want us to bypass
                    proper checks
                  </span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span>
                    You can't provide the identity, ownership or business
                    documents banks require
                  </span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span>
                    You're unwilling to complete the verification steps banks
                    require of directors and owners
                  </span>
                </li>
              </ul>
            </div>

            {/* No company yet? We can help you form one */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900">
                  No company yet? We can help you form one
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-normal">
                  Most UK business accounts require a registered company. If you
                  haven't incorporated yet, we can help with that too.
                </p>
              </div>
              <div className="space-y-2 pt-2">
                <Link
                  href="/solutions"
                  className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800 gap-1.5 transition-colors"
                >
                  <span>See our UK company formation service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="text-xs text-slate-500 font-normal">
                  Or explore related options such as Nominee Services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR STEP-BY-STEP UK BUSINESS BANK ACCOUNT PROCESS
      ========================================================================== */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
              <Clock className="w-4 h-4 mr-2" />
              Clear 4-Step Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Our step-by-step UK business bank account process
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              We guide and manage every stage from pre-submission compliance
              audits through to live account activation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 font-bold text-lg flex items-center justify-center">
                  1
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Step 1: Pre-submission compliance check and document audit
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  We review your identity documents, proof of address, company
                  details, ownership structure and business model against what
                  banks typically require. We flag gaps and inconsistencies
                  before they cause a rejection.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-blue-600 flex items-center">
                <FileCheck className="w-4 h-4 mr-1.5" />
                Document audit
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 font-bold text-lg flex items-center justify-center">
                  2
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Step 2: Preparing and managing your high-street bank
                  application
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  We package your application and manage it with a suitable
                  Tier-1 high-street bank, submitting on your behalf where the
                  bank permits. Where the bank requires the director to complete
                  onboarding personally, we prepare you for it.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-blue-600 flex items-center">
                <Landmark className="w-4 h-4 mr-1.5" />
                High-street filing
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 font-bold text-lg flex items-center justify-center">
                  3
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Step 3: Switching to a digital or EMI account if Plan A hits a
                  roadblock
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  If a high-street bank declines or can't proceed, we move you to
                  a digital business account or EMI that fits your residency,
                  structure and business activity.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-blue-600 flex items-center">
                <Sparkles className="w-4 h-4 mr-1.5" />
                Digital / EMI pivot
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 font-bold text-lg flex items-center justify-center">
                  4
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Step 4: Final account setup and activation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  Once an account is approved, we help you complete setup,
                  understand activation requirements and get ready to start
                  trading.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-green-600 flex items-center">
                <CheckCircle className="w-4 h-4 mr-1.5" />
                Account live & active
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          UK BUSINESS BANK ACCOUNT PRICING
      ========================================================================== */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/40 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg text-center space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Transparent Pricing
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              UK business bank account pricing
            </h2>

            <div className="max-w-2xl mx-auto space-y-4 text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
              <p>
                Our fees are fixed and agreed before we start. Pricing starts
                from <strong className="font-semibold text-slate-900">£[X]</strong>{" "}
                for the preparation and application management service, with the
                final fee depending on your company structure, residency and
                number of directors or owners.
              </p>
              <p className="text-sm text-slate-500">
                We'll confirm the exact cost after your free eligibility check, so
                there are no hidden charges. Bank or provider fees are separate
                and set by the institution.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToForm}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-blue-700 hover:to-blue-800 transition-all inline-flex items-center space-x-2 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <span>Check my eligibility (free)</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BUSINESS BANK ACCOUNTS FOR NON-RESIDENTS & COUNTRIES LIST
      ========================================================================== */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
              <Plane className="w-4 h-4 mr-2" />
              International & Remote Support
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Business bank accounts for non-residents
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Running a UK company from abroad? We support non-resident
              directors and owners and, where possible, help you open an account
              remotely without travelling to the UK.
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Remote opening depends on the bank and your profile. Some
              providers allow fully online onboarding; others may require video
              verification or additional checks.
            </p>
          </div>

          {/* Regional Country Breakdown */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Founders we support from around the world
              </h3>
              <p className="text-sm text-slate-500 italic mt-1 font-normal">
                *Supporting founders from over 50+ countries, including:*
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionsData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3"
                >
                  <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">
                      {item.region}
                    </h4>
                  </div>
                  <ul className="flex flex-wrap gap-2 pt-1">
                    {item.countries.map((c, cIdx) => (
                      <li
                        key={cIdx}
                        className="text-xs sm:text-sm font-medium bg-slate-50 text-slate-800 px-3 py-1.5 rounded-lg border border-slate-200"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FREQUENTLY ASKED QUESTIONS
      ========================================================================== */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently asked questions about UK business bank accounts
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Find clear answers on remote opening, non-resident eligibility,
              document requirements, timelines, and provider differences.
            </p>

            {/* Real-time search */}
            <div className="pt-2 max-w-md mx-auto">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search all 20 questions..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm transition-all font-normal"
                />
                {faqSearch && (
                  <button
                    onClick={() => setFaqSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-8 text-slate-500 text-sm font-normal">
                No matching questions found. Try searching with a different
                keyword.
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`rounded-xl border transition-all ${
                      isOpen
                        ? "bg-slate-50/90 border-blue-300 shadow-sm"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="font-semibold text-slate-900 text-sm sm:text-base">
                        {faq.q}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? "bg-blue-600 text-white rotate-180"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed font-normal border-t border-slate-100">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHECK YOUR ELIGIBILITY (PRE-ASSESSMENT FORM)
      ========================================================================== */}
      <section id="bottom-eligibility-form" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
              <FileCheck className="w-4 h-4 mr-2" />
              Pre-Assessment Form
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Check your eligibility (pre-assessment form)
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Submit your basic business profile for a free pre-assessment. We'll
              evaluate your documentation requirements and recommend the optimal
              banking route.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-slate-200">
            {formSubmitted ? (
              <div className="py-10 text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Pre-Assessment Request Received
                </h3>
                <p className="text-slate-600 max-w-lg mx-auto text-base leading-relaxed font-normal">
                  Thank you! Our compliance and banking specialists will review
                  your details and respond promptly with your tailored assessment
                  and recommended next steps.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        countryOfResidence: "",
                        hasUkCompany: "Yes",
                        businessType: "",
                        monthlyTurnover: "",
                        message: "",
                      });
                    }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all text-sm cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formError && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-sm font-normal"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-sm font-normal"
                    />
                  </div>
                </div>

                {/* Country of residence & Do you have a UK company? */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Country of residence <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="countryOfResidence"
                      required
                      value={formData.countryOfResidence}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-sm font-normal"
                    >
                      <option value="">Select country</option>
                      {countriesList.map((c, i) => (
                        <option key={i} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Do you have a UK company?
                    </label>
                    <div className="grid grid-cols-2 gap-3 pt-0.5">
                      {["Yes", "No"].map((opt) => (
                        <label
                          key={opt}
                          className={`flex items-center justify-center px-4 py-2.5 rounded-lg border text-sm font-medium cursor-pointer transition-all ${
                            formData.hasUkCompany === opt
                              ? "bg-blue-50 border-blue-600 text-blue-700"
                              : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="hasUkCompany"
                            value={opt}
                            checked={formData.hasUkCompany === opt}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary business type & Expected monthly turnover */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Primary business type
                    </label>
                    <input
                      type="text"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      placeholder="e.g. E-commerce / SaaS / Consulting"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-sm font-normal"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Expected monthly turnover
                    </label>
                    <input
                      type="text"
                      name="monthlyTurnover"
                      value={formData.monthlyTurnover}
                      onChange={handleInputChange}
                      placeholder="e.g. £10,000 - £50,000"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-sm font-normal"
                    />
                  </div>
                </div>

                {/* Message (optional) */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your business structure, specific banking needs, or any previous bank responses..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-slate-900 text-sm resize-none font-normal"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-base hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 cursor-pointer"
                >
                  {formSubmitting ? (
                    <span>Processing assessment...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Check my eligibility (free)</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          LEGAL DISCLAIMER
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="p-6 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          <p>
            We are a corporate service provider and intermediary, not a bank or
            financial institution. We do not hold client funds or provide
            banking services. We assist with preparing, managing and, where
            permitted, submitting applications on your behalf. All account
            opening decisions rest solely with the relevant banks and financial
            institutions, which apply their own eligibility, compliance and due
            diligence criteria. Approval is not guaranteed. Provider names are
            used for identification only and do not imply endorsement or
            partnership. Timelines and requirements are indicative and may
            change without notice.
          </p>
        </div>
      </section>
    </div>
  );
}
