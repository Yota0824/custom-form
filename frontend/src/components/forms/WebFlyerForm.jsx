import { useState } from "react";
import { SchoolInput } from "../ShoolInput";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import { useNavigate } from "react-router";
import { DateInput } from "../DateInput";

export const WebFlyerForm = () => {
  const [school_id, set_school_id] = useState("");
  const [apply_name, set_apply_name] = useState("");
  const navigate = useNavigate();
  const onSubmit = async () => {
    navigate("/")
  };
  const onClick = () => {
    navigate("/")
  }

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
          <TextInput
            label="回答者名"
            value={apply_name}
            placeholder="武田太郎"
            onChange={(e) => set_apply_name(e.target.value)}
          />
          <DateInput
            label="対象年月"
            />

          <Button type="type">フォームを回答</Button>
          <Button variant="secandary" type="button" onClick={onClick}>キャンセル</Button>
        </form>
      </div>
    </div>
  );
};
