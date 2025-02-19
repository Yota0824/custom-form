import { useState, useEffect } from "react";
import { SchoolInput } from "../ShoolInput";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import { useNavigate } from "react-router";
import { DateInput } from "../DateInput";
import { ExcelInput } from "../ExcelInput";

export const WebFlyerForm = () => {
  const [school_id, set_school_id] = useState("");
  const [apply_name, set_apply_name] = useState("");
  const [error_msg, set_error_msg] = useState("");
  const navigate = useNavigate();

  // school_id のバリデーション
  useEffect(() => {
    if (/^\d{4}$/.test(school_id) || school_id === "") {
      set_error_msg("");
    } else {
      set_error_msg("半角4桁の数字で入力してください");
    }
  }, [school_id]);

  const onSubmit = async (e) => {
    const response = await fetch("http://127.0.0.1:8000/post-webflyer-form/",{
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        school_id:school_id,
        // school_name:school_name,
        apply_name:apply_name,
        // apply_month:month,
        // excel_file:excel_file,


      }),
    },
  )
    e.preventDefault(); // フォームのデフォルト送信を防ぐ
    navigate("/");
  };

  const onClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-[120px] bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <div className="text-xl font-bold">WEB/ビラ集計フォーム</div>
        <p className="text-gray-600 mb-6">aaaaaaaaa</p>
        <form onSubmit={onSubmit}>
          <SchoolInput
            value={school_id}
            onChange={(e) => set_school_id(e.target.value)}
          />
          {/* 位置がおかしいからどうにかしたい */}
          {error_msg && <p className="text-red-500 text-sm mt-1">{error_msg}</p>}

          <TextInput
            label="回答者名"
            value={apply_name}
            placeholder="武田太郎"
            onChange={(e) => set_apply_name(e.target.value)}
          />
          <DateInput label="対象年月" />
          <ExcelInput />
          <div className="flex justify-center mt-10">
            <Button type="submit">フォームを回答</Button>
            <Button variant="secondary" type="button" onClick={onClick}>
              キャンセル
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
