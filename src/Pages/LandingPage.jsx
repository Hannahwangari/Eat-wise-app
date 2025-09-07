// src/Pages/LandingPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const handleStartTips = () => {
    setIsModalOpen(false);
    navigate("/tips");
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/khloe-arledge-ND3edEmzcdQ-unsplash.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Dark overlay */}
      </div>

      {/* Navbar (Green & Static) */}
      <Navbar />

      {/* Hero Section with top padding to avoid being hidden behind Navbar */}
      <div className="relative flex-1 flex flex-col justify-center items-center text-center px-4 text-white pt-20 md:pt-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Eat Wise</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Your pocket nutrition buddy! Track meals, learn nutritional info, and stay motivated for a healthier lifestyle.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-green-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
        >
          Get Started
        </button>
      </div>

      {/* Welcome Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 shadow-lg relative">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Welcome to Eat Wise!</h2>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
              <li>Search meals and view nutritional information.</li>
              <li>Log meals to track calories and stay on your health plan.</li>
              <li>Monitor your water intake, steps, and exercises.</li>
              <li>Get daily motivational tips to stay inspired!</li>
            </ul>
            <button
              onClick={handleStartTips}
              className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Start Using App
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
