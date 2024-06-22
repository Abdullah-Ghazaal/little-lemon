import React from "react";
import ReservationForm from "./reservation form/ReservationForm";
import reserveImg from "../../assets/images/reserveImg.jpg";
import "./reserve.css";

function ReservationSection() {
  return (
    <section className="reservation-section">
      <h1>Reserve a Table</h1>
      <div className="section-content section-max-width two-column-grid mobile-grid">
        <img src={reserveImg} alt="An image for reserving a table" />
        <ReservationForm />
      </div>
    </section>
  );
}

export default ReservationSection;
