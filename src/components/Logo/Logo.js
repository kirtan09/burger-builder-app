import React from "react";
import Logo from "../../assets/images/burgerLogo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.logo} style={{ height: props.height }}>
    <img src={Logo} alt="My Burger" />
  </div>
);

export default logo;
