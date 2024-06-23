import ReservationForm from "./reservation form/ReservationForm";
import reserveImg from "../../assets/images/reserveImg.jpg";
import "./reserve.css";
import { useReducer } from "react";
import dateReducer from "../../reducers/dateReducer";
import useGetAvailableTimes from "../../hooks/useGetAvailableTimes";

function ReservationSection() {
  const initialTimes = new Date();

  const [selectedDate, dispatch] = useReducer(dateReducer, initialTimes);

  const availableTimes = useGetAvailableTimes(selectedDate);

  const updateTimes = (selectedDate) => {
    dispatch({
      type: "UPDATE_TIMES",
      payload: selectedDate,
    });
  };

  return (
    <section className="reservation-section">
      <h1>Reserve a Table</h1>
      <div className="section-content section-max-width two-column-grid mobile-grid">
        <img src={reserveImg} alt="An image for reserving a table" />
        <ReservationForm
          availableTimes={availableTimes}
          updateAvailableTimes={updateTimes}
        />
      </div>
    </section>
  );
}

export default ReservationSection;
