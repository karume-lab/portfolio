import { BlogListItem } from "@/components/blogs/BlogListItem";
import BlogsList from "@/components/blogs/BlogsList";
import { BlogsProvider } from "@/components/blogs/BlogsProvider";
import TableOfContentsCard from "@/components/blogs/TableOfContentsCard";
import BackToTopButton from "@/components/core/BackToTopButton";
import ChangeMetadataTitleOnBlur from "@/components/core/ChangeMetadataTitleOnBlur";
import Footer from "@/components/core/Footer";
import HeroSection from "@/components/core/HeroSection";
import NavigationPill from "@/components/core/NavigationPill";
import ScrollProgress from "@/components/core/ScrollProgress";
import SectionHeader from "@/components/core/SectionHeader";
import ViewResumeButton from "@/components/core/ViewResumeButton";
import Bio from "@/components/home/Bio";
import CertificationsGrid from "@/components/home/CertificationsGrid";
import ContactMeFormDialog from "@/components/home/ContactMeDialog";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import Inspos from "@/components/home/Inspos";
import RatesTeaser from "@/components/home/RatesTeaser";
import ReachOut from "@/components/home/ReachOut";
import RecommendationLetters from "@/components/home/RecommendationLetters";
import { SubscribeForm } from "@/components/home/SubscribeForm";
import TechnologiesMarquee from "@/components/home/TechnologiesMarquee";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export {
  // core
  ChangeMetadataTitleOnBlur,
  NavigationPill,
  HeroSection,
  SectionHeader,
  BackToTopButton,
  ScrollProgress,
  ViewResumeButton,
  Footer,
  BlogsProvider,
  // home
  Bio,
  CertificationsGrid,
  TechnologiesMarquee,
  ExperienceTimeline,
  ContactMeFormDialog,
  ReachOut,
  RecommendationLetters,
  Inspos,
  RatesTeaser,
  SubscribeForm,
  // projects
  ProjectsGrid,
  // blogs
  BlogsList,
  BlogListItem,
  TableOfContentsCard,
};
