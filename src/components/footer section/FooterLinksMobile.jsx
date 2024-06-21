import Logo from "../logo/Logo";
import DropDownMenu from "./drop-down-menu/DropDownMenu";

function FooterLinksMobile({ navLists }) {
  return (
    <nav className="footer-links-mobile V-flex">
      {navLists.map((list) => (
        <DropDownMenu
          key={list.heading}
          heading={list.heading}
          links={list.links}
        />
      ))}
      <Logo />
    </nav>
  );
}

export default FooterLinksMobile;
