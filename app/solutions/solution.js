"use client";
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Globe,
  BarChart3,
  Users,
  Award,
  Clock,
  Eye,
  User,
  Briefcase,
  Building2,
  UserCheck,
  Rocket,
  Ship,
  Wallet,
  CreditCard,
  FileText,
  Banknote,
  DollarSign,
  Card,
  Building,
  MessageCircle,
  PhoneCall,
  Headphones
} from 'lucide-react';
import SolutionsHero from '@/components/SolutionHero';

// Data
const solutionTabs = [
  {
    id: 'individuals',
    label: 'Individuals',
    icon: User,
    description: 'Personal cross-border payments',
    subtitle: 'Send money globally with ease'
  },
  {
    id: 'freelancers',
    label: 'Freelancers',
    icon: Briefcase,
    description: 'Get paid from global clients',
    subtitle: 'Receive payments worldwide'
  },
  {
    id: 'sole-proprietor',
    label: 'Sole Proprietors',
    icon: UserCheck,
    description: 'Business payment solutions',
    subtitle: 'Manage business finances'
  },
  {
    id: 'companies',
    label: 'Companies',
    icon: Building2,
    description: 'Enterprise payment infrastructure',
    subtitle: 'Scale your business globally'
  },
  {
    id: 'partnerships',
    label: 'LLP & Partnerships',
    icon: Users,
    description: 'Multi-partner business solutions',
    subtitle: 'Collaborative financial management'
  },
  {
    id: 'startups',
    label: 'Funded Startups',
    icon: Rocket,
    description: 'Growth-focused payment solutions',
    subtitle: 'Scale with confidence'
  },
  {
    id: 'exporters',
    label: 'Exporters',
    icon: Ship,
    description: 'International trade solutions',
    subtitle: 'Export with ease'
  }
];

