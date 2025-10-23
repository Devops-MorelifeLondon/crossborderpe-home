import React from 'react';
import { Shield, Lock, Eye, CheckCircle, Award } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "PCI DSS Level 1 Compliance",
      description: "Highest level of payment security certification ensuring your data is protected at all times."
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Military-grade encryption protects sensitive data throughout the entire payment process."
    },
    {
      icon: Eye,
      title: "Real-Time Fraud Detection",
      description: "Advanced machine learning algorithms detect and prevent fraudulent transactions instantly."
    },
    {
      icon: CheckCircle,
      title: "Multi-Factor Authentication",
      description: "Secure access controls with biometric and hardware-based authentication options."
    }
  ];

  const certifications = [
    "PCI DSS Level 1",
    "SOC 2 Type II",
    "ISO 27001",
    "GDPR Compliant",
    "SOX Compliant",
    "CCPA Compliant"
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
      
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-sm font-semibold text-blue-800 mb-8 border border-blue-100">
                      <Award className="w-5 h-5 mr-2 text-blue-600" />
                 Enterprise-Grade Security
                    </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your security is our priority. We maintain the highest security standards to protect your business and customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-3 w-fit mx-auto mb-4 shadow-lg">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">Security Certifications</h3>
            <p className="text-gray-600">We maintain the industry's most stringent security certifications</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-sm font-semibold text-black">{cert}</div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default Security;