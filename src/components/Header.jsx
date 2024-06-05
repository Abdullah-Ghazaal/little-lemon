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
    <nav>
      <a href="/home">
        <img src={logo} alt="restaurant logo" />
      </a>
      <ul>
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
