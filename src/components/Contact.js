import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <React.Fragment>
      <div className="contact-div1">
        <div className="contact-title-div">
          <h1 className="contact-title-underline">Contact Us</h1>
        </div>
      </div>

      <div className="contact-div2">
        <div className="contact-container">
          <div className="contact-info-section">
            <h2>Get In Touch</h2>
            <p>
              We'd love to hear from you. Send us a message and we'll respond
              as soon as possible.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>grechhd@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+356 21496475</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Address</h3>
                  <p>
                    Grech Hardware Distributors
                    <br />
                    Malta
                  </p>
                </div>
              </div>
            </div>

            <div className="opening-hours">
              <h3>Opening Hours</h3>
              <div className="hours-grid">
                <div className="hours-row">
                  <span>Monday - Friday</span>
                  <span>8:00 - 16:00</span>
                </div>
                <div className="hours-row">
                  <span>Saturday</span>
                  <span>Closed</span>
                </div>
                <div className="hours-row">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="contact-map">
          <h2>Find Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.3942996934024!2d14.466224914752255!3d35.88835752619285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e51fa28cfb379%3A0xc87e8e4a819ee3c3!2sGrech%20Hardware%20Distributors!5e0!3m2!1sen!2smt!4v1587651256941!5m2!1sen!2smt"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Grech Hardware Distributors Location"
          ></iframe>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
