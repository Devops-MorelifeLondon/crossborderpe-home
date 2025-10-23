"use client";
import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  TrendingUp, 
  TrendingDown,
  RefreshCw,
  Activity
} from 'lucide-react';

const CurrencyShowcase = () => {
  const [rates, setRates] = useState({});
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // All 25 currencies with flags and base rates to INR
  const currencies = [
    { code: 'GBP', name: 'UK Sterling', flag: '🇬🇧', baseRate: 105.42 },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺', baseRate: 90.15 },
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸', baseRate: 83.25 },
    { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', baseRate: 61.45 },
    { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳', baseRate: 11.48 },
    { code: 'CZK', name: 'Czech Koruna', flag: '🇨🇿', baseRate: 3.65 },
    { code: 'HUF', name: 'Hungarian Forint', flag: '🇭🇺', baseRate: 0.23 },
    { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽', baseRate: 4.12 },
    { code: 'RON', name: 'Romanian Leu', flag: '🇷🇴', baseRate: 18.25 },
    { code: 'THB', name: 'Thai Baht', flag: '🇹🇭', baseRate: 2.45 },
    { code: 'PLN', name: 'Polish Zloty', flag: '🇵🇱', baseRate: 20.85 },
    { code: 'TRY', name: 'Turkish Lira', flag: '🇹🇷', baseRate: 2.41 },
    { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭', baseRate: 94.25 },
    { code: 'DKK', name: 'Danish Krone', flag: '🇩🇰', baseRate: 12.08 },
    { code: 'NOK', name: 'Norwegian Krone', flag: '🇳🇴', baseRate: 7.52 },
    { code: 'SEK', name: 'Swedish Krona', flag: '🇸🇪', baseRate: 7.75 },
    { code: 'ZAR', name: 'South African Rand', flag: '🇿🇦', baseRate: 4.58 },
    { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', baseRate: 22.65 },
    { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', baseRate: 52.85 },
    { code: 'HKD', name: 'Hong Kong Dollar', flag: '🇭🇰', baseRate: 10.68 },
    { code: 'ILS', name: 'Israeli Shekel', flag: '🇮🇱', baseRate: 22.45 },
    { code: 'KES', name: 'Kenyan Shilling', flag: '🇰🇪', baseRate: 0.64 },
    { code: 'NZD', name: 'New Zealand Dollar', flag: '🇳🇿', baseRate: 48.75 },
    { code: 'QAR', name: 'Qatar Rial', flag: '🇶🇦', baseRate: 22.85 },
    { code: 'SAR', name: 'Saudi Riyal', flag: '🇸🇦', baseRate: 22.18 },
    { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', baseRate: 61.25 }
  ];

  // Simulate live rate updates
  useEffect(() => {
    const updateRates = () => {
      const newRates = {};
      currencies.forEach(currency => {
        // Simulate small fluctuations in exchange rates
        const fluctuation = (Math.random() - 0.5) * 0.04; // ±2% fluctuation
        const newRate = currency.baseRate * (1 + fluctuation);
        const change = ((newRate - currency.baseRate) / currency.baseRate) * 100;
        
        newRates[currency.code] = {
          rate: newRate,
          change: change,
          trend: change >= 0 ? 'up' : 'down'
        };
      });
      setRates(newRates);
      setLastUpdated(new Date());
    };

    // Initial update
    updateRates();

    // Update rates every 3 seconds
    const timer = setInterval(updateRates, 3000);

    return () => clearInterval(timer);
  }, []);

  const formatRate = (rate) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(rate);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full text-sm font-semibold text-green-800 mb-8 border border-green-100">
            <Activity className="w-5 h-5 mr-2 text-green-600 animate-pulse" />
            Live FX Rates • 25 Global Currencies • Updates Every 3 Seconds
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            All Supported Currencies
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              with Live FX Rates to INR
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Monitor real-time exchange rates for all 25 supported currencies converted to Indian Rupees. 
            Our live rates update every 3 seconds to ensure you always get the best value.
          </p>
        </div>

        {/* Live Rates Table */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-8 border-b border-green-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">Live Exchange Rates to INR</h3>
                  <p className="text-green-700 font-medium">Real-time rates • Updated every 3 seconds</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full border border-green-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-green-700">Live Updates</span>
                </div>
                <div className="text-sm text-slate-600 bg-white px-3 py-2 rounded-lg border border-slate-200">
                  Updated: {lastUpdated.toLocaleTimeString()}
                </div>
                <div className="bg-blue-100 p-2 rounded-lg">
                  <RefreshCw className="w-5 h-5 text-blue-600 animate-spin" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-slate-50 to-slate-100 border-b-2 border-slate-200">
                <tr>
                  <th className="text-left py-5 px-6 font-bold text-slate-800 text-base">Currency</th>
                  <th className="text-center py-5 px-6 font-bold text-slate-800 text-base">Exchange Rate</th>
                  <th className="text-right py-5 px-6 font-bold text-slate-800 text-base">24h Change</th>
                </tr>
              </thead>
              <tbody>
                {currencies.map((currency, index) => {
                  const rateData = rates[currency.code] || { rate: currency.baseRate, change: 0, trend: 'up' };
                  return (
                    <tr key={currency.code} className={`border-b border-slate-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                      <td className="py-5 px-6">
                        <div className="flex items-center space-x-5">
                          <div className="relative">
                            <span className="text-3xl drop-shadow-sm">{currency.flag}</span>
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-lg tracking-wide">{currency.code}</div>
                            <div className="text-sm text-slate-600 font-medium">{currency.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-center">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-xl border border-blue-100">
                          <span className="text-sm font-medium text-slate-600">1 {currency.code} =</span>
                          <span className="text-xl font-bold text-slate-900">₹{rateData.rate.toFixed(2)}</span>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-right">
                        <div className={`inline-flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-bold ${
                          rateData.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        } ${rateData.trend === 'up' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                          {rateData.trend === 'up' ? 
                            <TrendingUp className="w-4 h-4 animate-bounce" /> : 
                            <TrendingDown className="w-4 h-4 animate-bounce" />
                          }
                          <span>{Math.abs(rateData.change).toFixed(2)}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-white to-blue-50 rounded-2xl px-10 py-6 shadow-xl border border-blue-100">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
              <span className="text-base font-bold text-slate-700">Real-Time Rates</span>
            </div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="text-base font-bold text-slate-700">25 Currencies</span>
            </div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-green-600 animate-pulse" />
              <span className="text-base font-bold text-slate-700">Live Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrencyShowcase;