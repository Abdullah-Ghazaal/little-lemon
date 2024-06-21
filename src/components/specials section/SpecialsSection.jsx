import "./specials.css";
import Button from "../button/Button";
import DishCard from "./dish card/DishCard";
import greekSalad from "../../assets/images/greek salad.jpg";
import bruchetta from "../../assets/images/bruchetta.jpg";
import lemonDessert from "../../assets/images/lemon dessert.jpg";

function SpecialsSection() {
  const specials = [
    {
      image: greekSalad,
      title: "Greek salad",
      price: "$ 12.99",
      text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      image: bruchetta,
      title: "Bruchetta",
      price: "$ 6.99",
      text: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      image: lemonDessert,
      title: "Lemon Dessert",
      price: "$ 4.00",
      text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <section className="specials-section section-max-width">
      <div className="H-flex flex-space-between">
        <h2>This Week's Specials</h2>
        <Button btnColor={"primary-two-color"}>online menu</Button>
      </div>
      <div className="specials-cards three-column-grid mobile-grid">
        {specials.map((dish) => (
          <DishCard
            key={dish.title}
            cardTitle={dish.title}
            price={dish.price}
            cardText={dish.text}
            cardImg={dish.image}
          />
        ))}
      </div>
    </section>
  );
}

export default SpecialsSection;
