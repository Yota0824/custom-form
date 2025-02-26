import React from "react";

export const TextInput = ({ name, label,value,onChange,placeholder }) => {
  return (
      <div className="mb-6">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
        <input
          type="text"
          name={name}
          className="p-3 border rounded-md w-full"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      </div>
  );
};
