import React from 'react'
import Resources from './resources';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://defaultdomain.com";

export const metadata = {
  title: "Cross-Border Payment Intelligence Center | Research, Insights & Webinars",
  description:
    "Explore expert research, analysis, guides, and webinars to enhance your global payment operations and business growth. Your trusted CrossborderPe knowledge hub.",
  keywords:
    "cross-border payments, payment intelligence, research, webinars, fintech insights, compliance, API integration, global treasury, enterprise payments",
  robots: "index, follow",
  alternates: {
    canonical: `${baseUrl}/resources`,
  },
  openGraph: {
    title:
      "Cross-Border Payment Intelligence Center | Research, Insights & Webinars",
    description:
      "Expert research, guides, and webinars to help you optimize global payment operations and business growth.",
    url: `${baseUrl}/resources`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/Crossborderpe_colored.png`,
        width: 1200,
        height: 630,
        alt: "Cross-Border Payment Intelligence Center | CrossborderPe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-Border Payment Intelligence Center | CrossborderPe",
    description:
      "Get expert insights on global payments, compliance, fintech, and treasury operations.",
    images: [`${baseUrl}/Crossborderpe_colored.png`],
  },
};

const page = () => {
  return <Resources />;
}

export default page;
