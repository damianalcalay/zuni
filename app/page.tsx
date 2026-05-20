import { AboutSection } from "./components/home/AboutSection";
import { BookFairsSection } from "./components/home/BookFairsSection";
import { BookSection } from "./components/home/BookSection";
import { HeroSection } from "./components/home/HeroSection";
import { SchoolActivitiesSection } from "./components/home/SchoolActivitiesSection";
import { TalksSection } from "./components/home/TalksSection";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <BookSection />
      <SchoolActivitiesSection />
      <TalksSection />
      <BookFairsSection />
      <Footer />
    </main>
  );
}
