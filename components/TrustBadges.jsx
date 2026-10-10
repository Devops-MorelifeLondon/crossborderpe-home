import React from 'react';
import { Zap, FileCheck, Globe, Percent } from 'lucide-react';

const TrustBadges = () => {
  const metrics = [
    {
      icon: Zap,
      value: "Same-Day",
      label: "Direct INR Bank Payouts",
      sublabel: "T+0 / T+1 local settlement"
    },
    {
      icon: FileCheck,
      value: "Instant",
      label: "Bank-Issued e-FIRA",
      sublabel: "Automated RBI & FEMA proof"
    },
    {
      icon: Globe,
      value: "25+ Currencies",
      label: "Local Collection Accounts",
      sublabel: "US, UK, EU, CA & more"
    },
    {
      icon: Percent,
      value: "Live Rates",
      label: "Zero Hidden FX Margins",
      sublabel: "Transparent, upfront fees"
    }
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow text-center"
              >
                <div className="bg-blue-50 text-blue-600 rounded-full p-3 w-fit mx-auto mb-4 border border-blue-100">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{item.value}</div>
                <div className="text-sm font-semibold text-slate-700">{item.label}</div>
                <div className="text-xs text-slate-500 mt-1">{item.sublabel}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;