import React, { createContext, useState } from "react";

// Create the CartContext
export const CartContext = createContext(null);

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Return the context provider with the children
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};
