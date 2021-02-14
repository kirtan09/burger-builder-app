import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BurgerIngredients.css";

class BurgerIngredients extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className="BreadBottom"></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className="BreadTop">
            <div className="Seeds1" />
            <div className="Seeds2" />
          </div>
        );
        break;
      case "salad":
        ingredient = <div className="Salad"></div>;
        break;
      case "vegPatty":
        ingredient = <div className="VegPatty"></div>;
        break;
      case "cheese":
        ingredient = <div className="Cheese"></div>;
        break;
      case "chicken":
        ingredient = <div className="Chicken"></div>;
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
