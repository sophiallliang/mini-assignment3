import { useContext, useState } from "react";
import "./CounterCell.css";
import CounterContext from "./CounterContext";

export default function CounterCell({ colors, setColors, idx }) {
  const { setCount } = useContext(CounterContext);
  return (
    <div
      className="counter-cell"
      style={{ backgroundColor: colors[idx] ? "black" : "white" }}
      onClick={() => {
        if (colors[idx]) {
          setColors((prev) => {
            const newprev = [...prev];
            newprev[idx] = false;
            return newprev;
          });
          setCount((prev) => prev - 1);
        } else {
          setColors((prev) => {
            const newprev = [...prev];
            newprev[idx] = true;
            return newprev;
          });
          setCount((prev) => prev + 1);
        }
      }}
    ></div>
  );
}
