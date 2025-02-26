import React from "react";

export const ExcelInput = ({ name, label, value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type="file"
        name={name}
        className="p-3 border rounded-md w-full"
        value={value}
        onChange={(e) => {
          onChange(e.target.files[0]);
        }}
        required
      />
    </div>
  );
};
