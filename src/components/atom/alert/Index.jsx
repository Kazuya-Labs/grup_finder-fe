import React from "react";

const VARIANT = {
  primary: "bg-green-300 text-green-950 border-green-950",
  danger: "bg-red-300 text-red-950 border-red-950",
};

function Alert({ variant = "primary", children, className }) {
  const kombinasi = `flex ${VARIANT[variant]} border rounded w-full ${className}`;
  return <div className={kombinasi}>{children}</div>;
}

export default Alert;
