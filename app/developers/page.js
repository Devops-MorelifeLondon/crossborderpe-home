import React from 'react'
import Developers from './developers';


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://defaultdomain.com";

export const metadata = {
  title: "Developer API Docs & SDKs | CrossborderPe",
  description:
    "Integrate secure global payments into your app with CrossborderPe REST APIs, SDKs, quickstart guides, sandbox tools, and webhooks. Fast, reliable, and developer-friendly.",
  robots: "index, follow",
  openGraph: {
    title: "API Docs, SDKs & Webhooks | CrossborderPe Developer Platform",
    description:
      "Build with powerful cross-border payment APIs, SDKs, and sandbox testing. Secure, scalable, and built for global-ready applications.",
    url: `${baseUrl}/developer`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/Crossborderpe_colored.png`,
        width: 1200,
        height: 630,
        alt: "CrossborderPe Developer API Docs & SDKs",
      },
    ],
  },
  alternates: {
    canonical: `${baseUrl}/developer`,
  },
};



const page = () => {
  return (
    <Developers/>
  )
}

export default page