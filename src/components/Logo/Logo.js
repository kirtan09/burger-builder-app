import React from "react";
import Logo from "../../assets/images/burgerLogo.png";
import "./Logo.css";

const logo = (props) => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={Logo} alt="My Burger" />
  </div>
);

export default logo;
