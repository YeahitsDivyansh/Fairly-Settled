import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { TranslationProvider } from "@/components/TranslationContext/TranslationContext";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { ChatProvider } from "./context/ChatContext";
import { Toaster } from "react-hot-toast";
import { LawyerAuthContextProvider } from "./context/LawyerAuthContext";

createRoot(document.getElementById("root")).render(
  <TranslationProvider>
    <UserAuthContextProvider>
      <LawyerAuthContextProvider>
        <ChatProvider>
          <App />
          <Toaster />
        </ChatProvider>
      </LawyerAuthContextProvider>
    </UserAuthContextProvider>
  </TranslationProvider>
);
