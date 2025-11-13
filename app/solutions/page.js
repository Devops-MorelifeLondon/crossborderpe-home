import React from 'react'
import SolutionsPage from './solution';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://defaultdomain.com";

export const metadata = {
  title: "Best Cross-Border Payment Solutions for Individuals & Businesses | CrossborderPe",
  description:
    "Secure, fast & affordable cross-border payments for individuals, freelancers, startups, exporters, and businesses. Transparent pricing with 24/7 support.",
  robots: "index, follow",
  openGraph: {
    title: "Cross-Border Payment Solutions for Global Businesses & Individuals",
    description:
      "Manage global payments with high security, low fees, and real-time support — ideal for startups, freelancers, exporters, and companies.",
    url: `${baseUrl}/solutions`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/Crossborderpe_colored.png`,
        width: 1200,
        height: 630,
        alt: "CrossborderPe – Cross-Border Payment Solutions",
      },
    ],
  },
};

const page = () => {
  return <SolutionsPage />;
};

export default page;
