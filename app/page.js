
import React from "react";
import Home from "./home";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://crossborderpe-home.vercel.app";

export const metadata = {
  title: "CrossborderPe – Cross-Border Payments & Global Finance Solutions",
  description:
    "Manage international payments, multi-currency accounts, and global business operations with secure, transparent, and fully compliant cross-border solutions.",
  keywords:
    "cross-border payments, multi-currency account, trade finance, international payments, API payment integration, FX rates, global banking, regulatory compliance, global finance solutions, remittance platform, fintech solutions",
  openGraph: {
    title: "CrossborderPe – International Payments & Trade Finance",
    description:
      "Everything you need for global payments, FX, and trade finance. Licensed, secure, and trusted by millions.",
    url: baseUrl,
    type: "website",
    locale: "en_IN",
    siteName: "CrossborderPe",
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
      "Global payment and finance solutions for individuals and businesses with compliance, transparency, and speed.",
    images: [`${baseUrl}/og-image.jpg`],
    creator: "@crossborderpe",
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0667e2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const Page = () => {
  return (
    <>
      {/* ✅ Schema Markup for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "CrossborderPe",
            url: baseUrl,
            logo: `${baseUrl}/favicon.ico`,
            sameAs: [
              "https://twitter.com/crossborderpe",
              "https://linkedin.com/company/crossborderpe",
            ],
          }),
        }}
      />

      {/* ✅ Main Home Component */}
      <Home />
    </>
  );
};

export default Page;
