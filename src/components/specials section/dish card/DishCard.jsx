import "./dishCard.css";
import deliveryIcon from "../../../assets/images/delivery icon.png";

function DishCard({ cardTitle, cardText, price, cardImg }) {
  return (
    <article className="dish-card">
      <header>
        <img src={cardImg} className="card-img" />
      </header>
      <div className="dish-card-body V-flex">
        <div className="H-flex flex-space-between">
          <h3>{cardTitle}</h3>
          <span>{price}</span>
        </div>
        <p>{cardText}</p>
        <div className="H-flex">
          <h5>Order a delivery </h5>
          <img src={deliveryIcon} alt="delivery icon" className="icon" />
        </div>
      </div>
    </article>
  );
}

export default DishCard;
