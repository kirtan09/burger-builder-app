import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Chicken", type: "chicken" },
  { label: "Veg Patty", type: "vegPatty" },
];

const buildControls = (props) => (
  <div className={classes.buildControls}>
    <p>
      Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        add={() => props.addControl(ctrl.type)}
        remove={() => props.removeControl(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.orderButton}
      disabled={props.purchaseable}
      onClick={props.ordered}
    >
      {props.isAuth ? "Order Now" : "Signup to order"}
    </button>
  </div>
);

export default buildControls;
