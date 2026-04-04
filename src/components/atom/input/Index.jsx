import React from "react";
import Label from "./Label";

function Input(
  {
    type = "text",
    styleParent,
    label,
    name,
    placeholder,
    icon,
    classInput,
    value,
    onChange,
  },
  ...props
) {
  return (
    <div className={`${styleParent} flex flex-col m-2`}>
      {label && <Input.label name={label}>{label}</Input.label>}
      <div className="relative w-full  flex">
        {icon && (
          <div className="absolute rounded-l-sm bg-green-400 border border-green-950 text-green-950  focus:ring-opacity-50 shadow-lg h-full p-2 ">
            {icon}
          </div>
        )}

        <input
          value={value}
          className={`w-full rounded-md p-2 border focus-within:ring-opacity-0 border-green-600 text-green-900 ${icon ? "pl-11" : ""} ${classInput}`}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          {...props}
        />
      </div>
    </div>
  );
}

Input.label = ({ children, name }) => {
  return (
    <div className="my-1">
      <Label name={name}> {children}</Label>
    </div>
  );
};

export default Input;
