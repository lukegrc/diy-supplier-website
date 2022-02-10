import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About GHD</h3>
          <p>
            Grech Hardware Distributors is your trusted partner for quality
            tools, ironmongery, and electrical supplies. Serving Malta and Gozo
            with excellence for over 20 years.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <p>
              <strong>Address:</strong>
            </p>
            <address>
              Triq S-Salib ta' L-Mriehel
              <br />
              Central Business District, Mriehel
              <br />
              BKR 3020, Malta
            </address>
            <p>
              <strong>Email:</strong> grechhd@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +356 21496475
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Opening Hours</h3>
          <div className="hours-info">
            <p>
              <strong>Monday - Friday:</strong> 8:00 - 16:00
            </p>
            <p>
              <strong>Saturday - Sunday:</strong> Closed
            </p>
          </div>

          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a
                href="#"
                className="social-icon facebook"
                aria-label="Facebook"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="#"
                className="social-icon linkedin"
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="#"
                className="social-icon instagram"
                aria-label="Instagram"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 Grech Hardware Distributors. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
