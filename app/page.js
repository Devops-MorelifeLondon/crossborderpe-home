import React from 'react'
import Home from './home';


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://defaultdomain.com";

export const metadata = {
  title: "CrossborderPe – Cross-Border Payments & Global Finance Solutions",
  description:
    "Manage international payments, multi-currency accounts, and global business operations with secure, transparent, and fully compliant cross-border solutions.",
  keywords:
    "cross-border payments, multi-currency account, trade finance, international payments, API payment integration, FX rates, global banking, regulatory compliance",
  openGraph: {
    title: "CrossborderPe – International Payments & Trade Finance",
    description:
      "Everything you need for global payments, FX, and trade finance. Licensed, secure, and trusted by millions.",
    url: baseUrl,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "CrossborderPe – Global Finance Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CrossborderPe – Cross-Border Payments & Finance",
    description:
      "Global payment and finance solutions for individuals and businesses.",
    images: [`${baseUrl}/og-image.jpg`],
    site: "@yourtwitter",
  },
  themeColor: "#0667e2",
  icons: {
    icon: "/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1",
};


const page = () => {
  return (
    <Home/>
  )
}

export default page