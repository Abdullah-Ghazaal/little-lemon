import "./testimonialCard.css";
import { FaStar } from "react-icons/fa6";

function TestimonialCard({ stars, image, name, reviewText }) {
  return (
    <article className="testimonial-card">
      <div className="rating H-flex">
        <span className="rating-number">{stars}</span>
        <FaStar className="star" size={"22px"} color="yellow" />{" "}
      </div>
      <div className="reviewer H-flex">
        <img src={image} alt="reviewer image of the testimonial card" />{" "}
        <h4 className="card-name">{name}</h4>
      </div>
      <p className="card-text">{reviewText}</p>
    </article>
  );
}

export default TestimonialCard;
