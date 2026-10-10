import React from 'react';
import { Shield, Lock, Eye, CheckCircle, ShieldCheck } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "256-Bit AES & TLS 1.3 Encryption",
      description: "End-to-end cryptographic encryption protects financial data in transit and sensitive account details at rest."
    },
    {
      icon: Shield,
      title: "Segregated Escrow Safeguards",
      description: "Client inward funds are held in segregated accounts at regulated partner banking institutions, never co-mingled."
    },
    {
      icon: Eye,
      title: "Automated Fraud & AML Monitoring",
      description: "Continuous algorithmic surveillance and real-time international sanctions screening against global databases."
    },
    {
      icon: CheckCircle,
      title: "Multi-Factor Access Controls",
      description: "Enterprise-grade identity verification with TOTP multi-factor authentication and role-based permissions."
    }
  ];

  const securityPillars = [
    "256-Bit AES Encryption",
    "SOC 2 Aligned Infrastructure",
    "TLS 1.3 Transport Security",
    "FEMA & PMLA Compliant",
    "Segregated Escrow Accounts",
    "Continuous Threat Monitoring"
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-xs sm:text-sm font-semibold text-blue-800 mb-6 border border-blue-100 shadow-xs">
            <ShieldCheck className="w-4 h-4 mr-2 text-blue-600" />
            Bank-Grade Infrastructure & Data Protection
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Security at Every Layer of the Payment Lifecycle
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Powered by enterprise-grade banking infrastructure, your financial transactions, business credentials, and cross-border records are protected by industry-standard security protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-3 w-fit mx-auto mb-4 shadow-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Security & Governance Architecture</h3>
            <p className="text-slate-600 text-sm">Engineered to meet the stringent standards of modern cross-border financial technology</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {securityPillars.map((cert, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200/70 rounded-xl p-3.5 text-center">
                <div className="text-xs sm:text-sm font-semibold text-slate-800">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;