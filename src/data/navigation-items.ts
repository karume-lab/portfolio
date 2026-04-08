import {
  Award,
  Briefcase,
  Code,
  Home,
  Library,
  type LucideIcon,
  Mail,
  ReceiptText,
  Stars,
  ThumbsUp,
  User,
} from "lucide-react";
import type { Route } from "next";

export interface NavigationItem {
  href: Route;
  label: string;
  icon: LucideIcon;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/#bio", label: "Bio", icon: User },
  { href: "/#certifications", label: "Certifications", icon: Award },
  { href: "/#experience", label: "Experience", icon: Briefcase },
  { href: "/#recommendations", label: "Recommendations", icon: ThumbsUp },
  { href: "/#projects", label: "Projects", icon: Code },
  { href: "/#rates", label: "Rates", icon: ReceiptText },
  { href: "/#reach-out", label: "Reach Out", icon: Mail },
  { href: "/#inspos", label: "Inspos", icon: Stars },
  { href: "/#blogs", label: "Blogs", icon: Library },
];
