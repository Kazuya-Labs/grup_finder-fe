import React from "react";

const VARIANT = {
  primary: "primary",
  danger: "bg-red-300 text-red-950 border-red-950",
};

function Alert({ variant = "primary", children }) {
  const kombinasi = `flex ${VARIANT[variant]} border rounded w-full `;
  return <div className={kombinasi}>{children}</div>;
}

export default Alert;
