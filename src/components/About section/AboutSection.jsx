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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            perspiciatis veritatis itaque, facere autem laudantium vero. Fugiat
            fugit odit similique facere rem dicta eligendi officia mollitia.
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
