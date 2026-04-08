export type Currency = "KES" | "USD" | "EUR";
export type PricingTier = "tier1" | "tier2" | "tier3";

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  basePrice: Record<PricingTier, Record<Currency, number>>;
  isRecommended?: boolean;
}

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  KES: "KSh",
  USD: "$",
  EUR: "€",
};

export const TIER_LABELS: Record<PricingTier, string> = {
  tier1: "US / UK / EU",
  tier2: "UAE / Gulf / South Africa",
  tier3: "Kenya / East Africa",
};

export const TIER_1_COUNTRIES = [
  "US",
  "GB",
  "CA",
  "DE",
  "FR",
  "NL",
  "SE",
  "NO",
  "DK",
  "CH",
  "IE",
  "AU",
  "NZ",
  "BE",
  "AT",
  "FI",
];

export const TIER_2_COUNTRIES = [
  "ZA",
  "AE",
  "PL",
  "CZ",
  "HU",
  "RO",
  "SA",
  "QA",
  "OM",
  "KW",
  "BH",
  "SG",
  "MY",
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "digital-presence",
    name: "Digital Presence",
    tagline: "A site that looks good and actually shows up on Google.",
    description:
      "For freelancers, consultants, and small businesses who are tired of telling people to just Google them - and nothing comes up.",
    features: [
      "Works on every phone and laptop",
      "Designed to look good, not just functional",
      "Shows up when people search for you",
      "Loads in under 2 seconds",
      "Customers can reach you directly",
    ],
    basePrice: {
      tier1: { USD: 2500, EUR: 2300, KES: 325000 },

      tier2: { USD: 1200, EUR: 1100, KES: 156000 },

      tier3: { USD: 380, EUR: 350, KES: 50000 },
    },
  },
  {
    id: "business-operations",
    name: "Business Operations",
    tagline:
      "Your team is running everything on Excel and WhatsApp. Let's fix that.",
    description:
      "A system built specifically for how your business works - not a template you have to bend yourself around.",
    features: [
      "Login system with roles and permissions",
      "Your data stored and backed up properly",
      "See what's happening in your business at a glance",
      "Secure - built to keep the wrong people out",
      "3 months of fixes and support after launch",
    ],
    basePrice: {
      tier1: { USD: 8000, EUR: 7400, KES: 1040000 },

      tier2: { USD: 3500, EUR: 3200, KES: 455000 },

      tier3: { USD: 950, EUR: 880, KES: 125000 },
    },
    isRecommended: true,
  },
  {
    id: "startup-app",
    name: "Startup App",
    tagline:
      "You have an idea and a pitch deck. I'll build the thing that makes investors take you seriously.",
    description:
      "From first screen to the App Store. I handle the full build so you can focus on getting users.",
    features: [
      "Web and mobile - both platforms covered",
      "M-Pesa, Stripe, or whatever your users pay with",
      "Live updates without refreshing the page",
      "Published on Google Play (+ App Store if needed)",
      "Documentation clean enough to show investors",
      "Push notifications built in",
    ],
    basePrice: {
      tier1: { USD: 15000, EUR: 13800, KES: 1950000 },

      tier2: { USD: 7000, EUR: 6400, KES: 910000 },

      tier3: { USD: 1540, EUR: 1420, KES: 200000 },
    },
  },
];

