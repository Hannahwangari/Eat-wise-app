// src/Pages/MonthlySummaryPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MonthlySummaryPage = () => {
  const navigate = useNavigate();
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    // Get saved daily metrics from localStorage
    const saved = JSON.parse(localStorage.getItem("dailyMetrics")) || {};

    // Aggregate by month
    const monthlyTotals = {};
    Object.entries(saved).forEach(([date, metrics]) => {
      const month = date.slice(0, 7); // "YYYY-MM"
      if (!monthlyTotals[month]) {
        monthlyTotals[month] = { calories: 0, water: 0, steps: 0, exercise: 0 };
      }
      monthlyTotals[month].calories += metrics.calories || 0;
      monthlyTotals[month].water += metrics.water || 0;
      monthlyTotals[month].steps += metrics.steps || 0;
      monthlyTotals[month].exercise += metrics.exercise || 0;
    });

    // Convert to chart-friendly format
    const chartData = Object.entries(monthlyTotals).map(([month, totals]) => ({
      month,
      ...totals,
    }));

    setMonthlyData(chartData);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Monthly Summary
      </h1>

      {monthlyData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="calories" fill="#82ca9d" name="Calories" />
            <Bar dataKey="water" fill="#8884d8" name="Water (glasses)" />
            <Bar dataKey="steps" fill="#ffc658" name="Steps" />
            <Bar dataKey="exercise" fill="#ff7f7f" name="Exercise (min)" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-600">
          No monthly data available yet. Log some daily entries in the tracker.
        </p>
      )}

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => navigate("/tracker")}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Back to Tracker
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default MonthlySummaryPage;
