import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import OfferSection from "@/components/sections/OfferSection";
import ProductSection from "@/components/sections/ProductSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <AboutSection />
      <OfferSection />
      <TestimonialSection />
    </>
  );
}