const solutionsData = {
  individuals: [
    {
      title: "Personal Money Transfers",
      description: "Send money to family and friends across 200+ countries with competitive rates and transparent pricing.",
      features: [
        "Send up to $50,000 per transaction",
        "Real-time exchange rates with no hidden fees",
        "Multiple payout options (bank transfer, cash pickup, mobile wallet)",
        "24/7 customer support in multiple languages",
        "Track your transfer in real-time"
      ],
      benefits: {
        cost: "Up to 8x cheaper than banks",
        speed: "Minutes to hours delivery",
        coverage: "200+ countries"
      },
      icon: Wallet,
      cta: "Start Sending Money"
    },
    {
      title: "Multi-Currency Digital Wallet",
      description: "Hold, exchange, and spend multiple currencies with our secure digital wallet and international debit card.",
      features: [
        "Hold 50+ currencies in one account",
        "Instant currency conversion at market rates",
        "International debit card accepted worldwide",
        "Mobile app for easy money management",
        "FDIC insured up to $250,000"
      ],
      benefits: {
        convenience: "One account, multiple currencies",
        savings: "No foreign transaction fees",
        security: "Bank-level protection"
      },
      icon: CreditCard,
      cta: "Open Digital Wallet"
    }
  ],
  freelancers: [
    {
      title: "Global Payment Collection",
      description: "Get paid by clients worldwide with professional invoicing and multiple payment options.",
      features: [
        "Professional invoice templates with your branding",
        "Accept payments in 50+ currencies",
        "Automatic payment reminders and follow-ups",
        "Integration with popular freelance platforms",
        "Instant payment notifications"
      ],
      benefits: {
        efficiency: "Get paid 3x faster",
        cost: "Low 1.5% transaction fees",
        professional: "Professional invoicing tools"
      },
      icon: Banknote,
      cta: "Start Getting Paid"
    },
    {
      title: "Freelancer Business Account",
      description: "Dedicated business account with expense tracking, tax reporting, and financial management tools.",
      features: [
        "Separate business and personal finances",
        "Automated expense categorization",
        "Tax-ready financial reports",
        "Integration with accounting software",
        "Virtual business address for payments"
      ],
      benefits: {
        organization: "Streamlined finances",
        tax: "Tax-ready reports",
        growth: "Scale your freelance business"
      },
      icon: FileText,
      cta: "Open Business Account"
    }
  ],
  "sole-proprietor": [
    {
      title: "Business Payment Gateway",
      description: "Accept online payments from customers worldwide with our secure payment gateway.",
      features: [
        "Accept credit cards, bank transfers, and digital wallets",
        "Customizable checkout experience",
        "Fraud protection and risk management",
        "Recurring billing and subscription management",
        "Detailed transaction reporting"
      ],
      benefits: {
        conversion: "Higher conversion rates",
        security: "PCI DSS compliant",
        growth: "Scale revenue globally"
      },
      icon: Card,
      cta: "Setup Payment Gateway"
    },
    {
      title: "Business Banking Solutions",
      description: "Complete banking solution with multi-currency accounts, business loans, and financial management.",
      features: [
        "Multi-currency business accounts",
        "Business credit lines up to $500K",
        "Automated bookkeeping integration",
        "Business expense management",
        "Dedicated relationship manager"
      ],
      benefits: {
        cash_flow: "Improved cash flow",
        credit: "Access to business credit",
        support: "Dedicated support"
      },
      icon: Building,
      cta: "Open Business Account"
    }
  ],
  companies: [
    {
      title: "Enterprise Payment Infrastructure",
      description: "Comprehensive payment processing platform for medium to large enterprises with advanced features.",
      features: [
        "High-volume transaction processing",
        "Advanced fraud detection and prevention",
        "Multi-entity and subsidiary management",
        "Custom API integration and webhooks",
        "Dedicated technical support team"
      ],
      benefits: {
        scale: "Process millions of transactions",
        security: "Enterprise-grade security",
        integration: "Seamless system integration"
      },
      icon: Building2,
      cta: "Contact Enterprise Sales"
    },
    {
      title: "Global Treasury Management",
      description: "Advanced treasury solutions for cash management, FX hedging, and liquidity optimization.",
      features: [
        "Real-time cash positioning across entities",
        "Automated cash pooling and sweeping",
        "FX hedging and risk management tools",
        "Liquidity forecasting and planning",
        "Regulatory reporting automation"
      ],
      benefits: {
        efficiency: "40% reduction in treasury costs",
        visibility: "Real-time global cash visibility",
        risk: "Reduced FX and liquidity risk"
      },
      icon: BarChart3,
      cta: "Schedule Treasury Demo"
    }
  ],
  partnerships: [
    {
      title: "Multi-Partner Account Management",
      description: "Specialized accounts for LLPs and partnerships with role-based access and profit distribution.",
      features: [
        "Multiple authorized signatories",
        "Role-based access controls and permissions",
        "Automated profit/loss distribution",
        "Partner-specific reporting and statements",
        "Compliance with partnership regulations"
      ],
      benefits: {
        control: "Granular access controls",
        transparency: "Clear financial visibility",
        compliance: "Partnership law compliance"
      },
      icon: Users,
      cta: "Setup Partnership Account"
    },
    {
      title: "Collaborative Financial Management",
      description: "Tools for partners to collaborate on financial decisions and manage shared resources.",
      features: [
        "Shared expense management and approval workflows",
        "Partner voting on major financial decisions",
        "Integrated communication and document sharing",
        "Audit trails for all financial activities",
        "Professional partnership reporting"
      ],
      benefits: {
        collaboration: "Streamlined partner collaboration",
        accountability: "Complete audit trails",
        efficiency: "Faster decision making"
      },
      icon: MessageCircle,
      cta: "Enable Collaboration Tools"
    }
  ],
  startups: [
    {
      title: "Startup Growth Banking",
      description: "Banking solutions designed for funded startups with growth-focused features and venture debt options.",
      features: [
        "High transaction limits for scaling businesses",
        "Venture debt and growth financing options",
        "Integration with cap table management",
        "Investor reporting and transparency tools",
        "Startup-friendly fee structures"
      ],
      benefits: {
        growth: "Scale without banking limits",
        funding: "Access to growth capital",
        investors: "Transparent investor reporting"
      },
      icon: Rocket,
      cta: "Apply for Startup Banking"
    },
    {
      title: "International Expansion Support",
      description: "Complete support for startups expanding internationally with local banking and compliance.",
      features: [
        "Local bank accounts in key markets",
        "International payroll and contractor payments",
        "Multi-country compliance management",
        "Currency hedging for international operations",
        "Dedicated expansion advisory services"
      ],
      benefits: {
        speed: "Launch in new markets faster",
        compliance: "Automated compliance management",
        support: "Expert expansion guidance"
      },
      icon: Globe,
      cta: "Plan International Expansion"
    }
  ],
  exporters: [
    {
      title: "Export Trade Finance",
      description: "Comprehensive trade finance solutions including letters of credit, export financing, and risk mitigation.",
      features: [
        "Letters of credit and documentary collections",
        "Export financing and working capital loans",
        "Political and commercial risk insurance",
        "Supply chain financing for suppliers",
        "Trade document digitization and management"
      ],
      benefits: {
        cash_flow: "Improved working capital",
        risk: "Reduced export risks",
        efficiency: "Streamlined trade processes"
      },
      icon: Ship,
      cta: "Access Trade Finance"
    },
    {
      title: "Export Payment Solutions",
      description: "Specialized payment solutions for exporters including multi-currency accounts and FX management.",
      features: [
        "Export-specific multi-currency accounts",
        "Competitive FX rates for export proceeds",
        "Automated export documentation",
        "Integration with shipping and logistics",
        "Export incentive and subsidy management"
      ],
      benefits: {
        margins: "Better export margins",
        automation: "Automated export processes",
        incentives: "Maximize export incentives"
      },
      icon: DollarSign,
      cta: "Optimize Export Payments"
    }
  ]
};

