function NavLinksMobile({ navLinks }) {
  return (
    <ul className="links-mobile V-flex">
      {navLinks.map((link) => (
        <li key={link.text}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinksMobile;
