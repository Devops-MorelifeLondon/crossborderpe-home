import React from 'react'
import Contact from './contact'
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://defaultdomain.com";

export const metadata = {
  title: "Contact Us | CrossborderPe - Global Cross-Border Payments",
  description:
    "Contact CrossborderPe's payment specialists for global payment solutions. We provide expert support, 24/7 live chat, phone, and email help for multi-currency business needs.",
  keywords:
    "cross-border payments, global payments, payment support, contact, multi-currency, business payments, fintech, global money transfer",
  robots: "index, follow",
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us | CrossborderPe - Global Cross-Border Payments",
    description:
      "Connect with our payment specialists for instant, secure, and global multi-currency solutions. 24/7 live chat, phone, and email support available.",
    url: `${baseUrl}/contact`,
    type: "website",
    images: [
      {
        url:  `${baseUrl}/Crossborderpe_colored.png`,
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
      "Contact CrossborderPe payment experts for secure, fast global solutions. Live chat, phone, and email.",
    images: [
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
};


const page = () => {
  return (
    <Contact/>
  )
}

export default page