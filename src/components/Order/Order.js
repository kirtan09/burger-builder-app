import React from "react";
import classes from "./Order.module.css";

const order = (props) => {
  const ingredients = [];
  for (let igName in props.ingredients) {
    ingredients.push({ name: igName, value: props.ingredients[igName] });
  }
  const ingredientsOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
      >
        {ig.name} ({ig.value})
      </span>
    );
  });
  return (
    <div className={classes.order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price:
        <strong>£{Number.parseFloat(props.totalPrice).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
