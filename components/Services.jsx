import React from 'react';
import { Landmark, FileCheck, Zap, Percent, FileText, Code2, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Landmark,
      title: "Local Virtual Collection Accounts",
      description: "Receive payments in your business name across the US, UK, EU, and Canada as easily as a domestic bank transfer.",
      features: [
        "US ACH & Fedwire routing numbers",
        "UK Faster Payments (Sort Code) & SEPA IBANs",
        "Eliminate intermediary SWIFT wire deduction fees"
      ]
    },
    {
      icon: FileCheck,
      title: "Automated Bank-Issued e-FIRA",
      description: "Digital Foreign Inward Remittance Advices generated automatically by partner AD-1 banks for every transaction.",
      features: [
        "Direct issuance by RBI-authorized AD-1 partner banks",
        "Full RBI, FEMA & EDPMS compliance verification",
        "One-click PDF download for GST zero-rated export refunds"
      ]
    },
    {
      icon: Zap,
      title: "Fast Multi-Currency Settlements",
      description: "Convert international receipts and settle funds directly into your destination bank accounts with speed and security.",
      features: [
        "T+0 and same-day settlement capabilities",
        "Direct credit to bank accounts across supported regions",
        "Real-time settlement status notifications"
      ]
    },
    {
      icon: Percent,
      title: "Transparent FX & Zero Hidden Spreads",
      description: "Access live interbank foreign exchange rates with transparent, low flat pricing and zero surprise correspondent cuts.",
      features: [
        "Save up to 3% compared to legacy bank telegraphic rates",
        "Live mid-market currency rates with zero markup",
        "Upfront pricing with complete fee transparency"
      ]
    },
    {
      icon: FileText,
      title: "Purpose Code Mapping & Invoicing",
      description: "Attach client invoices and map regulatory purpose codes seamlessly for frictionless trade and export compliance.",
      features: [
        "Pre-configured purpose codes for tech, services & goods",
        "Automated invoice matching and ledger reconciliation",
        "Audit-ready documentation for hassle-free tax filing"
      ]
    },
    {
      icon: Code2,
      title: "Developer APIs & Webhooks",
      description: "Embed international virtual collection accounts and automated payout workflows directly into your platform or ERP.",
      features: [
        "Modern RESTful APIs & real-time webhooks",
        "Automated ledger reconciliation webhooks",
        "Sandbox testing environment with comprehensive documentation"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-xs sm:text-sm font-semibold text-blue-800 mb-6 border border-blue-100 shadow-xs">
            <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
            Enterprise Cross-Border Infrastructure • Global Reach
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            End-to-End Global Payments Infrastructure
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Engineered for modern enterprises, exporters, SaaS platforms, and global agencies collecting revenue across international markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-500 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-3 w-fit mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2.5 shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;