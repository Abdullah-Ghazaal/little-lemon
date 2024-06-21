import "./header.css";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

function HeaderSection() {
  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/menu", text: "Menu" },
    { href: "/reservations", text: "Reservations" },
    { href: "/order-online", text: "Order Online" },
    { href: "/login", text: "Login" },
  ];

  return (
    <header className="header-section">
      <NavBarDesktop navLinks={navLinks} />
      <NavBarMobile navLinks={navLinks} />
    </header>
  );
}

export default HeaderSection;
