"use client";
import React from 'react';
import {
  ArrowRight,
  Shield,
  BookOpen,
  TrendingUp,
  Globe,
  Zap,
  BarChart3,
  Video,
  Mic,
  Target,
  Lightbulb,
  BookMarked,
  HelpCircle,
  Users
} from 'lucide-react';
import Link from 'next/link';


// Data for the key features/benefits in the left column
const keyFeatures = [
  { icon: BookOpen, title: "Expert Analysis & Research" },
  { icon: TrendingUp, title: "Latest Industry Trends" },
  { icon: Globe, title: "Global Market Insights" },
  { icon: Zap, title: "Actionable Intelligence" }
];


// Data for the resource categories in the right column showcase
const resourceItems = [
  { id: 'insights', label: 'Market Insights', icon: Lightbulb },
  { id: 'research', label: 'Research Reports', icon: BarChart3 },
  { id: 'webinars', label: 'Expert Webinars', icon: Video },
  { id: 'podcast', label: 'Banking Podcast', icon: Mic },
  { id: 'cases', label: 'Case Studies', icon: Target },
  { id: 'guides', label: 'Implementation Guides', icon: BookMarked },
  { id: 'faqs', label: 'Knowledge Base', icon: HelpCircle },
  { id: 'more', label: 'And more...', icon: ArrowRight }
];


const ResourcesHero = () => {
  return (
    <section className="pb-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Column - Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-sm font-semibold text-blue-800 mb-6 border border-blue-100 shadow-sm">
              <Shield className="w-5 h-5 mr-3 text-blue-600" />
              Trusted Knowledge Hub • Updated Daily
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
              Intelligence Center for
              <br />
              
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Cross-Border Payments</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
              Access cutting-edge research, expert analysis, and comprehensive resources to optimize your international payment operations and drive global business growth.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature.title}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href={'#resources'} className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Explore Resources</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div> */}
          </div>

          {/* Right Column - Resource Categories Showcase */}
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
                      <span className="text-slate-600 text-sm font-medium">Resource Categories</span>
                  </div>
                </div>
              </div>

              {/* Resource Items Grid */}
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {resourceItems.map((item) => (
                    <div key={item.id} className="bg-slate-50 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center space-y-3 aspect-square">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full p-3">
                          <item.icon className="w-6 h-6" />
                      </div>
                      <span className="text-slate-800 font-semibold text-sm">{item.label}</span>
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

export default ResourcesHero;
