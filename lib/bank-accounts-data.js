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

function findObject(obj, keys) {
  if (!obj) return null;
  for (const k of keys) {
    if (obj[k] !== undefined && obj[k] !== null) return obj[k];
  }
  return null;
}

function parseMatrix(matrixRaw) {
  if (!matrixRaw) {
    return {
      title: "Business Banking & Digital Platform Comparison",
      disclaimer: "",
      headers: [],
      rows: [],
    };
  }

  const title =
    matrixRaw.h2 ||
    matrixRaw.title ||
    matrixRaw.section_title ||
    matrixRaw.sectionTitle ||
    matrixRaw.heading ||
    matrixRaw.sectionH2 ||
    "Business Banking & Digital Platform Comparison";

  const disclaimer =
    matrixRaw.disclaimer ||
    matrixRaw.note ||
    matrixRaw.disclaimer_text ||
    matrixRaw.intro ||
    matrixRaw.description ||
    "";

  // Check for markdown table string
  for (const k of Object.keys(matrixRaw)) {
    const val = matrixRaw[k];
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
      return { title, disclaimer, headers, rows };
    }
  }

  // Explicit headers & rows
  const headers =
    matrixRaw.columns ||
    matrixRaw.headers ||
    matrixRaw.table_headers ||
    matrixRaw.matrix_columns ||
    matrixRaw.table_columns ||
    (matrixRaw.table && (matrixRaw.table.headers || matrixRaw.table.columns)) ||
    [];

  const rawRows =
    matrixRaw.rows ||
    matrixRaw.table_rows ||
    matrixRaw.matrix_rows ||
    (matrixRaw.table && matrixRaw.table.rows) ||
    [];

  if (Array.isArray(headers) && headers.length > 0 && Array.isArray(rawRows) && rawRows.length > 0) {
    const rows = rawRows.map((r) => {
      if (Array.isArray(r)) return r.map((c) => String(c ?? ""));
      if (typeof r === "object" && r !== null) {
        return Object.values(r).map((c) => String(c ?? ""));
      }
      return [String(r ?? "")];
    });
    return { title, disclaimer, headers, rows };
  }

  // Array of objects
  for (const k of Object.keys(matrixRaw)) {
    const val = matrixRaw[k];
    if (Array.isArray(val) && val.length > 0 && typeof val[0] === "object") {
      const keys = Object.keys(val[0]);
      const hdrs = keys.map((h) =>
        h
          .replace(/([A-Z])/g, " $1")
          .replace(/_/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())
          .trim()
      );
      const rows = val.map((obj) => keys.map((key) => String(obj[key] ?? "")));
      return { title, disclaimer, headers: hdrs, rows };
    }
  }

  return { title, disclaimer, headers: [], rows: [] };
}

function parseFaqs(faqData) {
  if (!faqData) return [];
  let raw = [];
  if (Array.isArray(faqData)) {
    raw = faqData;
  } else if (typeof faqData === "object" && faqData !== null) {
    raw =
      faqData.faqs ||
      faqData.faq_list ||
      faqData.items ||
      faqData.questions ||
      faqData.questions_and_answers ||
      faqData.frequently_asked_questions ||
      faqData.faq_items ||
      [];
  }
  return raw
    .map((item) => ({
      question: item.question || item.q || item.title || "",
      answer: item.answer || item.a || item.content || item.text || "",
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
        `0${idx + 1}`.slice(-2),
      title:
        s.title ||
        s.step_title ||
        s.stepTitle ||
        s.name ||
        s.h3 ||
        s.h4 ||
        "",
      description:
        s.description ||
        s.step_description ||
        s.stepDescription ||
        s.content ||
        s.details ||
        s.body ||
        s.text ||
        "",
    }))
    .filter((s) => s.title || s.description);
}

function parseFeatures(howRaw) {
  if (!howRaw) return [];
  const listCandidates = [
    "features", "key_points", "key_benefits", "key_activities",
    "responsibilities", "key_differentiators", "service_pillars",
    "cards", "steps_overview", "pillars", "core_benefits",
    "points", "core_services", "keyServices", "servicePillars",
    "keyFeatures", "process_pillars", "deliverables", "core_pillars",
    "key_pillars", "key_deliverables", "workflow", "keyCapabilities",
    "value_pillars", "serviceCapabilities"
  ];

  let rawList = null;
  for (const k of listCandidates) {
    if (Array.isArray(howRaw[k]) && howRaw[k].length > 0) {
      rawList = howRaw[k];
      break;
    }
  }

  if (!rawList && Array.isArray(howRaw)) rawList = howRaw;

  if (!rawList) return [];

  return rawList
    .map((item) => {
      if (typeof item === "string") {
        return { title: "", detail: item };
      }
      return {
        title: item.title || item.name || item.h3 || item.h4 || item.heading || "",
        detail: item.detail || item.description || item.content || item.text || item.summary || "",
      };
    })
    .filter((f) => f.title || f.detail);
}

