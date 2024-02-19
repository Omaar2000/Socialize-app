import { useState } from "react";
import Navbar from "./assets/navbar/Navbar";
import Leftbar from "./assets/Leftbar";
import Feed from "./assets/Feed";
import Rightbar from "./assets/Rightbar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Register from "./pages/register";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile profile={false} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
