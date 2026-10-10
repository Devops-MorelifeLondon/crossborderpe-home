"use client";

import React from 'react';
import { Shield, CheckCircle, Landmark, Lock, FileCheck, Globe, CheckCircle2 } from 'lucide-react';

const regulatoryPillars = [
  {
    icon: Landmark,
    title: "RBI-Authorized AD-1 Banking Rails",
    description: "All inward remittances, currency conversions, and domestic INR settlements are processed directly through Reserve Bank of India Authorized Dealer Category-I (AD-1) partner banks.",
  },
  {
    icon: FileCheck,
    title: "100% FEMA & PMLA Compliant",
    description: "Our inward remittance workflows fully align with the Foreign Exchange Management Act (FEMA), Prevention of Money Laundering Act (PMLA), and RBI regulatory master directions.",
  },
  {
    icon: CheckCircle2,
    title: "Automated Bank-Issued e-FIRA",
    description: "Receive authentic, verifiable Foreign Inward Remittance Advices generated directly by partner AD-1 banks for GST export refunds, tax filings, and EDPMS closure.",
  },
  {
    icon: Lock,
    title: "Segregated Escrow Safeguarding",
    description: "Inward client funds flow through regulated partner bank escrow accounts, ensuring absolute fund segregation and zero balance sheet co-mingling.",
  }
];

const complianceProtocols = [
  "Processed via RBI-Authorized AD-1 Banks",
  "FEMA Compliant Inward Remittances",
  "Automated Partner Bank e-FIRA Issuance",
  "Real-Time AML & Sanctions Screening",
  "Dedicated Segregated Escrow Safeguarding",
  "RBI Purpose Code Mapping & EDPMS Support"
];

const RegulatoryCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center border border-slate-200/80">
    <div className="bg-blue-50 text-blue-700 rounded-full p-3.5 w-fit mx-auto mb-4 border border-blue-100 shadow-xs">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const ComplianceProtocolItem = ({ indicator }) => (
  <div className="flex items-center space-x-3 p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/70">
    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
    <span className="text-slate-700 font-medium text-sm">{indicator}</span>
  </div>
);

const RegulatoryCompliance = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 overflow-x-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-xs sm:text-sm font-semibold text-blue-800 mb-4 border border-blue-200 shadow-xs">
            <Shield className="w-4 h-4 mr-2 text-blue-600" />
            Institutional Compliance & Banking Governance
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Regulated Infrastructure Backed by AD-1 Banks
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            CrossborderPe operates in partnership with tier-1 regulated banking institutions, authorized dealer networks, and compliant global payment rails. We maintain strict adherence to international foreign exchange regulations and data safeguarding standards.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {regulatoryPillars.map((item, index) => (
            <RegulatoryCard key={index} {...item} />
          ))}
        </div>

        {/* Protocols Grid */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200/80">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              End-to-End Compliance Framework
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Every international transfer is monitored, reported, and settled in accordance with Indian regulatory mandates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceProtocols.map((protocol, index) => (
              <ComplianceProtocolItem key={index} indicator={protocol} />
            ))}
          </div>
        </div>

        {/* Bottom Trust Statement */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-white rounded-full px-6 sm:px-8 py-3.5 shadow-sm border border-slate-200/80">
            <div className="flex items-center space-x-2">
              <div className="relative flex h-2.5 w-2.5">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></div>
                <div className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></div>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">AD-1 Partner Banking Rails</span>
            </div>
            <div className="w-px h-4 bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700">100% FEMA Compliant</span>
            </div>
            <div className="w-px h-4 bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700">Enterprise Regulated Rails</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryCompliance;

