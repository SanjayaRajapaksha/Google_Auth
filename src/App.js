import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoogleLoginPage from "./pages/GoogleLoginPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoogleLoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
