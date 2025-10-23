"use client";

import React from 'react';
import { Shield, CheckCircle, Award, Lock, FileCheck, Globe } from 'lucide-react';

const RegulatoryCompliance = () => {
  const certifications = [
    {
      icon: Award,
      title: "RBI Approved",
      description: "Authorized by Reserve Bank of India as a licensed money transfer operator",
      badge: "License"
    },
    {
      icon: Shield,
      title: "100% Compliant",
      description: "Fully compliant with FEMA regulations and international AML/CFT standards",
      badge: "FEMA Compliant"
    },
    {
      icon: Lock,
      title: "Bank-Grade Security",
      description: "PCI DSS Level 1 certified with end-to-end encryption for all transactions",
      badge: "PCI DSS Level 1"
    },
    {
      icon: FileCheck,
      title: "Regulatory Reporting",
      description: "Automated compliance reporting to RBI and other regulatory authorities",
      badge: "Auto Reporting"
    }
  ];

  const trustIndicators = [
    "Licensed Money Transfer Operator",
    "RBI Regulated Entity",
    "FEMA Compliant Operations",
    "ISO 27001 Certified",
    "SOC 2 Type II Audited",
    "Regular Regulatory Audits"
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-green-50 to-emerald-50 border-y border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-bold text-green-800 mb-6 border border-green-200 shadow-sm">
            <Shield className="w-5 h-5 mr-2 text-green-700" />
            RBI Approved • 100% Safe & Compliant
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Regulated & Trusted
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your money is safe with us. We operate under strict regulatory oversight and maintain the highest standards of compliance and security.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all group text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3 w-fit mx-auto mb-4 group-hover:from-green-600 group-hover:to-green-700 transition-all shadow-lg">
                <cert.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{cert.title}</h3>
              <p className="text-slate-600 text-sm mb-3 leading-relaxed">{cert.description}</p>
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                {cert.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Complete Regulatory Compliance</h3>
            <p className="text-slate-600">We maintain strict adherence to all regulatory requirements and industry standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-100">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{indicator}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Statement */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 bg-white rounded-full px-8 py-4 shadow-lg border border-green-100">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-slate-700">RBI Licensed</span>
            </div>
            <div className="w-px h-6 bg-slate-200"></div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-slate-700">Globally Compliant</span>
            </div>
            <div className="w-px h-6 bg-slate-200"></div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-slate-700">100% Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryCompliance;