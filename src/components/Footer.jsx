import logo from "../assets/images/Logo.svg";

function Footer() {
  const navLists = [
    {
      heading: "Navigation",
      links: [
        { href: "/home", text: "Home" },
        { href: "/about", text: "About" },
        { href: "/menu", text: "Menu" },
        { href: "/reservations", text: "Reservations" },
        { href: "/order-online", text: "Order Online" },
        { href: "/login", text: "Login" },
      ],
    },
    {
      heading: "Contact",
      links: [
        { href: "https://maps.google.com", text: "Address" },
        { href: "tel:+123456789", text: "Phone number" },
        { href: "mailto:littlelemon.chicago99@gmail.com", text: "Email" },
      ],
    },
    {
      heading: "Social-media",
      links: [
        { href: "#", text: "Facebook" },
        { href: "#", text: "Instagram" },
        { href: "#", text: "X (twitter)" },
      ],
    },
  ];

  return (
    <nav>
      <a href="/home">
        <img src={logo} alt="restaurant logo" />
      </a>
      {navLists.map((list) => (
        <>
          <h3>{list.heading}</h3>
          <ul key={list.heading}>
            {list.links.map((link) => (
              <li key={link.text}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </>
      ))}
    </nav>
  );
}

export default Footer;
