"use client";
import React from 'react';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Solutions: [
      { name: "UK Business Bank Account", href: "/uk-business-bank-account" },
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
            <Image height={100} width={200} src="/Crossborderpe_colored.png" className="w-40 mb-2" alt="CrossBorderPe Logo" />
            <p className="text-gray-600 mb-6 max-w-md text-sm leading-relaxed">
              Global cross-border payments infrastructure and multi-currency accounts. Collect international payments in 25+ currencies with local virtual accounts, fast global settlements, and automated compliance.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@crossborderpe.com" className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors">info@crossborderpe.com</span>
              </a>
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

        {/* Compliance Disclaimer */}
        <div className="pt-6 pb-6 border-t border-gray-100 text-xs text-gray-500 leading-relaxed">
          <p>
            <strong className="text-gray-700 font-semibold">Regulatory Disclaimer:</strong> CrossborderPe is a financial technology platform, not a bank. Cross-border payment infrastructure, virtual collection accounts, and foreign currency conversion are facilitated in partnership with tier-1 regulated banking partners and authorized financial institutions. All transactions are executed in strict compliance with applicable foreign exchange regulations and local statutory standards.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-700 text-sm">
            © {currentYear} CrossborderPe. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-700">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
