import { ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/core/SectionHeader";
import PricingCard from "@/components/rates/PricingCard";
import { Button } from "@/components/ui/button";
import { PRICING_PACKAGES } from "@/data/rates";
import { getPricingContext } from "@/lib/pricing";

export const metadata = {
  title: "Pricing & Rates | Daniel Karume",
  description:
    "Transparent, value-first pricing for global software development and digital transformation.",
};

const RatesPage = async (props: {
  searchParams: Promise<{ currency?: string }>;
}) => {
  const searchParams = await props.searchParams;
  const { currentCurrency, currentTier } = await getPricingContext(
    searchParams.currency,
  );

  return (
    <main className="container mx-auto px-4 py-24 sm:py-32 space-y-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-12">
        {PRICING_PACKAGES.map((pkg) => (
          <PricingCard
            key={pkg.id}
            pkg={pkg}
            currentTier={currentTier}
            currentCurrency={currentCurrency}
          />
        ))}
      </div>

      <div className="relative group overflow-hidden rounded-[2.5rem] border border-border/50 bg-secondary/20 p-12 sm:p-20 text-center space-y-8">
        <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors">
          <Calculator className="size-48 rotate-12" />
        </div>

        <div className="relative z-10 space-y-4">
          <SectionHeader title="NOTHING LIKE CUSTOM RATES" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-medium">
            Every project is unique. Use my interactive rate calculator to get a
            specialized estimate for your specific features and timeline.
          </p>
          <div className="pt-6">
            <Button
              size="lg"
              className="h-16 px-12 text-xl font-black rounded-2xl group shadow-2xl hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/rates/calculate">
                Rate Calculator
                <ArrowRight className="ml-3 size-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RatesPage;
