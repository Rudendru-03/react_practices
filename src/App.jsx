import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "./store/slice/counterSlice";
// import Counter from "./component/Counter";
// import { CounterContext } from "./constext/counterContext";
import { CartContext } from "./context/cartContext";
import Card from "./component/card";
import Cart from "./component/cart";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  console.log("count :", count.value);

  // const counterState = useContext(CounterContext);
  // console.log("counterState", counterState);

  // const cartState = useContext(CartContext);
  // console.log(cartState);
  return (
    <>
      {/* <h2>E commerce Minutes </h2>
      <Card />

      <Cart /> */}

      <h1>counter : {count.value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        IncrementByAmount
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default App;
