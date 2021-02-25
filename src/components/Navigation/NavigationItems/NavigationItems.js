import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = (props) => (
  <ul className={classes.navigationItems}>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    {props.isAuth ? (
      <NavigationItem link="/orders">Orders</NavigationItem>
    ) : null}
    <NavigationItem link="/checkout">Checkout</NavigationItem>
    {props.isAuth ? (
      <NavigationItem link="/logout">Logout</NavigationItem>
    ) : (
      <NavigationItem link="/auth">Signin/Signup</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
