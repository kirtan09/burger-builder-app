import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import SideDrawer from "../SideDrawer/SideDrawer";

const layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.layout}>{props.children}</main>
  </Aux>
);

export default layout;
