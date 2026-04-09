import React from "react";

function Filters({ data = [], label, value, onChange }) {
  return (
    <div className="flex flex-col w-full">
      {/* Label */}
      <label className="text-sm font-semibold text-green-900 mb-1">
        {label}
      </label>

      {/* Select */}
      <select
        value={value}
        onChange={onChange}
        className="
          w-full
          px-3 py-2
          rounded-md
          border border-green-300
          bg-green-100
          text-green-950
          font-medium
          outline-none
          focus:ring-2 focus:ring-green-500
          focus:border-green-500
          transition
        "
      >
        {data.map((item, i) => (
          <option value={item.value} key={i}>
            {item.name || item.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
