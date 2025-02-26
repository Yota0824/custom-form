import React from "react";

export const DateInput = ({ name, label }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm front-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        name={name}
        type="month"
        required
        className="p-3 border rounded-md w-full"
      />
    </div>
  );
};
