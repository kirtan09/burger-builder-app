import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../UI/Backdrop/Backdrop";
import Aux from "../../hoc/Aux/Aux";

const sideDrawer = (props) => {
  let attachedClasses = [classes.sideDrawer, classes.close];
  if (props.open) {
    attachedClasses = [classes.sideDrawer, classes.open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuth={props.isAuth} onClick={props.closed} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
