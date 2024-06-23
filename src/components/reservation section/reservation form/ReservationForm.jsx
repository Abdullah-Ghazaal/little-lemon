import { useState } from "react";
import Button from "../../button/Button";
import "./form.css";
import { submitAPI } from "../../../mock API/API-mock";

function ReservationForm({ availableTimes, updateAvailableTimes }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    numberOfGuests: "",
    occasion: "",
    comment: "",
  });

  return (
    <form
      className="reservation-form V-flex"
      onSubmit={(e) => {
        e.preventDefault();

        const sumbitted = submitAPI(formData);

        if (sumbitted) {
          setFormData({
            date: "",
            time: "",
            numberOfGuests: "",
            occasion: "",
            comment: "",
          });
        }
      }}
    >
      <label htmlFor="res-date">Choose Date:</label>
      <input
        type="date"
        id="res-date"
        value={formData.date}
        onChange={(e) => {
          setFormData({ ...formData, date: e.target.value });
          updateAvailableTimes(e.target.value);
        }}
      />
      <label htmlFor="res-time">Choose Time:</label>
      <select
        id="res-time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <label htmlFor="number of guests">Number Of Guests:</label>
      <input
        type="number"
        id="number of guests"
        min="1"
        value={formData.numberOfGuests}
        onChange={(e) =>
          setFormData({ ...formData, numberOfGuests: e.target.value })
        }
      />
      <label htmlFor="occasion">Select Ocaasion:</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
      >
        <option value="" disabled></option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <label htmlFor="comment">Comment:</label>
      <textarea
        id="comment"
        value={formData.comment}
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
      ></textarea>
      <Button btnColor={"primary-two-color"} btnType="submit">
        Reserve Now
      </Button>
    </form>
  );
}

export default ReservationForm;
