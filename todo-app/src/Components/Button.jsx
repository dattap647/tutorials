import React from "react";
import { buttonStyle } from "../Styles/styles";
const Button = (props) => {
  const { text, handleOnClick, ownStyle, ...rest } = props;
  return (
    <button
      style={{
        ...buttonStyle,
        ...ownStyle,
      }}
      onClick={handleOnClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
