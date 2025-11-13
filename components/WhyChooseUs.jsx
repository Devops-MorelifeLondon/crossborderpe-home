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
  Award
} from 'lucide-react';
import Link from 'next/link';

const WhyChooseUs = () => {
  const keyBenefits = [
    {
      icon: Zap,
      title: "Fastest Payouts",
      description: "Receive funds in hours, not days.",
      highlight: "2 Hours Settlement"
    },
    {
      icon: Shield,
      title: "RBI Compliant",
      description: "Fully regulated in multiple jurisdictions.",
      highlight: "100% Compliant"
    },
    {
      icon: Percent,
      title: "Best FX Rates",
      description: "Save up to 3% compared to banks.",
      highlight: "0% Markup"
    },
    {
      icon: Users,
      title: "Global Support",
      description: "24/7 assistance across all time zones.",
      highlight: "Always Available"
    }
  ];

  const stats = [
    { value: "₹50,000+", label: "Average Annual Savings", icon: DollarSign },
    { value: "99.8%", label: "Transaction Success Rate", icon: CheckCircle },
    { value: "2 Hours", label: "Fastest Settlement Time", icon: Clock },
    { value: "25", label: "Supported Currencies", icon: Globe }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-sm font-semibold text-blue-800 mb-8 border border-blue-100">
            <Award className="w-5 h-5 mr-2 text-blue-600" />
            Why Global Leaders Choose CrossborderPe
          </div>
        
          <p className="text-md text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Discover why leading enterprises choose CrossborderPe for their international payment needs. 
            Experience the advantages that drive global business growth.
          </p>
        </div>

        {/* Key Benefits - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {keyBenefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit mx-auto">
                {benefit.highlight}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

 

        {/* Comparison Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 mb-16 border border-blue-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">CrossborderPe vs Traditional Banks</h3>
            <p className="text-xl text-slate-600">See why businesses are making the switch</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* CrossborderPe Column */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-xl">
                  CrossborderPe
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700 font-medium">5-minute account setup</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700 font-medium">1-day settlement (2 hours possible)</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700 font-medium">0% FX markup, mid-market rates</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700 font-medium">Transparent, flat-fee pricing</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700 font-medium">25+ currencies, 200+ countries</span>
                </div>
              </div>
            </div>

            {/* Traditional Banks Column */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="bg-slate-400 text-white px-6 py-3 rounded-xl font-bold text-xl">
                  Traditional Banks
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-red-200 shadow-sm">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span className="text-slate-700 font-medium">2-4 weeks account opening</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-red-200 shadow-sm">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span className="text-slate-700 font-medium">3-5 days settlement time</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-red-200 shadow-sm">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span className="text-slate-700 font-medium">2-4% FX markup on rates</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-red-200 shadow-sm">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span className="text-slate-700 font-medium">Hidden fees and charges</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-red-200 shadow-sm">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span className="text-slate-700 font-medium">Limited currency options</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Experience the CrossborderPe Advantage</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join 50,000+ businesses who have already discovered the power of modern international payments. 
              Start saving time and money today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href={'https://app.crossborderpe.com'} target='_blank' className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg flex items-center space-x-2">
                <span>Open Account Now</span>
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