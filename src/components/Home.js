import React, { Component } from "react";
import "./Home.css";
import { Link, withRouter } from "react-router-dom";
import CarouselPage from "./CarouselPage";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-div0">
          <h2>Importers of Ironmongery, Tools and Electrical Supplies</h2>
          <div className="hero-cta">
            <p>Your trusted partner for quality hardware solutions</p>
            <div className="cta-buttons">
              <Link to="/products" className="cta-btn primary">
                View Products
              </Link>
              <Link to="/contact" className="cta-btn secondary">
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="home-div1">
          <div className="carousel-section">
            <h3>Featured Brands</h3>
            <CarouselPage />
          </div>
        </div>

        <div className="home-div2">
          <div className="find-us-div">
            <h2 className="find-us-underline">Find Us</h2>
            <p>
              Visit our location or get in touch for all your hardware needs
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.3942996934024!2d14.466224914752255!3d35.88835752619285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e51fa28cfb379%3A0xc87e8e4a819ee3c3!2sGrech%20Hardware%20Distributors!5e0!3m2!1sen!2smt!4v1587651256941!5m2!1sen!2smt"
            width="100%"
            height=""
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Grech Hardware Distributors Location"
          ></iframe>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
