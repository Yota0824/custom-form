import { useState } from "react";

import { useNavigate } from "react-router";
import { Button } from "../Button";
import { SchoolInput } from "../ShoolInput";
import { TextInput } from "../TextInput";
import {DateInput} from "../DateInput"
import { ExcelInput } from "../ExcelInput";

export const WebFlyerForm = () => {
  const [school_id, set_school_id] = useState("");
  const [apply_name, set_apply_name] = useState("");
  const [file, set_file] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("formData",formData);
    console.log(Object.fromEntries(formData));

    const response = await fetch("http://127.0.0.1:8000/api/upload-excel/",{
      method:"POST",
      body:formData,
    });
    // TODO

    // if (response.ok) {
    //   navigate("/");
    // }
  };

  const onClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-[120px] bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <div className="text-xl font-bold">WEB/ビラ集計フォーム</div>
        <p className="text-gray-600 mb-6">TODO:説明</p>
        <form onSubmit={onSubmit}>
          <SchoolInput
            name="school_id"
            value={school_id}
            onChange={(e) => set_school_id(e.target.value)}
          />
          <TextInput
            label="送信者名1"
            name="name"
            value={apply_name}
            placeholder="武田太郎"
            onChange={(e) => set_apply_name(e.target.value)}
          />
          <DateInput name="apply_date" label="対象年月" onChange={(file) => set_file(file)}/>
          <ExcelInput label={"Excelファイルアップロード"} name="file"/>
          <Button type="submit">フォームを回答</Button>
          <Button variant="secandary" type="button" onClick={onClick}>
            キャンセル
          </Button>
        </form>
      </div>
    </div>
  );
};
