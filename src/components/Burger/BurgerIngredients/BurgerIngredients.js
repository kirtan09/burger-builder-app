import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngredients.module.css";

class BurgerIngredients extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.breadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.breadTop}>
            <div className={classes.seeds1} />
            <div className={classes.seeds2} />
          </div>
        );
        break;
      case "salad":
        ingredient = <div className={classes.salad}></div>;
        break;
      case "vegPatty":
        ingredient = <div className={classes.vegPatty}></div>;
        break;
      case "cheese":
        ingredient = <div className={classes.cheese}></div>;
        break;
      case "chicken":
        ingredient = <div className={classes.chicken}></div>;
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
