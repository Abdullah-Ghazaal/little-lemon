import AboutSection from "../components/About section/AboutSection";
import HeroSection from "../components/hero section/HeroSection";
import SpecialsSection from "../components/specials section/SpecialsSection";
import TestimonialsSection from "../components/testimonials section/TestimonialsSection";

function Homepage() {
  return (
    <>
      <HeroSection />
      <SpecialsSection />
      <TestimonialsSection />
      <AboutSection />
    </>
  );
}

export default Homepage;
