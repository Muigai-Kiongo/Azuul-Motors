export const Header = () => {
  return (
    <header className="header">
      <nav>
        <img
          src="./images/logo.png"
          alt="Azul Logo"
          className="logo"
          id="logo"
        />
        <h2 className="brand-heading" aria-hidden="true" id="brandHeading">
          Azuul Motors
        </h2>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded="false"
        >
          &#9776;
        </button>
        <ul className="nav-list">
          <li className="nav-item" data-target="home" tabIndex="0">
            Home
          </li>
          <li className="nav-item" data-target="services" tabIndex="0">
            Services
          </li>
          <li className="nav-item" data-target="about" tabIndex="0">
            About
          </li>
          <li className="nav-item" data-target="contact" tabIndex="0">
            Contact Us
          </li>
        </ul>
      </nav>
    </header>
  );
};
