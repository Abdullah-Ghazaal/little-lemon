import { useState } from "react";
import Button from "../../button/Button";
import "./form.css";

function ReservationForm() {
  const [availableTimes, setAvailableTimes] = useState([
    { time: "17:00", label: "5:00PM" },
    { time: "16:00", label: "4:00PM" },
    { time: "14:00", label: "2:00PM" },
    { time: "13:00", label: "1:00PM" },
  ]);

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
        console.log(formData);
        setFormData({
          date: "",
          time: "",
          numberOfGuests: "",
          occasion: "",
          comment: "",
        });
      }}
    >
      <label htmlFor="res-date">Choose Date:</label>
      <input
        type="date"
        id="res-date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <label htmlFor="res-time">Choose Time:</label>
      <select
        id="res-time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
      >
        {availableTimes.map((t) => (
          <option key={t.time} value={t.time}>
            {t.label}
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
        Next
      </Button>
    </form>
  );
}

export default ReservationForm;
