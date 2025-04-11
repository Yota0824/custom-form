import React from "react";
import { useState,useEffect } from "react";


export const SchoolInput = ({ name,value, onChange }) => {
  const school_id = value ;
  const [error_msg, set_error_msg] = useState("");
  const [school_name,set_school_name] = useState("");

  const fetchSchoolName = async(id)=>{
    const res = await fetch(`http://localhost:8000/api/school-name/${id}/`)

    if(res.ok){
      const data = await res.json();
      set_school_name(data.school_name);
    }
    else{
      if(res.status == 404){
        set_school_name("校舎がありません");
      }
    }
  }

    // school_id のバリデーション
    useEffect(() => {
      if (/^\d{4}$/.test(school_id) || school_id === "") {
        set_error_msg("");
        if(school_id===""){
          set_school_name("");
        }
        else{
          fetchSchoolName(school_id);
        }
      } else {
        set_error_msg("半角4桁の数字で入力してください");
      }
    }, [school_id]);

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
          name={name}
          className="p-3 border rounded-md w-full"
          placeholder="1300"
          value={school_id}
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
        <label className="block font-medium text-gray-700 mb-2 text-lg border p-2 rounded-md">
          {school_name ? `${school_name}`:"校舎IDを入力してください"}
          {/* 左 && 右は左があったら右を表示 */}
          {/* 1 ? 2 : 3 「三項演算子」1がTrueだったら2を、1がFalseだったら3を表示 */}
        </label>
        {/* APIと連携して正しい値を連携する */}
        <input type="hidden" name="school_name" value="御茶ノ水本校"/>
      </div>
    </div>
  );
};
