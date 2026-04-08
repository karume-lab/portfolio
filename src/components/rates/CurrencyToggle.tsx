"use client";

import { Check, ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Currency } from "@/data/rates";
import { cn } from "@/lib/utils";

interface CurrencyToggleProps {
  currentCurrency: Currency;
  className?: string;
}

const CURRENCIES: { label: string; value: Currency; flag: string }[] = [
  { label: "Kenya Shilling", value: "KES", flag: "🇰🇪" },
  { label: "US Dollar", value: "USD", flag: "🇺🇸" },
  { label: "Euro", value: "EUR", flag: "🇪🇺" },
];

export const CurrencyToggle = ({
  currentCurrency,
  className,
}: CurrencyToggleProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleCurrencyChange = (currency: Currency) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("currency", currency);

    startTransition(() => {
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  const selectedItem =
    CURRENCIES.find((c) => c.value === currentCurrency) || CURRENCIES[0];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-9 gap-2 border-border/50 bg-background/50 backdrop-blur-md"
            disabled={isPending}
          >
            <span className="text-base leading-none">{selectedItem.flag}</span>
            <span className="font-medium">{selectedItem.value}</span>
            <ChevronDown className="size-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 bg-card border-border">
          {CURRENCIES.map((c) => (
            <DropdownMenuItem
              key={c.value}
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleCurrencyChange(c.value)}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{c.flag}</span>
                <span>{c.label}</span>
              </div>
              {currentCurrency === c.value && <Check className="size-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
