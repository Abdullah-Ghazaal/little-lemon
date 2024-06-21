import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="restaurant logo" />
    </Link>
  );
}

export default Logo;
