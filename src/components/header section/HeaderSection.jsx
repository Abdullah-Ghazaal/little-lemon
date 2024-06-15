import logo from "../../assets/images/Logo.svg";
import "./header.css";

function HeaderSection() {
  const navLinks = [
    { href: "/home", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/menu", text: "Menu" },
    { href: "/reservations", text: "Reservations" },
    { href: "/order-online", text: "Order Online" },
    { href: "/login", text: "Login" },
  ];

  return (
    <header className="header-section">
      <nav className="H-flex flex-space-between section-max-width">
        <a href="/home" className="logo">
          <img src={logo} alt="restaurant logo" />
        </a>
        <ul className="links H-flex">
          {navLinks.map((link) => (
            <li key={link.text}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default HeaderSection;
