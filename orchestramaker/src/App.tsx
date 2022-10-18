import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Top from "./routes/Top/Top";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/signup" element={<Top />} />
    </Routes>
  </>
);

export default App;
