import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { use } from "react";

const Item = (props) => {
  const cartState = useContext(CartContext);
  return (
    <div>
      {/* <h3>{props.id}</h3> */}
      <h3>{props.name}</h3>
      <p>{"$" + props.price}</p>
      <button
        onClick={() =>
          cartState.setItems([
            ...cartState.items,
            { name: props.name, price: props.price, id: props.id },
          ])
        }
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Item;
