import Logo from "../logo/Logo";

function NavBarDesktop({ navLinks }) {
  return (
    <nav className="nav-bar-desktop section-max-width">
      <div className="H-flex flex-space-between">
        <Logo />
        <ul className="links H-flex">
          {navLinks.map((link) => (
            <li key={link.text}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBarDesktop;
