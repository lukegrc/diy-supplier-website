import React, { useState } from "react";
import "./About.css";

function About() {
  return (
    <React.Fragment>
      <div className="about-div1">
        <div className="about-title-div">
          <h1 className="about-title-underline">About Us</h1>
        </div>
      </div>
      <div className="about-div2">
        <div className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Grech Hardware Distributors has been a trusted name in the
              hardware industry for over two decades. We specialize in importing
              and distributing high-quality ironmongery, tools, and electrical
              supplies to meet the diverse needs of professionals and DIY
              enthusiasts alike.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              To provide our customers with the highest quality products,
              exceptional service, and competitive pricing. We are committed to
              building long-term relationships with our clients and suppliers
              based on trust, reliability, and mutual success.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose Us?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🛠️</div>
                <h3>Quality Products</h3>
                <p>
                  We partner with renowned brands to ensure only the best
                  products reach our customers.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🚚</div>
                <h3>Fast Delivery</h3>
                <p>
                  Quick and reliable delivery service across Malta and Gozo.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💼</div>
                <h3>Expert Support</h3>
                <p>
                  Our experienced team is always ready to help with product
                  selection and technical advice.
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <h3>Trusted Partner</h3>
                <p>
                  Over 20 years of experience serving the local construction and
                  DIY community.
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Brands</h2>
            <p>
              We proudly represent leading manufacturers including INGCO, JCB,
              Rawlplug, and many other trusted names in the industry. Our
              extensive product range covers everything from basic hand tools to
              advanced electrical equipment.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
