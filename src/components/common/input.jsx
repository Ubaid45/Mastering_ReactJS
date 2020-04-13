import React from "react";
const Input = (name, label, type, value, onChange) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        autoFocus
        id={name}
        name={name}
        type={type}
        className="form-control"
      />
    </div>
  );
};

export default Input;
