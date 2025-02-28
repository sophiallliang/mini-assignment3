import CounterContext from "./CounterContext";
import { useState } from "react";
import CounterCell from "./CounterCell";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [colors, setColors] = useState([false, false, false, false]);
  return (
    <div>
      <h1 className="count-line">Count: {count}</h1>
      <div className="counter-grid">
        <CounterContext.Provider value={{ setCount }}>
          <CounterCell colors={colors} setColors={setColors} idx={0} />
          <CounterCell colors={colors} setColors={setColors} idx={1} />
          <CounterCell colors={colors} setColors={setColors} idx={2} />
          <CounterCell colors={colors} setColors={setColors} idx={3} />
        </CounterContext.Provider>
      </div>
    </div>
  );
}
