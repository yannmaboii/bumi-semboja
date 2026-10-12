import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import SignatureMenuSection from "@/components/sections/SignatureMenuSection";
import FullMenuSection from "@/components/sections/FullMenuSection";
import GallerySection from "@/components/sections/GallerySection";
import EventSection from "@/components/sections/EventSection";
import OrderOnlineSection from "@/components/sections/OrderOnlineSection";
import VisitSection from "@/components/sections/VisitSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StorySection />
        <SignatureMenuSection />
        <FullMenuSection />
        <GallerySection />
        <EventSection />
        <OrderOnlineSection />
        <VisitSection />
      </main>
      <Footer />
    </>
  );
}
