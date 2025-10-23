import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: "$25B+",
      label: "Cross-Border Volume",
      description: "Annual international payments"
    },
    {
      number: "50K+",
      label: "Businesses Trust Us",
      description: "From SMEs to multinational corporations"
    },
    {
      number: "200+",
      label: "Countries Supported",
      description: "Worldwide payment network"
    },
    {
      number: "99.99%",
      label: "System Uptime",
      description: "Guaranteed availability"
    },
    {
      number: "25+",
      label: "Currencies Supported",
      description: "Lightning-fast processing"
    },
    {
      number: "24/7",
      label: "Expert Support",
      description: "Always here when you need us"
    }
  ];

  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-sm p-4 hover:from-blue-900 hover:to-slate-900 transition-all border border-blue-700">
              <div className="text-4xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-blue-300 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-200">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;