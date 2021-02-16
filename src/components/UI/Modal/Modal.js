import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const modal = (props) => {
  // shouldComponentUpdate(nextProps, nextState){
  //   return nextProps.show !== props.show || nextProps.children !== props.children;
  // };

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalHide}></Backdrop>
      <div
        className={classes.modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
