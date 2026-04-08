"use client";

import { Check } from "lucide-react";
import ContactMeFormDialog from "@/components/home/ContactMeDialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CURRENCY_SYMBOLS,
  type Currency,
  type PricingPackage,
  type PricingTier,
} from "@/data/rates";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  pkg: PricingPackage;
  currentTier: PricingTier;
  currentCurrency: Currency;
  className?: string;
  hideButton?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  pkg,
  currentTier,
  currentCurrency,
  className,
  hideButton = false,
}) => {
  const price = pkg.basePrice[currentTier][currentCurrency];
  const symbol = CURRENCY_SYMBOLS[currentCurrency];
  const formattedPrice = new Intl.NumberFormat("en-US").format(price);

  return (
    <Card
      className={cn(
        "flex flex-col h-full duration-500 border-border/50",
        pkg.isRecommended
          ? "bg-foreground text-background border-foreground shadow-2xl scale-105"
          : "bg-card/40",
        className,
      )}
    >
      <CardHeader>
        <CardTitle className="text-xl font-black tracking-tight">
          {pkg.name}
        </CardTitle>
        <CardDescription
          className={cn(
            "font-medium",
            pkg.isRecommended ? "text-background/70" : "text-muted-foreground",
          )}
        >
          {pkg.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-8">
        <div className="flex items-baseline gap-1">
          <span
            className={cn(
              "text-2xl font-bold",
              pkg.isRecommended
                ? "text-background/60"
                : "text-muted-foreground",
            )}
          >
            {symbol}
          </span>
          <span className="text-6xl font-black tracking-tighter">
            {formattedPrice}
          </span>
        </div>

        <div className="space-y-4">
          <p
            className={cn(
              "text-xs font-black uppercase tracking-wider",
              pkg.isRecommended ? "text-background/50" : "text-primary/70",
            )}
          >
            Key Deliverables:
          </p>
          <ul className="space-y-4">
            {pkg.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 group text-sm font-medium"
              >
                <Check
                  className={cn(
                    "size-4 mt-0.5 shrink-0",
                    pkg.isRecommended ? "text-background" : "text-primary",
                  )}
                />
                <span className={pkg.isRecommended ? "text-background/90" : ""}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      {!hideButton && (
        <CardFooter>
          <ContactMeFormDialog
            defaultMessage={`Hi Daniel,\n\nI'm interested in the "${pkg.name}" package (${symbol}${formattedPrice} starting price).\n\nIncluded Features:\n${pkg.features.map((f) => `- ${f}`).join("\n")}\n\nPlease let me know when we can discuss this further.`}
            trigger={
              <Button
                className={cn(
                  "w-full font-black transition-all",
                  pkg.isRecommended
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border/50",
                )}
              >
                Get Started
              </Button>
            }
          />
        </CardFooter>
      )}
    </Card>
  );
};

export default PricingCard;
