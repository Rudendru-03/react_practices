import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Cart = () => {
  const cartState = useContext(CartContext);

  // Ensure the price is a number during reduction
  const totalPrice = cartState.items.reduce(
    (a, b) => a + Number(b.price || 0),
    0
  );

  return (
    <div>
      <h1>Your Cart Items</h1>
      {cartState.items.length > 0 ? (
        <ul>
          {cartState.items.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              {item.name}: ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <h3>Total Bill To Pay: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
