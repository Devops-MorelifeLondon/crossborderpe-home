// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getAllCountryBankAccounts } from "../lib/bank-accounts-data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

const DEFAULT_BASE_URL = "https://www.crossborderpe.com";

const staticRoutes = [
  {
    path: "",
    priority: "1.00",
    changefreq: "daily",
  },
  {
    path: "/solutions",
    priority: "0.90",
    changefreq: "weekly",
  },
  {
    path: "/developers",
    priority: "0.80",
    changefreq: "monthly",
  },
  {
    path: "/resources",
    priority: "0.80",
    changefreq: "weekly",
  },
  {
    path: "/contact",
    priority: "0.70",
    changefreq: "monthly",
  },
  {
    path: "/legal",
    priority: "0.50",
    changefreq: "monthly",
  },
];

export function getBankPageEntries() {
  const manifestFile = path.join(rootDir, "lib", "bank-pages-manifest.json");

  // Attempt 1: Read from pre-generated manifest
  if (fs.existsSync(manifestFile)) {
    try {
      const data = JSON.parse(fs.readFileSync(manifestFile, "utf8"));
      if (Array.isArray(data) && data.length > 0) {
        return data.map((item) => ({
          slug: item.slug,
          rank: item.rank || 999,
          country: item.country,
        }));
      }
    } catch (err) {
      console.warn("⚠️ Could not parse bank-pages-manifest.json, falling back to data loader:", err.message);
    }
  }

  // Attempt 2: Read from bank accounts data / cbp-1.json
  try {
    const accounts = getAllCountryBankAccounts();
    if (Array.isArray(accounts) && accounts.length > 0) {
      return accounts.map((item) => ({
        slug: item.slug,
        rank: item.rank || 999,
        country: item.country,
      }));
    }
  } catch (err) {
    console.warn("⚠️ Could not load from getAllCountryBankAccounts, falling back to app dir scan:", err.message);
  }

  // Attempt 3: Scan app folder for banking directories
  const appDir = path.join(rootDir, "app");
  if (fs.existsSync(appDir)) {
    const dirs = fs.readdirSync(appDir).filter((file) => {
      const fullPath = path.join(appDir, file);
      return fs.statSync(fullPath).isDirectory() && file.endsWith("-business-bank-account");
    });
    return dirs.map((slug, idx) => ({
      slug,
      rank: idx + 1,
      country: slug.replace(/-business-bank-account$/, ""),
    }));
  }

  return [];
}

export function generateSitemap(baseUrl = DEFAULT_BASE_URL) {
  const cleanBaseUrl = (baseUrl || DEFAULT_BASE_URL).replace(/\/+$/, "");
  const now = new Date().toISOString().replace(/\.\d{3}Z$/, "+00:00");

  const bankEntries = getBankPageEntries();

  // Sort by rank ascending
  bankEntries.sort((a, b) => a.rank - b.rank);

  const urlEntries = [];

  // 1. Add static routes
  for (const route of staticRoutes) {
    urlEntries.push({
      loc: `${cleanBaseUrl}${route.path}`,
      lastmod: now,
      changefreq: route.changefreq,
      priority: route.priority,
    });
  }

  // 2. Add bank account routes
  for (const item of bankEntries) {
    const priority = item.rank && item.rank <= 10 ? "0.85" : "0.80";
    urlEntries.push({
      loc: `${cleanBaseUrl}/${item.slug}`,
      lastmod: now,
      changefreq: "weekly",
      priority,
    });
  }

  // 3. Build XML content
  const xmlLines = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset`,
    `      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`,
    `      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"`,
    `      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9`,
    `            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`,
    ``,
  ];

  for (const entry of urlEntries) {
    xmlLines.push(`  <url>`);
    xmlLines.push(`    <loc>${entry.loc}</loc>`);
    xmlLines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
    if (entry.changefreq) {
      xmlLines.push(`    <changefreq>${entry.changefreq}</changefreq>`);
    }
    xmlLines.push(`    <priority>${entry.priority}</priority>`);
    xmlLines.push(`  </url>`);
  }

  xmlLines.push(``);
  xmlLines.push(`</urlset>`);
  xmlLines.push(``);

  const xmlContent = xmlLines.join("\n");

  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(sitemapPath, xmlContent, "utf8");

  console.log(`=================================================`);
  console.log(`🗺️  Sitemap successfully generated & updated!`);
  console.log(`📍 File: ${sitemapPath}`);
  console.log(`🌐 Base URL: ${cleanBaseUrl}`);
  console.log(`📄 Core Pages: ${staticRoutes.length}`);
  console.log(`🏦 Bank Account Pages: ${bankEntries.length}`);
  console.log(`✨ Total URLs: ${urlEntries.length}`);
  console.log(`=================================================`);

  return {
    filePath: sitemapPath,
    totalUrls: urlEntries.length,
    coreCount: staticRoutes.length,
    bankCount: bankEntries.length,
  };
}

// Allow direct CLI execution
if (process.argv[1] && process.argv[1].endsWith("generate-sitemap.js")) {
  const customBaseUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_BASE_URL || DEFAULT_BASE_URL;
  generateSitemap(customBaseUrl);
}
