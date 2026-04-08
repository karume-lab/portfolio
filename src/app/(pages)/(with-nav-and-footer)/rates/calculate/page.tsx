import CalculatorWizard from "@/components/rates/CalculatorWizard";
import { getPricingContext } from "@/lib/pricing";

export const metadata = {
  title: "Rate Calculator | Daniel Karume",
  description: "Get an interactive estimate for your next software project.",
};

const CalculatePage = async (props: {
  searchParams: Promise<{ currency?: string }>;
}) => {
  const searchParams = await props.searchParams;
  const { currentCurrency } = await getPricingContext(searchParams.currency);

  return (
    <main className="container mx-auto px-4 py-24 sm:py-32 flex flex-col items-center justify-center min-h-[80vh] space-y-12">
      <CalculatorWizard initialCurrency={currentCurrency} className="w-full" />

      <div className="flex flex-col items-center gap-6 max-w-xl text-center pt-8 border-t border-border/30">
        <p className="text-sm text-muted-foreground/60 font-medium leading-relaxed">
          Disclaimer: This is a guideline based on current 2026 market
          benchmarks. Final quotes are provided after a direct discovery email
          to finalize technical requirements.
        </p>
      </div>
    </main>
  );
};

export default CalculatePage;
