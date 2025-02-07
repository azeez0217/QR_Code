import React from "react";

// type="text"
// className="py-1 px-2 font-medium border-2 rounded border-blue-500"
// name="valueName"
// value={text}
// placeholder="Enter a word to generate"
// onChange={(e) => setText(e.target.value)}

const Input = ({
  type = "text",
  className = "",
  name = "",
  value = "",
  placeholder = "",
  change,
}) => {
  return (
    <>
      <input
        type={type}
        className={className}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={change}
      />
    </>
  );
};

export default Input;
