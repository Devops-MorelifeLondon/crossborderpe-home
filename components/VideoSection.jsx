// No "use client"

import React from "react";

const CheckIcon = () => (
  <svg
    className="h-7 w-7 text-blue-600 mt-0.5 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const VideoSection = () => {
  const VIDEO_ID = "AymTz4x1OnE";

  const features = [
    {
      name: "Seamless Integration",
      description:
        "Quickly set up your account and integrate with your existing business workflows.",
    },
    {
      name: "Transparent Fees",
      description:
        "Understand all costs upfront with no hidden charges, ensuring cost-effective transactions.",
    },
    {
      name: "Dedicated Support",
      description:
        "Get 24/7 access to our expert support team to assist you with any questions.",
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
            Watch our brief introductory video to see how our platform
            simplifies international payments and helps you grow your business
            globally.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          
          {/* Thumbnail + Click to Play */}
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl relative">
            <img
              src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
              alt="Video thumbnail"
              loading="lazy"
              className="w-full h-full object-cover"
            />

            <button
              className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-3xl font-semibold"
              onClick={(e) => {
                const container = e.currentTarget.parentNode;
                const iframe = document.createElement("iframe");
                iframe.src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`;
                iframe.loading = "lazy";
                iframe.width = "100%";
                iframe.height = "100%";
                iframe.allow =
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;
                container.innerHTML = "";
                container.appendChild(iframe);
              }}
            >
              ▶
            </button>
          </div>

          {/* Text Features */}
          <div>
            <ul className="space-y-8">
              {features.map((feature) => (
                <li key={feature.name} className="flex">
                  <CheckIcon />
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
