import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Chatbot from "./pages/Chatbot";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import UploadDoc from "./pages/UploadDoc";
import DraftDocument from "./pages/DraftDocuments";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/upload-doc",
          element: <UploadDoc/>,
        },
        {
          path:"/draft-doc",
          element:< DraftDocument/>
        }
      ],
    },
    { path: "/signup", element: <SignUp/> },
    { path: "/signin", element: <SignIn/> },
    { path: "/profile", element: <ProfilePage/> },
    { path: "/chat", element: <Chatbot/> },
  ]);
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;



