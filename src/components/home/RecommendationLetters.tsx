import { ExternalLink } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/core/SectionHeader";
import { Button } from "@/components/ui/button";
import { recommendationLetters } from "@/data/recommendation-letters";

const RecommendationLetters = () => {
  return (
    <section
      id="recommendations"
      className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12"
    >
      <SectionHeader title="WHERE ARE THE RECOMMENDATION LETTERS?" />
      <div className="flex flex-wrap justify-start gap-4 mt-6">
        {recommendationLetters.map((letter) => (
          <div key={letter.id} className="w-full md:w-fit">
            <Button variant="outline" className="w-full" asChild>
              <Link
                href={letter.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {letter.company}
                <ExternalLink className="size-4" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendationLetters;
