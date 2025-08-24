import React from "react";

const LandingPage = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-6">Eat Wise, Live Healthy</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Discover healthy recipes, track your nutrition, and make smarter food
          choices every day.
        </p>

        <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