export const CALCULATOR_LOGIC = {
  baseUSD: 800,

  tierMultipliers: {
    tier1: 1.0,
    tier2: 0.5,
    tier3: 0.22,
  } as Record<PricingTier, number>,

  projectTypes: [
    { id: "website", label: "Website", multiplier: 1.0 },
    { id: "webapp", label: "Web App", multiplier: 2.2 },
    { id: "mobile", label: "Mobile App", multiplier: 3.5 },
  ],

  pageScales: [
    { id: "small", label: "1–3 Pages / Screens", multiplier: 1.0 },
    { id: "medium", label: "5–10 Pages / Screens", multiplier: 1.5 },
    { id: "large", label: "10+ Pages / Screens", multiplier: 2.2 },
  ],

  features: {
    whatsapp: {
      label: "WhatsApp Integration",
      baseUSD: 230,
    },
    payments: {
      label: "Payment Gateway (M-Pesa / Stripe / PayPal)",
      baseUSD: 450,
    },
    login: {
      label: "User Authentication & Roles",
      baseUSD: 300,
    },
    admin: {
      label: "Custom Admin Panel",
      baseUSD: 700,
    },
    realtime: {
      label: "Real-time Features (live updates, notifications)",
      baseUSD: 520,
    },
    seo: {
      label: "Advanced SEO Setup",
      baseUSD: 180,
    },
  },

  urgency: [
    { id: "standard", label: "Standard (4–6 weeks)", multiplier: 1.0 },
    { id: "express", label: "Express (1–2 weeks)", multiplier: 1.75 },
  ],
};

export const EXCHANGE_RATES: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  KES: 130,
};

export interface CalculatorConfig {
  tier: PricingTier;
  projectType: "website" | "webapp" | "mobile";
  pageScale: "small" | "medium" | "large";
  features: Array<keyof typeof CALCULATOR_LOGIC.features>;
  urgency: "standard" | "express";
}

export function calculatePrice(config: CalculatorConfig): {
  subtotalUSD: number;
  featuresUSD: number;
  totalUSD: number;
  inCurrency: (currency: Currency) => number;
} {
  const { tier, projectType, pageScale, features, urgency } = config;
  const c = CALCULATOR_LOGIC;

  const tierMult = c.tierMultipliers[tier];
  const projectMult =
    c.projectTypes.find((p) => p.id === projectType)?.multiplier ?? 1;
  const pageMult =
    c.pageScales.find((p) => p.id === pageScale)?.multiplier ?? 1;
  const urgencyMult = c.urgency.find((u) => u.id === urgency)?.multiplier ?? 1;

  const subtotalUSD =
    c.baseUSD * tierMult * projectMult * pageMult * urgencyMult;

  const featuresUSD = features.reduce((sum, featureId) => {
    const feature = c.features[featureId];
    return feature ? sum + feature.baseUSD * tierMult : sum;
  }, 0);

  const totalUSD = subtotalUSD + featuresUSD;

  return {
    subtotalUSD: Math.round(subtotalUSD),
    featuresUSD: Math.round(featuresUSD),
    totalUSD: Math.round(totalUSD),
    inCurrency: (currency: Currency) =>
      Math.round(totalUSD * EXCHANGE_RATES[currency]),
  };
}

export interface RetainerPackage {
  id: string;
  name: string;
  description: string;
  features: string[];
  monthlyPrice: Record<PricingTier, Record<Currency, number>>;
}

export const RETAINER_PACKAGES: RetainerPackage[] = [
  {
    id: "basic-care",
    name: "Basic Care",
    description:
      "I pay the server bills, keep the site online, and you never have to worry about expired domains or a crashed site at 2am.",
    features: [
      "Hosting managed and paid",
      "Domain + SSL renewed on time",
      "Weekly backups",
      "Uptime monitoring (you get a call if it goes down)",
      "WhatsApp support for urgent issues",
    ],
    monthlyPrice: {
      tier1: { USD: 300, EUR: 280, KES: 39000 },
      tier2: { USD: 150, EUR: 140, KES: 19500 },
      tier3: { USD: 55, EUR: 51, KES: 7000 },
    },
  },
  {
    id: "growth-plan",
    name: "Growth Plan",
    description:
      "For apps that are actually being used - I keep things fast as you get more users and make small updates every month without you needing to raise a ticket.",
    features: [
      "Everything in Basic Care",
      "4 hours of dev time per month (text changes, new admin users, small tweaks)",
      "Bug fixes included - no extra charge",
      "Monthly performance check",
      "Priority response (under 4 hours on WhatsApp)",
    ],
    monthlyPrice: {
      tier1: { USD: 800, EUR: 740, KES: 104000 },
      tier2: { USD: 400, EUR: 370, KES: 52000 },
      tier3: { USD: 130, EUR: 120, KES: 17000 },
    },
  },
];
