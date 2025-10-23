"use client";
import Head from "next/head";
import {
  Globe,
  Shield,
  Zap,
  Award,
  Headphones,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

 const Contact = () => {
  const contactMethods = [
    {
      icon: Headphones,
      title: "Live Chat Support",
      description: "Get instant help with your cross-border payments",
      contact: "Available 24/7",
      availability: "Average response: 30 seconds",
      action: "Start Chat",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our payment specialists",
      contact: "+1 (800) 123-4567",
      availability: "24/7 Multi-language support",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your detailed inquiries",
      contact: "support@crossborderpe.com",
      availability: "Response within 2 hours",
      action: "Send Email",
    },
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Coverage",
      description: "200+ countries and 50+ currencies supported",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "PCI DSS Level 1 and SOC 2 Type II certified",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Real-time payments with 99.99% uptime",
    },
    {
      icon: Award,
      title: "Expert Support",
      description: "Dedicated specialists for enterprise clients",
    },
  ];

  return (
    <>
    

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-sm font-semibold text-blue-800 mb-8 border border-blue-100">
              <Shield className="w-4 h-4 mr-2 text-blue-600" />
              Trusted by 50,000+ businesses worldwide
            </div>
            <h1 className="text-4xl sm:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              Get In <span className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>Touch</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Connect with our payment specialists to design the perfect multi-currency solution for your business needs.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-3 w-fit mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-4 w-fit mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{method.title}</h3>
                  <p className="text-slate-600 mb-4">{method.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="font-semibold text-slate-900">{method.contact}</div>
                    <div className="text-sm text-slate-500">{method.availability}</div>
                  </div>
                  <button className="w-full bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-200 transition-all">
                    {method.action}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* JotForm Contact Form */}
            <div className=" p-8 ">
             
              
              {/* JotForm Embed */}
              <div className="w-full">
                <iframe
                  id="JotFormIFrame-252863406333052"
                  title="Contact us | CrossBorderPe"
                  onLoad={() => window.parent.scrollTo(0,0)}
                  allowtransparency="true"
                  allow="geolocation; microphone; camera; fullscreen; payment"
                  src="https://form.jotform.com/252863406333052"
                  frameBorder="0"
                  style={{
                    minWidth: '100%',
                    maxWidth: '100%',
                    height: '739px',
                    border: 'none',
                  }}
                  scrolling="no"
                />
           
              </div>
            </div>

            {/* Company Info & Locations */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose CrossborderPe</h3>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">$25B+</div>
                    <div className="text-sm text-slate-600">Annual Volume</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                    <div className="text-sm text-slate-600">Active Businesses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                    <div className="text-sm text-slate-600">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
                    <div className="text-sm text-slate-600">Uptime</div>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-slate-900">Enterprise Security</span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Bank-grade security with PCI DSS Level 1 compliance, ensuring your transactions are always protected.
                  </p>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-slate-900">Global Presence</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Americas</div>
                      <div className="text-sm text-slate-600">New York • Toronto • Mexico City</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Europe</div>
                      <div className="text-sm text-slate-600">London • Zurich • Frankfurt</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Asia Pacific</div>
                      <div className="text-sm text-slate-600">Singapore • Hong Kong • Tokyo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Global Payments?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses who trust CrossborderPe for their international payment needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all">
                  Open Account
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
