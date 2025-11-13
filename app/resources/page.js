import React from 'react'
import Resources from './resources';


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://defaultdomain.com";

export const metadata = {
  title: "Cross-Border Payment Intelligence Center | Research, Insights & Webinars",
  description:
    "Access expert research, analysis, guides, webinars, and resources to optimize your international payment operations and global business growth. Trusted CrossborderPe knowledge hub.",
  keywords:
    "cross-border payments, payment intelligence, research, webinars, financial technology, compliance, API integration, treasury, fintech, global payments, enterprise payments",
  robots: "index, follow",
  alternates: {
    canonical: `${baseUrl}/resources`,
  },
  openGraph: {
    title:
      "Cross-Border Payment Intelligence Center | Research, Insights & Webinars",
    description:
      "Access expert research, analysis, guides, webinars, and resources to optimize your international payment operations and global business growth.",
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
    title: "Cross-Border Payment Intelligence Center",
    description:
      "Access cutting-edge research on global payments, compliance, and treasury management.",
    images: [`${baseUrl}/Crossborderpe_colored.png`],
  },
};



const page = () => {
  return (
    <Resources/>
  )
}

export default page