function parseLandscape(landRaw) {
  if (!landRaw) return null;
  const title =
    landRaw.h2 ||
    landRaw.title ||
    landRaw.section_title ||
    landRaw.heading ||
    landRaw.sectionH2 ||
    "Traditional Commercial Banks vs Regulated Digital Platforms";

  let overview =
    landRaw.overview ||
    landRaw.description ||
    landRaw.intro ||
    landRaw.introductoryText ||
    landRaw.section_description ||
    landRaw.content ||
    "";
  if (Array.isArray(overview)) overview = overview.join("\n\n");

  const parseProviderBlock = (block) => {
    if (!block) return null;
    if (typeof block === "string") return { title: "", description: block };
    const bTitle = block.h3 || block.title || block.name || "";
    let bDesc =
      block.description ||
      block.summary ||
      block.overview ||
      block.details ||
      "";
    if (Array.isArray(bDesc)) bDesc = bDesc.join("\n\n");

    const strengths = Array.isArray(block.strengths) ? block.strengths.map(String) : [];
    const limitations = Array.isArray(block.limitations) ? block.limitations.map(String) : [];
    const characteristics = Array.isArray(block.characteristics) ? block.characteristics.map(String) : [];
    const bestFor = block.best_for || block.bestFor || "";
    const institutions = Array.isArray(block.institutions)
      ? block.institutions.map((inst) =>
          typeof inst === "string" ? { name: inst, details: "" } : { name: inst.name || "", details: inst.details || "" }
        )
      : [];

    return {
      title: bTitle,
      description: bDesc,
      strengths,
      limitations,
      characteristics,
      bestFor,
      institutions,
    };
  };

  const trad =
    findObject(landRaw, [
      "traditionalBanks", "traditional_banks", "traditional_banking",
      "traditional_overview", "traditionalBanksOverview", "traditional_providers",
      "traditionalBankingOverview", "traditionalBanksDescription"
    ]);

  const digi =
    findObject(landRaw, [
      "digitalPlatforms", "digital_alternatives", "digitalAlternatives",
      "digital_overview", "digitalAlternativesOverview", "digital_providers",
      "digital_banking_overview", "digitalAlternativesDescription"
    ]);

  return {
    title,
    overview,
    traditionalBanks: parseProviderBlock(trad),
    digitalPlatforms: parseProviderBlock(digi),
  };
}

function parseAudience(audRaw) {
  if (!audRaw) return { title: "Suitability & Eligibility Assessment", forPoints: [], notForPoints: [] };

  const title =
    audRaw.h2 ||
    audRaw.title ||
    audRaw.section_title ||
    audRaw.heading ||
    audRaw.sectionH2 ||
    "Is Our Corporate Banking Assistance Right for You?";

  const forRaw = findObject(audRaw, [
    "whoIsThisFor", "for_you", "who_it_is_for", "ideal_for", "for",
    "for_section", "for_list", "who_this_is_for", "ideal_clients",
    "idealClients", "ideal_candidates", "fit_for", "whoThisIsFor",
    "whoItIsFor", "for_whom", "forWhom", "who_this_service_is_for",
    "target_audience", "targetAudience", "target_clients",
    "whoThisServiceIsFor", "eligibleProfiles", "idealFor", "isFor"
  ]);

  const notForRaw = findObject(audRaw, [
    "whoIsNotFor", "not_for_you", "who_it_is_not_for", "not_ideal_for", "not_for",
    "not_for_section", "not_for_list", "who_this_is_not_for", "non_ideal_clients",
    "nonIdealClients", "not_suitable_for", "unsuitable_clients",
    "non_ideal_candidates", "not_fit_for", "whoThisIsNotFor", "notSuitable",
    "non_eligible_clients", "whoItIsNotFor", "not_for_whom", "notForWhom",
    "who_this_service_is_not_for", "exclusions", "non_target_audience",
    "non_target_clients", "whoThisServiceIsNotFor", "ineligibleProfiles",
    "notTargetAudience", "notFor", "unsuitable_for", "isNotFor", "not_ideal_clients"
  ]);

  const extractPoints = (val) => {
    if (!val) return [];
    if (Array.isArray(val)) {
      return val.map((item) => {
        if (typeof item === "string") return item;
        return item.title || item.point || item.description || item.text || JSON.stringify(item);
      });
    }
    if (typeof val === "object") {
      const nestedList =
        val.points ||
        val.criteria ||
        val.items ||
        val.list ||
        val.profiles ||
        val.bullet_points;
      if (Array.isArray(nestedList)) {
        return nestedList.map((item) => {
          if (typeof item === "string") return item;
          if (item.title && item.description) return `${item.title}: ${item.description}`;
          return item.title || item.point || item.description || item.text || "";
        });
      }
      const singleText = val.content || val.description || val.text || "";
      if (singleText) return [singleText];
    }
    if (typeof val === "string") return [val];
    return [];
  };

  return {
    title,
    forPoints: extractPoints(forRaw),
    notForPoints: extractPoints(notForRaw),
  };
}

