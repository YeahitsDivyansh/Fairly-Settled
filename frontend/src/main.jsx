import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { TranslationProvider } from "@/components/TranslationContext/TranslationContext";
import { UserAuthContextProvider } from './context/UserAuthContext';


createRoot(document.getElementById("root")).render(

  <TranslationProvider>
      <UserAuthContextProvider>
        <App />
      </UserAuthContextProvider>
  </TranslationProvider>
);
