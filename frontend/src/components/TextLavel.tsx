import React from "react";

export const TextLavel = ({ lavel,value,onChange,placeholder }) => {
  return (
      <div className="mb-6">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          value:{lavel}
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
