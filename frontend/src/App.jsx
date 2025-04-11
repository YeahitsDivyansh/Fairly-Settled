import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
 import Chatbot from "./pages/Chatbot";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    { path: "/signup", element: <SignUp/> },
    { path: "/signin", element: <SignIn/> },
    { path: "/profile", element: <ProfilePage/> },
    { path: "/chat", element: <Chatbot/> },
  ]);
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;