const trustIndicators = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your money and data protected with military-grade encryption"
  },
  {
    icon: Award,
    title: "Regulated & Licensed",
    description: "Licensed money transmitter in 50+ jurisdictions"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support in your language"
  },
  {
    icon: Eye,
    title: "Transparent Pricing",
    description: "No hidden fees - see exactly what you pay upfront"
  }
];

const successStories = [
  {
    type: "Freelancer",
    name: "Sarah M.",
    location: "Designer from UK",
    story: "Reduced payment collection time from 2 weeks to 2 days",
    savings: "Saved $2,400 annually on fees"
  },
  {
    type: "Startup",
    name: "TechFlow Inc.",
    location: "SaaS Startup",
    story: "Expanded to 15 countries in 6 months",
    savings: "60% reduction in international transfer costs"
  },
  {
    type: "Exporter",
    name: "Global Textiles Ltd.",
    location: "Textile Exporter",
    story: "Improved cash flow by 40% with trade finance",
    savings: "$50K saved on banking fees annually"
  }
];

// Main Page Component
const SolutionsPage = ()=> {
  const [activeTab, setActiveTab] = useState('individuals');
  const currentTabData = solutionTabs.find(tab => tab.id === activeTab);
  const solutionsList = solutionsData[activeTab] || [];

  return (
    <>
      

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-16">
          <SolutionsHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}


          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {trustIndicators.map((indicator, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all group text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 w-fit mx-auto mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all shadow-lg">
                  <indicator.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{indicator.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{indicator.description}</p>
              </div>
            ))}
          </div>

          {/* Solution Tabs */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-2 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-2">
              {solutionTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center space-y-3 px-4 py-6 rounded-2xl font-semibold transition-all text-center ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                  type="button"
                  aria-label={tab.label}
                >
                  <tab.icon className="w-8 h-8" />
                  <div className="text-sm font-bold">{tab.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Solutions Content, Meta Included in Above <Head> for Page-Level SEO */}
          {currentTabData && (
            <div className="space-y-16">
              {/* Tab Header */}
              <div className="text-center">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-sm font-semibold text-blue-800 mb-6 border border-blue-100">
                  <currentTabData.icon className="w-5 h-5 mr-2 text-blue-600" />
                  Perfect for {currentTabData.label}
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">{currentTabData.description}</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">{currentTabData.subtitle}</p>
              </div>

              {/* Solutions */}
              <div className="space-y-12">
                {solutionsList.map((sol, idx) => (
                  <div key={idx} className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Content */}
                      <div className="p-12">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 shadow-lg">
                            <sol.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-slate-900">{sol.title}</h3>
                        </div>

                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">{sol.description}</p>

                        <div className="space-y-4 mb-8">
                          {sol.features.map((feature, ix) => (
                            <div key={ix} className="flex items-center space-x-3">
                              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                              <span className="text-slate-700 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                          <Link href="https://app.crossborderpe.com" target='_blank' className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center space-x-2 shadow-lg" type="button">
                            <span>{sol.cta}</span>
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                         
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-12 flex flex-col justify-center">
                        <h4 className="text-2xl font-bold text-slate-900 mb-8">Key Benefits</h4>
                        <div className="space-y-6">
                          {Object.entries(sol.benefits).map(([key, value], bidx) => (
                            <div key={bidx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                              <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
                              <div className="text-sm font-medium text-slate-700 capitalize">
                                {key.replace(/_/g, ' ')}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Success Stories */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center mb-20 mt-24">
            <h3 className="text-3xl font-bold text-white mb-4">Real Success Stories</h3>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              See how people like you are succeeding with CrossborderPe
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="text-sm font-semibold text-blue-300 mb-2">{story.type}</div>
                  <div className="text-lg font-bold text-white mb-2">{story.name}</div>
                  <div className="text-sm text-slate-300 mb-4">{story.location}</div>
                  <div className="text-white mb-4">"{story.story}"</div>
                  <div className="text-green-300 font-semibold">{story.savings}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-16 text-center">
            <h3 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h3>
            <p className="text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join millions who trust CrossborderPe for their international payment needs. 
              Open your account in minutes and start saving today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6">
              <Link href="https://app.crossborderpe.com" target='_blank' className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl" type="button">
                Open Free Account
              </Link>
             
            </div>
            <div className="flex items-center justify-center space-x-8 mt-12 text-blue-100">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Regulated & Licensed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionsPage;