"use client";
import React from 'react';
import {
  ArrowRight,
  Shield,
  Award,
  Clock,
  Eye,
  User,
  Briefcase,
  Building2,
  UserCheck,
  Rocket,
  Ship,
  Users,
  Headphones
} from 'lucide-react';
import Link from 'next/link';

// Data required for the Hero section
const trustIndicators = [
  { icon: Shield, title: "Bank-Grade Security" },
  { icon: Award, title: "Regulated & Licensed" },
  { icon: Clock, title: "24/7 Support" },
  { icon: Eye, title: "Transparent Pricing" }
];

const solutionTabs = [
  { id: 'individuals', label: 'Individuals', icon: User },
  { id: 'freelancers', label: 'Freelancers', icon: Briefcase },
  { id: 'sole-proprietor', label: 'Sole Proprietors', icon: UserCheck },
  { id: 'companies', label: 'Companies', icon: Building2 },
  { id: 'partnerships', label: 'LLP & Partnerships', icon: Users },
  { id: 'startups', label: 'Funded Startups', icon: Rocket },
  { id: 'exporters', label: 'Exporters', icon: Ship },
  { id: 'more', label: 'And more...', icon: ArrowRight }
];

const SolutionsHero = () => {
  return (
    <section className="pb-6  bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Column - Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full text-sm font-semibold text-green-800 mb-6 border border-green-100 shadow-sm">
              <Shield className="w-5 h-5 mr-3 text-green-600" />
              Trusted by 2M+ users worldwide • Regulated & Secure
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
              Global Payments,
              <br />
              Built for <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Everyone</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
              Whether you're an individual sending money home, a freelancer getting paid globally, or a business expanding internationally - we have the perfect solution.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
              {trustIndicators.map((indicator, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <indicator.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{indicator.title}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href={'https://cbp-main-dash.vercel.app'} target='_blank' className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Open Free Account</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
            </div>
          </div>

          {/* Right Column - Solutions Showcase */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-gray-100 rounded-3xl transform -rotate-2"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Window Header */}
              <div className="bg-slate-100 px-6 py-4 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                     <div className="flex space-x-2">
                       <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                       <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                       <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                     </div>
                     <span className="text-slate-600 text-sm font-medium">Solutions for Every Need</span>
                  </div>
                </div>
              </div>

              {/* Solutions Grid */}
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {solutionTabs.map((tab) => (
                    <div key={tab.id} className="bg-slate-50 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center space-y-3 aspect-square">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full p-3">
                         <tab.icon className="w-6 h-6" />
                      </div>
                      <span className="text-slate-800 font-semibold text-sm">{tab.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