function parsePricing(pRaw) {
  if (!pRaw) return { title: "Transparent Pricing", currency: "USD", description: "", disclaimer: "", tiers: [] };

  const title =
    pRaw.h2 ||
    pRaw.title ||
    pRaw.section_title ||
    pRaw.heading ||
    pRaw.sectionH2 ||
    "Transparent Pricing for Banking Assistance";

  const currency = pRaw.currency || "";
  let description =
    pRaw.description ||
    pRaw.subheading ||
    pRaw.intro ||
    pRaw.introductoryNote ||
    pRaw.pricingIntro ||
    pRaw.subtitle ||
    "";
  if (Array.isArray(description)) description = description.join("\n\n");

  let disclaimer =
    pRaw.disclaimer ||
    pRaw.pricing_note ||
    pRaw.pricing_disclaimer ||
    pRaw.pricingDisclaimer ||
    pRaw.fee_note ||
    pRaw.pricingNotice ||
    pRaw.note ||
    "";
  if (Array.isArray(disclaimer)) disclaimer = disclaimer.join("\n\n");

  let rawTiers = findObject(pRaw, [
    "tiers", "packages", "plans", "pricing_tiers", "pricing_models",
    "pricing_cards", "pricingTiers", "pricingModels", "pricing_structure"
  ]);

  if (rawTiers && typeof rawTiers === "object" && !Array.isArray(rawTiers)) {
    rawTiers = Object.values(rawTiers);
  }

  let tiers = [];
  if (Array.isArray(rawTiers)) {
    tiers = rawTiers.map((t) => {
      const name = t.name || t.tier_name || t.plan_name || t.tierName || t.title || t.h3 || "Banking Package";
      const price = t.price || t.fee || t.starting_price || t.price_aud || t.price_eur || t.price_usd || t.fee_structure || t.price_description || "";
      const desc = t.description || t.best_for || t.ideal_for || t.target_audience || t.bestFor || t.idealFor || t.suitability || "";
      const featuresRaw = t.includes || t.inclusions || t.features || t.deliverables || t.scope || [];
      const features = Array.isArray(featuresRaw) ? featuresRaw.map(String) : [];

      return {
        name,
        price,
        description: desc,
        features,
      };
    });
  }

  return { title, currency, description, disclaimer, tiers };
}

function parseNonResident(nrRaw) {
  if (!nrRaw) return { title: "Business Bank Accounts for Non-Residents", content: "", keyConsiderations: [] };

  const title =
    nrRaw.h2 ||
    nrRaw.section_title ||
    nrRaw.heading ||
    nrRaw.sectionH2 ||
    "Business Bank Accounts for Non-Resident Founders";

  let content =
    nrRaw.content ||
    nrRaw.description ||
    nrRaw.overview ||
    nrRaw.body ||
    nrRaw.explanation ||
    nrRaw.editorial_content ||
    "";
  if (Array.isArray(content)) {
    content = content.join("\n\n");
  }

  const kcRaw = findObject(nrRaw, [
    "key_considerations", "keyConsiderations", "sections", "keyPoints",
    "key_distinctions", "subsections"
  ]);

  let keyConsiderations = [];
  if (Array.isArray(kcRaw)) {
    keyConsiderations = kcRaw.map((k) => ({
      title: k.title || k.heading || k.h3 || "",
      content: Array.isArray(k.content || k.description) ? (k.content || k.description).join(" ") : (k.content || k.description || k.text || ""),
    })).filter((k) => k.title || k.content);
  }

  return { title, content, keyConsiderations };
}

