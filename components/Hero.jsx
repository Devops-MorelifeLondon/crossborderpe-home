import React from 'react';
import { ArrowRight, Play, CheckCircle, Globe, Shield, Zap } from 'lucide-react';
import Link from 'next/link';


const Hero = () => {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            {/* Award Badge */}
            <div className="inline-flex items-center  justify-between px-6 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg text-sm font-semibold text-blue-800 mb-8 border border-blue-100">
            
              <div className='flex justify-between items-center gap-3'>
     Trusted Partner <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/J_P_Morgan_Chase_Logo_2008_1.svg/2560px-J_P_Morgan_Chase_Logo_2008_1.svg.png" className='w-[310px] object-contain' alt="" />
              </div>
         
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-5xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Global Multi-currency <span className="bg-gradient-to-r bg-clip-text from-blue-600 to-indigo-600 text-blue-600">Account</span>
              <br />
             
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              Receive international payments instantly with enterprise-grade infrastructure. 
              Secure, compliant, and cost-effective solutions trusted by global businesses.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium">200+ Countries</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium">25+ Currencies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium">99.99% Uptime</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Open Account</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link href={'https://www.youtube.com/@CrossborderPe'} target='_blank' className="group border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Video</span>
              </Link>
            </div>

    
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-gray-100 rounded-3xl transform -rotate-1"></div>
            
            {/* Main Dashboard */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-semibold">CrossborderPe Dashboard</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
               <div className="grid grid-cols-3 gap-4 mb-6">
  <div className="flex flex-1 flex-col justify-around w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
    <div className="text-xs md:text-sm text-blue-600 font-medium mb-1">USD Balance</div>
    <div className="text-base md:text-2xl lg:text-2xl font-bold text-blue-900">$55000</div>
    <div className="text-[10px] md:text-xs lg:text-sm text-blue-600 flex items-center">
      <Zap className="w-3 h-3 mr-1" />
      +12.5%
    </div>
  </div>
<div className="flex flex-1 flex-col justify-around w-full h-full bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
  <div className="text-xs md:text-sm text-green-600 font-medium mb-1">GBP Balance</div>
  <div className="text-base md:text-2xl lg:text-2xl font-bold text-green-900">£84290</div>
  <div className="text-[10px] md:text-xs lg:text-sm text-green-600 flex items-center">
    <Zap className="w-3 h-3 mr-1" />
    +8.2%
  </div>
</div>

  <div className="flex flex-1 flex-col justify-around w-full h-full bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
    <div className="text-xs md:text-sm text-purple-600 font-medium mb-1">EUR Balance</div>
    <div className="text-base md:text-2xl lg:text-2xl font-bold text-purple-900">€99100</div>
    <div className="text-[10px] md:text-xs lg:text-sm text-purple-600 flex items-center">
      <Zap className="w-3 h-3 mr-1" />
      +0.3%
    </div>
  </div>
</div>


                {/* Recent Transactions */}
                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Recent Transactions</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <img src="/flag/usa.png" alt="" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">USD</div>
                          <div className="text-xs text-slate-500">15/10/2025</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-900">$50,000</div>
                        <div className="text-xs text-green-600">✓ Completed</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                           <img src="/flag/uk.png" alt="" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">GBP</div>
                          <div className="text-xs text-slate-500">10/10/2025</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-900">£25,000</div>
                        <div className="text-xs text-green-600">✓ Completed</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <img src="/flag/singapore.png" alt="" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">SGD</div>
                          <div className="text-xs text-slate-500">07/10/2025</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-900">S$75,000</div>
                        <div className="text-xs text-amber-600">⏳ Processing</div>
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