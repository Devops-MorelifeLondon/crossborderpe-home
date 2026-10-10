"use client";

import React, { useState, useEffect } from 'react';
import { Globe, Landmark } from 'lucide-react';
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

const WorldClockTicker = () => {
  const [time, setTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  // Global banking rails and key financial clearing centers
  const clearingHubs = [
    { city: 'New York', region: 'United States', timezone: 'America/New_York', flag: '🇺🇸', rail: 'ACH & Fedwire Rails', offset: 'UTC-5' },
    { city: 'London', region: 'United Kingdom', timezone: 'Europe/London', flag: '🇬🇧', rail: 'Faster Payments & BACS', offset: 'UTC+0' },
    { city: 'Frankfurt', region: 'European Union', timezone: 'Europe/Berlin', flag: '🇪🇺', rail: 'SEPA Instant & Target2', offset: 'UTC+1' },
    { city: 'Mumbai', region: 'India (Payout Hub)', timezone: 'Asia/Kolkata', flag: '🇮🇳', rail: 'NEFT, RTGS & IMPS Rails', offset: 'UTC+5:30' },
    { city: 'Toronto', region: 'Canada', timezone: 'America/Toronto', flag: '🇨🇦', rail: 'EFT & Interac Network', offset: 'UTC-5' },
    { city: 'Singapore', region: 'Singapore / APAC', timezone: 'Asia/Singapore', flag: '🇸🇬', rail: 'FAST & MEPS+ Rails', offset: 'UTC+8' },
    { city: 'Sydney', region: 'Australia', timezone: 'Australia/Sydney', flag: '🇦🇺', rail: 'BECS Direct Entry', offset: 'UTC+11' },
    { city: 'Dubai', region: 'UAE / GCC', timezone: 'Asia/Dubai', flag: '🇦🇪', rail: 'UAEFTS Clearing Rails', offset: 'UTC+4' }
  ];

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeForTimezone = (timezone) => {
    return time.toLocaleString('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const getDateForTimezone = (timezone) => {
    return time.toLocaleDateString('en-US', {
      timeZone: timezone,
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const isBusinessHours = (timezone) => {
    const hour = parseInt(time.toLocaleString('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      hour12: false
    }));
    const day = time.toLocaleDateString('en-US', { timeZone: timezone, weekday: 'long' });
    
    const isWeekend = day === 'Saturday' || day === 'Sunday';
    const isWorkingHours = hour >= 9 && hour < 18;
    
    return !isWeekend && isWorkingHours;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-xs sm:text-sm font-semibold text-blue-800 mb-6 border border-blue-100 shadow-xs">
            <Globe className="w-4 h-4 mr-2 text-blue-600" />
            24/7 Global Clearing Rails & Settlement Windows
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Active Banking Rails Across Time Zones
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our partner banking infrastructure operates around the clock across global clearing networks, ensuring inward foreign payments are cleared and converted to INR without unnecessary turnaround delays.
          </p>
        </div>

        {/* Clearing Hubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {clearingHubs.map((hub, index) => {
            const businessHours = isClient && isBusinessHours(hub.timezone);
            
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-all group">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2.5">
                    <span className="text-2xl">{hub.flag}</span>
                    <div>
                      <div className="text-base font-bold text-slate-900 leading-tight">{hub.city}</div>
                      <div className="text-xs text-slate-500">{hub.region}</div>
                    </div>
                  </div>
                  <div className={`w-2.5 h-2.5 rounded-full ${businessHours ? 'bg-green-500 shadow-xs animate-pulse' : 'bg-slate-300'}`}></div>
                </div>
                
                {/* Rail Pill */}
                <div className="mb-4">
                  <span className="inline-flex items-center text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    <Landmark className="w-3 h-3 mr-1" />
                    {hub.rail}
                  </span>
                </div>

                {/* Time Display */}
                <div className="mb-4 py-2 border-y border-slate-100">
                  {isClient ? (
                    <>
                      <div className={`text-2xl font-bold text-slate-900 ${spaceMono.className}`}>
                        {getTimeForTimezone(hub.timezone)}
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-500 mt-1">
                        <span>{getDateForTimezone(hub.timezone)}</span>
                        <span className="font-mono text-slate-400">{hub.offset}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="h-8 w-32 animate-pulse rounded-md bg-slate-200 mb-2"></div>
                      <div className="h-4 w-24 animate-pulse rounded-md bg-slate-200"></div>
                    </>
                  )}
                </div>
                
                {/* Status */}
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${businessHours ? 'bg-green-500' : 'bg-slate-400'}`}></div>
                  <span className={`text-xs font-semibold ${businessHours ? 'text-green-700' : 'text-slate-500'}`}>
                    {isClient ? (businessHours ? 'Clearing Rail Active' : 'Off-Peak Clearing Window') : 'Checking Rail Status...'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorldClockTicker;

