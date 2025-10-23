import React from 'react';
import { Shield, Award, Globe, Users } from 'lucide-react';
import CompanyStrip from './CompanyStrip';

const TrustBadges = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

   

        {/* Trust Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 rounded-full p-3 w-fit mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-black mb-2">99.99%</div>
              <div className="text-sm text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 rounded-full p-3 w-fit mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-black mb-2">SOC 2</div>
              <div className="text-sm text-gray-600">Type II Certified</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 rounded-full p-3 w-fit mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-black mb-2">150+</div>
              <div className="text-sm text-gray-600">Countries Supported</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 rounded-full p-3 w-fit mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-black mb-2">24/7</div>
              <div className="text-sm text-gray-600">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;