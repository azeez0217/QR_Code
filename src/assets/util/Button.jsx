import React from "react";

const Button = ({ text = "", className = "", click }) => {
  return (
    <button className={className} onClick={click}>
      {text}
    </button>
  );
};

export default Button;
