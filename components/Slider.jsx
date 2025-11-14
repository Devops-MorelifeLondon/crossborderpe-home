"use client";

import Image from "next/image";
import React from "react";

const logos = [
  { src: "/company/Aadhaar_Preview.png", alt: "Aadhaar" },
  { src: "/company/BHIM_Preview.png", alt: "BHIM" },
  { src: "/company/Digital-india-black.jpg", alt: "Digital India" },
  { src: "/company/Make_In_India.png", alt: "Make In India" },
  { src: "/company/My-Gov.png", alt: "My Gov" },
  { src: "/company/national-emblem-front.png", alt: "National Emblem" },
  { src: "/company/rbi.png", alt: "RBI" },
  { src: "/company/Startup-India_Preview.png", alt: "Startup India" },
  { src: "/company/UPI.png", alt: "UPI" },
];

// Duplicate for seamless looping
const extendedLogos = Array(6).fill(logos).flat();

const Slider = React.memo(() => {
  return (
    <section
      className="relative w-full overflow-hidden bg-white py-6"
      aria-label="Trusted by leading Indian institutions"
    >
      <div className="flex animate-scroll min-w-max">
        {extendedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex h-12 min-w-[150px] sm:min-w-[200px] items-center justify-center px-4"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              width={160}
              height={60}
              priority={index < 5}
              draggable={false}
              className="h-full w-auto object-contain select-none"
            />
          </div>
        ))}
      </div>
    </section>
  );
});

export default Slider;
