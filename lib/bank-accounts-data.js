// lib/bank-accounts-data.js
import fs from "fs";
import path from "path";

export const countrySlugOverrides = {
  "United Kingdom": "uk",
  "United States": "us",
  "United Arab Emirates": "uae",
};

export function getSlugForCountry(country) {
  if (!country) return "";
  const override = countrySlugOverrides[country];
  if (override) return `${override}-business-bank-account`;

  const clean = country
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${clean}-business-bank-account`;
}

function parseMatrix(matrix) {
  if (!matrix) return { headers: [], rows: [] };

  // 1. Markdown table string
  for (const k of Object.keys(matrix)) {
    const val = matrix[k];
    if (typeof val === "string" && val.includes("|")) {
      const lines = val
        .trim()
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
      const parseRow = (line) =>
        line
          .replace(/^\||\|$/g, "")
          .split("|")
          .map((c) => c.trim().replace(/\*\*/g, ""));
      const headers = parseRow(lines[0]);
      const rows = [];
      for (let i = 1; i < lines.length; i++) {
        if (/^[|:\s-]+$/.test(lines[i])) continue;
        rows.push(parseRow(lines[i]));
      }
      return { headers, rows };
    }
  }

  // 2. Explicit columns/headers + rows
  const headers =
    matrix.headers ||
    matrix.columns ||
    matrix.table_headers ||
    matrix.matrix_columns ||
    matrix.table_columns ||
    (matrix.table && (matrix.table.headers || matrix.table.columns));

  const rawRows =
    matrix.rows ||
    matrix.table_rows ||
    matrix.matrix_rows ||
    (matrix.table && matrix.table.rows);

  if (Array.isArray(headers) && Array.isArray(rawRows)) {
    const rows = rawRows.map((r) => {
      if (Array.isArray(r)) return r;
      if (typeof r === "object" && r !== null) return Object.values(r);
      return [String(r)];
    });
    return { headers, rows };
  }

  // 3. Array of objects
  for (const k of Object.keys(matrix)) {
    const val = matrix[k];
    if (Array.isArray(val) && val.length > 0 && typeof val[0] === "object") {
      const keys = Object.keys(val[0]);
      const hdrs = keys.map((h) =>
        h
          .replace(/([A-Z])/g, " $1")
          .replace(/_/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())
          .trim()
      );
      const rows = val.map((obj) => keys.map((key) => String(obj[key] || "")));
      return { headers: hdrs, rows };
    }
  }

  return { headers: [], rows: [] };
}

function parseFaqs(faqData) {
  if (!faqData) return [];
  let raw = [];
  if (Array.isArray(faqData)) {
    raw = faqData;
  } else if (typeof faqData === "object" && faqData !== null) {
    raw =
      faqData.faqs ||
      faqData.items ||
      faqData.questions ||
      faqData.faq_list ||
      [];
  }
  return raw
    .map((item) => ({
      question: item.question || item.q || item.title || "",
      answer: item.answer || item.a || item.content || "",
    }))
    .filter((f) => f.question && f.answer);
}

function parseSteps(stepsData) {
  if (!stepsData) return [];
  const raw =
    stepsData.steps ||
    stepsData.process_steps ||
    stepsData.items ||
    (Array.isArray(stepsData) ? stepsData : []);

  return raw
    .map((s, idx) => ({
      stepNumber:
        s.step_number ||
        s.stepNumber ||
        s.step ||
        s.number ||
        `Step ${idx + 1}`,
      title: s.title || s.step_name || s.stepName || s.name || s.h3 || "",
      description:
        s.description || s.content || s.details || s.body || s.text || "",
    }))
    .filter((s) => s.title || s.description);
}

function parseAudience(audData) {
  if (!audData) return { profiles: [], notForText: "", crossSellText: "" };

  let rawProfiles =
    audData.profiles ||
    audData.ideal_profiles ||
    audData.who_we_help ||
    audData.whoWeHelp ||
    audData.profiles_we_help ||
    audData.profilesWeHelp ||
    audData.profiles_we_support ||
    audData.profiles_we_serve ||
    audData.profiles_helped ||
    audData.profiles_who_we_help ||
    audData.target_profiles ||
    audData.ideal_applicant_profiles ||
    audData.segments ||
    audData.target_segments ||
    (audData.who_this_is_for &&
      (audData.who_this_is_for.profiles ||
        audData.who_this_is_for.ideal_profiles)) ||
    (audData.who_we_help && audData.who_we_help.profiles) ||
    [];

  if (!Array.isArray(rawProfiles)) rawProfiles = [];

  const profiles = rawProfiles
    .map((p) => ({
      title: p.title || p.profile || p.h3 || p.name || "",
      description: p.description || p.details || p.content || p.summary || "",
    }))
    .filter((p) => p.title || p.description);

  const notForData =
    audData.who_this_is_not_for ||
    audData.whoThisIsNotFor ||
    audData.who_we_cannot_work_with ||
    audData.unsupported_profiles ||
    audData.ineligible_profiles ||
    audData.profilesWeDoNotHelp ||
    audData.who_this_isnt_for;

  let notForText = "";
  if (typeof notForData === "string") {
    notForText = notForData;
  } else if (notForData && typeof notForData === "object") {
    notForText =
      notForData.content ||
      notForData.description ||
      notForData.details ||
      notForData.text ||
      "";
    const points =
      notForData.points ||
      notForData.criteria ||
      notForData.rejection_criteria ||
      notForData.items;
    if (Array.isArray(points)) {
      const pts = points.join("\n• ");
      notForText += (notForText ? "\n• " : "• ") + pts;
    }
  }

  const crossSellData =
    audData.cross_sell ||
    audData.no_company_cross_sell ||
    audData.no_company_yet_cross_sell ||
    audData.incorporation_cross_sell ||
    audData.noCompanyCrossSell ||
    audData.cross_sell_incorporation ||
    audData.crossSell ||
    audData.no_company_yet ||
    audData.cross_sell_no_company_yet ||
    audData.cross_sell_company_formation ||
    audData.cross_sell_formation ||
    audData.cross_sell_no_company;

  let crossSellText = "";
  if (typeof crossSellData === "string") {
    crossSellText = crossSellData;
  } else if (crossSellData && typeof crossSellData === "object") {
    crossSellText =
      crossSellData.content ||
      crossSellData.description ||
      crossSellData.text ||
      crossSellData.headline ||
      "";
  }

  return { profiles, notForText, crossSellText };
}

function parseNonResident(nrData) {
  if (!nrData) return { title: "", content: "", regions: [] };

  const title =
    nrData.h2 ||
    nrData.section_title ||
    nrData.sectionTitle ||
    "Business Bank Accounts for Non-Residents";

  const content =
    nrData.content ||
    nrData.description ||
    nrData.overview ||
    nrData.body ||
    nrData.remoteOpeningDetails ||
    "";

  let regions = [];
  const rawRegions =
    nrData.regional_coverage ||
    nrData.coverage_regions ||
    nrData.regions ||
    nrData.global_hubs ||
    nrData.globalHubsCoverage ||
    nrData.regional_examples ||
    nrData.supported_regions ||
    nrData.global_coverage ||
    nrData.supportedHubs ||
    [];

  if (Array.isArray(rawRegions)) {
    regions = rawRegions.map((r) => {
      if (typeof r === "string") return { region: r, countries: "" };
      return {
        region: r.region || r.title || r.name || "",
        countries:
          r.countries ||
          r.examples ||
          r.jurisdictions ||
          (Array.isArray(r.items) ? r.items.join(", ") : "") ||
          "",
      };
    });
  } else if (typeof rawRegions === "object" && rawRegions !== null) {
    regions = Object.entries(rawRegions).map(([key, val]) => ({
      region: key
        .replace(/([A-Z])/g, " $1")
        .replace(/_/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .trim(),
      countries: Array.isArray(val) ? val.join(", ") : String(val),
    }));
  }

  return { title, content, regions };
}

export function normalizeCountryData(item) {
  if (!item || !item.Data) return null;
  const D = item.Data;
  const country = item.Country;
  const rank = item.Rank;
  const slug = getSlugForCountry(country);

  // 1. SEO Metadata
  const seoRaw = D.seo_metadata || D.seoMetadata || {};
  const seo = {
    title:
      seoRaw.title_tag ||
      seoRaw.title ||
      seoRaw.titleTag ||
      `Open a UK & Global Business Bank Account from ${country}`,
    description:
      seoRaw.meta_description ||
      seoRaw.metaDescription ||
      seoRaw.description ||
      `We prepare and file your business bank account applications with Tier-1 high-street banks first, then digital alternatives. Tailored for ${country} residents and overseas founders.`,
    keywords: Array.isArray(seoRaw.target_keywords || seoRaw.keywords)
      ? (seoRaw.target_keywords || seoRaw.keywords).join(", ")
      : `${country} business bank account, open UK business bank account from ${country}, high-street banks, Revolut Business, Wise, digital business banking`,
    canonical: `/${slug}`,
  };

  // 2. Hero Section
  const heroRaw = D.hero_section || D.heroSection || {};
  const trustBullets =
    heroRaw.trust_bullets ||
    heroRaw.trustBullets ||
    heroRaw.trust_points ||
    heroRaw.trustBulletPoints ||
    heroRaw.trustPoints || [
      "Rigorous pre-submission compliance audit to eliminate preventable rejections",
      "Tier-1 commercial clearing banks prioritized, with vetted digital EMI fallbacks",
      "100% remote application options available with no travel required",
    ];

  const rawCta =
    heroRaw.cta_button ||
    heroRaw.primary_cta ||
    heroRaw.primary_cta_button ||
    heroRaw.primaryCta ||
    heroRaw.ctaButton ||
    heroRaw.cta_button_text;

  const ctaButton =
    typeof rawCta === "string"
      ? rawCta
      : rawCta?.label ||
        rawCta?.button_text ||
        rawCta?.text ||
        "Check my eligibility (free)";

  const hero = {
    h1:
      heroRaw.h1 ||
      heroRaw.h1_headline ||
      heroRaw.headline ||
      heroRaw.headline_h1 ||
      heroRaw.h1Headline ||
      `Open Your Business Bank Account from ${country}`,
    subHeadline:
      heroRaw.sub_headline ||
      heroRaw.subheadline ||
      heroRaw.subHeadline ||
      heroRaw.subtitle ||
      `We prepare, manage, and submit corporate banking applications targeting Tier-1 commercial banks first, with pre-vetted digital banking alternatives on standby.`,
    ctaButton,
    trustBullets: Array.isArray(trustBullets) ? trustBullets : [String(trustBullets)],
    partnerStatement:
      heroRaw.partner_statement ||
      heroRaw.partner_mention ||
      heroRaw.supported_partners_mention ||
      heroRaw.partnerNetworkSentence ||
      heroRaw.partner_network_statement ||
      heroRaw.partnerMention ||
      heroRaw.partner_network_mention ||
      heroRaw.bankingPartnersMention ||
      "We prepare compliant files for leading institutions including HSBC, Barclays, Lloyds Bank, NatWest, and Santander, alongside digital providers like Wise, Revolut Business, and Tide.",
  };

  // 3. How We Open (Dual Track)
  const howRaw =
    D.how_we_open_your_business_bank_account ||
    D.how_we_open_your_account ||
    D.dual_track_system ||
    D.howWeOpenYourAccount ||
    D.howWeOpenYourBusinessBankAccount ||
    D.dualTrackSystem ||
    D.how_it_works ||
    D.how_it_works_dual_track ||
    {};

  const trackARaw = howRaw.track_a || howRaw.trackA || {};
  const trackBRaw = howRaw.track_b || howRaw.trackB || {};

  const howWeOpen = {
    title:
      howRaw.h2 ||
      howRaw.section_title ||
      howRaw.sectionTitle ||
      howRaw.title ||
      "How We Open Your Business Bank Account",
    intro:
      howRaw.section_intro ||
      howRaw.sectionIntro ||
      howRaw.intro ||
      howRaw.description ||
      "Corporate banking underwriting requires a structured compliance methodology. Rather than risking a single point of failure, we deploy a strategic two-track model.",
    trackA: {
      title:
        trackARaw.h3 ||
        trackARaw.title ||
        trackARaw.name ||
        "Track A: Targeting Tier-1 High-Street Institutions",
      description:
        trackARaw.content ||
        trackARaw.description ||
        trackARaw.body ||
        "Our primary objective is always an established commercial clearing bank. We compile corporate records, cross-check anti-money laundering (AML) profiles, and structure evidence files to meet the underwriting criteria of major banks like Barclays, HSBC, Lloyds Bank, NatWest, and Santander.",
    },
    trackB: {
      title:
        trackBRaw.h3 ||
        trackBRaw.title ||
        trackBRaw.name ||
        "Track B: Deploying Alternative Digital Banking Solutions",
      description:
        trackBRaw.content ||
        trackBRaw.description ||
        trackBRaw.body ||
        "If a high-street bank declines your file due to non-resident shareholding or cross-border complexity, we pivot immediately. We redeploy your pre-audited file to enterprise-grade Electronic Money Institutions (EMIs) and digital business platforms like Wise Business, Revolut Business, or Tide.",
    },
  };

  // 4. Comparison Matrix
  const matrixRaw =
    D.comparison_matrix ||
    D.bank_and_emi_comparison_matrix ||
    D.comparisonMatrix ||
    D.bank_comparison_matrix ||
    D.bankAndEmiComparisonMatrix ||
    D.bankComparisonMatrix ||
    D.bank_and_emi_comparison ||
    {};

  const matrixParsed = parseMatrix(matrixRaw);
  const comparisonMatrix = {
    title:
      matrixRaw.h2 ||
      matrixRaw.section_title ||
      matrixRaw.sectionTitle ||
      matrixRaw.title ||
      matrixRaw.sectionHeading ||
      matrixRaw.heading ||
      "Business Bank and EMI Provider Comparison",
    intro:
      matrixRaw.description ||
      matrixRaw.intro ||
      matrixRaw.section_intro ||
      "Compare key features, onboarding timelines, and residency requirements across traditional clearing banks and modern digital alternatives.",
    headers: matrixParsed.headers,
    rows: matrixParsed.rows,
  };

  // 5. Target Audience Fit
  const audRaw =
    D.who_this_is_for ||
    D.audience_fit ||
    D.who_this_is_for_and_who_it_is_not_for ||
    D.whoThisIsFor ||
    D.target_profiles ||
    D.audience_segmentation ||
    D.target_audience ||
    D.whoThisIsForAndWhoItIsNotFor ||
    D.targetAudience ||
    D.audienceFit ||
    D.target_audience_fit ||
    D.who_this_is_for_and_who_it_isnt_for ||
    D.audience_segments ||
    D.audienceSegmentation ||
    D.audience_targeting ||
    {};

  const audParsed = parseAudience(audRaw);
  const audience = {
    title:
      audRaw.h2 ||
      audRaw.section_title ||
      audRaw.sectionTitle ||
      audRaw.title ||
      audRaw.section_h2 ||
      audRaw.section_heading ||
      "Who Our Banking Preparation Service Is For",
    profiles:
      audParsed.profiles.length > 0
        ? audParsed.profiles
        : [
            {
              title: "The Resident Startup & SME",
              description:
                "Founders looking to establish operational accounts with commercial clearing banks without delays and documentation rejections.",
            },
            {
              title: "The Cross-Border E-Commerce Founder",
              description:
                "Online brands and marketplace sellers requiring multi-currency collection pots and direct payment processor integrations.",
            },
            {
              title: "The Foreign Corporate Entity",
              description:
                "Overseas parent companies establishing a subsidiary that need corporate banking facilities and international payment rails.",
            },
          ],
    whoNotFor:
      audParsed.notForText ||
      "To protect client clearance rates, we do not work with: unregulated money services, adult entertainment, speculative crypto platforms, shell companies without commercial substance, or individuals residing in sanctioned jurisdictions.",
    crossSell:
      audParsed.crossSellText ||
      "Need to establish a corporate entity first? A registered corporate entity is required before accounts can be opened. We can handle company incorporation and registered office facilities before filing banking applications.",
  };

  // 6. Step-by-Step Process
  const stepsRaw =
    D.step_by_step_process ||
    D.process_steps ||
    D.stepByStepProcess ||
    D.process ||
    D.processSteps ||
    {};

  const stepsParsed = parseSteps(stepsRaw);
  const process = {
    title:
      stepsRaw.h2 ||
      stepsRaw.section_title ||
      stepsRaw.sectionTitle ||
      stepsRaw.title ||
      stepsRaw.section_h2 ||
      "Our Step-by-Step Account Onboarding Process",
    steps:
      stepsParsed.length > 0
        ? stepsParsed
        : [
            {
              stepNumber: "01",
              title: "Pre-submission compliance check and document auditing",
              description:
                "We analyze your corporate structure, identification records, and operating footprint to identify potential compliance flags before submission.",
            },
            {
              stepNumber: "02",
              title: "Packaging and submission to Tier-1 high-street banks",
              description:
                "We compile a comprehensive bank-ready dossier matching the specific risk appetites of institutions like HSBC, Barclays, or NatWest.",
            },
            {
              stepNumber: "03",
              title: "Alternative digital routing if Tier-1 hits friction",
              description:
                "If an underwriter raises friction, we immediately redirect your vetted compliance packet to tailored digital EMIs such as Wise Business or Revolut Business.",
            },
            {
              stepNumber: "04",
              title: "Account activation and mandate verification",
              description:
                "We guide directors through digital verification, assist with mandate setups, and confirm all local and international payment rails are live.",
            },
          ],
  };

  // 7. Pricing Transparency
  const pricingRaw =
    D.pricing_transparency ||
    D.pricing ||
    D.pricingTransparency ||
    {};

  const pricing = {
    title:
      pricingRaw.h2 ||
      pricingRaw.section_title ||
      pricingRaw.sectionTitle ||
      pricingRaw.title ||
      "Transparent Pricing with Zero Hidden Fees",
    content:
      pricingRaw.content ||
      pricingRaw.description ||
      "Our corporate banking file packaging and intermediary management packages start with complete fee transparency. Following a complimentary compliance audit, you receive a binding quotation covering full file compilation, document vetting, and active application management.",
  };

  // 8. Non-Resident Focus
  const nrRaw =
    D.non_resident_focus ||
    D.business_bank_accounts_for_non_residents ||
    D.nonResidentBanking ||
    D.non_resident_section ||
    D.businessBankAccountsForNonResidents ||
    D.non_resident_banking ||
    D.nonResidentSection ||
    D.non_residents_section ||
    D.nonResidentHub ||
    D.international_founders ||
    D.non_resident_coverage ||
    D.non_resident_solutions ||
    D.non_residents_coverage ||
    D.nonResidentSolutions ||
    {};

  const nonResident = parseNonResident(nrRaw);

  // 9. Frequently Asked Questions
  const faqRaw =
    D.faq ||
    D.faqs ||
    D.frequently_asked_questions ||
    D.frequentlyAskedQuestions ||
    D.faq_section;

  const faqs = parseFaqs(faqRaw);

  // 10. Legal Disclaimer
  const disclaimerRaw = D.legal_disclaimer || D.legalDisclaimer || "";
  const disclaimer =
    typeof disclaimerRaw === "string"
      ? disclaimerRaw
      : disclaimerRaw.text ||
        "We are a corporate service provider, management consultancy, and application facilitator; we are not a bank, credit institution, or authorized Electronic Money Institution (EMI). Account opening and banking facilities remain subject to the independent underwriting, Know Your Customer (KYC), anti-money laundering (AML), and compliance approvals of the respective financial institutions.";

  return {
    rank,
    country,
    slug,
    seo,
    hero,
    howWeOpen,
    comparisonMatrix,
    audience,
    process,
    pricing,
    nonResident,
    faqs,
    disclaimer,
  };
}

let cachedData = null;

export function getAllCountryBankAccounts() {
  if (cachedData) return cachedData;
  try {
    const jsonPath = path.join(process.cwd(), "lib", "cbp-1.json");
    const raw = fs.readFileSync(jsonPath, "utf8");
    const list = JSON.parse(raw);
    cachedData = list
      .map(normalizeCountryData)
      .filter((item) => item !== null);
    return cachedData;
  } catch (err) {
    console.error("Error reading cbp-1.json:", err);
    return [];
  }
}

export function getAllCountryBankSlugs() {
  const accounts = getAllCountryBankAccounts();
  return accounts.map((a) => a.slug);
}

export function getCountryBankData(slug) {
  const accounts = getAllCountryBankAccounts();
  return accounts.find((a) => a.slug === slug) || null;
}
