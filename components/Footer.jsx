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
              <a
                href="https://wa.me/447481354231?text=Hello%20CrossborderPe%20team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 group"
              >
                <span className="text-[#25D366] group-hover:text-emerald-700 transition-colors flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <span className="text-gray-600 group-hover:text-emerald-600 transition-colors">+44 7481 354231</span>
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