function parseGlobalReach(grRaw) {
  if (!grRaw) return { title: "Global Reach & International Founder Support", claim: "", regions: [] };

  const title =
    grRaw.h2 ||
    grRaw.section_title ||
    grRaw.heading ||
    grRaw.sectionH2 ||
    "Supporting Founders Worldwide";

  let claim =
    grRaw.claim ||
    grRaw.global_claim ||
    grRaw.globalReachStatement ||
    grRaw.description ||
    grRaw.intro ||
    grRaw.statement ||
    "Supporting founders from over 50+ countries.";
  if (Array.isArray(claim)) claim = claim.join(" ");

  const rawRegions = findObject(grRaw, [
    "regions", "regional_examples", "examples", "regional_profiles",
    "regionalExamples", "regional_scenarios"
  ]);

  let regions = [];
  if (Array.isArray(rawRegions)) {
    regions = rawRegions.map((r) => {
      const regionTitle = r.region || r.region_name || r.regionName || r.title || "";
      const countriesOrDesc =
        r.examples ||
        r.example ||
        r.description ||
        r.countries ||
        r.scenario ||
        r.detail ||
        (Array.isArray(r.countries) ? r.countries.join(", ") : "") ||
        "";

      return {
        region: regionTitle,
        description: Array.isArray(countriesOrDesc) ? countriesOrDesc.join(", ") : String(countriesOrDesc),
      };
    }).filter((r) => r.region || r.description);
  }

  return { title, claim, regions };
}

function parseLeadCaptureForm(formRaw, country) {
  if (!formRaw) {
    return {
      title: `Check your ${country} corporate banking eligibility`,
      description: "Submit your details for a complimentary compliance pre-assessment.",
      submitButtonText: "Check my eligibility (free)",
      fields: [],
    };
  }

  const title =
    formRaw.title ||
    formRaw.h2 ||
    formRaw.form_title ||
    formRaw.heading ||
    formRaw.form_heading ||
    formRaw.formTitle ||
    `Check your ${country} corporate banking eligibility`;

  const description =
    formRaw.description ||
    formRaw.form_description ||
    formRaw.intro ||
    formRaw.subheading ||
    formRaw.formSubtitle ||
    formRaw.formDescription ||
    "Submit your business profile below for a detailed compliance and banking eligibility evaluation.";

  const rawSubmit =
    formRaw.submit_button_text ||
    formRaw.submitButtonText ||
    formRaw.submit_button_label ||
    formRaw.submitButton ||
    formRaw.submit_button ||
    "Check my eligibility (free)";

  const submitButtonText =
    typeof rawSubmit === "string"
      ? rawSubmit
      : (rawSubmit.text || rawSubmit.label || "Check my eligibility (free)");

  const rawFields = formRaw.fields || formRaw.form_fields || formRaw.formFields || [];
  const fields = (Array.isArray(rawFields) ? rawFields : []).map((f) => ({
    name: f.name || f.field_name || f.fieldName || f.field_id || "",
    label: f.label || f.field_label || f.name || "",
    type: f.type || f.field_type || f.fieldType || "text",
    required: f.required !== false,
    placeholder: f.placeholder || "",
    options: Array.isArray(f.options) ? f.options.map(String) : [],
  }));

  return { title, description, submitButtonText, fields };
}

