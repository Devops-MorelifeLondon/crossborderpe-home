import { CheckCircle2 } from 'lucide-react';
import React from 'react';

const VideoSection = () => {
  const features = [
    {
      name: 'Seamless Integration',
      description: 'Quickly set up your account and integrate with your existing business workflows.',
    },
    {
      name: 'Transparent Fees',
      description: 'Understand all costs upfront with no hidden charges, ensuring cost-effective transactions.',
    },
    {
      name: 'Dedicated Support',
      description: 'Get 24/7 access to our expert support team to assist you with any questions.',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            How It Works
          </h2>
         
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Watch our brief introductory video to see how our platform simplifies international payments and helps you grow your business globally.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          {/* Left: YouTube Video Embed */}
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl ">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/AymTz4x1OnE" // Replace with your actual video ID
              title="Introduction to CrossborderPe"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right: Text Content */}
          <div>
            <ul className="space-y-8">
              {features.map((feature) => (
                <li key={feature.name} className="flex">
                  <CheckCircle2
                    className="flex-shrink-0 h-7 w-7 text-blue-600 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
