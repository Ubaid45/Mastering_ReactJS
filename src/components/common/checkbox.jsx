import React from "react";
const Checkbox = ({ name, label, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        type="checkbox"
        name={name}
        id={name}
        className="form-control"
      />
    </div>
  );
};

export default Checkbox;
