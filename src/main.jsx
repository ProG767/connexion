import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./connexion/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
