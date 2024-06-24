import { render, fireEvent, waitFor } from "@testing-library/react";
import ReservationForm from "../components/reservation section/reservation form/ReservationForm";

describe("ReservationForm", () => {
  it("validates required fields", async () => {
    const mockAvailableTimes = ["12:00", "12:30"];
    const { getByText, getByLabelText } = render(
      <ReservationForm availableTimes={mockAvailableTimes} />
    );

    fireEvent.click(getByText("Reserve Now"));

    await waitFor(() => {
      expect(getByText("Date is required")).toBeInTheDocument();
      expect(getByText("Time is required")).toBeInTheDocument();
      expect(getByText("Number of guests is required")).toBeInTheDocument();
      expect(getByText("Please select an occasion")).toBeInTheDocument();
    });
  });
});
