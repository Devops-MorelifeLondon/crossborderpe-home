

import React from 'react';
import { ShieldCheck, FileText, Lock, CheckCircle, Globe, ScrollText } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://defaultdomain.com";

export const metadata = {
  title: "Legal, Privacy & Compliance | CrossborderPe",
  description:
    "Review CrossborderPe’s Terms of Use, Privacy Policy, Security measures, and Compliance standards. Learn how we safeguard data and ensure secure global payment operations.",
  robots: "noindex, nofollow",
  alternates: {
    canonical: `${baseUrl}/legal`,
  },
  openGraph: {
    title: "CrossborderPe – Legal, Privacy & Compliance",
    description:
      "Explore CrossborderPe’s Terms of Use, Privacy Policy, Security practices, and Compliance framework designed to protect users and meet global regulatory standards.",
    url: `${baseUrl}/legal`,
    type: "article",
    images: [
      {
        url: `${baseUrl}/Crossborderpe_colored.png`,
        width: 1200,
        height: 630,
        alt: "CrossborderPe Legal & Compliance",
      },
    ],
  },
};




const LegalPage = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white text-slate-800 scroll-smooth">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 border border-blue-100 px-5 py-2 rounded-lg font-semibold">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <span>CrossborderPe Legal, Privacy & Compliance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mt-6 mb-4 text-slate-900">
            Terms, Privacy & Security
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Last Updated: <strong>11/11/2025</strong>  
            <br />
            Your trust matters — please review our policies carefully.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="#terms" className="px-5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg border border-blue-200 font-medium transition-all">
            Terms of Use
          </a>
          <a href="#privacy" className="px-5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg border border-blue-200 font-medium transition-all">
            Privacy Policy
          </a>
          <a href="#security" className="px-5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg border border-blue-200 font-medium transition-all">
            Security
          </a>
          <a href="#compliance" className="px-5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg border border-blue-200 font-medium transition-all">
            Compliance
          </a>
        </div>

        {/* TERMS SECTION */}
        <div id="terms" className="scroll-mt-32 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">User Terms of Use</h2>
          </div>
          <p className="text-slate-600 mb-6">
            These User Terms of Use (“User Terms”) govern your use of CrossborderPe Multicurrency Account (“Service”).
            By accessing or using the Service, you agree to these terms and our Privacy Policy.
          </p>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">A. CrossborderPe Multicurrency Account</h3>
              <p>
                The Service works with licensed financial partners to process global payments. CrossborderPe does not
                directly handle settlement or clearing unless stated otherwise and may restrict access by region.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">B. Your Obligations</h3>
              <p>
                You must comply with applicable laws and KYC requirements. Failure to provide valid verification or
                submitting false data may result in account suspension. You agree to use the account only for lawful
                business transactions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">C. Platform Relationship</h3>
              <p>
                Your Platform acts as an intermediary. CrossborderPe is not liable for Platform actions. Fees and FX
                charges are governed by your Platform’s agreement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">D. Disclaimers</h3>
              <p>
                CrossborderPe services are provided “as is” without warranties. We are not liable for delays, internet
                issues, chargebacks, or data loss.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">E. Confidentiality</h3>
              <p>
                Both parties agree to maintain confidentiality of data and disclose only when required by law.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">F. Intellectual Property</h3>
              <p>
                All CrossborderPe intellectual property including trademarks, systems, and dashboards are our exclusive
                property. Unauthorized use is prohibited.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">G. Termination</h3>
              <p>
                Either party may terminate use of the Service at any time. Confidentiality, indemnity, and limitation of
                liability survive termination.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">H. Governing Law</h3>
              <p>
                This Agreement is governed by Indian laws and subject to the exclusive jurisdiction of courts in
                Bangalore.
              </p>
            </div>
          </div>
        </div>

        {/* PRIVACY SECTION */}
        <div id="privacy" className="scroll-mt-32 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <ScrollText className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">Privacy Policy</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-6">
            We collect, process, and store personal data solely for service delivery, identity verification,
            and compliance. Data may be shared with banks, payment partners, or regulators in accordance with legal
            requirements.  
            CrossborderPe follows strict data protection and encryption practices to safeguard your information.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Personal data is used only for legitimate business purposes.</li>
            <li>We never sell user data to third parties.</li>
            <li>All records are encrypted and stored securely.</li>
            <li>You can request deletion or access to your data anytime.</li>
          </ul>
        </div>

        {/* SECURITY SECTION */}
        <div id="security" className="scroll-mt-32 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">Security</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-6">
            CrossborderPe employs enterprise-level security protocols to ensure all user data and transactions remain
            protected.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>End-to-end encryption for all sensitive data transfers.</li>
            <li>Regular penetration testing and threat audits.</li>
            <li>24/7 monitoring and anomaly detection systems.</li>
            <li>Multi-factor authentication for all admin and client accounts.</li>
          </ul>
        </div>

        {/* COMPLIANCE SECTION */}
        <div id="compliance" className="scroll-mt-32 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">Compliance</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-6">
            CrossborderPe strictly adheres to Indian and international compliance standards including AML/CFT, GDPR,
            and RBI guidelines. All customers undergo identity and risk verification through regulated processes.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 text-green-600 font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600 font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>RBI Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600 font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>GDPR Aligned</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t border-slate-200 pt-12">
          <Globe className="w-10 h-10 text-blue-600 mx-auto" />
          <p className="text-slate-500 text-sm mt-4">
            © {new Date().getFullYear()} CrossborderPe. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalPage;
