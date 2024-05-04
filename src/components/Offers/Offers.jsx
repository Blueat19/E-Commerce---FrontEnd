import React from "react";
import "./Offers.css";
import eclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="Offers">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <h1>ONLY BEST SELLERS PRODUCTS</h1>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={eclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
