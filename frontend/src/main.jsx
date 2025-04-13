import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx';
import { TranslationProvider } from "@/components/TranslationContext/TranslationContext";

 
createRoot(document.getElementById("root")).render(

  <TranslationProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </TranslationProvider>
);
