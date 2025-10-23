import React from 'react';
import { CreditCard, Smartphone, Globe, Shield, Zap, BarChart3, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Cross-Border Remittance",
      description: "Receive international payments with competitive exchange rates and transparent pricing across 200+ countries.",
      features: ["200+ countries supported", "Competitive FX rates", "Real-time tracking"]
    },
    {
      icon: Smartphone,
      title: "Multi-Currency Accounts",
      description: "Hold, convert, and manage multiple currencies in a single account with real-time balance updates.",
      features: ["25+ currencies", "SWIFT & Local Accounts", "IBANs"]
    },
    {
      icon: Globe,
      title: "Instant FIRA Approval",
      description: "Get your Foreign Inward Remittance Advice instantly — fast, secure, and compliant for all inward payments.",
      features: ["Instant digital FIRA generation within minutes", "RBI-compliant and accepted by all banks", "Simple online process with real-time tracking"]
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Full compliance with international regulations including AML, KYC, and local banking requirements.",
      features: ["AML/KYC compliance", "Regulatory reporting", "Risk management"]
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Seamlessly integrate our payment solutions into your existing systems with our robust API platform.",
      features: ["RESTful APIs", "Webhooks", "SDK libraries"]
    },
    {
      icon: BarChart3,
      title: "Swift Payment Tracking",
      description: "Track your international payments instantly with real-time updates and complete transaction transparency anytime, anywhere.",
      features: ["Real-time payment status monitoring", "Instant alerts for every transaction update", "Easy access through a secure online dashboard"]
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
         
           <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-sm font-semibold text-blue-800 mb-8 border border-blue-100">
            <Award className="w-5 h-5 mr-2 text-blue-600" />
        Experience the CrossBorderPe Advantage
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage international payments, trade finance, and global business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all hover:border-blue-500 hover:shadow-blue-50">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-3 w-fit mb-6 group-hover:from-blue-700 group-hover:to-blue-800 transition-all shadow-lg">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;