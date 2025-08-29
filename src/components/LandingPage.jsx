import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const LandingPage = () => {
  const [stats, setStats] = useState({ recipes: 1000, users: 50000, support: "24/7" });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const mockData = { recipes: 1200, users: 55000, support: "24/7" };
        setStats(mockData);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />

      {/* Stats Section */}
      <section id="features" className="relative flex justify-center items-center py-12 bg-gray-900">
        <div className="flex space-x-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-300">{stats.recipes}+</div>
            <div className="text-sm">Healthy Recipes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-300">{stats.users}+</div>
            <div className="text-sm">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-300">{stats.support}</div>
            <div className="text-sm">Support</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
