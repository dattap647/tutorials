import React from "react";
import { buttonStyle } from "../style/styles";

const Button = (props) => {
  return (
    <button style={buttonStyle} onClick={props.handleOnClick} {...props}>
      {props.text}
    </button>
  );
};

export default Button;
