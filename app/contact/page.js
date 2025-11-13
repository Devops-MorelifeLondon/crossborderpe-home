import React from 'react'
import Contact from './contact'
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://defaultdomain.com";

export const metadata = {
  title: "Contact Us | CrossborderPe - Global Cross-Border Payments",
  description:
    "Connect with CrossborderPe’s payment specialists for global, secure, and multi-currency business solutions. Get expert assistance via 24/7 live chat, phone, and email.",
  keywords:
    "cross-border payments, global payments, payment support, contact, multi-currency, business payments, fintech support, global money transfer help",
  robots: "index, follow",
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us | CrossborderPe - Global Cross-Border Payments",
    description:
      "Reach our payment experts for secure and fast global payment assistance. Live chat, phone, and email support available 24/7.",
    url: `${baseUrl}/contact`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/Crossborderpe_colored.png`,
        width: 1200,
        height: 630,
        alt: "CrossborderPe Contact Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | CrossborderPe",
    description:
      "Talk to CrossborderPe’s support team for fast, secure global payment solutions. Available via live chat, phone, and email.",
    images: [
      `${baseUrl}/Crossborderpe_colored.png`,
    ],
  },
};



const page = () => {
  return (
    <Contact/>
  )
}

export default page