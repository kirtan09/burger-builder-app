import React from "react";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../../SideDrawer/DrawerToggle/DrawerToggle";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";

const toolbar = (props) => (
  <header className={classes.toolbar}>
    <DrawerToggle clicked={props.clicked} />
    <div className={classes.logo}>
      <Logo />
    </div>
    <nav className={classes.desktopOnly}>
      <NavigationItems isAuth={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;
