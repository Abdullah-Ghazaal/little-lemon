import { Link } from "react-router-dom";
import "./error.css";
import Logo from "../../components/logo/Logo";

function ErrorPage() {
  return (
    <section className="error-section">
      <div className="info-container V-flex section-max-width">
        <Logo />
        <h3>
          Hello there ! 😁 ... <br />
          This web-app is just a practing project and it is still under
          development. <br />
          Only the <mark>Home page</mark> and the <mark>Reservations page</mark>{" "}
          can be visited, otherwise you are trying to navigate to an invalid
          path.
        </h3>
        <h4>Thanks for your understanding</h4>
        <Link to="/">Back to Home page</Link>
      </div>
    </section>
  );
}

export default ErrorPage;
