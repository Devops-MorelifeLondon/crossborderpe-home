"use client";
import React from 'react';
import {
  ArrowRight,
  Shield,
  Code,
  Zap,
  Globe,
  Book,
  Webhook,
  Play,
  Key,
  Layers,
  Terminal,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

// Data for the key developer benefits in the left column
const developerFeatures = [
  { icon: Shield, title: "Bank-Grade Security & Encryption" },
  { icon: Zap, title: "High-Performance & Low-Latency" },
  { icon: Globe, title: "Extensive Global Reach" },
  { icon: Code, title: "Rich SDKs & Libraries" }
];

// Data for the developer tools/resources in the right column showcase
const developerTools = [
  { id: 'api-reference', label: 'API Reference', icon: Book },
  { id: 'sdks', label: 'SDKs & Libraries', icon: Code },
  { id: 'webhooks', label: 'Webhooks', icon: Webhook },
  { id: 'quickstart', label: 'Quick Start', icon: Zap },
  { id: 'auth', label: 'Authentication', icon: Key },
  { id: 'core-api', label: 'Core APIs', icon: Layers },
  { id: 'testing', label: 'Sandbox', icon: Play },
  { id: 'more', label: 'And more...', icon: ArrowRight }
];

const DevelopersHero = () => {
  return (
    <section className="pb-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Column - Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-sm font-semibold text-blue-800 mb-6 border border-blue-100 shadow-sm">
              <Terminal className="w-5 h-5 mr-3 text-blue-600" />
              Built for Developers • Powerful & Scalable
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
              Build the Future of
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Global Payments</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
              Integrate powerful, secure, and developer-friendly APIs to embed cross-border payment capabilities directly into your applications. Go live in minutes, scale to millions.
            </p>

            {/* Key Developer Benefits */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {developerFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature.title}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href={'/developers/api-keys'} className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Start Building Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href={'/docs'} className="group text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:text-slate-900 hover:bg-slate-100 transition-all flex items-center space-x-2">
                <span>Read the Docs</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Developer Tools Showcase */}
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
                      <span className="text-slate-600 text-sm font-medium">Developer Toolkit</span>
                  </div>
                </div>
              </div>

              {/* Developer Tools Grid */}
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {developerTools.map((tool) => (
                    <div key={tool.id} className="bg-slate-50 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center space-y-3 aspect-square">
                      <div className="bg-gradient-to-br from-slate-700 to-slate-900 text-white rounded-full p-3">
                          <tool.icon className="w-6 h-6" />
                      </div>
                      <span className="text-slate-800 font-semibold text-sm">{tool.label}</span>
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

export default DevelopersHero;
