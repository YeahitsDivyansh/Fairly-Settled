import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 👈 import this
import "./index.css";
import App from "./App.jsx";
import {TranslationProvider} from "@/components/TranslationContext/TranslationContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <TranslationProvider>
      <App />
      </TranslationProvider>
    </BrowserRouter>
    
  </StrictMode>
);
