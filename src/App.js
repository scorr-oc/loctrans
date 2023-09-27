import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Regulation from "./Pages/Regulation";
import Links from "./Pages/Links";
import B100 from "./Pages/B100";
import Error from "./Pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regulation" element={<Regulation />} />
        <Route path="/links" element={<Links />} />
        <Route path="/b100" element={<B100 />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
