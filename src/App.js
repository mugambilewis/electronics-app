import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString()); // Evaluates the expression
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-72">
        <div className="text-right mb-4">
          <input
            type="text"
            value={input}
            className="w-full bg-gray-700 p-2 text-lg text-white rounded mb-2"
            readOnly
          />
          <div className="text-2xl font-bold text-yellow-400">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
            <button
              key={char}
              className="p-4 bg-gray-600 rounded-xl text-lg hover:bg-gray-500"
              onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
            >
              {char}
            </button>
          ))}
          <button className="col-span-2 p-4 bg-red-600 rounded-xl text-lg hover:bg-red-500" onClick={clearInput}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}
