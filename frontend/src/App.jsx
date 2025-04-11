import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        
        <Route path="/" element={<Layout />}/>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
