import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/core/SectionHeader";
import PricingCard from "@/components/rates/PricingCard";
import { Button } from "@/components/ui/button";
import { PRICING_PACKAGES } from "@/data/rates";
import { getPricingContext } from "@/lib/pricing";

const RatesTeaser = async () => {
  const { currentCurrency, currentTier } = await getPricingContext();
  return (
    <section id="rates" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <SectionHeader title="RENDER UNTO CAESAR" className="text-center" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 max-w-7xl mx-auto">
          {PRICING_PACKAGES.map((pkg) => (
            <PricingCard
              key={pkg.id}
              pkg={pkg}
              currentTier={currentTier}
              currentCurrency={currentCurrency}
              hideButton={true}
            />
          ))}
        </div>

        <div className="mt-8">
          <Button asChild className="float-right my-4" variant={"link"}>
            <Link href={"/rates"}>
              RATES
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute -bottom-24 -right-24 size-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -left-24 size-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default RatesTeaser;
