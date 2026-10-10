import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: "25+",
      label: "Currencies Supported",
      description: "Seamless global currency accounts"
    },
    {
      number: "150+",
      label: "Countries Supported",
      description: "Worldwide payment network"
    },
    {
      number: "Fast",
      label: "Settlement Rails",
      description: "Direct bank-to-bank settlements"
    },
    {
      number: "Dedicated",
      label: "Account Support",
      description: "Specialized enterprise guidance"
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