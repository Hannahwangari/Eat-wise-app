import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-6"
      style={{
        backgroundImage: "url('/khloe-arledge-ND3edEmzcdQ-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-[#098826]/60 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Eat Wise, Live Healthy
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Discover healthy recipes, track your nutrition, and make smarter food choices every day.
        </p>
        <button className="bg-[#098826] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition transform hover:bg-[#076a1e] hover:scale-105 hover:shadow-xl">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
