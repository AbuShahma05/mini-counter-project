import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  let increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  let decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let reset = () => {
    setCount(0);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Box for all buttons */}
      <div className="bg-indigo-200 p-8 rounded-lg shadow-lg space-y-4">
        <button
          onClick={increment}
          className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
        >
          Increase Number {count}
        </button>
        <button
          onClick={decrement}
          className="w-full px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-700 transition duration-300"
        >
          Decrease Number {count}
        </button>
        <button
          onClick={reset}
          className="w-full px-4 py-2 bg-gray-500 text-white font-bold rounded hover:bg-gray-700 transition duration-300"
        >
          Reset Number {count}
        </button>
      </div>
    </div>
  );
}
