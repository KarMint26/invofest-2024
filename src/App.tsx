import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Talkshow from "./pages/Talkshow";
import Seminar from "./pages/Seminar";
import Competition from "./pages/Competition";
import Navbar from "./components/custom/Navbar";
import Workshop from "./pages/Workshop";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="pt-24">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talkshow" element={<Talkshow />} />
        <Route path="/seminar" element={<Seminar />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/workshop" element={<Workshop />} />
      </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
