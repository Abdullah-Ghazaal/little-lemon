import FooterLinksDesktop from "./FooterLinksDesktop";
import FooterLinksMobile from "./FooterLinksMobile";
import "./footer.css";

function FooterSection() {
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
    <footer className="footer-section">
      <FooterLinksDesktop navLists={navLists} />
      <FooterLinksMobile navLists={navLists} />
    </footer>
  );
}

export default FooterSection;
