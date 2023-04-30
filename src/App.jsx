import React from "react";
import RoadmapContainer from "./components/Roadmap/HOC/RoadmapContainer";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";

import { Routes, Route } from "react-router-dom";
import UpdatePassword from "./components/updatePassword/UpdatePassword";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<RoadmapContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/updatePassword" element={<UpdatePassword />} />
      </Routes>
    </div>
  );
};

export default App;
