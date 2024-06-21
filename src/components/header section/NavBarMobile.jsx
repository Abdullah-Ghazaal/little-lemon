import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../logo/Logo";

function NavBarMobile({ navLinks }) {
  const [isMenuOpened, setMenuClicked] = useState(false);

  return (
    <nav className="nav-bar-mobile">
      <div className="H-flex flex-space-between">
        <Logo />
        <RxHamburgerMenu
          className="menu-button"
          size="36px"
          onClick={() => setMenuClicked(!isMenuOpened)}
          color={isMenuOpened ? "#f4ce14" : ""}
        />
      </div>
      <ul className={`links-mobile V-flex ${isMenuOpened ? "opened" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.text}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBarMobile;
