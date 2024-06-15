import "./about.css";
import owners1 from "../../assets/images/owners1.jpg";
import owners2 from "../../assets/images/ownners2.jpg";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container two-column-grid section-max-width">
        <div className="info-container V-flex">
          <h2>About Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            blanditiis sit? Odio ab laborum maxime odit sed ratione, atque
            fugiat delectus voluptate asperiores unde alias maiores error est,
            necessitatibus beatae natus fuga expedita dolorum similique
            voluptates mollitia. Unde iste blanditiis perferendis.
          </p>
        </div>
        <img
          src={owners1}
          alt="restaurant's owners image"
          className="owners-first-img"
        />
        <img
          src={owners2}
          alt="restaurant's owners image"
          className="owners-second-img"
        />
      </div>
    </section>
  );
}

export default AboutSection;
