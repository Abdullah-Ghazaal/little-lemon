import logo from "../../assets/images/Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import "./header.css";
import NavLinksMobile from "./NavLinksMobile";
import { useState } from "react";

function HeaderSection() {
  const [isMenuClicked, setMenuClicked] = useState(false);

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
      <nav className="section-max-width">
        <div className="H-flex flex-space-between">
          <a href="/home" className="logo">
            <img src={logo} alt="restaurant logo" />
          </a>
          <RxHamburgerMenu
            className="menu-button"
            size="36px"
            onClick={() => setMenuClicked(!isMenuClicked)}
            color={isMenuClicked ? "#f4ce14" : ""}
          />
          <ul className="links H-flex">
            {navLinks.map((link) => (
              <li key={link.text}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        {isMenuClicked && <NavLinksMobile navLinks={navLinks} />}
      </nav>
    </header>
  );
}

export default HeaderSection;
