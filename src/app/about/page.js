import HeroSection from "../../components/about/HeroSection";
import AboutValues from "../../components/about/AboutValues";
import AboutTimeline from "../../components/about/AboutTimeline";
import HobbiesSection from "../../components/about/HobbiesSection";

export const metadata = {
  title: "About Me | Sanskriti Portfolio",
  description:
    "Learn about my journey, values, and what drives me as a developer.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <HeroSection />
      <AboutValues />
      <AboutTimeline />
      <HobbiesSection />
    </main>
  );
}
