import React, { useState } from "react";
import "./Products.css";
import CarouselPage from "./CarouselPage";

function Products() {
  return (
    <React.Fragment>
      <div className="products-div1">
        <div className="products-title-div">
          <h1 className="products-title-underline">Products</h1>
        </div>
      </div>
      <div className="products-div2">
        <div className="parent">
          <div className="div1">
            <img src={require("../assets/images/ingco-logo.png")} />
          </div>
          <div className="div2">
            <img src={require("../assets/images/modeco.jpg")} />
          </div>
          <div className="div3">
            <img src={require("../assets/images/jcb-led-logo.png")} />
          </div>
          <div className="div4">
            <img src={require("../assets/images/bluespot.jpg")} />
          </div>
          <div className="div5">
            <img src={require("../assets/images/don-quichotte-logo.jpg")} />
          </div>
          <div className="div6">
            <img src={require("../assets/images/rawlplug-logo.png")} />
          </div>
          <div className="div7">
            <img src={require("../assets/images/jaz-logo.png")} />
          </div>
          <div className="div8">
            <img src={require("../assets/images/mastici-vottero-logo.jpg")} />
          </div>
          <div className="div9">
            <img src={require("../assets/images/pirola-logo.jpg")} />
          </div>
          <div className="div10">
            <img src={require("../assets/images/colombo-logo.jpeg")} />
          </div>
          <div className="div11">
            <img src={require("../assets/images/fisco.jpg")} />
          </div>
          <div className="div12">
            <img src={require("../assets/images/modeco.jpg")} />
          </div>
          <div className="div13">
            <img src={require("../assets/images/modeco.jpg")} />
          </div>
          <div className="div14">
            <img src={require("../assets/images/modeco.jpg")} />
          </div>
          <div className="div15">
            <img src={require("../assets/images/modeco.jpg")} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Products;