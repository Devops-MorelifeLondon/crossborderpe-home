"use client";
import React from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Zap, 
  Percent, 
  DollarSign, 
  Globe, 
  Shield, 
  FileText, 
  TrendingUp, 
  Users, 
  Award,
  FileCheck
} from 'lucide-react';
import Link from 'next/link';

const WhyChooseUs = () => {
  const keyBenefits = [
    {
      icon: Zap,
      title: "Same-Day Settlements",
      description: "Direct credit to your Indian current account via NEFT/RTGS within hours.",
      highlight: "T+0 / Same-Day"
    },
    {
      icon: Shield,
      title: "AD-1 Regulated Rails",
      description: "Processed via RBI-authorized AD-1 partner banks in full compliance with FEMA.",
      highlight: "FEMA Compliant"
    },
    {
      icon: Percent,
      title: "Live Interbank FX",
      description: "Mid-market rates with transparent flat fees and zero hidden spread deductions.",
      highlight: "Save Up to 3%"
    },
    {
      icon: FileCheck,
      title: "Automated Bank e-FIRA",
      description: "Official digital FIRA issued directly by partner banks for effortless GST export refunds.",
      highlight: "Instant Digital e-FIRA"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-xs sm:text-sm font-semibold text-blue-800 mb-6 border border-blue-100 shadow-xs">
            <Award className="w-4 h-4 mr-2 text-blue-600" />
            Why Global Leaders & Exporters Choose CrossborderPe
          </div>
        
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            The Modern Standard for Cross-Border Payments
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Purpose-built for global businesses, software exporters, agencies, and cross-border founders looking to eliminate wire deductions, accelerate payouts, and automate compliance.
          </p>
        </div>

        {/* Key Benefits - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {keyBenefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-400 transition-all text-center group">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-3.5 w-fit mx-auto mb-5 group-hover:scale-105 transition-transform shadow-md">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit mx-auto border border-blue-100">
                {benefit.highlight}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50/40 to-slate-50 rounded-3xl p-6 sm:p-12 mb-16 border border-blue-100 shadow-sm">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">CrossborderPe vs Traditional Banks</h3>
            <p className="text-base sm:text-lg text-slate-600">See why high-growth global businesses and exporters are making the switch</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* CrossborderPe Column */}
            <div className="space-y-4">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-md">
                  CrossborderPe Platform
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-blue-100 shadow-xs">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 text-sm font-medium">Dedicated local collection accounts (USD ACH/Wire, EUR SEPA, GBP Faster Payments)</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-blue-100 shadow-xs">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 text-sm font-medium">Fast direct settlement to your local bank accounts worldwide</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-blue-100 shadow-xs">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 text-sm font-medium">Automated bank-issued digital e-FIRA generated at ₹0 extra fee</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-blue-100 shadow-xs">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 text-sm font-medium">Live interbank exchange rates with transparent flat fees and 0% markup</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-blue-100 shadow-xs">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 text-sm font-medium">Pre-mapped RBI Purpose Codes (P0802, P0803) & automated invoice matching</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-blue-100 shadow-xs">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 text-sm font-medium">100% digital account onboarding completed in minutes</span>
                </div>
              </div>
            </div>

            {/* Traditional Banks Column */}
            <div className="space-y-4">
              <div className="text-center mb-6">
                <div className="bg-slate-500 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-sm">
                  Traditional Legacy Banks
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-slate-200 shadow-xs opacity-90">
                  <div className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <span className="text-slate-700 text-sm font-medium">International wire transfers only (expensive SWIFT fees for clients)</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-slate-200 shadow-xs opacity-90">
                  <div className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <span className="text-slate-700 text-sm font-medium">3 to 5 business days slow clearing and settlement turnaround</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-slate-200 shadow-xs opacity-90">
                  <div className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Manual branch visits and ₹500 to ₹2,000 fee per physical FIRC request</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-slate-200 shadow-xs opacity-90">
                  <div className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <span className="text-slate-700 text-sm font-medium">2% to 4% hidden FX spread markups plus intermediary wire deductions</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-slate-200 shadow-xs opacity-90">
                  <div className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Manual EDPMS tracking, complex documentation, and customs confusion</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-slate-200 shadow-xs opacity-90">
                  <div className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <span className="text-slate-700 text-sm font-medium">Weeks of physical paperwork and slow branch manager approvals</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Start Collecting Global Payments with Confidence</h3>
            <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join forward-thinking Indian exporters and tech companies who have upgraded to modern, transparent cross-border payments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href={'https://app.crossborderpe.com'} target='_blank' className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center space-x-2">
                <span>Open Virtual Accounts</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;