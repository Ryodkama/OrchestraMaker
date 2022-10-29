import React from "react";
import Top from "./routes/Top/Top";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </>
);

export default App;
