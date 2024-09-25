import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Talkshow from "./pages/Talkshow";
import Seminar from "./pages/Seminar";
import CSeminar from "./pages/CSeminar";
import Competition from "./pages/Competition";
import Navbar from "./components/custom/Navbar";
import Workshop from "./pages/Workshop";
import CWorkshop from "./pages/CWorkshop";
import Footer from "./components/custom/Footer";
import BtnBackTop from "./components/custom/BtnBackTop";
import "aos/dist/aos.css";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talkshow" element={<Talkshow />} />
          <Route path="/seminar" element={<CSeminar />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/workshop" element={<CWorkshop />} />
          <Route path="/seminar2" element={<Seminar />} />
          <Route path="/workshop2" element={<Workshop />} />
        </Routes>
      </div>
      <BtnBackTop />
      <Footer />
    </React.Fragment>
  );
};

export default App;
