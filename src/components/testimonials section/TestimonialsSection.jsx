import TestimonialCard from "./testimonial card/TestimonialCard";
import "./testimonials.css";
import john from "../../assets/images/John.png";
import martin from "../../assets/images/Martin.png";
import jack from "../../assets/images/jack 3.jpg";

function TestimonialsSection() {
  const testimonials = [
    {
      stars: 5,
      image: john,
      name: "John",
      reviewText:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem accusantium",
    },
    {
      stars: 4.5,
      image: martin,
      name: "Martin",
      reviewText:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem accusantium",
    },
    {
      stars: 4,
      image: jack,
      name: "Jack",
      reviewText:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem accusantium",
    },
  ];

  return (
    <section className="testimonials-section section-max-width">
      <h2>Testimonials</h2>
      <div className="testimonials-cards three-column-grid mobile-grid">
        {testimonials.map((t) => (
          <TestimonialCard
            key={t.name}
            stars={t.stars}
            image={t.image}
            name={t.name}
            reviewText={t.reviewText}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
