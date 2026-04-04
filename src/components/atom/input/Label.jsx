import React from "react";

function Label({ children, name }) {
  return (
    <label className="font-bold " htmlFor={name}>
      {children}
    </label>
  );
}

export default Label;
