import HeroSection from "../../components/hero section/HeroSection";
import SpecialsSection from "../../components/specials section/SpecialsSection";
import TestimonialsSection from "../../components/testimonials section/TestimonialsSection";

function Homepage() {
  return (
    <>
      <HeroSection />
      <SpecialsSection />
      <TestimonialsSection />
      <section id="aboutSection">About section</section>
    </>
  );
}

export default Homepage;
