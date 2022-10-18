import React from "react";
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
