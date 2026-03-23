import { useState } from "react";
const App = () => {
  let [color, changecolor] = useState("black");
  return (
    <div
      className="h-screen w-screen p-10 flex items-end justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="h-fit w-fit flex  gap-3 bg-white p-3 rounded text-2xl font-medium">
        <button
          className="px-4 py-1 bg-red-500 rounded"
          onClick={() => changecolor("red")}
        >
          Red
        </button>
        <button
          className="px-4 py-1 bg-green-500 rounded"
          onClick={() => changecolor("green")}
        >
          Green
        </button>
        <button
          className="px-4 py-1 bg-yellow-300 rounded"
          onClick={() => changecolor("yellow")}
        >
          Yellow
        </button>
        <button
          className="px-4 py-1 bg-blue-500 rounded"
          onClick={() => changecolor("blue")}
        >
          Blue
        </button>
        <button
          className="px-4 py-1 bg-orange-300 rounded"
          onClick={() => changecolor("orange")}
        >
          Orange
        </button>
        <button
          className="px-4 py-1 bg-gray-400 rounded"
          onClick={() => changecolor("gray")}
        >
          Gray
        </button>
        <button
          className="px-4 py-1 bg-pink-300 rounded"
          onClick={() => changecolor("pink")}
        >
          Pink
        </button>
      </div>
    </div>
  );
};

export default App;
