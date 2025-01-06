import React from "react";

const Input = (props) => {
  return (
    <input
      style={props.style}
      type={props.type}
      onChange={props.handleOnChange}
      {...props}
    />
  );
};

export default Input;
