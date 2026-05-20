import { BookFairsSection } from "./components/home/BookFairsSection";
import { BookSection } from "./components/home/BookSection";
import { FloralBackdrop } from "./components/home/FloralBackdrop";
import { HeroSection } from "./components/home/HeroSection";
import { HomeDeliverySection } from "./components/home/HomeDeliverySection";
import { SchoolActivitiesSection } from "./components/home/SchoolActivitiesSection";
import { TalksSection } from "./components/home/TalksSection";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,var(--pink-300)_0%,var(--pink-200)_24%,var(--pink-100)_52%,var(--pink-50)_82%,#ffffff_100%)] text-black">
      <FloralBackdrop />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <BookSection />
        <SchoolActivitiesSection />
        <TalksSection />
        <BookFairsSection />
        <HomeDeliverySection />
        <Footer />
      </div>
    </main>
  );
}
