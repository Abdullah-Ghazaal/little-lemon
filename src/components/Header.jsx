import logo from "../assets/images/Logo.svg";

function Header() {
  const navLinks = [
    { href: "/home", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/menu", text: "Menu" },
    { href: "/reservations", text: "Reservations" },
    { href: "/order-online", text: "Order Online" },
    { href: "/login", text: "Login" },
  ];

  return (
    <nav className="header-grid">
      <a href="/home" className="logo">
        <img src={logo} alt="restaurant logo" />
      </a>
      <ul className="H-flex flex-space-between">
        {navLinks.map((link) => (
          <li key={link.text}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
