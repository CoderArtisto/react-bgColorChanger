import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("pink");
  return (
    <>
      {/* <button onClick={yellow}>Yellow</button>
      <button onClick={yellow}>Blue</button>
      <button onClick={yellow}>Green</button>
      <button onClick={yellow}>Black</button>
      <button onClick={yellow}>White</button>
      <button onClick={yellow}>Orange</button>
      <button onClick={yellow}>brown</button>
      <button onClick={yellow}>Reset to Pink</button> */}

      <div
        className="h-screen w-full duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="justify-center flex flex-wrap fixed bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => {
              setColor("white");
            }}
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => {
              setColor("orange");
            }}
            className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => {
              setColor("brown");
            }}
            className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
            onClick={() => {
              setColor("pink");
            }}
            className="outline-none px-4 py-1 rounded-full text-black font-semibold shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Reset to Pink
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
