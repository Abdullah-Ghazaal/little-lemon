import Button from "../../button/Button";
import "./form.css";
import { submitAPI } from "../../../mock API/API-mock";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

function ReservationForm({ availableTimes, updateAvailableTimes }) {
  const navigate = useNavigate();

  const initialValues = {
    date: "",
    time: "",
    numberOfGuests: "",
    occasion: "",
    comment: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.date) {
      errors.date = "Date is required";
    }

    if (!values.time) {
      errors.time = "Time is required";
    }

    if (!values.numberOfGuests) {
      errors.numberOfGuests = "Number of guests is required";
    } else if (parseInt(values.numberOfGuests, 10) < 1) {
      errors.numberOfGuests = "Number of guests must be at least 1";
    }

    if (!values.occasion) {
      errors.occasion = "Please select an occasion";
    }

    return errors;
  };

  const { values, handleSubmit, handleChange, touched, errors, isSubmitting } =
    useFormik({
      initialValues,
      validate,
      onSubmit: async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const sumbitted = submitAPI(values);

        if (sumbitted) {
          navigate("/reservation-confirmed");
        }
      },
    });

  return (
    <form className="reservation-form V-flex" onSubmit={handleSubmit}>
      <div className="H-flex flex-space-between">
        <label htmlFor="res-date">
          Choose Date: <span className="star">*</span>
        </label>
        {touched.date && errors.date && <p className="error">{errors.date}</p>}
      </div>
      <input
        type="date"
        name="date"
        id="res-date"
        value={values.date}
        onChange={(e) => {
          handleChange(e);
          updateAvailableTimes(e.target.value);
        }}
      />
      <div className="H-flex flex-space-between">
        <label htmlFor="res-time">
          Choose Time: <span className="star">*</span>
        </label>
        {touched.time && errors.time && <p className="error">{errors.time}</p>}
      </div>
      <select
        id="res-time"
        name="time"
        value={values.time}
        onChange={handleChange}
      >
        <option value=""></option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <div className="H-flex flex-space-between">
        <label htmlFor="number of guests">
          Number Of Guests: <span className="star">*</span>
        </label>
        {touched.numberOfGuests && errors.numberOfGuests && (
          <p className="error">{errors.numberOfGuests}</p>
        )}
      </div>
      <input
        type="number"
        id="number of guests"
        min="1"
        name="numberOfGuests"
        value={values.numberOfGuests}
        onChange={handleChange}
      />
      <div className="H-flex flex-space-between">
        <label htmlFor="occasion">
          Select Ocaasion: <span className="star">*</span>
        </label>
        {touched.occasion && errors.occasion && (
          <p className="error">{errors.occasion}</p>
        )}
      </div>
      <select
        id="occasion"
        name="occasion"
        value={values.occasion}
        onChange={handleChange}
      >
        <option value=""></option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="comment">Comment:</label>
      <textarea
        id="comment"
        name="comment"
        value={values.comment}
        onChange={handleChange}
      ></textarea>
      <Button
        btnColor={"primary-two-color"}
        btnType="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Reserving ..." : "Reserve Now"}
      </Button>
    </form>
  );
}

export default ReservationForm;
