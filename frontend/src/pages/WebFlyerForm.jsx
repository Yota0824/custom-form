import { useState } from "react";
import { SchoolInput } from "../components/ShoolInput";
import { Button } from "../components/Button";
import { TextLavel } from "../components/TextLavel";

export const WebFlyerForm = () => {
  const [school_id, set_school_id] = useState("");
  const [apply_name, set_apply_name] = useState("");

  const submit = async () => {};
  return (
    <div className="flex items-center justify-center min-h-screen pt-[120px] bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <div className="text-xl font-bold">WEB/ビラ集計フォーム</div>
        <p className="text-gray-600 mb-6">aaaaaaaaa</p>
        <form>
          <SchoolInput
            value={school_id}
            onChange={(e) => set_school_id(e.target.value)}
          />
          <TextLavel
            // lavel ={送信者名}
            value={apply_name}
            placeholder={"武田太郎"}
            onChange={(e) => set_apply_name(e.target.value)}
          />

          <Button onClick={submit}>フォームを回答</Button>
        </form>
      </div>
    </div>
  );
};
