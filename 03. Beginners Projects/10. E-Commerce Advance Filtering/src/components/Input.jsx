import React from "react";

const Input = ({ onChange, handlechange, value, title, label, name, color }) => {
  const changeHandler = onChange || handlechange;

  return (
    <label className="sidebar-label-container">
      <input
        type="radio"
        name={name || "test"}
        onChange={changeHandler}
        value={value}
      />
      <span className="checkmark" style={{ backgroundColor: color }}></span>

      {title || label}
    </label>
  );
};

export default Input;
