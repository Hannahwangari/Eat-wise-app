// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import TipsPage from "./Pages/TipsPage";
import TrackerPage from "./Pages/TrackerPage";
import MonthlySummaryPage from "./Pages/MonthlySummaryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/tracker" element={<TrackerPage />} />
        <Route path="/monthly-summary" element={<MonthlySummaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
