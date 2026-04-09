import {
  Bio,
  BlogsList,
  CertificationsGrid,
  ExperienceTimeline,
  HeroSection,
  Inspos,
  ProjectsGrid,
  ReachOut,
  RecommendationLetters,
  TechnologiesMarquee,
} from "@/components";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <div>
        <HeroSection />
        <Bio />
      </div>
      <TechnologiesMarquee />
      <CertificationsGrid />
      <ExperienceTimeline />
      <RecommendationLetters />
      <ProjectsGrid />
      <BlogsList />
      <Inspos />
      <ReachOut />
    </div>
  );
};

export default HomePage;
