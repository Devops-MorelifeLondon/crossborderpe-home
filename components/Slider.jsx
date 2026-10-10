"use client";

import Image from "next/image";
import React from "react";

const paymentRails = [
  { name: "US ACH Clearing", code: "ACH" },
  { name: "Fedwire Rails", code: "FEDWIRE" },
  { name: "SEPA Instant", code: "SEPA" },
  { name: "UK Faster Payments", code: "FASTER PAY" },
  { name: "SWIFT Network", code: "SWIFT" },
  { name: "BACS Clearing", code: "BACS" },
  { name: "Canada EFT", code: "EFT" },
  { name: "Australia BECS", code: "BECS" },
  { name: "India NEFT / RTGS", code: "NEFT/RTGS" },
  { name: "Automated e-FIRA", code: "e-FIRA" },
];

const extendedRails = Array(4).fill(paymentRails).flat();

const Slider = React.memo(() => {
  return (
    <section
      className="relative w-full overflow-hidden bg-slate-50 py-4 border-y border-slate-200/60"
      aria-label="Supported global clearing rails"
    >
      <div className="flex animate-scroll min-w-max gap-8 items-center">
        {extendedRails.map((rail, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-2xs"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            <span className="text-xs font-bold text-slate-800 tracking-wide">{rail.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Slider;
