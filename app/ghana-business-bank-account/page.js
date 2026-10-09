import React from "react";
import BusinessBankAccountTemplate from "@/components/BusinessBankAccountTemplate";
import { getCountryBankData } from "@/lib/bank-accounts-data";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://crossborderpe-home.vercel.app";

export async function generateMetadata() {
  const data = getCountryBankData("ghana-business-bank-account");
  if (!data) return {};

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/${data.slug}`,
    },
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      url: `${baseUrl}/${data.slug}`,
      type: "website",
      siteName: "CrossborderPe",
      images: [
        {
          url: `${baseUrl}/Crossborderpe_colored.png`,
          width: 1200,
          height: 630,
          alt: `CrossborderPe - ${data.country} Business Bank Account`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.seo.title,
      description: data.seo.description,
      images: [`${baseUrl}/Crossborderpe_colored.png`],
    },
  };
}

export default function Page() {
  const data = getCountryBankData("ghana-business-bank-account");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (data?.faqs || []).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BusinessBankAccountTemplate countryData={data} />
    </>
  );
}
