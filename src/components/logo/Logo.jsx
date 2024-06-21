import logo from "../../assets/images/Logo.svg";

function Logo() {
  return (
    <a href="/home" className="logo">
      <img src={logo} alt="restaurant logo" />
    </a>
  );
}

export default Logo;
