"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Globe,
  Layout,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import {
  parseAsArrayOf,
  parseAsString,
  parseAsStringEnum,
  useQueryState,
  useQueryStates,
} from "nuqs";
import { useMemo, useState } from "react";
import ContactMeFormDialog from "@/components/home/ContactMeDialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  CALCULATOR_LOGIC,
  CURRENCY_SYMBOLS,
  type Currency,
  EXCHANGE_RATES,
  type PricingTier,
} from "@/data/rates";
import { generateQuotePDF } from "@/lib/pdf";
import { cn } from "@/lib/utils";

interface CalculatorWizardProps {
  initialCurrency: Currency;
  className?: string;
}

type CalculatorStep = "type" | "scale" | "features" | "urgency" | "result";

const stepParser = parseAsStringEnum<CalculatorStep>([
  "type",
  "scale",
  "features",
  "urgency",
  "result",
]).withDefault("type");

const CalculatorWizard: React.FC<CalculatorWizardProps> = ({
  initialCurrency,
  className,
}) => {
  const [step, setStep] = useQueryState("step", stepParser);

  const [selections, setSelections] = useQueryStates({
    typeIds: parseAsArrayOf(parseAsString).withDefault([
      CALCULATOR_LOGIC.projectTypes[0].id,
    ]),
    scaleId: parseAsString.withDefault(CALCULATOR_LOGIC.pageScales[0].id),
    featureIds: parseAsArrayOf(parseAsString).withDefault([]),
    urgencyId: parseAsString.withDefault(CALCULATOR_LOGIC.urgency[0].id),
  });

  const currentCurrency = initialCurrency || "USD";
  const symbol = CURRENCY_SYMBOLS[currentCurrency];

  const selectedTypes = useMemo(
    () =>
      CALCULATOR_LOGIC.projectTypes.filter((t) =>
        selections.typeIds.includes(t.id),
      ),
    [selections.typeIds],
  );

  const total = useMemo(() => {
    const scale = CALCULATOR_LOGIC.pageScales.find(
      (s) => s.id === selections.scaleId,
    );
    const urgency = CALCULATOR_LOGIC.urgency.find(
      (u) => u.id === selections.urgencyId,
    );

    const currentTier: PricingTier =
      currentCurrency === "KES" ? "tier3" : "tier1";
    const tierMult = CALCULATOR_LOGIC.tierMultipliers[currentTier];

    const baseUSD = CALCULATOR_LOGIC.baseUSD;
    let subtotalUSD = 0;

    // Sum up the base price for each selected type
    for (const type of selectedTypes) {
      subtotalUSD +=
        baseUSD *
        type.multiplier *
        (scale?.multiplier || 1) *
        (urgency?.multiplier || 1) *
        tierMult;
    }

    selections.featureIds.forEach((fid) => {
      const feature =
        CALCULATOR_LOGIC.features[
          fid as keyof typeof CALCULATOR_LOGIC.features
        ];
      if (feature) {
        subtotalUSD += feature.baseUSD * tierMult;
      }
    });

    return Math.round(subtotalUSD * EXCHANGE_RATES[currentCurrency]);
  }, [selections, currentCurrency, selectedTypes]);

  const steps: CalculatorStep[] = [
    "type",
    "scale",
    "features",
    "urgency",
    "result",
  ];
  const currentStep = step ?? "type";
  const currentStepIndex = steps.indexOf(currentStep);
  const progress = (currentStepIndex / (steps.length - 1)) * 100;

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadPDF = async () => {
    try {
      setIsGeneratingPDF(true);
      const scale = CALCULATOR_LOGIC.pageScales.find(
        (s) => s.id === selections.scaleId,
      );
      const urgency = CALCULATOR_LOGIC.urgency.find(
        (u) => u.id === selections.urgencyId,
      );

      const tierKey: PricingTier =
        currentCurrency === "KES" ? "tier3" : "tier1";
      const tierMult = CALCULATOR_LOGIC.tierMultipliers[tierKey];
      const conv = EXCHANGE_RATES[currentCurrency];

      const breakdown: { label: string; price: string }[] = [];

      // Calculate each type's contribution
      for (const type of selectedTypes) {
        const typePrice = Math.round(
          CALCULATOR_LOGIC.baseUSD *
            type.multiplier *
            (scale?.multiplier || 1) *
            (urgency?.multiplier || 1) *
            tierMult *
            conv,
        );
        breakdown.push({
          label: `${type.label} Development (Base + Scale/Urgency)`,
          price: `${symbol}${typePrice.toLocaleString()}`,
        });
      }

      // Add features
      for (const fid of selections.featureIds) {
        const feature =
          CALCULATOR_LOGIC.features[
            fid as keyof typeof CALCULATOR_LOGIC.features
          ];
        if (feature) {
          const fPrice = Math.round(feature.baseUSD * tierMult * conv);
          breakdown.push({
            label: `Feature: ${feature.label}`,
            price: `${symbol}${fPrice.toLocaleString()}`,
          });
        }
      }

      await generateQuotePDF({
        title: "Professional Quotation",
        categories: selectedTypes.map((t) => t.label),
        scale: scale?.label || "N/A",
        urgency: urgency?.label || "N/A",
        features: selections.featureIds.map(
          (fid) =>
            CALCULATOR_LOGIC.features[
              fid as keyof typeof CALCULATOR_LOGIC.features
            ]?.label || fid,
        ),
        breakdown,
        total: {
          symbol,
          value: total.toLocaleString(),
        },
        disclaimer:
          "This is a formal guideline estimate based on 2026 technical benchmarks. Final invoice may vary +/- 10% after detailed requirements phase.",
        contact: {
          email: "daniel.work@gmail.com",
          website: "karume.vercel.app",
        },
      });
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const nextStep = async () => {
    const nextIdx = currentStepIndex + 1;
    if (nextIdx < steps.length) await setStep(steps[nextIdx]);
  };

  const prevStep = async () => {
    const prevIdx = currentStepIndex - 1;
    if (prevIdx >= 0) await setStep(steps[prevIdx]);
  };

  const toggleType = async (id: string) => {
    await setSelections((prev) => {
      const newTypeIds = prev.typeIds.includes(id)
        ? prev.typeIds.filter((t) => t !== id)
        : [...prev.typeIds, id];
      // Ensure at least one type is always selected
      return { typeIds: newTypeIds.length > 0 ? newTypeIds : prev.typeIds };
    });
  };

  const toggleFeature = async (id: string) => {
    await setSelections((prev) => ({
      featureIds: prev.featureIds.includes(id)
        ? prev.featureIds.filter((f) => f !== id)
        : [...prev.featureIds, id],
    }));
  };

  return (
    <Card
      className={cn(
        "max-w-3xl mx-auto border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden",
        className,
      )}
    >
      <CardHeader className="space-y-4 border-b border-border/50 bg-secondary/10 pb-6">
        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
          <span>
            {step === "result"
              ? "Final Quote"
              : `Step ${currentStepIndex + 1} of 4`}
          </span>
          <span className="text-primary">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-1 bg-secondary" />
        <CardTitle className="text-3xl font-black tracking-tight text-foreground">
          {step === "type" && "Choose Project Category"}
          {step === "scale" && "Estimate Project Scale"}
          {step === "features" && "Key Features & Integrations"}
          {step === "urgency" && "Project Timeline"}
          {step === "result" && "Estimated Investment"}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-8">
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === "type" && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {CALCULATOR_LOGIC.projectTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => toggleType(type.id)}
                      className={cn(
                        "flex flex-col items-center p-6 rounded-2xl border-2 transition-all group relative",
                        selections.typeIds.includes(type.id)
                          ? "border-primary bg-primary/5 shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]"
                          : "border-border/30 bg-transparent hover:border-primary/50",
                      )}
                    >
                      <div
                        className={cn(
                          "absolute top-4 right-4 size-5 rounded-full border-2 flex items-center justify-center transition-colors",
                          selections.typeIds.includes(type.id)
                            ? "bg-primary border-primary"
                            : "border-border/50",
                        )}
                      >
                        {selections.typeIds.includes(type.id) && (
                          <Check className="size-3 text-primary-foreground" />
                        )}
                      </div>
                      {type.id === "website" && (
                        <Globe className="size-10 mb-4 group-hover:scale-110 transition-transform" />
                      )}
                      {type.id === "webapp" && (
                        <Layout className="size-10 mb-4 group-hover:scale-110 transition-transform" />
                      )}
                      {type.id === "mobile" && (
                        <Smartphone className="size-10 mb-4 group-hover:scale-110 transition-transform" />
                      )}
                      <span className="font-bold text-lg">{type.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {step === "scale" && (
                <div className="space-y-4">
                  {CALCULATOR_LOGIC.pageScales.map((scale) => (
                    <button
                      key={scale.id}
                      type="button"
                      onClick={() => {
                        setSelections((p) => ({ ...p, scaleId: scale.id }));
                        nextStep();
                      }}
                      className={cn(
                        "flex justify-between items-center w-full p-6 h-20 rounded-2xl border-2 transition-all",
                        selections.scaleId === scale.id
                          ? "border-primary bg-primary/5"
                          : "border-border/30 bg-transparent hover:border-primary/20",
                      )}
                    >
                      <span className="font-bold text-xl">{scale.label}</span>
                      <ChevronRightIcon className="size-6 text-primary" />
                    </button>
                  ))}
                </div>
              )}

              {step === "features" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(CALCULATOR_LOGIC.features).map(
                      ([id, feature]) => (
                        <button
                          key={id}
                          type="button"
                          onClick={() => toggleFeature(id)}
                          className={cn(
                            "flex flex-col items-start p-6 rounded-2xl border-2 transition-all text-left",
                            selections.featureIds.includes(id)
                              ? "border-primary bg-primary/5"
                              : "border-border/30 bg-transparent hover:border-primary/20",
                          )}
                        >
                          <div className="flex justify-between w-full mb-4">
                            {id === "whatsapp" && (
                              <ShieldCheck className="size-6" />
                            )}
                            {id === "payments" && <Zap className="size-6" />}
                            {id === "login" && (
                              <ShieldCheck className="size-6" />
                            )}
                            {id === "admin" && <Layout className="size-6" />}
                            <div
                              className={cn(
                                "size-6 rounded-full border-2",
                                selections.featureIds.includes(id)
                                  ? "bg-primary border-primary"
                                  : "border-border",
                              )}
                            />
                          </div>
                          <span className="font-bold">{feature.label}</span>
                          <span className="text-xs text-muted-foreground mt-2">
                            +{symbol}
                            {Math.round(
                              feature.baseUSD *
                                CALCULATOR_LOGIC.tierMultipliers[
                                  currentCurrency === "KES" ? "tier3" : "tier1"
                                ] *
                                EXCHANGE_RATES[currentCurrency],
                            ).toLocaleString()}
                          </span>
                        </button>
                      ),
                    )}
                  </div>
                </div>
              )}

              {step === "urgency" && (
                <div className="space-y-4">
                  {CALCULATOR_LOGIC.urgency.map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => {
                        setSelections((p) => ({ ...p, urgencyId: u.id }));
                        nextStep();
                      }}
                      className={cn(
                        "flex justify-between items-center w-full p-8 rounded-2xl border-2 transition-all",
                        selections.urgencyId === u.id
                          ? "border-primary bg-primary/5"
                          : "border-border/30 bg-transparent hover:border-border",
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <Clock
                          className={cn(
                            "size-8",
                            u.id === "express" && "text-primary animate-pulse",
                          )}
                        />
                        <span className="font-bold text-xl">{u.label}</span>
                      </div>
                      {u.multiplier > 1 && (
                        <Badge className="bg-primary/20 text-primary border-primary/20">
                          +50% Express Fee
                        </Badge>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {step === "result" && (
                <div className="text-center space-y-10 py-6">
                  <div className="space-y-2">
                    <p className="text-muted-foreground font-medium uppercase tracking-[0.2em] text-sm">
                      Estimated Total
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-muted-foreground">
                        {symbol}
                      </span>
                      <span className="text-8xl font-black tracking-tighter text-foreground drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] leading-none">
                        {total.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      Inclusive of all selected features & tiered regional
                      adjustments.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <ContactMeFormDialog
                      defaultMessage={`Hi Daniel,\n\nI just used your project estimator for the following project categories: ${selectedTypes.map((t) => t.label).join(", ")}.\n\nEstimate Details:\n- Types: ${selectedTypes.map((t) => t.label).join(", ")}\n- Scale: ${CALCULATOR_LOGIC.pageScales.find((s) => s.id === selections.scaleId)?.label}\n- Urgency: ${CALCULATOR_LOGIC.urgency.find((u) => u.id === selections.urgencyId)?.label}\n- Features: ${selections.featureIds.length > 0 ? selections.featureIds.map((fid) => CALCULATOR_LOGIC.features[fid as keyof typeof CALCULATOR_LOGIC.features]?.label).join(", ") : "None specified"}\n\nEstimated Total: ${symbol}${total.toLocaleString()}\n\nLooking forward to speaking with you!`}
                      trigger={
                        <Button
                          size="lg"
                          className="h-14 px-10 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl"
                        >
                          Make an appointment
                        </Button>
                      }
                    />
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-14 px-10 text-lg font-bold border-border bg-secondary hover:bg-secondary/80 rounded-2xl gap-2"
                      onClick={handleDownloadPDF}
                      disabled={isGeneratingPDF}
                    >
                      {isGeneratingPDF ? (
                        <>
                          <RefreshCw className="size-5 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        "Download Quote (PDF)"
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </CardContent>

      <div className="px-8 pb-8 flex justify-between items-center">
        {step !== "type" && step !== "result" && (
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
            onClick={prevStep}
          >
            <ArrowLeft className="mr-2 size-4" /> Back
          </Button>
        )}
        <div className="flex-1" />
        {step !== "result" && (
          <Button
            className="bg-primary/10 text-primary hover:bg-primary/20"
            onClick={nextStep}
          >
            {step === "type" ||
            (selections.featureIds.length > 0 && step === "features")
              ? "Next Step"
              : `Skip ${step === "features" ? "Features" : step === "scale" ? "Scale" : "Urgency"}`}{" "}
            <ArrowRight className="ml-2 size-4" />
          </Button>
        )}
        {step === "result" && (
          <Button
            variant="ghost"
            size="sm"
            onClick={async () => {
              await setStep("type");
              await setSelections({
                typeIds: ["website"],
                scaleId: "small",
                featureIds: [],
                urgencyId: "standard",
              });
            }}
          >
            <RefreshCw className="mr-2 size-4" /> Restart
          </Button>
        )}
      </div>

      {step !== "result" && (
        <div className="bg-secondary/20 p-4 flex justify-center items-center gap-3 border-t border-border/50">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            Running Estimate:
          </span>
          <span className="text-lg font-black">
            {symbol}
            {total.toLocaleString()}
          </span>
        </div>
      )}
    </Card>
  );
};

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <title>Chevron Right</title>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default CalculatorWizard;
