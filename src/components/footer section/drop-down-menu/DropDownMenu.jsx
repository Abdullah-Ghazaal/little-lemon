import { FaChevronDown } from "react-icons/fa6";
import "./dropDown.css";
import { useState } from "react";

function DropDownMenu({ heading, links }) {
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <section className="drop-down-menu">
      <header
        className="H-flex flex-space-between"
        onClick={() => setMenuOpened(!isMenuOpened)}
      >
        <h3>{heading}</h3>
        <FaChevronDown size="22px" className="chevron-down" />
      </header>
      <div className={`menu-content ${isMenuOpened ? "menu-opened" : ""}`}>
        <ul>
          {links.map((link) => (
            <a href={link.href} key={link.text}>
              <li>{link.text}</li>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DropDownMenu;
