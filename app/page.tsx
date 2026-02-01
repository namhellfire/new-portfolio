import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero";
import { Navigation } from "@/components/navigation";

// Lazy load below-fold sections to reduce initial JavaScript bundle
const AboutSection = dynamic(
  () =>
    import("@/components/sections/about").then((m) => ({
      default: m.AboutSection,
    })),
  { ssr: true },
);

const SkillsSection = dynamic(
  () =>
    import("@/components/sections/skills").then((m) => ({
      default: m.SkillsSection,
    })),
  { ssr: true },
);

const ExperienceSection = dynamic(
  () =>
    import("@/components/sections/experience").then((m) => ({
      default: m.ExperienceSection,
    })),
  { ssr: true },
);

const EducationSection = dynamic(
  () =>
    import("@/components/sections/education").then((m) => ({
      default: m.EducationSection,
    })),
  { ssr: true },
);

const ContactSection = dynamic(
  () =>
    import("@/components/sections/contact").then((m) => ({
      default: m.ContactSection,
    })),
  { ssr: true },
);

// Lazy load AnimatedBackground without SSR (client-only animations)
const AnimatedBackground = dynamic(
  () =>
    import("@/components/ui/animated-background").then((m) => ({
      default: m.AnimatedBackground,
    })),
  { ssr: false },
);

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  );
}
