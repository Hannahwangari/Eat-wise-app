// src/components/HeroSection.jsx
import React from "react";

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/khloe-arledge-ND3edEmzcdQ-unsplash.jpg')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero content */}
      <div className="relative z-10 max-w-2xl text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Eat Wise, Live Healthy
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover healthy recipes, nutrition tips, and smart eating habits for a better lifestyle.
        </p>
        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 transition rounded-lg font-semibold shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
