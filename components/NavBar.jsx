// components/NavBar.jsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import CrossBorderPELogo from './Logo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Developers', href: '/developers' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <CrossBorderPELogo className="h-5" />
            <span className="sr-only">Cross Border PE Home</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors font-medium text-gray-800 hover:text-black"
                aria-label={`Navigate to ${label}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
             href={'https://app.crossborderpe.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link
             href={'https://app.crossborderpe.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
            >
              Open Account
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden p-2 text-black"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100" role="navigation">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="block transition-colors font-medium text-gray-600 hover:text-gray-800"
                aria-label={`Navigate to ${label}`}
              >
                {label}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Link
                href={'https://app.crossborderpe.com'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 hover:text-black transition-colors font-medium"
              >
                Sign In
              </Link>
              <Link
                href={'https://app.crossborderpe.com'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg text-center"
              >
                Open Account
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
