import { 
  Globe, 
  Building2, 
  MapPin, 
  TrendingUp, 
  Clock, 
  Shield,
  ArrowRight,
  Zap
} from 'lucide-react';

const GlobalNetworkSection = () => {
  const regions = [
    {
      name: "Americas",
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      bgAccent: "bg-blue-50",
      borderAccent: "border-blue-200",
      textAccent: "text-blue-700",
      badgeBg: "bg-blue-100",
      hoverBorder: "hover:border-blue-400",
      hq: { city: "New York", country: "United States", currency: "USD" },
      offices: [
        { city: "Toronto", country: "Canada", currency: "CAD" }
      ]
    },
    {
      name: "Europe",
      gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
      bgAccent: "bg-indigo-50",
      borderAccent: "border-indigo-200",
      textAccent: "text-indigo-700",
      badgeBg: "bg-indigo-100",
      hoverBorder: "hover:border-indigo-400",
      hq: { city: "London", country: "United Kingdom", currency: "GBP" },
      offices: [
        { city: "Zurich", country: "Switzerland", currency: "CHF" },
        { city: "Brussels", country: "Belgium", currency: "EUR" },
        { city: "Warsaw", country: "Poland", currency: "PLN" },
        { city: "Copenhagen", country: "Denmark", currency: "DKK" },
        { city: "Oslo", country: "Norway", currency: "NOK" },
        { city: "Prague", country: "Czech Republic", currency: "CZK" },
        { city: "Budapest", country: "Hungary", currency: "HUF" },
        { city: "Bucharest", country: "Romania", currency: "RON" },
        { city: "Stockholm", country: "Sweden", currency: "SEK" },
        { city: "Istanbul", country: "Turkey", currency: "TRY" }
      ]
    },
    {
      name: "Asia Pacific",
      gradient: "from-violet-500 via-violet-600 to-violet-700",
      bgAccent: "bg-violet-50",
      borderAccent: "border-violet-200",
      textAccent: "text-violet-700",
      badgeBg: "bg-violet-100",
      hoverBorder: "hover:border-violet-400",
      hq: { city: "Singapore", country: "Singapore", currency: "SGD" },
      offices: [
        { city: "Hong Kong", country: "Hong Kong", currency: "HKD" },
        { city: "Tokyo", country: "Japan", currency: "JPY" },
        { city: "Beijing", country: "China", currency: "CNY" },
        { city: "New Delhi", country: "India", currency: "INR" },
        { city: "Bangkok", country: "Thailand", currency: "THB" },
        { city: "Manila", country: "Philippines", currency: "PHP" },
        { city: "Sydney", country: "Australia", currency: "AUD" },
        { city: "Wellington", country: "New Zealand", currency: "NZD" }
      ]
    },
    {
      name: "Middle East & Africa",
      gradient: "from-cyan-500 via-cyan-600 to-cyan-700",
      bgAccent: "bg-cyan-50",
      borderAccent: "border-cyan-200",
      textAccent: "text-cyan-700",
      badgeBg: "bg-cyan-100",
      hoverBorder: "hover:border-cyan-400",
      hq: { city: "Dubai", country: "UAE", currency: "AED" },
      offices: [
        { city: "Riyadh", country: "Saudi Arabia", currency: "SAR" },
        { city: "Tel Aviv", country: "Israel", currency: "ILS" },
        { city: "Johannesburg", country: "South Africa", currency: "ZAR" },
        { city: "Nairobi", country: "Kenya", currency: "KES" }
      ]
    }
  ];

  const stats = [
    { 
      value: "140+", 
      label: "Countries Served", 
      icon: Globe,
      description: "Global reach"
    },
    { 
      value: "28", 
      label: "Physical Offices", 
      icon: Building2,
      description: "Strategic locations"
    },
    { 
      value: "25+", 
      label: "Currencies Supported", 
      icon: TrendingUp,
      description: "Multi-currency"
    },
    { 
      value: "24/7", 
      label: "Customer Support", 
      icon: Clock,
      description: "Always available"
    }
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Regulated & Licensed",
      description: "Compliant in all major financial jurisdictions"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Instant cross-border transactions"
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "On-ground teams in every region"
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wMiIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Improved Typography & Spacing */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 rounded-full border border-blue-200/50 mb-6 backdrop-blur-sm">
            <div className="relative">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <span className="text-sm font-semibold text-slate-700">
              Operating 24/7 Across All Time Zones
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
            Our Global Network,
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Your Local Partner
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Strategic presence across the world's leading financial centers, 
            delivering seamless cross-border payments with local expertise.
          </p>
        </div>

        {/* Stats Grid - Modern Card Design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  
                  <div className="text-sm font-semibold text-slate-700 mb-1">
                    {stat.label}
                  </div>
                  
                  <div className="text-xs text-slate-500">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regional Offices - Improved Layout */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Regional Headquarters & Offices
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {regions.map((region, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl border-2 border-slate-200 ${region.hoverBorder} hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                {/* Region Header - Enhanced Design */}
                <div className={`relative bg-gradient-to-r ${region.gradient} px-6 py-5`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {region.name}
                      </h4>
                      <div className="text-sm text-white/80">
                        {region.offices.length + 1} strategic locations
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Headquarters Card */}
                  <div className={`mb-5 p-4 rounded-xl ${region.bgAccent} border-2 ${region.borderAccent} relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/50 to-transparent rounded-bl-full"></div>
                    
                    <div className="relative flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className={`w-4 h-4 ${region.textAccent}`} />
                          <div className="font-bold text-slate-900 text-lg">
                            {region.hq.city}
                          </div>
                        </div>
                        <div className="text-sm text-slate-600">
                          {region.hq.country}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center gap-1.5 ${region.badgeBg} ${region.textAccent} px-3 py-1.5 rounded-lg font-bold text-xs mb-2`}>
                          <Building2 className="w-3.5 h-3.5" />
                          HEADQUARTERS
                        </div>
                        <div className="text-xs font-semibold text-slate-500 bg-white px-2 py-1 rounded">
                          {region.hq.currency}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Locations - Improved Grid */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Branch Offices
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {region.offices.map((office, officeIndex) => (
                        <div 
                          key={officeIndex}
                          className="group/office p-3 rounded-lg bg-slate-50 hover:bg-gradient-to-br hover:from-slate-100 hover:to-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-sm text-slate-900 truncate mb-0.5">
                                {office.city}
                              </div>
                              <div className="text-xs text-slate-500 truncate">
                                {office.country}
                              </div>
                            </div>
                            <div className={`ml-2 px-2 py-0.5 rounded text-xs font-semibold ${region.textAccent} bg-white border ${region.borderAccent}`}>
                              {office.currency}
                            </div>
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

        {/* Key Highlights - New Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Footer - Enhanced */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">
                  Fully Regulated & Compliant
                </div>
                <div className="text-sm text-white/80">
                  Licensed in all major financial jurisdictions worldwide
                </div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalNetworkSection;
