import React from "react";

export const NumberInput = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="number"
      className="p-2 border rounded-md w-full"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
