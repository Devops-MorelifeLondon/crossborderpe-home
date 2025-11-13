'use client';
import React, { useState, useMemo } from 'react';

import { 
  Search, 
  Calendar, 
  Clock, 
  Eye, 
  Heart, 
  ArrowRight, 
  TrendingUp,
  BookOpen,
  Users,
  Globe,
  Zap,
  Star,
  ChevronRight,
  Download,
  Play,
  FileText,
  Video,
  Headphones,
  HelpCircle,
  Shield,
  Award,
  Building2,
  BarChart3,
  Target,
  Lightbulb,
  Mic,
  BookMarked,
  UserCheck,
  MapPin,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { blogPosts, categories, tags, BlogPost } from '@/lib/data/blogData';
import Link from 'next/link';
import Head from 'next/head';
import ResourcesHero from '@/components/ResourceHero';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [activeTab, setActiveTab] = useState('insights');

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });

    switch (sortBy) {
      case 'popular':
        return filtered.sort((a, b) => b.views - a.views);
      case 'liked':
        return filtered.sort((a, b) => b.likes - a.likes);
      default:
        return filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }
  }, [searchTerm, selectedCategory, selectedTag, sortBy]);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const resourceTabs = [
    { 
      id: 'research', 
      label: 'Research Reports', 
      icon: BarChart3, 
      count: '150+',
      description: 'In-depth market analysis and industry insights'
    },
    { 
      id: 'webinars', 
      label: 'Expert Webinars', 
      icon: Video, 
      count: '75+',
      description: 'Live sessions with industry thought leaders'
    },
    { 
      id: 'podcast', 
      label: 'Banking Podcast', 
      icon: Mic, 
      count: '120+',
      description: 'Weekly insights and expert interviews'
    },
    { 
      id: 'cases', 
      label: 'Case Studies', 
      icon: Target, 
      count: '85+',
      description: 'Real-world implementation success stories'
    },
    { 
      id: 'insights', 
      label: 'Market Insights', 
      icon: Lightbulb, 
      count: '200+',
      description: 'Expert analysis and thought leadership'
    },
    { 
      id: 'guides', 
      label: 'Implementation Guides', 
      icon: BookMarked, 
      count: '45+',
      description: 'Technical documentation and best practices'
    },
    { 
      id: 'faqs', 
      label: 'Knowledge Base', 
      icon: HelpCircle, 
      count: '300+',
      description: 'Comprehensive support documentation'
    },
    { 
      id: 'careers', 
      label: 'Career Opportunities', 
      icon: UserCheck, 
      count: '25+',
      description: 'Join our global team of experts'
    }
  ];

  const researchReports = [
    {
      title: "Global Cross-Border Payments Market Report 2024",
      category: "Market Analysis",
      publishDate: "December 2024",
      pages: "156 pages",
      type: "Premium Report",
      description: "Comprehensive analysis of the $190 trillion cross-border payments market, regulatory trends, and emerging technologies.",
      tags: ["Market Research", "Regulatory", "Technology Trends"]
    },
    {
      title: "Central Bank Digital Currencies: Implementation Roadmap",
      category: "Technology Research",
      publishDate: "November 2024",
      pages: "89 pages",
      type: "Technical Report",
      description: "Strategic analysis of CBDC implementations across 45 countries and their impact on cross-border payments.",
      tags: ["CBDC", "Digital Currency", "Implementation"]
    },
    {
      title: "Enterprise Treasury Management: 2024 Benchmark Study",
      category: "Industry Benchmark",
      publishDate: "October 2024",
      pages: "124 pages",
      type: "Benchmark Report",
      description: "Survey of 500+ CFOs on treasury management practices, challenges, and digital transformation priorities.",
      tags: ["Treasury", "Benchmarking", "Digital Transformation"]
    }
  ];

  const webinars = [
    {
      title: "The Future of Cross-Border Payments: Real-Time Settlement",
      speaker: "Dr. Sarah Chen, Head of Global Payments Strategy",
      date: "January 15, 2025",
      time: "2:00 PM EST",
      duration: "60 minutes",
      attendees: "2,500+ registered",
      type: "Live Webinar",
      description: "Explore how real-time settlement networks are transforming international payments and reducing counterparty risk."
    },
    {
      title: "Regulatory Compliance in Multi-Jurisdictional Payments",
      speaker: "Michael Rodriguez, Chief Compliance Officer",
      date: "December 18, 2024",
      time: "On-Demand",
      duration: "45 minutes",
      attendees: "3,200+ views",
      type: "On-Demand",
      description: "Navigate complex regulatory requirements across different jurisdictions with automated compliance solutions."
    },
    {
      title: "API Integration Best Practices for Enterprise Payments",
      speaker: "David Kim, Senior Solutions Architect",
      date: "December 10, 2024",
      time: "On-Demand",
      duration: "75 minutes",
      attendees: "1,800+ views",
      type: "Technical Session",
      description: "Deep dive into secure API integration patterns, error handling, and performance optimization strategies."
    }
  ];

  const podcastEpisodes = [
    {
      title: "Episode 142: The Evolution of Trade Finance Digitization",
      guest: "Jennifer Walsh, Treasury Solutions Director",
      duration: "38 minutes",
      publishDate: "December 20, 2024",
      listens: "15,400+",
      description: "Discussing how digital transformation is revolutionizing traditional trade finance instruments and processes."
    },
    {
      title: "Episode 141: Emerging Markets Payment Infrastructure",
      guest: "Carlos Mendoza, Emerging Markets Director",
      duration: "42 minutes",
      publishDate: "December 13, 2024",
      listens: "12,800+",
      description: "Exploring opportunities and challenges in building payment infrastructure across emerging economies."
    },
    {
      title: "Episode 140: AI in Financial Crime Prevention",
      guest: "Lisa Thompson, Head of Risk Management",
      duration: "35 minutes",
      publishDate: "December 6, 2024",
      listens: "18,200+",
      description: "How artificial intelligence is transforming AML compliance and fraud detection in cross-border payments."
    }
  ];

  const caseStudies = [
    {
      title: "Global Manufacturing Giant Reduces Payment Processing Time by 75%",
      client: "Fortune 500 Manufacturing Company",
      industry: "Manufacturing",
      challenge: "Complex multi-currency payment workflows across 45 countries",
      solution: "Automated payment processing with real-time compliance checking",
      results: ["75% reduction in processing time", "$2.4M annual cost savings", "99.8% compliance rate"],
      readTime: "8 min read"
    },
    {
      title: "Fintech Startup Scales to 25 Countries in 18 Months",
      client: "Series B Fintech Company",
      industry: "Financial Technology",
      challenge: "Rapid international expansion with regulatory compliance",
      solution: "Multi-jurisdictional payment infrastructure with embedded compliance",
      results: ["25 countries launched", "300% transaction volume growth", "Zero regulatory incidents"],
      readTime: "6 min read"
    },
    {
      title: "E-commerce Platform Optimizes Global Seller Payouts",
      client: "Leading E-commerce Marketplace",
      industry: "E-commerce",
      challenge: "Efficient payouts to 100,000+ sellers across 60 countries",
      solution: "Bulk payment processing with intelligent routing and FX optimization",
      results: ["40% reduction in payout costs", "2-day faster settlement", "95% seller satisfaction"],
      readTime: "10 min read"
    }
  ];

  const guides = [
    {
      title: "Complete API Integration Guide for Cross-Border Payments",
      description: "Step-by-step implementation guide for developers",
      difficulty: "Advanced",
      duration: "45 min read",
      category: "Technical Documentation",
      lastUpdated: "December 2024"
    },
    {
      title: "Multi-Jurisdictional Compliance Framework",
      description: "Navigate international regulations and compliance requirements",
      difficulty: "Intermediate",
      duration: "30 min read",
      category: "Regulatory Compliance",
      lastUpdated: "November 2024"
    },
    {
      title: "Treasury Management Optimization Playbook",
      description: "Best practices for global cash flow and liquidity management",
      difficulty: "Intermediate",
      duration: "35 min read",
      category: "Treasury Operations",
      lastUpdated: "December 2024"
    }
  ];

  const faqs = [
    {
      category: "Account Setup & Onboarding",
      questions: [
        "What documents are required for enterprise account verification?",
        "How long does the onboarding process typically take?",
        "What are the minimum transaction volume requirements?",
        "How do I set up multi-user access and permissions?"
      ]
    },
    {
      category: "Cross-Border Payments & Transfers",
      questions: [
        "What are the transaction limits for different account tiers?",
        "How are foreign exchange rates determined and updated?",
        "Which countries and currencies are supported?",
        "What is the typical settlement time for international transfers?"
      ]
    },
    {
      category: "Regulatory Compliance & Security",
      questions: [
        "What compliance standards does CrossborderPe adhere to?",
        "How is customer data protected and encrypted?",
        "What anti-money laundering (AML) procedures are in place?",
        "How do you handle sanctions screening and monitoring?"
      ]
    },
    {
      category: "API Integration & Technical Support",
      questions: [
        "What programming languages are supported by the API?",
        "Is there a sandbox environment for testing?",
        "What are the API rate limits and authentication methods?",
        "How do I implement webhook notifications for payment status?"
      ]
    }
  ];

  const careers = [
    {
      title: "Senior Software Engineer - Payments Infrastructure",
      department: "Engineering",
      location: "New York, NY",
      type: "Full-time",
      level: "Senior",
      description: "Build and scale our core payment processing systems handling billions in transaction volume."
    },
    {
      title: "Director of Regulatory Compliance",
      department: "Legal & Compliance",
      location: "London, UK",
      type: "Full-time",
      level: "Director",
      description: "Lead our global compliance strategy across multiple jurisdictions and regulatory frameworks."
    },
    {
      title: "Product Manager - Multi-Currency Solutions",
      department: "Product",
      location: "Singapore",
      type: "Full-time",
      level: "Senior",
      description: "Drive product strategy for our multi-currency account and FX optimization solutions."
    },
    {
      title: "VP of Enterprise Sales - APAC",
      department: "Sales",
      location: "Hong Kong",
      type: "Full-time",
      level: "VP",
      description: "Lead enterprise sales efforts across the Asia-Pacific region for Fortune 500 clients."
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatViews = (views) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'research':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Research Reports</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Comprehensive market research and analysis from our team of industry experts and economists
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {researchReports.map((report, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 hover:shadow-xl transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {report.type}
                    </span>
                    <Download className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{report.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Published</span>
                      <span className="font-medium text-slate-700">{report.publishDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Length</span>
                      <span className="font-medium text-slate-700">{report.pages}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Category</span>
                      <span className="font-medium text-slate-700">{report.category}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {report.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download Report</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'webinars':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Expert Webinars</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Join industry leaders and CrossborderPe experts for in-depth discussions on payment innovation
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {webinars.map((webinar, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 hover:shadow-xl transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      webinar.type === 'Live Webinar' ? 'bg-red-100 text-red-700' :
                      webinar.type === 'On-Demand' ? 'bg-green-100 text-green-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {webinar.type}
                    </span>
                    <Play className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {webinar.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{webinar.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Speaker</span>
                      <span className="font-medium text-slate-700">{webinar.speaker}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Date</span>
                      <span className="font-medium text-slate-700">{webinar.date}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Duration</span>
                      <span className="font-medium text-slate-700">{webinar.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Attendance</span>
                      <span className="font-medium text-slate-700">{webinar.attendees}</span>
                    </div>
                  </div>
                  <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>{webinar.type === 'Live Webinar' ? 'Register Now' : 'Watch Now'}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'podcast':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">CrossborderPe Banking Podcast</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Weekly insights from industry leaders, regulatory experts, and payment innovation pioneers
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {podcastEpisodes.map((episode, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 hover:shadow-xl transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                      New Episode
                    </span>
                    <Headphones className="w-5 h-5 text-slate-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{episode.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Guest</span>
                      <span className="font-medium text-slate-700">{episode.guest}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Duration</span>
                      <span className="font-medium text-slate-700">{episode.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Published</span>
                      <span className="font-medium text-slate-700">{episode.publishDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Listens</span>
                      <span className="font-medium text-slate-700">{episode.listens}</span>
                    </div>
                  </div>
                  <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Listen Now</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'cases':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Success Stories</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Real-world implementations and measurable business outcomes from our enterprise clients
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 hover:shadow-xl transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Success Story
                    </span>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-green-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">
                    {study.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Client</span>
                      <span className="font-medium text-slate-700">{study.client}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Industry</span>
                      <span className="font-medium text-slate-700">{study.industry}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Read Time</span>
                      <span className="font-medium text-slate-700">{study.readTime}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                    <p className="text-slate-600 text-sm mb-4">{study.challenge}</p>
                    <h4 className="font-semibold text-slate-900 mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center justify-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Read Full Case Study</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'guides':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Implementation Guides</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Comprehensive technical documentation and best practices for seamless integration
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 hover:shadow-xl transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {guide.difficulty}
                    </span>
                    <BookMarked className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{guide.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Category</span>
                      <span className="font-medium text-slate-700">{guide.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Duration</span>
                      <span className="font-medium text-slate-700">{guide.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Last Updated</span>
                      <span className="font-medium text-slate-700">{guide.lastUpdated}</span>
                    </div>
                  </div>
                  <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center justify-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Read Guide</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'faqs':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Knowledge Base</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Comprehensive support documentation and frequently asked questions
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {faqs.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-100 p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{section.category}</h3>
                  <div className="space-y-4">
                    {section.questions.map((question, qIndex) => (
                      <div key={qIndex} className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-700 font-medium group-hover:text-slate-900">{question}</span>
                          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'careers':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Career Opportunities</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Join our global team of experts building the future of cross-border payments
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white mb-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">28+</div>
                  <div className="text-slate-300">Global Offices</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">2,500+</div>
                  <div className="text-slate-300">Team Members</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-slate-300">Open Positions</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">6</div>
                  <div className="text-slate-300">Continents</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {careers.map((job, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 hover:shadow-xl transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {job.type}
                    </span>
                    <span className="text-sm text-slate-500">{job.level}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{job.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Department</span>
                      <span className="font-medium text-slate-700">{job.department}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Location</span>
                      <span className="font-medium text-slate-700 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center justify-center space-x-2">
                    <UserCheck className="w-4 h-4" />
                    <span>Apply Now</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-16">
            {/* Featured Posts */}
            <div>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl font-bold text-slate-900">Featured Market Insights</h2>
                <div className="flex items-center space-x-2 text-blue-600">
                  <Star className="w-6 h-6" />
                  <span className="font-semibold text-lg">Editor's Choice</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Link key={post.id} href={`/resources/blog/${post.id}`} className="group">
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all">
                      <div className="relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-6 left-6">
                          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            Featured
                          </span>
                        </div>
                        <div className="absolute top-6 right-6">
                          <span className="bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-4 text-sm text-slate-500">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{formatViews(post.views)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 mb-6 text-lg leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold text-sm">{post.author.avatar}</span>
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900">{post.author.name}</div>
                              <div className="text-sm text-slate-500">{formatDate(post.publishedAt)}</div>
                            </div>
                          </div>
                          <ArrowRight className="w-6 h-6 text-blue-600 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-900" />
                  <input
                    type="text"
                    placeholder="Search market insights, analysis, and expert content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-16 pr-6 py-5 border border-slate-300 placeholder:text-gray-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-lg"
                  />
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-6 py-5 text-gray-500  border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-lg"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-6 py-5 border text-gray-500  border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-lg"
                  >
                    <option value="latest">Latest</option>
                    <option value="popular">Most Popular</option>
                    <option value="liked">Most Liked</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl font-bold text-slate-900">
                  Latest Market Insights
                  <span className="text-xl font-normal text-slate-500 ml-4">
                    ({filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'})
                  </span>
                </h2>
                <div className="flex items-center space-x-2 text-slate-600">
                  <TrendingUp className="w-6 h-6" />
                  <span className="font-semibold text-lg">Trending Now</span>
                </div>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="text-center py-20">
                  <div className="bg-slate-100 rounded-full p-8 w-fit mx-auto mb-8">
                    <Search className="w-16 h-16 text-slate-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">No content found</h3>
                  <p className="text-slate-600 mb-8 text-lg">Try adjusting your search terms or filters</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                      setSelectedTag('');
                    }}
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all text-lg"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <Link key={post.id} href={`#`} className="group">
                      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                        <div className="relative overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-white/95 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                              {post.category}
                            </span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="bg-black/80 text-white px-2 py-1 rounded text-sm">
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center space-x-4 mb-4 text-sm text-slate-500">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{formatViews(post.views)}</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 flex-1">
                            {post.title}
                          </h3>
                          <p className="text-slate-600 mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold text-xs">{post.author.avatar}</span>
                              </div>
                              <span className="text-sm font-medium text-slate-700">{post.author.name}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-red-500">
                              <Heart className="w-4 h-4" />
                              <span className="text-sm">{post.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <>
   
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-16">
        <ResourcesHero/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        {/* Navigation Tabs */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-2 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {resourceTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-between space-y-2 px-4 py-6 rounded-2xl font-semibold transition-all text-center ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <tab.icon className="w-6 h-6" />
                <div className="text-sm font-bold">{tab.label}</div>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-slate-100'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}

       
      </div>
    </div>
    </>
  );
};

export default Resources;