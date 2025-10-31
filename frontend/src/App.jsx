// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PortfolioForm from "./Pages/PortfolioForm";
import Portfolio from "./Pages/Portfolio";
import NotFound from "./Pages/NotFound"; 

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Home Page - Choose Template */}
          <Route path="/" element={<Home />} />

          {/* Portfolio Form Page */}
          <Route path="/form" element={<PortfolioForm />} />

          {/* Portfolio Display Page */}
          <Route path="/portfolio" element={<Portfolio />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
