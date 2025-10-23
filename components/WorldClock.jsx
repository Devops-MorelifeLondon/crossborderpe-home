"use client";

import React, { useState, useEffect } from 'react';
import { Clock, Globe, MapPin, TrendingUp, Building2, Users, Zap, Shield } from 'lucide-react';
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

const WorldClockTicker = () => {
  // This state will trigger updates, but won't be used for the initial server render.
  const [time, setTime] = useState(new Date());
  
  // This state ensures that dynamic, time-sensitive content is only rendered on the client.
  const [isClient, setIsClient] = useState(false);

  // An array of major financial centers and office locations.
  const timeZones = [
      { city: 'Washington D.C.', country: 'United States', timezone: 'America/New_York', flag: '🇺🇸', type: 'headquarters', offset: 'UTC-5' },
      { city: 'Berlin', country: 'Germany', timezone: 'Europe/Berlin', flag: '🇩🇪', type: 'regional-hq', offset: 'UTC+1' },
      { city: 'London', country: 'United Kingdom', timezone: 'Europe/London', flag: '🇬🇧', type: 'regional-hq', offset: 'UTC+0' },
      { city: 'Tokyo', country: 'Japan', timezone: 'Asia/Tokyo', flag: '🇯🇵', type: 'office', offset: 'UTC+9' },
      { city: 'Canberra', country: 'Australia', timezone: 'Australia/Sydney', flag: '🇦🇺', type: 'office', offset: 'UTC+11' },
      { city: 'Ottawa', country: 'Canada', timezone: 'America/Toronto', flag: '🇨🇦', type: 'office', offset: 'UTC-5' },
      { city: 'Bern', country: 'Switzerland', timezone: 'Europe/Zurich', flag: '🇨🇭', type: 'office', offset: 'UTC+1' },
      { city: 'Wellington', country: 'New Zealand', timezone: 'Pacific/Auckland', flag: '🇳🇿', type: 'office', offset: 'UTC+13' },
      { city: 'Singapore', country: 'Singapore', timezone: 'Asia/Singapore', flag: '🇸🇬', type: 'regional-hq', offset: 'UTC+8' },
      { city: 'Hong Kong', country: 'Hong Kong', timezone: 'Asia/Hong_Kong', flag: '🇭🇰', type: 'office', offset: 'UTC+8' },
      { city: 'Abu Dhabi', country: 'United Arab Emirates', timezone: 'Asia/Dubai', flag: '🇦🇪', type: 'regional-hq', offset: 'UTC+4' },
      { city: 'Stockholm', country: 'Sweden', timezone: 'Europe/Stockholm', flag: '🇸🇪', type: 'office', offset: 'UTC+1' },
      { city: 'Copenhagen', country: 'Denmark', timezone: 'Europe/Copenhagen', flag: '🇩🇰', type: 'office', offset: 'UTC+1' },
      { city: 'Oslo', country: 'Norway', timezone: 'Europe/Oslo', flag: '🇳🇴', type: 'office', offset: 'UTC+1' },
      { city: 'Beijing', country: 'China', timezone: 'Asia/Shanghai', flag: '🇨🇳', type: 'office', offset: 'UTC+8' },
      { city: 'New Delhi', country: 'India', timezone: 'Asia/Kolkata', flag: '🇮🇳', type: 'office', offset: 'UTC+5:30' },
      { city: 'Brasília', country: 'Brazil', timezone: 'America/Sao_Paulo', flag: '🇧🇷', type: 'office', offset: 'UTC-3' },
      { city: 'Pretoria', country: 'South Africa', timezone: 'Africa/Johannesburg', flag: '🇿🇦', type: 'office', offset: 'UTC+2' },
      { city: 'Mexico City', country: 'Mexico', timezone: 'America/Mexico_City', flag: '🇲🇽', type: 'office', offset: 'UTC-6' },
      { city: 'Seoul', country: 'South Korea', timezone: 'Asia/Seoul', flag: '🇰🇷', type: 'office', offset: 'UTC+9' },
      { city: 'Moscow', country: 'Russia', timezone: 'Europe/Moscow', flag: '🇷🇺', type: 'office', offset: 'UTC+3' },
      { city: 'Ankara', country: 'Turkey', timezone: 'Europe/Istanbul', flag: '🇹🇷', type: 'office', offset: 'UTC+3' },
      { city: 'Warsaw', country: 'Poland', timezone: 'Europe/Warsaw', flag: '🇵🇱', type: 'office', offset: 'UTC+1' },
      { city: 'Bangkok', country: 'Thailand', timezone: 'Asia/Bangkok', flag: '🇹🇭', type: 'office', offset: 'UTC+7' },
      { city: 'Manila', country: 'Philippines', timezone: 'Asia/Manila', flag: '🇵🇭', type: 'office', offset: 'UTC+8' },
      { city: 'Jakarta', country: 'Indonesia', timezone: 'Asia/Jakarta', flag: '🇮🇩', type: 'office', offset: 'UTC+7' }
  ];

  // This effect runs only on the client, after the initial render.
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
      weekday: 'long',
      month: 'long',
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

  const getOfficeTypeInfo = (type) => {
    switch (type) {
      case 'headquarters':
        return { label: 'Global Headquarters', color: 'bg-blue-100 text-blue-700 border-blue-200' };
      case 'regional-hq':
        return { label: 'Regional HQ', color: 'bg-green-100 text-green-700 border-green-200' };
      case 'office':
        return { label: 'Local Office', color: 'bg-purple-100 text-purple-700 border-purple-200' };
      default:
        return { label: 'Office', color: 'bg-slate-100 text-slate-700 border-slate-200' };
    }
  };

  return (
    <section className="py-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-sm font-semibold text-blue-800 mb-8 border border-blue-100 shadow-sm">
            <Globe className="w-5 h-5 mr-2 text-blue-600" />
            24/7 Global Operations • Always Available
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our worldwide network operates across all time zones, ensuring your payments are processed 
            and supported whenever you need us, anywhere in the world.
          </p>
        </div>

        {/* World Clock Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {timeZones.map((zone, index) => {
            const officeInfo = getOfficeTypeInfo(zone.type);
            // Business hours are calculated only on the client to prevent mismatch
            const businessHours = isClient && isBusinessHours(zone.timezone);
            
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all group">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl text-gray-600">{zone.flag}</span>
                    <div className={`w-3 h-3 rounded-full ${businessHours ? 'bg-green-500' : 'bg-slate-400'}`}></div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${officeInfo.color}`}>
                    {officeInfo.label}
                  </span>
                </div>
                
                {/* Time Display with Hydration Fix */}
                <div className="mb-6 h-24"> {/* Added a fixed height to prevent layout shift */}
                  {isClient ? (
                    <>
                      <div className={`text-3xl font-bold text-slate-900 mb-2 ${spaceMono.className}`}>
                        {getTimeForTimezone(zone.timezone)}
                      </div>
                      <div className="text-sm text-slate-500 mb-1">
                        {getDateForTimezone(zone.timezone)}
                      </div>
                      <div className="text-xs text-slate-400">
                        {zone.offset}
                      </div>
                    </>
                  ) : (
                    // Placeholder skeleton to prevent layout shift before client-side render
                    <>
                      <div className="h-9 w-40 animate-pulse rounded-md bg-slate-200 mb-2"></div>
                      <div className="h-5 w-32 animate-pulse rounded-md bg-slate-200 mb-1"></div>
                      <div className="h-4 w-12 animate-pulse rounded-md bg-slate-200"></div>
                    </>
                  )}
                </div>
                
                {/* Location Info */}
                <div className="mb-4">
                  <div className="text-xl font-bold text-slate-900 mb-1">{zone.city}</div>
                  <div className="text-sm text-slate-600">{zone.country}</div>
                </div>
                
                {/* Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${businessHours ? 'bg-green-500' : 'bg-slate-400'}`}></div>
                    <span className={`text-sm font-medium ${businessHours ? 'text-green-600' : 'text-slate-500'}`}>
                      {isClient ? (businessHours ? 'Business Hours' : 'After Hours') : 'Loading...'}
                    </span>
                  </div>
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
