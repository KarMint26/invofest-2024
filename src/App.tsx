import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Talkshow from "./pages/Talkshow";
import Seminar from "./pages/Seminar";
import Competition from "./pages/Competition";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talkshow" element={<Talkshow />} />
        <Route path="/seminar" element={<Seminar />} />
        <Route path="/competition" element={<Competition />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
