import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/Homepage";
import ReservationsPage from "./pages/ReservationsPage";
import ErrorPage from "./pages/error page/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "reservations", element: <ReservationsPage /> },
    ],
  },
]);

export default router;
