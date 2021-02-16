import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  return (
    <div className={classes.sideDrawer}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
