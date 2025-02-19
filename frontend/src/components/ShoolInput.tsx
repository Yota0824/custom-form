import React from "react";
import { useState,useEffect } from "react";


export const SchoolInput = ({ value, onChange }) => {
  // const [school_id, set_school_id] = useState("");
  const [error_msg, set_error_msg] = useState("");

    // school_id のバリデーション
    useEffect(() => {
      if (/^\d{4}$/.test(value) || value === "") {
        set_error_msg("");
      } else {
        set_error_msg("半角4桁の数字で入力してください");
      }
    }, [value]);

  // 校舎コードがなかった場合はエラーにしたい
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
          maxLength={4}
        />
      </div>
                {/* 位置がおかしいからどうにかしたい */}
                {error_msg && <p className="text-red-500 text-sm mt-1">{error_msg}</p>}
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
