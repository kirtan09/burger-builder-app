import React from "react";
import Logo from "../../assets/images/burgerLogo.png";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={Logo} alt="My Burger" />
  </div>
);

export default logo;
