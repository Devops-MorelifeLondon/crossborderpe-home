"use client";

import React from 'react';
import { Shield, CheckCircle, Award, Lock, FileCheck, Globe } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    title: "RBI Approved",
    description: "Authorized by the Reserve Bank of India as a licensed money transfer operator.",
  },
  {
    icon: Shield,
    title: "100% Compliant",
    description: "Fully compliant with FEMA regulations and international AML/CFT standards.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "PCI DSS Level 1 certified with end-to-end encryption for all transactions.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Reporting",
    description: "Automated compliance reporting to RBI and other regulatory authorities.",
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

const CertificationCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-center border border-gray-200/80">
    <div className="bg-green-100 rounded-full p-3 w-fit mx-auto mb-4 transition-all duration-300 ease-in-out shadow-sm">
      <Icon className="w-6 h-6 text-green-700" />
    </div>
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const TrustIndicatorItem = ({ indicator }) => (
  <div className="flex items-center space-x-3 p-3 bg-green-50/70 rounded-lg border border-green-100">
    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
    <span className="text-gray-700 font-medium text-sm">{indicator}</span>
  </div>
);

const RegulatoryCompliance = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-sm font-semibold text-green-800 mb-4 border border-green-200 shadow-sm">
            <Shield className="w-5 h-5 mr-2 text-green-700" />
            RBI Approved & 100% Secure
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Regulated & Trusted Worldwide
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Your money is safe with us. We operate under strict regulatory oversight and maintain the highest standards of compliance and security.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/80">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Complete Regulatory Adherence
            </h3>
            <p className="text-gray-600">
              We maintain strict adherence to all regulatory requirements and industry standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustIndicators.map((indicator, index) => (
              <TrustIndicatorItem key={index} indicator={indicator} />
            ))}
          </div>
        </div>

        {/* Bottom Trust Statement */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center space-x-4 sm:space-x-6 bg-white rounded-full px-6 sm:px-8 py-4 shadow-md border border-gray-200/80">
            <div className="flex items-center space-x-2">
              <div className="relative flex h-3 w-3">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
                <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></div>
              </div>
              <span className="text-sm font-semibold text-gray-700">RBI Licensed</span>
            </div>
            <div className="w-px h-5 bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">Globally Compliant</span>
            </div>
            <div className="w-px h-5 bg-gray-200 hidden sm:block"></div>
            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
               <Shield className="w-4 h-4 text-green-600" />
               <span className="text-sm font-semibold text-gray-700">100% Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryCompliance;
