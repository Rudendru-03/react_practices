import React, { useContext } from "react";
import Counter from "./component/Counter";
import { CounterContext } from "./constext/counterContext";
import Card from "./component/card";

const App = () => {
  const counterState = useContext(CounterContext);
  // console.log("counterState", counterState);
  return (
    <>
      {/* <h1 className="items-center">Constext API</h1>
      <h1>count : {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter /> */}

      <h2>E commerce Minutes </h2>
      <Card />
    </>
  );
};

export default App;
