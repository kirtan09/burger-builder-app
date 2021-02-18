import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
  let inputElement = null;
  let error = null;
  const inputClasses = [classes.inputElement];
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.invalid);
    error = (
      <p style={{ color: "red", fontWeight: "bold" }}>
        Please enter valid {props.valueType}
      </p>
    );
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={classes.input}>
      <label className={classes.label}>{props.label}</label>
      {inputElement}
      {error}
    </div>
  );
};

export default input;
