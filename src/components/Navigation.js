import React from "react";
import { Link, withRouter } from "react-router-dom";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton.js";

function Navigation(props) {
  const navigationStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <header className="toolbar">
      <nav className="toolbar-navbar">
        <div className="toolbar-toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar-logo">
          <img src={require("../assets/images/ghd-logo.png")} alt="GHD Logo" />
        </div>
        <div className="toolbar-title">
          <h1>Grech Hardware Distributors</h1>
        </div>
        <div className="spacer"></div>
        <ul className="toolbar-nav-items">
          <Link style={navigationStyle} to="/">
            <li>
              <a>Home</a>
            </li>
          </Link>
          <Link style={navigationStyle} to="/about">
            <li>
              <a>About</a>
            </li>
          </Link>
          <Link style={navigationStyle} to="/products">
            <li>
              <a>Products</a>
            </li>
          </Link>
          <Link style={navigationStyle} to="/contact">
            <li>
              <a>Contact Us</a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
