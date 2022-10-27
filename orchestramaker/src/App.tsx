import React from "react";
import Top from "./routes/Top/Top";
import Login from "./routes/Login/Login";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </>
);

export default App;
