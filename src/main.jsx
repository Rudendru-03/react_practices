import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/cartContext";
import { store } from "./store/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      {/* <CartProvider> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </CartProvider> */}
    </StrictMode>
  </>
);
