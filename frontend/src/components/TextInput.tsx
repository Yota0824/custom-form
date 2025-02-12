import React from "react";

export const TextInput = ({ label,value,onChange,placeholder }) => {
  return (
      <div className="mb-6">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
        <input
          type="text"
          className="p-3 border rounded-md w-full"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      </div>
  );
};
