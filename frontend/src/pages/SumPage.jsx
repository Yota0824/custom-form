import { useState } from "react";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

export default function SumPage() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [result1, getresult1] = useState("");
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(null);

  const calculateSum = async () => {
    const sum = Number(num1) + Number(num2) + Number(num3);
    const response = await fetch("http://127.0.0.1:8000/sum/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ result: sum }),
    });
    const data = await response.json();
    console.log(data);

    setResult(sum);
  };
  const resultGet = async () => {
    const response = await fetch(`http://127.0.0.1:8000/sum/?id=${encodeURIComponent(result1)}`);
    const data = await response.json();
    console.log(data);
    setAnswer(data);
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-80 mx-auto mt-10">
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num3}
          onChange={(e) => setNum3(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
        <button
          onClick={calculateSum}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Calculate
        </button>
        {result !== null && (
          <div className="text-lg font-semibold text-gray-800">
            Result: {result}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-80 mx-auto mt-10">
        <input
          type="number"
          placeholder="RecordId"
          value={result1}
          onChange={(e) => getresult1(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
        <button
          onClick={resultGet}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Calculate
        </button>
        {answer !== null && (
          <div className="text-lg font-semibold text-gray-800">
            answer: {answer}
          </div>
        )}
      </div>
    </div>
  );
}
