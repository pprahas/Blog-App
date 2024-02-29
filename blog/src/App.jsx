import React, { useState, useEffect } from "react";
import Login from "./pages/auth/Login";
import "./App.css";
import Register from "./pages/auth/Register";
import Home from "./pages/blog/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlog from "./pages/blog/CreateBlog";
import InvalidLogin from "./pages/invalidLogin/InvalidLogin";

function App() {
  // const loggedIn = window.localStorage.getItem("isLoggedIn");
  // console.log("logged in value is", loggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <InvalidLogin />}
        /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/createBlog" element={<CreateBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
