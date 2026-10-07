import React from "react";
import UKBusinessBankAccount from "@/components/UKBusinessBankAccount";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://crossborderpe-home.vercel.app";

export const metadata = {
  title: "Open a UK Business Bank Account | Resident & Non-Resident",
  description:
    "We prepare and file your UK business bank account application with high-street banks first, then digital alternatives. UK resident or overseas.",
  keywords:
    "UK business bank account, resident and non-resident UK account, high-street banks, HSBC, Barclays, Lloyds Bank, NatWest, Santander, Revolut Business, Wise, Tide, digital business banking",
  robots: "index, follow",
  alternates: {
    canonical: `${baseUrl}/uk-business-bank-account`,
  },
  openGraph: {
    title: "Open a UK Business Bank Account | Resident & Non-Resident",
    description:
      "We prepare and file your UK business bank account application with high-street banks first, then digital alternatives. UK resident or overseas.",
    url: `${baseUrl}/uk-business-bank-account`,
    type: "website",
    locale: "en_GB",
    siteName: "CrossborderPe",
    images: [
      {
        url: `${baseUrl}/Crossborderpe_colored.png`,
        width: 1200,
        height: 630,
        alt: "CrossborderPe - UK Business Bank Account",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open a UK Business Bank Account | Resident & Non-Resident",
    description:
      "We prepare and file your UK business bank account application with high-street banks first, then digital alternatives. UK resident or overseas.",
    images: [`${baseUrl}/Crossborderpe_colored.png`],
  },
};


export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I open a UK business bank account remotely?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often, yes. Digital providers such as Wise, Revolut Business and Tide usually offer fully online onboarding. Some high-street banks, including HSBC and Barclays, may require a video call or in-person step depending on your profile.",
        },
      },
      {
        "@type": "Question",
        name: "Can a non-resident open a UK business bank account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, in many cases, but options are narrower. Some high-street banks consider non-resident directors case by case, and providers such as Wise, Revolut Business and Tide may be available. Approval is never guaranteed.",
        },
      },
      {
        "@type": "Question",
        name: "Why is it harder for non-residents to open a UK business account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Banks apply stricter anti-money-laundering checks to overseas directors and owners. They need to verify identity, source of funds and the commercial reason for a UK account, which takes more documentation.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if HSBC, Barclays or another major bank rejects my application?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We review the reason, then move to a digital alternative that fits your profile, such as Wise, Revolut Business or Tide. Some applications may not be eligible for any option.",
        },
      },
      {
        "@type": "Question",
        name: "Which high-street banks do you apply to first?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We target leading UK banks first, including HSBC, Barclays, Lloyds Bank, NatWest and Santander, depending on your residency, business type and documents.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a traditional bank and an EMI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A traditional bank is a licensed deposit-taker, typically offering lending and wider services. An EMI such as Wise or Revolut issues e-money and holds funds safeguarded rather than lent out, and is usually faster and more flexible to open.",
        },
      },
      {
        "@type": "Question",
        name: "Can Monzo Business or Starling Bank accept non-resident directors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Monzo Business and Starling Bank require a UK-resident director, so we don't offer them to non-resident founders.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a UK company to open a UK business bank account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually, yes. Most UK banks and providers require a UK-registered company. If you don't have one, we can help you incorporate first.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to open a UK business bank account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Digital providers can take hours to a couple of weeks. High-street banks often take several weeks. Timelines depend on document quality and the bank's due diligence, and are not guaranteed.",
        },
      },
      {
        "@type": "Question",
        name: "What documents are required?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically: passport or ID for each director and owner, proof of address, company registration details, ownership structure, and a description of your business and expected activity. Banks may request more.",
        },
      },
      {
        "@type": "Question",
        name: "What KYC and AML checks should I expect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Banks verify who owns and controls the business, where your funds come from, and what you'll use the account for. Expect questions about your customers, suppliers and expected volumes.",
        },
      },
      {
        "@type": "Question",
        name: "Does the director have to complete onboarding personally?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sometimes. Some banks require the director to complete identity verification or digital onboarding themselves. We prepare, manage and submit (where permitted) the rest on your behalf.",
        },
      },
      {
        "@type": "Question",
        name: "Can you guarantee my account will be approved?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Banks and providers make the final decision. We improve the quality and readiness of your application and plan alternatives.",
        },
      },
      {
        "@type": "Question",
        name: "Which business entities are eligible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UK limited companies are the most common. Some providers also accept sole traders, LLPs or overseas companies, depending on their own policies.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a multi-currency business account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, with certain providers. Wise, Revolut Business and some high-street banks offer multi-currency features, though fees and supported currencies vary.",
        },
      },
      {
        "@type": "Question",
        name: "Can I open an account for an e-commerce or online business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often, yes, provided the business model is clear and compliant. Be ready to explain your products, suppliers, payment processors and expected volumes.",
        },
      },
      {
        "@type": "Question",
        name: "Can an overseas company open a UK business account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sometimes. It depends on the provider and corporate structure. Banks typically want detailed ownership documents and a clear reason for needing a UK account.",
        },
      },
      {
        "@type": "Question",
        name: "Which industries are considered high-risk?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Banks commonly restrict or decline areas such as certain crypto, gambling, adult content, and some money-transfer or trading businesses. If your sector is restricted, we'll tell you honestly.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get an account if I have no UK address?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Possibly with some digital providers, but many require a UK company address or UK presence. We'll check what applies to your situation.",
        },
      },
      {
        "@type": "Question",
        name: "Is your service free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The eligibility check is free. Our fees for application preparation and management are explained under pricing, and bank or provider fees are separate.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <UKBusinessBankAccount />
    </>
  );
}
