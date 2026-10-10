
import React from "react";
import Home from "./home";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://crossborderpe-home.vercel.app";

export const metadata = {
  title: "CrossborderPe – Global Cross-Border Payments & Multi-Currency Accounts",
  description:
    "Collect, convert, and manage international payments in 25+ currencies with local virtual accounts in the US, UK, EU, Canada, and beyond. Fast global settlements and automated compliance.",
  keywords:
    "cross-border payments, multi-currency accounts, virtual collection accounts, global payments, international wire, FX rates, exporter payments, global remittance platform",
  openGraph: {
    title: "CrossborderPe – Global Cross-Border Payments & Multi-Currency Accounts",
    description:
      "Collect global payments in 25+ currencies with local collection accounts, fast settlements, and automated compliance.",
    url: baseUrl,
    type: "website",
    locale: "en_IN",
    siteName: "CrossborderPe",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "CrossborderPe – Global Payments Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CrossborderPe – Global Cross-Border Payments & Multi-Currency Accounts",
    description:
      "Collect global payments with local collection accounts, fast settlements, and automated compliance.",
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
