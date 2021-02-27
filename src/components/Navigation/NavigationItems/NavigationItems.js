import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = (props) => (
  <ul className={classes.navigationItems} onClick={props.onClick}>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    {props.isAuth ? (
      <NavigationItem link="/orders">Orders</NavigationItem>
    ) : null}
    {props.isAuth ? (
      <NavigationItem link="/checkout">Checkout</NavigationItem>
    ) : null}
    {props.isAuth ? (
      <NavigationItem link="/logout">Logout</NavigationItem>
    ) : (
      <NavigationItem link="/auth">Signin/Signup</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
