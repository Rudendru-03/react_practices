import React, { useContext } from "react";
import { CounterContext } from "../constext/counterContext";

const Counter = function () {
  const counterState = useContext(CounterContext);
  return (
    <>
      <div>
        <button
          onClick={() => counterState.setcount(counterState.count + 1)}
          className="border-8 border-black bg-blue-70000 font-semibold px-2 text-xl "
        >
          Increment
        </button>

        <button
          onClick={() => counterState.setcount(counterState.count - 1)}
          className="border-2 border-black bg-blue-500 font-semibold"
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
