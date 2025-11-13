import React from 'react'
import SolutionsPage from './solution';


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://defaultdomain.com";

export const metadata = {
  title: "Best Cross-Border Payment Solutions for Individuals & Businesses | CrossborderPe",
  description:
    "Discover secure, fast, and affordable cross-border payment solutions tailored for individuals, freelancers, entrepreneurs, companies, partnerships, startups, and exporters. Trusted by over 2 million users worldwide. Experience transparent pricing, 24/7 support, and regulated financial services with CrossborderPe.",
  robots: "index, follow",
  openGraph: {
    title: "Best Cross-Border Payment Solutions for Global Businesses & Individuals",
    description:
      "Send, receive, and manage payments worldwide with top security, low fees, and real-time support. Perfect for startups, freelancers, exporters, and companies.",
    url:  `${baseUrl}/solutions`,
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
  return (
    <SolutionsPage/>
  )
}

export default page