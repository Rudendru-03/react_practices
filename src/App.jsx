import React, { useContext } from "react";
// import Counter from "./component/Counter";
// import { CounterContext } from "./constext/counterContext";
import { CartContext } from "./context/cartContext";
import Card from "./component/card";
import Cart from "./component/cart";

const App = () => {
  // const counterState = useContext(CounterContext);
  // console.log("counterState", counterState);

  const cartState = useContext(CartContext);
  console.log(cartState);
  return (
    <>
      <h2>E commerce Minutes </h2>
      <Card />

      <Cart />
    </>
  );
};

export default App;
