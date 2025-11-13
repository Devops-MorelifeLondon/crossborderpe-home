"use client";

import React, { useState } from 'react';
import { Star, Quote, TrendingUp, DollarSign, Clock, Shield, Building2, Users, Globe2, ExternalLink, TrendingDown } from 'lucide-react';
import Link from 'next/link';

const Testimonials = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const successStories = [
    {
      company: 'Microsoft',
      logo: 'MS',
      industry: 'Technology',
      story: 'Reduced international payment processing time by 75% across 45 countries',
      metrics: { savings: '$2.4M annually', efficiency: '75% faster', countries: '45 markets' },
      fullStory: 'Microsoft leveraged CrossborderPe to streamline their global vendor payments across 45 countries, resulting in significant cost savings and operational efficiency improvements.'
    },
    {
      company: 'Shopify',
      logo: 'SH',
      industry: 'E-commerce',
      story: 'Enabled seamless multi-currency payments for 2M+ merchants worldwide',
      metrics: { merchants: '2M+ served', currencies: '25 supported', growth: '300% volume' },
      fullStory: 'Shopify integrated CrossborderPe to provide their merchants with comprehensive multi-currency payment solutions, enabling global expansion and increased transaction volumes.'
    },
    {
      company: 'Stripe',
      logo: 'ST',
      industry: 'Fintech',
      story: 'Enhanced compliance automation reducing regulatory overhead by 60%',
      metrics: { compliance: '60% reduction', automation: '95% automated', markets: '28 jurisdictions' },
      fullStory: 'Stripe utilized CrossborderPe\'s compliance automation to streamline their regulatory processes across 28 jurisdictions, significantly reducing operational overhead.'
    },
    {
      company: 'Uber',
      logo: 'UB',
      industry: 'Transportation',
      story: 'Optimized driver payouts across 70+ countries with instant settlements',
      metrics: { countries: '70+ markets', speed: 'Instant payouts', drivers: '5M+ served' },
      fullStory: 'Uber transformed their global driver payout system using CrossborderPe, enabling instant settlements across 70+ countries and improving driver satisfaction.'
    },
    {
      company: 'Airbnb',
      logo: 'AB',
      industry: 'Travel',
      story: 'Streamlined host payments in 220+ countries with transparent pricing',
      metrics: { hosts: '4M+ hosts', countries: '220+ countries', transparency: '100% clear pricing' },
      fullStory: 'Airbnb partnered with CrossborderPe to provide transparent, efficient payment solutions for their global host community across 220+ countries.'
    },
    {
      company: 'Salesforce',
      logo: 'SF',
      industry: 'Software',
      story: 'Consolidated 15 banking relationships into one unified platform',
      metrics: { consolidation: '15 to 1 platform', savings: '40% cost reduction', efficiency: '85% faster' },
      fullStory: 'Salesforce consolidated their complex multi-bank setup into CrossborderPe\'s unified platform, achieving significant cost savings and operational efficiency.'
    }
  ];

  const industryStats = [
    {
      icon: Building2,
      title: "E-commerce",
      stat: "Reduced costs by 25%",
      description: "Average savings for online retailers"
    },
    {
      icon: Users,
      title: "Freelancers",
      stat: "Instant payments in 180+ countries",
      description: "Global reach for independent professionals"
    },
    {
      icon: TrendingUp,
      title: "SaaS",
      stat: "Scale faster with unified accounts",
      description: "Streamlined multi-currency operations"
    },
    {
      icon: Globe2,
      title: "Manufacturing",
      stat: "40% faster supplier payments",
      description: "Optimized global supply chain finance"
    }
  ];

  const businessMetrics = [
    {
      icon: DollarSign,
      value: "$25B+",
      label: "Annual Transaction Volume"
    },
    {
      icon: Building2,
      value: "50,000+",
      label: "Active Businesses"
    },
    {
      icon: Globe2,
      value: "200+",
      label: "Countries Supported"
    },
    {
      icon: TrendingUp,
      value: "99.98%",
      label: "Success Rate"
    }
  ];

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        {/* Success Stories Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
           
             <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full text-sm font-semibold text-green-800 mb-8 border border-green-100 shadow-sm">
                        <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                         Client Success Stories
                      </div>
            <p className="text-lg text-slate-600">Click on any company to learn about their transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => setSelectedStory(story)}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-600 text-lg group-hover:bg-slate-200 transition-colors">
                    {story.logo}
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-2">{story.company}</h4>
                <p className="text-sm text-blue-600 font-medium mb-4">{story.industry}</p>
                <p className="text-slate-700 mb-6 leading-relaxed">{story.story}</p>
                
                <div className="grid grid-cols-1 gap-3 p-4 bg-slate-50 rounded-xl">
                  {Object.entries(story.metrics).map(([key, value], idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-sm font-semibold text-blue-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Coverage */}
        <div className="mb-20">
          <div className="text-center mb-12">
          
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full text-sm font-semibold text-green-800 mb-8 border border-green-100 shadow-sm">
                        <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                        Powering Success Across Industries
                      </div>
            <p className="text-lg text-slate-600">Real results across every major industry vertical</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryStats.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 w-fit mx-auto mb-6 shadow-lg">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{industry.title}</h4>
                <div className="text-2xl font-bold text-blue-600 mb-2">{industry.stat}</div>
                <p className="text-sm text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-100">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Transform Your Global Operations Today</h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already saving millions with our platform. 
              Experience the future of cross-border payments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href={'https://app.crossborderpe.com'} target='_blank' className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg">
                Open Your Account
              </Link>
       
            </div>
          </div>
        </div>

        {/* Success Story Modal */}
        {selectedStory && (
          <div className="fixed inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-600 text-lg">
                    {selectedStory.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{selectedStory.company}</h3>
                    <p className="text-blue-600 font-medium">{selectedStory.industry}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedStory(null)}
                  className="text-slate-400 hover:text-slate-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Success Story</h4>
                <p className="text-slate-700 leading-relaxed">{selectedStory.fullStory}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-xl">
                {Object.entries(selectedStory.metrics).map(([key, value], idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl font-bold text-blue-600">{value}</div>
                    <div className="text-sm text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;