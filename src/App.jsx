import { useState } from "react";

import "./App.css";

function App() {
    const [colour, setColour] = useState("black");
    return (
      <>
        <div
          className="w-full h-screen duration-200"
          style={{ backgroundColor: colour }}
        >
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-2x bg-slate-50 px-6 py-3 rounded-full">
              <button
                className="px-6 py-3 outline-none bg-red-700 text-white shadow-lg rounded-xl"
                style={{ backgroundColor: "red" }}
                onClick={() => setColour("red")}
              >
                Red
              </button>
            <button
              className="px-6 py-3 outline-none bg-green-700 text-white shadow-lg rounded-xl"
              style={{ backgroundColor: "green" }}
              onClick={() => setColour("green")}
            >
              green
            </button>
            <button
              className="px-6 py-3 outline-none bg-yellow-300 text-white shadow-lg rounded-xl"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColour("yellow")}
            >
              Yellow
            </button>
            <button
              className="px-6 py-3 outline-none bg-blue-600 text-white shadow-lg rounded-xl"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColour("blue")}
            >
              Blue
            </button>
            <button
              className="px-6 py-3 outline-none bg-orange-600 text-white shadow-lg rounded-xl"
              style={{ backgroundColor: "orange" }}
              onClick={() => setColour("orange")}
            >
              Orange
            </button>
            <button
              className="px-6 py-3 outline-none bg-violet-700 text-white shadow-lg rounded-xl"
              style={{ backgroundColor: "violet" }}
              onClick={() => setColour("violet")}
            >
              Violet
            </button>
            <button
              className="px-6 py-3 outline-none bg-pink-700 text-white shadow-lg rounded-xl"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColour("pink")}
            >
              Pink
            </button>
            <button
              className="px-6 py-3 outline-none bg-cyan-400 text-white shadow-lg rounded-xl"
              style={{ backgroundColor: "cyan" }}
              onClick={() => setColour("cyan")}
            >
              Cyan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
