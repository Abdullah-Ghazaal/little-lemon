import { render, screen } from "@testing-library/react";
import ReservationSection from "../components/reservation section/ReservationSection";

test("Renders the reservation section's heading", () => {
  render(<ReservationSection />);

  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});
