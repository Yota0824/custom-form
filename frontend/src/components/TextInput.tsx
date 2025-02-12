import React from "react";

export const TextInput = ({ value, onChange }) => {
  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          className="p-3 border rounded-md w-full"
          placeholder="1300"
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
};
