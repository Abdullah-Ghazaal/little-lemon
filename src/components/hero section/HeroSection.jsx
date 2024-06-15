import "./hero.css";
import Button from "../button/Button";
import heroImg from "../../assets/images/hero-img.jpg";

function HeroSection() {
  return (
    <section className="hero-section green-bg">
      <div className="two-column-grid mobile-grid section-max-width">
        <div className="info">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p className="hero-text">
            we are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <Button btnColor={"primary-two-color"}>reserve a Table</Button>
        </div>
        <img src={heroImg} alt="an image of a random dish" />
      </div>
    </section>
  );
}

export default HeroSection;
