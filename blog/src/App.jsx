import Login from "./pages/auth/Login";
import "./App.css";
import Register from "./pages/auth/Register";
import Home from "./pages/blog/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlog from "./pages/blog/CreateBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createBlog" element={<CreateBlog />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
