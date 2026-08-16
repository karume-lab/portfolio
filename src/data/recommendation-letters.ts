import type { Route } from "next";

export interface RecommendationLetter {
  id: string;
  company: string;
  href: Route;
  logo: string;
}

export const recommendationLetters: RecommendationLetter[] = [
  {
    id: crypto.randomUUID(),
    company: "Rastuc Technologies Limited",
    href: "/recommendation-letters/rastuc-technologies.pdf" as Route,
    logo: "/recommendation-letters/rastuc-technologies/logo.png",
  },
  {
    id: crypto.randomUUID(),
    company: "Hailerz Entertainment",
    href: "/recommendation-letters/hailerz-entertainment.pdf" as Route,
    logo: "/recommendation-letters/hailerz-entertainment/logo.png",
  },
  {
    id: crypto.randomUUID(),
    company: "Women Reform Nigeria",
    href: "/recommendation-letters/women-reform.pdf" as Route,
    logo: "/recommendation-letters/women-reform/logo.png",
  },
  {
    id: crypto.randomUUID(),
    company: "Vaunt",
    href: "/recommendation-letters/vaunt.pdf" as Route,
    logo: "/recommendation-letters/vaunt/logo.png",
  },
  {
    id: crypto.randomUUID(),
    company: "Apetech",
    href: "/recommendation-letters/apetech.pdf" as Route,
    logo: "/recommendation-letters/apetech/logo.png",
  },
];
