import React from "react";

export const SchoolInput = ({ value, onChange }) => {
  return (
    <div>
      <div className="mb-6">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          校舎コード
        </label>
        <input
          type="text"
          className="p-3 border rounded-md w-full"
          placeholder="1300"
          value={value}
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          校舎名
        </label>
        <label className="block font-medium text-gray-700 mb-2 text-lg">
          {/* {school_name}校 */}
          御茶ノ水本校
        </label>
      </div>
    </div>
  );
};
