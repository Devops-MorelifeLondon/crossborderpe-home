// scripts/generate-bank-pages.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  getAllCountryBankAccounts,
  getSlugForCountry,
} from "../lib/bank-accounts-data.js";
import { generateSitemap } from "./generate-sitemap.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const appDir = path.join(rootDir, "app");

function generatePageTemplate(slug) {
  return `import React from "react";
import BusinessBankAccountTemplate from "@/components/BusinessBankAccountTemplate";
import { getCountryBankData } from "@/lib/bank-accounts-data";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://crossborderpe-home.vercel.app";

export async function generateMetadata() {
  const data = getCountryBankData("${slug}");
  if (!data) return {};

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    robots: "index, follow",
    alternates: {
      canonical: \`\${baseUrl}/\${data.slug}\`,
    },
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      url: \`\${baseUrl}/\${data.slug}\`,
      type: "website",
      siteName: "CrossborderPe",
      images: [
        {
          url: \`\${baseUrl}/Crossborderpe_colored.png\`,
          width: 1200,
          height: 630,
          alt: \`CrossborderPe - \${data.country} Business Bank Account\`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.seo.title,
      description: data.seo.description,
      images: [\`\${baseUrl}/Crossborderpe_colored.png\`],
    },
  };
}

export default function Page() {
  const data = getCountryBankData("${slug}");

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
`;
}

function run() {
  console.log("=================================================");
  console.log("🚀 Starting Business Bank Account Pages Clean & Re-generate");
  console.log("=================================================");

  // Step 1: Remove existing banking pages
  const existingDirs = fs.readdirSync(appDir).filter((file) => {
    const fullPath = path.join(appDir, file);
    return fs.statSync(fullPath).isDirectory() && file.endsWith("-business-bank-account");
  });

  console.log(`🧹 Found ${existingDirs.length} existing bank page folders to clean.`);
  let removedCount = 0;
  for (const dirName of existingDirs) {
    const fullPath = path.join(appDir, dirName);
    fs.rmSync(fullPath, { recursive: true, force: true });
    removedCount++;
  }
  console.log(`🗑️ Successfully deleted ${removedCount} bank page folders.`);

  // Step 2: Load normalized country accounts from cbp-1.json
  const accounts = getAllCountryBankAccounts();
  console.log(`\n📋 Loaded ${accounts.length} countries from lib/cbp-1.json.`);

  let createdCount = 0;
  const generatedSlugs = [];

  for (const account of accounts) {
    const slug = account.slug;
    const pageDir = path.join(appDir, slug);
    const pageFile = path.join(pageDir, "page.js");

    fs.mkdirSync(pageDir, { recursive: true });
    const pageContent = generatePageTemplate(slug);
    fs.writeFileSync(pageFile, pageContent, "utf8");

    createdCount++;
    generatedSlugs.push({
      rank: account.rank,
      country: account.country,
      slug,
      title: account.seo.title,
    });
  }

  // Step 3: Write manifest
  const manifestFile = path.join(rootDir, "lib", "bank-pages-manifest.json");
  fs.writeFileSync(
    manifestFile,
    JSON.stringify(generatedSlugs, null, 2),
    "utf8"
  );

  console.log(`\n✅ Generated Manifest: ${manifestFile}`);
  console.log(`📁 Total Directories Created: ${createdCount}`);
  console.log(`🎉 Successfully generated ${generatedSlugs.length} business bank account pages!`);

  // Step 4: Update sitemap
  console.log(`\n🗺️ Updating sitemap.xml...`);
  generateSitemap();
  console.log("=================================================\n");
}

run();
