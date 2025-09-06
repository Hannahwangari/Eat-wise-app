// src/Pages/TipsPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import FoodSearchForm from "../components/FoodSearchForm";

const TipsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      {/* Header Section */}
      <header className="py-8 text-center">
        <h1 className="text-3xl font-bold text-green-800">Healthy Meal Tips</h1>
        <p className="text-green-700 mt-2">
          Search for meals, view nutrition info, and log them to track your daily intake
        </p>
      </header>

      {/* Meal Search and Log Form */}
      <div className="flex-1">
        <FoodSearchForm />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
        >
          ← Back to Home
        </button>
        <button
          onClick={() => navigate("/tracker")}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Proceed to Tracker →
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center mt-12 mb-6 text-green-600">
        &copy; {new Date().getFullYear()} EatWise. All rights reserved.
      </footer>
    </div>
  );
};

export default TipsPage;
