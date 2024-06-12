import HeroSection from "../../components/hero section/HeroSection";
import SpecialsSection from "../../components/specials section/SpecialsSection";

function Homepage() {
  return (
    <>
      <HeroSection />
      <SpecialsSection />
      <section id="testimonialsSection">Testimonials section</section>
      <section id="aboutSection">About section</section>
    </>
  );
}

export default Homepage;
