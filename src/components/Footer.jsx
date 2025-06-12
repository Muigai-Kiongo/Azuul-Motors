export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-support">
          <h4>Support</h4>
          <p>Customer Service Hours: Mon-Fri 9 AM - 6 PM</p>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Phone: +1 234 567 890</p>
          <p>Email: info@azuulmotors.com</p>
        </div>
        <div className="footer-location">
          <h4>Location</h4>
          <p>1234 Car Dealership Ave, City, State, ZIP</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Azuul Motors. All rights reserved.</p>
      </div>
    </footer>
  );
};