export function normalizeCountryData(item) {
  if (!item || !item.Data) return null;
  const D = item.Data;
  const country = item.Country;
  const rank = item.Rank;
  const slug = getSlugForCountry(country);

  // SEO Metadata
  const seoRaw = D.seoMetadata || D.seo_metadata || D.seo || {};
  const seo = {
    title: seoRaw.titleTag || seoRaw.title_tag || seoRaw.title || `Open a ${country} Business Bank Account | Non-Resident & Remote`,
    description: seoRaw.metaDescription || seoRaw.meta_description || seoRaw.description || `Open a corporate business bank account in ${country}. Assisting domestic and international non-resident founders across commercial clearing banks and digital platforms.`,
    keywords: Array.isArray(seoRaw.target_keywords || seoRaw.keywords)
      ? (seoRaw.target_keywords || seoRaw.keywords).join(", ")
      : `${country} business bank account, corporate banking, remote business bank account, non-resident founders`,
    canonical: `/${slug}`,
  };

  // Hero Section
  const heroRaw = D.heroSection || D.hero_section || D.hero || {};
  const rawCta =
    heroRaw.primaryCta ||
    heroRaw.primary_cta ||
    heroRaw.cta_text ||
    heroRaw.cta_button_text ||
    heroRaw.cta_button ||
    heroRaw.cta_primary ||
    "Check my eligibility (free)";

  const ctaText =
    typeof rawCta === "string"
      ? rawCta
      : (rawCta.text || rawCta.label || rawCta.button_text || "Check my eligibility (free)");

  const rawBadges =
    heroRaw.trustBadges ||
    heroRaw.trust_signals ||
    heroRaw.trust_badges ||
    heroRaw.trust_points ||
    heroRaw.trust_bullets ||
    heroRaw.trust_metrics ||
    heroRaw.trustSignals ||
    (heroRaw.trust_statement ? [heroRaw.trust_statement] : (heroRaw.global_reach_badge ? [heroRaw.global_reach_badge] : (heroRaw.globalReachClaim ? [heroRaw.globalReachClaim] : [])));

  const trustBadges = (Array.isArray(rawBadges) ? rawBadges : [String(rawBadges || "")])
    .map((b) => {
      if (typeof b === "string") return b;
      if (b && typeof b === "object") return b.text || b.label || b.title || String(b);
      return String(b || "");
    })
    .filter(Boolean);

  let subheading = heroRaw.subheading || heroRaw.sub_headline || heroRaw.subtitle || heroRaw.subheadline || `Whether you are a domestic founder or an international entrepreneur, we prepare, manage, and coordinate your corporate banking applications across leading financial institutions and digital platforms.`;
  if (Array.isArray(subheading)) subheading = subheading.join(" ");

  const hero = {
    h1: heroRaw.h1 || heroRaw.headline || `Open a ${country} business bank account without the friction`,
    subheading,
    ctaText,
    trustBadges: trustBadges.length > 0 ? trustBadges : ["Supporting founders from over 50+ countries.", "Direct compliance preparation", "Tier-1 commercial banks & digital alternatives"],
  };

  // How We Work / How We Facilitate Opening
  const howRaw = D.howWeWork || D.how_we_work || D.how_we_open_your_business_bank_account || D.howWeOpenYourBusinessBankAccount || D.how_we_open_your_account || D.howWeOpenYourAccount || D.how_we_help || D.howWeHelp || D.service_overview || D.serviceOverview || {};
  let howDesc = howRaw.description || howRaw.overview || howRaw.body || "";
  if (Array.isArray(howDesc)) howDesc = howDesc.join("\n\n");

  const howWeWork = {
    title: howRaw.h2 || howRaw.title || howRaw.section_title || `How we streamline your ${country} business bank account opening`,
    description: howDesc,
    features: parseFeatures(howRaw),
  };

  // Banking Landscape (Traditional Banks vs Regulated Digital Platforms)
  const landRaw = D.bankingLandscape || D.banking_landscape || D.traditional_banks_and_digital_alternatives || D.traditionalBanksAndDigitalAlternatives || D.traditional_vs_digital || D.traditional_vs_digital_banking || D.traditional_and_digital_banking || D.traditional_and_digital_options || D.bankingOptions || D.banking_ecosystem_overview || {};
  const landscape = parseLandscape(landRaw);

  // Comparison Matrix
  const matrixRaw = D.comparisonMatrix || D.comparison_matrix || D.bank_and_emi_comparison_matrix || D.bankAndEmiComparisonMatrix || D.bank_comparison_matrix || D.bankComparisonMatrix || D.bank_and_emi_comparison || D.bankAndEmiComparison || D.provider_comparison_matrix || {};
  const matrix = parseMatrix(matrixRaw);

  // Audience Fit (Who this is for vs who this is NOT for)
  const audRaw = D.targetAudience || D.target_audience || D.target_audience_fit || D.who_this_service_is_for_and_who_it_is_not_for || D.whoThisServiceIsForAndWhoItIsNotFor || D.who_this_service_is_for_and_not_for || D.whoThisServiceIsForAndNotFor || D.who_this_is_for_and_who_it_is_not_for || D.who_this_is_for_and_not_for || D.who_this_is_for || D.whoThisIsFor || D.who_this_service_is_for || D.whoThisServiceIsFor || D.who_service_is_for || D.audience_fit || D.audienceFit || D.audienceQualification || D.service_suitability || D.service_fit || D.service_scope || D.suitability || D.eligibility_criteria || D.eligibility_fit || {};
  const audience = parseAudience(audRaw);

  // Company Formation Cross-Sell
  const formRaw = D.formationCrossSell || D.formation_cross_sell || D.company_formation_cross_sell || D.companyFormationCrossSell || D.cross_sell || D.crossSell || D.crossSellSection || D.cross_sell_formation || D.cross_sell_section || {};
  let formBody = formRaw.body || formRaw.description || formRaw.content || formRaw.body_copy || formRaw.copy || `A corporate bank account requires an officially registered domestic or accepted legal entity. If you have not yet incorporated, we coordinate entity setup and governance options.`;
  if (Array.isArray(formBody)) formBody = formBody.join("\n\n");
  if (typeof formBody === "object" && formBody !== null) formBody = formBody.content || formBody.description || formBody.text || "";

  const formation = {
    title: formRaw.h2 || formRaw.title || formRaw.section_title || formRaw.heading || `Need a ${country} entity before applying for banking?`,
    body: formBody,
  };

  // Step-by-Step Application Process
  const procRaw = D.applicationProcess || D.application_process || D.four_step_application_process || D.fourStepApplicationProcess || D.four_step_process || D.fourStepProcess || D.step_by_step_process || D.process || D.process_steps || {};
  const processData = {
    title: procRaw.h2 || procRaw.title || procRaw.section_title || `Our 4-step bank onboarding framework`,
    steps: parseSteps(procRaw),
  };

  // Transparent Pricing & Packages
  const priceRaw = D.pricing || D.pricingSection || D.transparentPricing || D.transparent_pricing || {};
  const pricing = parsePricing(priceRaw);

  // Non-Resident Focus
  const nrRaw = D.nonResidentFocus || D.non_resident_focus || D.businessBankAccountsForNonResidents || D.business_bank_accounts_for_non_residents || D.nonResidentBanking || D.non_resident_banking || D.non_resident_banking_guide || D.non_resident_guide || D.nonResidentFounders || D.nonResidentDetails || D.non_resident_banking_details || D.non_resident_banking_context || D.non_resident_banking_insights || D.nonResidentBankingDetails || D.nonResidentBankingSection || D.nonResidentRealities || D.nonResidentSection || D.non_resident_section || {};
  const nonResident = parseNonResident(nrRaw);

  // Global Reach & Founder Locations
  const grRaw = D.globalReachExamples || D.global_reach_examples || D.globalReach || D.global_reach || D.globalReachSection || D.founderLocations || D.founder_locations || D.founder_locations_examples || D.founderLocationsGlobalReach || D.founder_locations_global_reach || D.founder_locations_global_regions || D.founder_locations_by_region || D.globalFounderExamples || D.global_founder_examples || D.globalFounderLocations || D.global_founder_locations || D.global_founder_regions || D.global_founder_coverage || D.examplesOfFounderLocations || D.examples_of_founder_locations || D.examplesOfFounderLocationsAcrossGlobalRegions || D.examples_of_founder_locations_across_global_regions || {};
  const globalReach = parseGlobalReach(grRaw);

  // Frequently Asked Questions
  const faqRaw = D.faqSection || D.faqs || D.faq || D.frequentlyAskedQuestions || D.frequently_asked_questions || D.twenty_faqs || {};
  const faqs = parseFaqs(faqRaw);

  // Lead Capture Form
  const leadRaw = D.leadCaptureForm || D.lead_capture_form || {};
  const leadForm = parseLeadCaptureForm(leadRaw, country);

  // Legal Disclaimer
  const discRaw = D.legalDisclaimer || D.legal_disclaimer || "";
  let disclaimer = "Disclaimer: We are an independent corporate service provider and legal intermediary that assists businesses with entity administration and account application preparation. We are not a bank, electronic money institution, or deposit-taking firm. Account availability is subject to regulatory compliance and internal risk underwriting by individual financial institutions.";
  if (typeof discRaw === "string") {
    disclaimer = discRaw;
  } else if (discRaw && typeof discRaw === "object") {
    disclaimer = discRaw.text || discRaw.disclaimer_text || discRaw.content || disclaimer;
  }

  return {
    rank,
    country,
    slug,
    seo,
    hero,
    howWeWork,
    landscape,
    matrix,
    audience,
    formation,
    process: processData,
    pricing,
    nonResident,
    globalReach,
    faqs,
    leadForm,
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
