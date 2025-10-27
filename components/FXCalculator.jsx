"use client";

import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  TrendingDown, 
  RefreshCw, 
  PiggyBank,
  CheckCircle,
  ArrowUpDown,
} from 'lucide-react';
import axios from 'axios';
import Link from 'next/link';

const FXCalculator = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR'); // Fixed to INR
  const [amount, setAmount] = useState('1000');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [ourRate, setOurRate] = useState(null);
  const [bankRate, setBankRate] = useState(null);
  const [savings, setSavings] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Expanded list of 25+ currencies supported by XFlow and other platforms
const currencies = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬' },
  { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪' },
  { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭' },
  { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳' },
  { code: 'HKD', name: 'Hong Kong Dollar', flag: '🇭🇰' },
  { code: 'NZD', name: 'New Zealand Dollar', flag: '🇳🇿' },
  { code: 'SEK', name: 'Swedish Krona', flag: '🇸🇪' },
  { code: 'NOK', name: 'Norwegian Krone', flag: '🇳🇴' },
  { code: 'DKK', name: 'Danish Krone', flag: '🇩🇰' },
  { code: 'ZAR', name: 'South African Rand', flag: '🇿🇦' },
  { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽' },
  { code: 'THB', name: 'Thai Baht', flag: '🇹🇭' },
  { code: 'SAR', name: 'Saudi Riyal', flag: '🇸🇦' },
  { code: 'QAR', name: 'Qatari Riyal', flag: '🇶🇦' }
];

  const popularPairs = [
    { from: 'USD', to: 'INR', label: 'USD → INR' },
    { from: 'EUR', to: 'INR', label: 'EUR → INR' },
    { from: 'GBP', to: 'INR', label: 'GBP → INR' },
    { from: 'AUD', to: 'INR', label: 'AUD → INR' },
    { from: 'CAD', to: 'INR', label: 'CAD → INR' },
    { from: 'AED', to: 'INR', label: 'AED → INR' },
  ];

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    // Reset previous calculation when amount changes
    setConvertedAmount(null);
    setOurRate(null);
  };
  
  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
    // Reset previous calculation when currency changes
    setConvertedAmount(null);
    setOurRate(null);
  };

  const getQuote = async () => {
    if (!fromCurrency || !toCurrency || parseFloat(amount) <= 0) {
      setError('Please enter a valid amount.');
      return;
    }
    
    setLoading(true);
    setError('');
    setConvertedAmount(null);

    try {
      const response = await axios.post('/api/fx', {
        fromCurrency,
        toCurrency,
        amount
      });
      
      const data = response.data;
      setOurRate(data.ourRate);
      setBankRate(data.bankRate);
      setConvertedAmount(data.convertedAmount);
      setSavings(data.savings);
      setLastUpdated(new Date(data.lastUpdated));

    } catch (error) {
      console.error('Rate fetch error:', error);
      setError('Failed to fetch rate. Please try again.');
      setOurRate(null);
      setBankRate(null);
      setConvertedAmount(null);
      setSavings(null);
    } finally {
      setLoading(false);
    }
  };


  const formatCurrency = (value, currency) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4
    }).format(value);
  };
  
  const savingsPercentage = bankRate > 0 ? ((ourRate - bankRate) / bankRate * 100) : 0;

  return (
    <div className="py-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full text-sm font-semibold text-green-800 mb-8 border border-green-100 shadow-sm">
            <TrendingDown className="w-5 h-5 mr-2 text-green-600" />
             Global FX Calculator
          </div>
        
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Get real-time exchange rates and see exactly how much you save with us. No hidden fees, transparent pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-md border border-slate-100 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 shadow-md">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Currency Converter</h3>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-3">You send</label>
                <input
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
                  className="w-full px-6 py-4 text-black text-xl font-semibold border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="1000"
                  min="0"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">From</label>
                  <select
                    value={fromCurrency}
                    onChange={handleFromCurrencyChange}
                    className="w-full px-4 py-4 border border-slate-300 rounded-xl text-lg font-medium text-black"
                  >
                    {currencies.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">To</label>
                  <select
                    value={toCurrency}
                    disabled // Fixed to INR
                    className="w-full px-4 py-4 border border-slate-300 rounded-xl text-lg font-medium text-black bg-slate-100 cursor-not-allowed"
                  >
                    <option value="INR">🇮🇳 INR</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-8">
                 <button
                  type="button"
                  onClick={getQuote}
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center justify-center"
                >
                  {loading ? <RefreshCw className="w-6 h-6 animate-spin" /> : 'Calculate'}
                </button>
                {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
              </div>

              {/* Conversion Result */}
              {(convertedAmount !== null || loading) && (
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-2">They will receive</div>
                    <div className="text-4xl font-bold text-slate-900 mb-4">
                      {loading ? 'Calculating...' : formatCurrency(convertedAmount, toCurrency)}
                    </div>
                    {ourRate && (
                       <div className="flex items-center justify-center space-x-4 text-sm text-slate-600">
                         <span>1 {fromCurrency} = {formatNumber(ourRate)} {toCurrency}</span>
                         <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                         <span suppressHydrationWarning>
                           Updated: {lastUpdated ? lastUpdated.toLocaleTimeString() : 'now'}
                         </span>
                       </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <PiggyBank className="w-8 h-8" />
                <h3 className="text-xl font-bold">Your Savings</h3>
              </div>
              
              {savings !== null ? (
                <div className="space-y-6">
                  <div>
                    <div className="text-sm opacity-90 mb-1">You save vs Bank</div>
                    <div className="text-3xl font-bold">
                      {formatCurrency(savings, toCurrency)}
                    </div>
                    <div className="text-sm opacity-90">
                      {savingsPercentage.toFixed(2)}% better rate
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span>Our Rate</span>
                      <span className="font-semibold">{formatNumber(ourRate)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Avg. Bank Rate</span>
                      <span className="font-semibold">{formatNumber(bankRate)}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="opacity-80">Calculate to see your savings.</p>
                </div>
              )}
            </div>
            
            <div  className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 text-white text-center">
              <h4 className="text-xl font-bold mb-4">Start Saving Today</h4>
              <p className="text-blue-100 mb-6 text-sm">
                Join thousands who save money on international transfers.
              </p>
              <Link href={'https://cbp-main-dash.vercel.app'} 
                target='_blank'
                className="px-4 w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      
              >
                Create Account Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FXCalculator;
