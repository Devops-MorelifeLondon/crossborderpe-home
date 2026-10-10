// components/NavBar.jsx
"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Globe,
  Landmark,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import CrossBorderPELogo from "./Logo";
import bankPages from "@/lib/bank-pages-manifest.json";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Developers", href: "/developers" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const PREMIER_HUBS = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    subtitle: "High-street clearing & digital EMI rails",
    slug: "uk-business-bank-account",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    subtitle: "Domestic ACH & Fedwire clearing accounts",
    slug: "us-business-bank-account",
  },
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    subtitle: "Mainland & Free Zone corporate accounts",
    slug: "uae-business-bank-account",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    subtitle: "MAS-regulated multi-currency treasury",
    slug: "singapore-business-bank-account",
  },
  {
    country: "Switzerland",
    flag: "🇨🇭",
    subtitle: "Commercial & cross-border FX banking",
    slug: "switzerland-business-bank-account",
  },
  {
    country: "Hong Kong",
    flag: "🇭🇰",
    subtitle: "APAC clearing & commercial trade finance",
    slug: "hong-kong-business-bank-account",
  },
];

const REGIONS = {
  Europe: [
    "United Kingdom", "Germany", "Switzerland", "France", "Netherlands", "Ireland",
    "Spain", "Italy", "Luxembourg", "Sweden", "Norway", "Denmark", "Finland",
    "Poland", "Austria", "Belgium", "Portugal", "Czech Republic", "Hungary",
    "Romania", "Greece", "Lithuania", "Latvia", "Bulgaria", "Croatia", "Slovenia",
    "Slovakia", "Serbia", "Estonia", "Cyprus", "Malta",
  ],
  Americas: [
    "United States", "Canada", "Mexico", "Brazil", "Colombia", "Argentina",
    "Chile", "Peru", "Uruguay", "Costa Rica", "Dominican Republic", "Jamaica",
    "Trinidad and Tobago", "Ecuador", "Guatemala", "El Salvador", "Honduras",
    "Paraguay", "Panama",
  ],
  "Asia-Pacific": [
    "Singapore", "Hong Kong", "Japan", "Australia", "New Zealand", "China",
    "India", "South Korea", "Taiwan", "Malaysia", "Indonesia", "Thailand",
    "Vietnam", "Philippines", "Sri Lanka", "Bangladesh", "Pakistan",
    "Kazakhstan", "Uzbekistan", "Georgia", "Armenia", "Azerbaijan",
  ],
  "Middle East & Africa": [
    "United Arab Emirates", "Saudi Arabia", "Qatar", "Israel", "South Africa",
    "Egypt", "Nigeria", "Kenya", "Morocco", "Ghana", "Kuwait", "Bahrain",
    "Oman", "Turkey",
  ],
  "Offshore Hubs": [
    "British Virgin Islands", "Cayman Islands", "Isle of Man", "Jersey",
    "Guernsey", "Bermuda", "Bahamas", "Gibraltar", "Seychelles", "Mauritius",
    "Liechtenstein", "Monaco", "Andorra", "Belize",
  ],
};

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape key listener
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Filtered countries based on selected tab and search query
  const displayedCountries = useMemo(() => {
    let list = bankPages;

    if (selectedRegion !== "All") {
      const allowed = REGIONS[selectedRegion] || [];
      list = list.filter((p) => allowed.includes(p.country));
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      list = list.filter((p) => p.country.toLowerCase().includes(query));
    }

    return list;
  }, [selectedRegion, searchQuery]);

  const regionCounts = useMemo(() => {
    const counts = { All: bankPages.length };
    for (const [reg, list] of Object.entries(REGIONS)) {
      counts[reg] = list.length;
    }
    return counts;
  }, []);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setSearchQuery("");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top Navbar Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 w-full transition-all">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <CrossBorderPELogo className="h-6 w-auto" />
              <span className="sr-only">CrossborderPe Home</span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8" role="navigation">
              <Link
                href="/"
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>

              <Link
                href="/solutions"
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                Solutions
              </Link>

              {/* Business Accounts Mega Menu Trigger */}
              <div className="relative">
                <button
                  ref={triggerRef}
                  type="button"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                    isDropdownOpen
                      ? "bg-blue-50 text-blue-700 shadow-xs ring-1 ring-blue-200"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  <Landmark className="w-4 h-4 text-blue-600" />
                  <span>Business Accounts</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100/80 text-blue-800">
                    100+
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      isDropdownOpen ? "transform rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
              </div>

              <Link
                href="/developers"
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                Developers
              </Link>

              <Link
                href="/resources"
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                Resources
              </Link>

              <Link
                href="/contact"
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="https://app.crossborderpe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors px-3 py-2"
              >
                Sign In
              </Link>
              <Link
                href="https://app.crossborderpe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Open Account</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          DESKTOP MEGA MENU DROPDOWN PANEL
      ========================================================================== */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="hidden lg:block fixed top-[84px] left-1/2 -translate-x-1/2 w-[95vw] max-w-6xl bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden z-50 animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="grid grid-cols-12 min-h-[460px]">
            {/* Left Sidebar: Premier Hubs */}
            <div className="col-span-4 bg-gradient-to-b from-slate-50 via-slate-50/70 to-blue-50/30 p-6 border-r border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 mb-3">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                  <span>Premier Commercial Centers</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Tier-1 Financial Desks
                </h3>
                <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                  Fast-track corporate underwriting for domestic and cross-border entities.
                </p>

                {/* Premier List */}
                <div className="space-y-2">
                  {PREMIER_HUBS.map((hub) => (
                    <Link
                      key={hub.slug}
                      href={`/${hub.slug}`}
                      onClick={closeDropdown}
                      className="group flex items-start gap-3 p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-xs transition-all"
                    >
                      <span className="text-xl shrink-0 mt-0.5">{hub.flag}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 group-hover:text-blue-700 truncate">
                            {hub.country}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:text-blue-600 transition-all transform group-hover:translate-x-0.5" />
                        </div>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">
                          {hub.subtitle}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Trust Callout */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Pre-Audited Compliance</span>
                </div>
                <Link
                  href="/contact"
                  onClick={closeDropdown}
                  className="font-bold text-blue-600 hover:text-blue-800 underline text-[11px]"
                >
                  Free Assessment →
                </Link>
              </div>
            </div>

            {/* Right Main Area: Filterable Jurisdictions Directory */}
            <div className="col-span-8 p-6 flex flex-col justify-between">
              <div>
                {/* Search Bar & Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="Search jurisdiction (e.g., United States, Germany, Singapore, Cayman)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-9 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-slate-400"
                      autoFocus
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 text-xs font-bold"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 shrink-0 font-medium">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span>
                      {displayedCountries.length}{" "}
                      {displayedCountries.length === 1 ? "jurisdiction" : "jurisdictions"}
                    </span>
                  </div>
                </div>

                {/* Region Filter Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-3 border-b border-slate-100 scrollbar-none">
                  {["All", "Europe", "Americas", "Asia-Pacific", "Middle East & Africa", "Offshore Hubs"].map(
                    (reg) => {
                      const isActive = selectedRegion === reg;
                      return (
                        <button
                          key={reg}
                          onClick={() => setSelectedRegion(reg)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                            isActive
                              ? "bg-blue-600 text-white shadow-xs"
                              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                          }`}
                        >
                          {reg}
                          <span
                            className={`ml-1.5 text-[10px] font-bold ${
                              isActive ? "text-blue-100" : "text-slate-400"
                            }`}
                          >
                            {regionCounts[reg] || 0}
                          </span>
                        </button>
                      );
                    }
                  )}
                </div>

                {/* Countries Multi-Column Grid */}
                <div className="max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
                  {displayedCountries.length > 0 ? (
                    <div className="grid grid-cols-3 gap-x-3 gap-y-1">
                      {displayedCountries.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/${item.slug}`}
                          onClick={closeDropdown}
                          className="group flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50/70 transition-all"
                        >
                          <span className="truncate group-hover:translate-x-0.5 transition-transform">
                            {item.country}
                          </span>
                          <span className="text-[10px] text-slate-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <p className="text-xs text-slate-500 mb-2">
                        No banking pages found matching &ldquo;{searchQuery}&rdquo;.
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedRegion("All");
                        }}
                        className="text-xs font-semibold text-blue-600 hover:underline"
                      >
                        Reset filters
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Footer Strip */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>All corporate accounts subject to institutional underwriting approvals.</span>
                <Link
                  href="/contact"
                  onClick={closeDropdown}
                  className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>Need specialized structuring?</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MOBILE NAVIGATION DRAWER
      ========================================================================== */}
      {isMenuOpen && (
        <nav
          className="lg:hidden bg-white border-t border-slate-200 max-h-[85vh] overflow-y-auto shadow-xl"
          role="navigation"
        >
          <div className="px-5 py-6 space-y-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-base font-semibold text-slate-800 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/solutions"
              onClick={() => setIsMenuOpen(false)}
              className="block text-base font-semibold text-slate-800 hover:text-blue-600"
            >
              Solutions
            </Link>

            {/* Mobile Business Accounts Section */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
              <div className="p-4 border-b border-slate-200 bg-slate-100/70 flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                  <Landmark className="w-4 h-4 text-blue-600" />
                  <span>Business Bank Accounts</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                    100
                  </span>
                </div>
              </div>

              {/* Search on mobile */}
              <div className="p-3 border-b border-slate-100 bg-white">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search countries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>

                {/* Region quick pills */}
                <div className="flex gap-1 overflow-x-auto pt-2 scrollbar-none">
                  {["All", "Europe", "Americas", "Asia-Pacific", "Middle East & Africa", "Offshore Hubs"].map(
                    (reg) => (
                      <button
                        key={reg}
                        onClick={() => setSelectedRegion(reg)}
                        className={`px-2 py-0.5 text-[11px] font-medium rounded-md whitespace-nowrap ${
                          selectedRegion === reg
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {reg}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Countries scroll list */}
              <div className="max-h-56 overflow-y-auto p-2 bg-white divide-y divide-slate-100">
                {displayedCountries.map((page) => (
                  <Link
                    key={page.slug}
                    href={`/${page.slug}`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setSearchQuery("");
                    }}
                    className="flex items-center justify-between py-2 px-2 text-xs text-slate-700 hover:text-blue-600"
                  >
                    <span>{page.country}</span>
                    <span className="text-[10px] text-slate-400">→</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/developers"
              onClick={() => setIsMenuOpen(false)}
              className="block text-base font-semibold text-slate-800 hover:text-blue-600"
            >
              Developers
            </Link>

            <Link
              href="/resources"
              onClick={() => setIsMenuOpen(false)}
              className="block text-base font-semibold text-slate-800 hover:text-blue-600"
            >
              Resources
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-base font-semibold text-slate-800 hover:text-blue-600"
            >
              Contact
            </Link>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <Link
                href="https://app.crossborderpe.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full py-2.5 text-center text-sm font-semibold text-slate-700 border border-slate-300 rounded-lg"
              >
                Sign In
              </Link>
              <Link
                href="https://app.crossborderpe.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full py-2.5 text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
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
