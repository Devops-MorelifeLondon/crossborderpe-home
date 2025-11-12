"use client";
import React, { useEffect, useState, useMemo } from 'react';
import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

// Custom hook for live timezones
const useLiveTimes = (timezones) => {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const newTimes = {};
      timezones.forEach(tz => {
        try {
          const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: tz,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          });
          newTimes[tz] = formatter.format(now);
        } catch {
          newTimes[tz] = "Invalid Timezone";
        }
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, [timezones]);

  return times;
};

const Footer = () => {
  const [selectedRegion, setSelectedRegion] = useState('Middle East & Africa');

  const officeLocations = [
    {
      region: "Middle East & Africa",
      offices: [
        { city: "Dubai", address: "Level 2, Gate Village 8, DIFC, Dubai, UAE", timezone: "Asia/Dubai" },
        { city: "Abu Dhabi", address: "Al Sila Tower, 27th Floor, ADGM Square, Abu Dhabi, UAE", timezone: "Asia/Dubai" },
        { city: "Manama", address: "ABC Tower, Diplomatic Area, Manama, Bahrain", timezone: "Asia/Bahrain" },
        { city: "Nairobi", address: "Kencom House, Moi Avenue, Nairobi, Kenya", timezone: "Africa/Nairobi" },
        { city: "Riyadh", address: "King Saud Road, Al Murabba, Riyadh, Saudi Arabia", timezone: "Asia/Riyadh" },
      ]
    },
    {
      region: "Asia Pacific",
      offices: [
        { city: "Sydney", address: "Governor Phillip Tower, Sydney NSW, Australia", timezone: "Australia/Sydney" },
        { city: "Mumbai", address: "Kalina, Mumbai, India", timezone: "Asia/Kolkata" },
        { city: "Singapore", address: "Asia Square Tower 2, Singapore", timezone: "Asia/Singapore" },
        { city: "Tokyo", address: "Otemachi Park Building, Tokyo, Japan", timezone: "Asia/Tokyo" },
      ]
    },
    {
      region: "Europe",
      offices: [
        { city: "London", address: "Canary Wharf, London, UK", timezone: "Europe/London" },
        { city: "Paris", address: "Place Vendôme, Paris, France", timezone: "Europe/Paris" },
        { city: "Berlin", address: "Taubenstrasse, Berlin, Germany", timezone: "Europe/Berlin" },
        { city: "Zurich", address: "Zurich, Switzerland", timezone: "Europe/Zurich" },
      ]
    },
    {
      region: "Americas",
      offices: [
        { city: "New York", address: "Manhattan, New York, USA", timezone: "America/New_York" },
        { city: "Toronto", address: "Bay Street, Toronto, Canada", timezone: "America/Toronto" },
        { city: "Vancouver", address: "Burrard Street, Vancouver, Canada", timezone: "America/Vancouver" },
      ]
    }
  ];

  const filteredOffices = useMemo(() => {
    const region = officeLocations.find(r => r.region === selectedRegion);
    return region ? region.offices : [];
  }, [selectedRegion]);

  const timezones = useMemo(() => [...new Set(filteredOffices.map(o => o.timezone))], [filteredOffices]);
  const liveTimes = useLiveTimes(timezones);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Solutions: [
      { name: "Payment Processing", href: "/solutions#payment-processing" },
      { name: "Mobile Payments", href: "/solutions#mobile-payments" },
      { name: "Global Expansion", href: "/solutions#global-expansion" },
      { name: "API Documentation", href: "/solutions#api-docs" },
    ],
    Resources: [
      { name: "Documentation", href: "/resources#docs" },
      { name: "API Reference", href: "/resources#api" },
      { name: "Support Center", href: "/resources#support" },
      { name: "Blog", href: "/resources#blog" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/legal#privacy" },
      { name: "Terms of Service", href: "/legal#terms" },
      { name: "Security", href: "/legal#security" },
      { name: "Compliance", href: "/legal#compliance" },
    ],
  };

  return (
    <footer className="bg-white text-black shadow-lg border-t border-gray-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img src="/Crossborderpe_colored.png" className="w-40 mb-2" alt="CrossBorderPe Logo" />
            <p className="text-gray-600 mb-6 max-w-md">
              Leading cross-border payment solutions provider for seamless international transactions.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@crossborderpe.com" className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors">info@crossborderpe.com</span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">Global Offices • 25+ Countries</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global Presence */}
        <div className="py-8 border-y border-gray-200">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-black mb-1">Our Global Presence</h3>
            <p className="text-sm text-gray-600">Live times from our offices across four continents</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {officeLocations.map((r) => (
              <button
                key={r.region}
                onClick={() => setSelectedRegion(r.region)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  selectedRegion === r.region
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                {r.region}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredOffices.map((office, i) => (
              <div
                key={i}
                className="bg-white shadow-sm p-4 rounded-lg hover:border-blue-500 border border-gray-200 transition-all"
              >
                <h4 className="font-bold text-black text-md">{office.city}</h4>
                <p className="text-xs text-gray-700 mb-2 truncate">{office.address}</p>
                <p className="text-lg font-mono text-blue-600">
                  {liveTimes[office.timezone] || "Loading..."}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-700 text-sm">
            © {currentYear} CrossborderPe. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-700">All systems operational</span>
            </div>
            <div className="text-sm text-gray-700 font-medium border border-gray-600 px-2 py-1 rounded-md">
              SOC 2 Type II Certified
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
