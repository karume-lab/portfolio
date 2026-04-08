"use server";

import { headers } from "next/headers";
import {
  type Currency,
  type PricingTier,
  TIER_1_COUNTRIES,
  TIER_2_COUNTRIES,
} from "@/data/rates";

export const getPricingContext = async (searchParamsCurrency?: string) => {
  const headerList = await headers();
  const country = headerList.get("x-vercel-ip-country") || "KE";

  let detectedTier: PricingTier = "tier3";
  let detectedCurrency: Currency = "KES";

  if (TIER_1_COUNTRIES.includes(country)) {
    detectedTier = "tier1";
    detectedCurrency = "USD";
  } else if (TIER_2_COUNTRIES.includes(country)) {
    detectedTier = "tier2";
    detectedCurrency = "USD";
  }

  const currentCurrency =
    (searchParamsCurrency as Currency) || detectedCurrency;

  const currentTier = searchParamsCurrency
    ? searchParamsCurrency === "KES"
      ? "tier3"
      : "tier1"
    : detectedTier;

  return { currentCurrency, currentTier };
};
