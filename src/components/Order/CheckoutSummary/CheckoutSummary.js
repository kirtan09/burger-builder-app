import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {
  return (
    <div className={classes.checkoutSummary}>
      <h1>Enjoy your burger!</h1>
      <div style={{ width: "100%", margin: "auto" }}></div>
      <Burger ingredients={props.ingredients} />
      <Button clicked btnStyle="danger">
        Cancel
      </Button>
      <Button clicked btnStyle="success">
        Continue
      </Button>
    </div>
  );
};

export default checkoutSummary;
