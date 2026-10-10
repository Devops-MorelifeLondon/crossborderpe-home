import React from 'react';
import { ArrowRight, Play, CheckCircle, Globe, Shield, Zap, FileCheck, Landmark } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            {/* Infrastructure Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 sm:px-5 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-full text-xs sm:text-sm font-semibold text-blue-900 mb-6 sm:mb-8 border border-blue-200/80 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-slate-700 font-medium">Enterprise Cross-Border Payment Rails</span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-600">150+ Countries Supported</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Global Business Payments & <span className="text-blue-600">Multi-Currency Accounts</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-light">
              Collect, convert, and manage funds in 25+ currencies with dedicated local virtual accounts across the US, UK, Europe, Canada, and beyond. Enjoy fast settlements, transparent FX rates, and automated compliance built for global scale.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium text-sm sm:text-base">Local Virtual Accounts (USD, EUR, GBP, CAD)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium text-sm sm:text-base">Fast Global & Local Settlements</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium text-sm sm:text-base">Automated Compliance & e-FIRA</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium text-sm sm:text-base">Live Interbank FX • Zero Hidden Spread</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href={'https://app.crossborderpe.com'}
              target="_blank"className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Start Receiving Payments</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href={'https://www.youtube.com/@CrossborderPe'} target='_blank' className="group w-full sm:w-auto border-2 border-slate-300 text-slate-700 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-gray-100 rounded-3xl transform -rotate-1"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-white font-semibold text-sm sm:text-base">CrossborderPe</span>
                      <span className="ml-2 text-[10px] text-blue-300 font-mono uppercase bg-blue-900/60 px-2 py-0.5 rounded">Global Treasury Hub</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex flex-col justify-around w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 p-3 sm:p-4 rounded-xl border border-blue-200">
                    <div className="text-xs sm:text-sm text-blue-600 font-medium mb-1">USD (ACH/Wire)</div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">$55,200</div>
                    <div className="text-[10px] sm:text-xs text-blue-600 flex items-center">
                      <Zap className="w-3 h-3 mr-1" />
                      Domestic Rails
                    </div>
                  </div>
                  <div className="flex flex-col justify-around w-full h-full bg-gradient-to-br from-green-50 to-green-100 p-3 sm:p-4 rounded-xl border border-green-200">
                    <div className="text-xs sm:text-sm text-green-600 font-medium mb-1">GBP (Faster Pay)</div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-900">£84,100</div>
                    <div className="text-[10px] sm:text-xs text-green-600 flex items-center">
                      <Zap className="w-3 h-3 mr-1" />
                      Sort Code Ready
                    </div>
                  </div>
                  <div className="flex flex-col justify-around w-full h-full bg-gradient-to-br from-purple-50 to-purple-100 p-3 sm:p-4 rounded-xl border border-purple-200">
                    <div className="text-xs sm:text-sm text-purple-600 font-medium mb-1">EUR (SEPA IBAN)</div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900">€99,400</div>
                    <div className="text-[10px] sm:text-xs text-purple-600 flex items-center">
                      <Zap className="w-3 h-3 mr-1" />
                      Instant SEPA
                    </div>
                  </div>
                </div>

                {/* Recent Inward Settlements & Status */}
                <div className="bg-slate-50 rounded-xl p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-slate-700">Recent Collections & Settlements</h3>
                    <span className="text-[11px] font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <FileCheck className="w-3 h-3" /> Auto Compliance
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                          <Image width={200} height={100} src="/flag/usa.png" alt="USA Flag" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">US Client Transfer (ACH)</div>
                          <div className="text-xs text-slate-500">Local Clearing • Dedicated Virtual Account</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-900">$50,000</div>
                        <div className="text-xs text-green-600 flex items-center justify-end">
                          <CheckCircle className="w-3 h-3 mr-1" /> Completed
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                          <Image width={200} height={100} src="/flag/uk.png" alt="UK Flag" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">UK Enterprise Retainer (BACS)</div>
                          <div className="text-xs text-slate-500">Faster Payments Rails • Direct Settlement</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-900">£25,000</div>
                        <div className="text-xs text-green-600 flex items-center justify-end">
                          <CheckCircle className="w-3 h-3 mr-1" /> Completed
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                          <Image width={200} height={100} src="/flag/singapore.png" alt="Singapore Flag" className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">APAC Regional Revenue</div>
                          <div className="text-xs text-slate-500">Multi-Currency Collection • Fast Payout</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-900">S$75,000</div>
                        <div className="text-xs text-blue-600 flex items-center justify-end">
                          <Shield className="w-3 h-3 mr-1" /> Clearing (T+0)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
