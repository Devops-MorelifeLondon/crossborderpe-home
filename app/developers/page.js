import React from 'react'
import Developers from './developers';


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://defaultdomain.com";

export const metadata = {
  title: "Developer API Docs & SDKs | CrossborderPe",
  description:
    "Integrate secure, global cross-border payments into your app. Explore CrossborderPe REST APIs, quickstart, SDKs, sandbox, and webhooks. Fast, robust, and trusted by developers.",
  robots: "index, follow",
  openGraph: {
    title: "API Docs, SDKs & Webhooks | CrossborderPe Developer Platform",
    description:
      "Build on the world's most robust cross-border payment APIs. Full docs, SDKs, testing sandbox. Power global transfers securely.",
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