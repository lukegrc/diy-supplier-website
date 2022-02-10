import React, { Component } from "react";
import "./style.css";
import Navigation from "./components/Navigation";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTopRoute from "react-router-scroll-top";
import Modal from "react-modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false,
    };
  }

  componentWillMount() {
    Modal.setAppElement("body");
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
      };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <Router>
        <div style={{ height: "100%" }} className="App">
          <Navigation drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}
          <Switch>
            <ScrollToTopRoute>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/products" exact component={Products} />
              <Route path="/contact" exact component={Contact} />
            </ScrollToTopRoute>
          </Switch>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    );
  }
}

export default App;
