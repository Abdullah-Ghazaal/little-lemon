import Logo from "../logo/Logo";

function FooterLinksDesktop({ navLists }) {
  return (
    <nav className="footer-links-desktop H-flex section-max-width ">
      <Logo />
      <div className="footer-links-container H-flex">
        {navLists.map((list) => (
          <div key={list.heading} className="footer-links">
            <h3>{list.heading}</h3>
            <ul>
              {list.links.map((link) => (
                <li key={link.text}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default FooterLinksDesktop;
