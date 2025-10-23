"use client";

import React from "react";

const logos = [
  { src: "/company/Aadhaar_Preview.png", alt: "ACCA" },
  { src: "/company/BHIM_Preview.png", alt: "ACRA" },
  { src: "/company/Digital-india-black.jpg", alt: "AIA" },
  { src: "/company/Make_In_India.png", alt: "CA Ireland" },
  { src: "/company/My-Gov.png", alt: "Chartered Accountants" },
  { src: "/company/national-emblem-front.png", alt: "CIMA" },
  { src: "/company/rbi.png", alt: "Partner" },
  { src: "/company/Startup-India_Preview.png", alt: "ICA" },
  { src: "/company/UPI.png", alt: "ICA" },
];

// Duplicate logos once for seamless looping
const extendedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

const Slider= () => {
  return (
    <div className="relative w-full overflow-hidden bg-white py-4">
      <div className="flex animate-scroll min-w-max">
        {extendedLogos.map((logo, i) => (
          <div
            key={i}
            className="flex h-12 min-w-[150px] sm:min-w-[200px] md:min-w-[200px] items-center justify-center px-4"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              draggable={false}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;