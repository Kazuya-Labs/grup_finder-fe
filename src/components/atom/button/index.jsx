import React from "react";
import VARIANT_STYLES from "./variant";
import SIZE_STYLES from "./size";

function Button({
  size = "sm",
  variant = "primary",
  disabled = false,
  rounded = "sm",
  className = "",
  children,
  onClick,
}) {
  const baseStyles = `rounded-${rounded} font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring-2`;
  const combinate = `${VARIANT_STYLES[variant]} ${baseStyles} ${SIZE_STYLES[size]}`;
  return (
    <button
      className={`${className} ${combinate} aria-disabled:bg-gray-800 aria-disabled:text-gray-100 `}
      aria-disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
