import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chatbot from "./pages/Chatbot";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import UploadDoc from "./pages/UploadDoc";
import DraftDocument from "./pages/DraftDocuments";
import PhoneSignUp from "./pages/PhoneSignup";
import PhoneSignIn from "./pages/PhoneSignin";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Wrap everything in Layout for animation
      children: [
        {
          index: true, // this means: path = "/"
          element: <Home />,
        },
        {
          path: "upload-doc",
          element: <UploadDoc />,
        },
        {
          path: "draft-doc",
          element: <DraftDocument />,
        },
      ],
    },
    { path: "/phonesignup", element: <PhoneSignUp /> },
    { path: "/phonesignin", element: <PhoneSignIn/> },
    { path: "/profile", element: <ProfilePage /> },
    { path: "/chat", element: <Chatbot /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
