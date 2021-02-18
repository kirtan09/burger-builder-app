import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { withRouter } from "react-router-dom";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      customer: {
        name: "Kirtan Desai",
        address: {
          addressLine1: "test street",
          addressLine2: "test street",
          zipCode: "uihdjsad",
          country: "UK",
        },
        email: "test@test.com",
      },
      deliveryMethod: "Fast",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => this.setState({ loading: false }));
  };

  render() {
    let form = !this.state.loading ? (
      <form>
        <Input
          className={classes.input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <Input
          className={classes.input}
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <Input
          className={classes.input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          className={classes.input}
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button btnStyle="success" clicked={this.orderHandler}>
          Order Now
        </Button>
      </form>
    ) : (
      <Spinner />
    );
    return (
      <div className={classes.contactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default withRouter(ContactData);
