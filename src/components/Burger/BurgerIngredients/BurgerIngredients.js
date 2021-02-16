import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngredients.css";

class BurgerIngredients extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds} />
          </div>
        );
        break;
      case "salad":
        ingredient = <div className={classes.Salad}></div>;
        break;
      case "vegPatty":
        ingredient = <div className={classes.VegPatty}></div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case "chicken":
        ingredient = <div className={classes.Chicken}></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};
