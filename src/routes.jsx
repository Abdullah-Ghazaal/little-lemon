import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/Homepage";
import ReservationsPage from "./pages/ReservationsPage";
import ErrorPage from "./pages/error page/ErrorPage";
import ResConfirmationPage from "./pages/res confirmation page/ResConfirmationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "reservations", element: <ReservationsPage /> },
      { path: "reservation-confirmed", element: <ResConfirmationPage /> },
    ],
  },
]);

export default router;
