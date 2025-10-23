import React from 'react';
import { 
  Newspaper, 
  ExternalLink,
  Calendar,
  ArrowRight,
  Building2,
  Users,
  Zap,
  Shield,
  Award,
  Globe
} from 'lucide-react';

const InTheNews = () => {
  const pressArticles = [
    {
      outlet: 'Economic Times',
      logo: 'ET',
      headline: 'CrossborderPe Expands Global Payment Reach to 25 Currencies',
      date: 'December 20, 2024',
      category: 'Business Growth',
      excerpt: 'Leading fintech company announces major expansion supporting 25 global currencies across 200+ countries.'
    },
    {
      outlet: 'Business Standard',
      logo: 'BS',
      headline: 'How CrossborderPe is Revolutionizing International Payments',
      date: 'December 18, 2024',
      category: 'Innovation',
      excerpt: 'Deep dive into the technology and compliance framework powering next-generation cross-border payments.'
    },
    {
      outlet: 'Financial Express',
      logo: 'FE',
      headline: 'CrossborderPe Processes $25B+ in Annual Transaction Volume',
      date: 'December 15, 2024',
      category: 'Milestone',
      excerpt: 'Company reaches significant milestone serving 50,000+ businesses with transparent pricing and fast settlements.'
    },
    {
      outlet: 'Mint',
      logo: 'MI',
      headline: 'RBI-Approved CrossborderPe Leads Fintech Compliance Standards',
      date: 'December 12, 2024',
      category: 'Regulation',
      excerpt: 'Analysis of how proper regulatory compliance is driving trust in the cross-border payments sector.'
    },
    {
      outlet: 'MoneyControl',
      logo: 'MC',
      headline: 'CrossborderPe Named Top Payment Platform for SMEs',
      date: 'December 10, 2024',
      category: 'Recognition',
      excerpt: 'Industry report highlights CrossborderPe as the preferred choice for small and medium enterprises.'
    },
    {
      outlet: 'YourStory',
      logo: 'YS',
      headline: 'The Technology Behind CrossborderPe\'s Real-Time FX Rates',
      date: 'December 8, 2024',
      category: 'Technology',
      excerpt: 'Exclusive look at the infrastructure powering live exchange rates and instant currency conversions.'
    }
  ];

  const mediaResources = [
    {
      icon: Users,
      title: "Press Contacts",
      description: "Direct access to our media team"
    },
    {
      icon: Zap,
      title: "High-Res Assets",
      description: "Logos, images, and brand materials"
    },
    {
      icon: Shield,
      title: "Executive Bios",
      description: "Leadership team information"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-sm font-semibold text-blue-800 mb-8 border border-blue-100">
            <Newspaper className="w-5 h-5 mr-2 text-blue-600" />
            Featured in Leading Publications
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            CrossborderPe
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              In The News
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Discover how leading financial publications cover CrossborderPe's innovation 
            in cross-border payments and regulatory compliance.
          </p>
        </div>

        {/* Press Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pressArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-600 text-sm">
                    {article.logo}
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {article.headline}
                </h3>
                
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{article.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="font-medium text-sm">Read More</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Media Kit Section */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-3xl p-12 text-center border border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-full p-6 w-fit mx-auto mb-8 shadow-lg">
              <Newspaper className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Media & Press Inquiries</h3>
            <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
              Looking for press materials, executive interviews, or company information? 
              Access our comprehensive media kit and connect with our press team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {mediaResources.map((resource, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <resource.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">{resource.title}</h4>
                  <p className="text-sm text-slate-600">{resource.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg flex items-center space-x-2">
                <span>Download Media Kit</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                Contact Press Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InTheNews;