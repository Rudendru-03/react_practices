import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CounterProvider } from "./constext/counterContext";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // </StrictMode>
  // <CounterProvider>
  <App />
  // </CounterProvider>
);
