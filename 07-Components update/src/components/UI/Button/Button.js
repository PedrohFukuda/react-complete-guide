import React, { memo } from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Button");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default memo(Button);