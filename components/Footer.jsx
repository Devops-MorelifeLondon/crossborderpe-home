"use client";
import React, { useEffect, useState, useMemo } from 'react';

import { Mail, MapPin, ArrowRight } from 'lucide-react';



// Custom hook to get live times for different timezones.
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
        } catch (error) {
          console.error(`Invalid timezone: ${tz}`);
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
  const [email, setEmail] = useState('');

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

  const getFilteredOffices = () => {
    if (selectedRegion === 'All') {
      return officeLocations.flatMap(region =>
        region.offices.map(office => ({ ...office, region: region.region }))
      );
    }
    const regionData = officeLocations.find(region => region.region === selectedRegion);
    return regionData ? regionData.offices.map(office => ({ ...office, region: selectedRegion })) : [];
  };

 const filteredOffices = useMemo(() => getFilteredOffices(), [selectedRegion]);

const timezones = useMemo(() => {
  return [...new Set(filteredOffices.map(o => o.timezone))];
}, [filteredOffices]);

  const liveTimes = useLiveTimes(timezones);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with email:', email);
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const currentYear = new Date().getFullYear();
  const footerLinks = {
    Solutions: ["Payment Processing", "Mobile Payments", "Global Expansion", "API Documentation"],
    Resources: ["Documentation", "API Reference", "Support Center", "Blog"],
    Legal: ["Privacy Policy", "Terms of Service", "Security", "Compliance"],
  };

  return (
    <footer className=" bg-white text-black shadow-lg">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section: Company Info, Links, and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
           <img src="/Crossborderpe_colored.png" className='w-40 mb-2' alt="" />
            <p className="text-gray-600 mb-6 max-w-md">
              Leading cross-border payment solutions provider for seamless international transactions.
            </p>
            <div className="space-y-3">
              <a href="mailto:support@crossborderpe.com" className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors">support@crossborderpe.com</span>
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
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Signup */}
          <div className="lg:col-span-5 border-t border-gray-800 pt-8 mt-8 lg:mt-0 lg:border-none lg:pt-0">
             <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                <p className="text-gray-600 mb-4">
                  Get the latest updates on new features and industry insights.
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-[#f2f2f2] border border-white/70 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                  <button type="submit" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md font-medium hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2 shadow-md">
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
             </div>
          </div>
        </div>

        {/* Middle Section: Global Presence */}
        <div className="py-8 border-y border-gray-800">
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-black mb-1">Our Global Presence</h3>
                <p className="text-sm text-gray-600">Live times from our offices across four continents</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                {[...officeLocations.map(r => r.region)].map((region) => (
                    <button
                        key={region}
                        onClick={() => setSelectedRegion(region)}
                        className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                            selectedRegion === region
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-white text-black hover:bg-gray-200'
                        }`}
                    >
                        {region}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredOffices.map((office, index) => (
                    <div key={index} className="bg-white shadow-sm p-4 rounded-lg  hover:border-blue-500 transition-all">
                        <h4 className="font-bold text-black text-md">{office.city}</h4>
                        <p className="text-xs text-gray-700 mb-2 truncate">{office.address}</p>
                        <p className="text-lg font-mono text-blue-600">
                            {liveTimes[office.timezone] || "Loading..."}
                        </p>
                        {selectedRegion === 'All' && (
                            <span className="mt-2 inline-block px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded-full">
                                {office.region}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Bottom Bar: Copyright and Status */}
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
