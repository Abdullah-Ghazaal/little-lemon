import logo from "../assets/images/Logo.svg";

function Footer() {
  return (
    <nav>
      <a href="/home">
        <img src={logo} alt="restaurant logo" />
      </a>
      <h3>Navigation</h3>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/order-online">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
      <h3>Contact</h3>
      <ul>
        <li>
          <a href="https://maps.google.com">Address</a>
        </li>
        <li>
          <a href="tel:+123456789">Phone number</a>
        </li>
        <li>
          <a href="mailto:littlelemon.chicago99@gmail.com">Email</a>
        </li>
      </ul>
      <h3>Social-meida</h3>
      <ul>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">{"X (twitter)"}</a>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
