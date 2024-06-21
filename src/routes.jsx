import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ReservationsPage from "./pages/ReservationsPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "reservations", element: <ReservationsPage /> },
    ],
  },
]);

export default router;
