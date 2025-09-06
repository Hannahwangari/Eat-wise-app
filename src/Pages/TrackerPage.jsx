// src/Pages/TrackerPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DAILY_CALORIES_TARGET = 2000;
const DAILY_WATER_TARGET = 8;
const DAILY_STEPS_TARGET = 10000;
const DAILY_EXERCISE_TARGET = 60;

const TrackerPage = () => {
  const navigate = useNavigate();

  const today = new Date().toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(today);

  const [totalCalories, setTotalCalories] = useState(0);
  const [waterIntake, setWaterIntake] = useState(0);
  const [steps, setSteps] = useState(0);
  const [exerciseMinutes, setExerciseMinutes] = useState(0);

  const [tip, setTip] = useState("");

  // 🔹 Load saved data when date changes
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dailyMetrics")) || {};
    if (data[selectedDate]) {
      setWaterIntake(data[selectedDate].water || 0);
      setSteps(data[selectedDate].steps || 0);
      setExerciseMinutes(data[selectedDate].exercise || 0);
      setTotalCalories(data[selectedDate].calories || 0);
    } else {
      setWaterIntake(0);
      setSteps(0);
      setExerciseMinutes(0);
      setTotalCalories(0);
    }
  }, [selectedDate]);

  // 🔹 Save function
  const saveDailyMetrics = (key, value) => {
    const data = JSON.parse(localStorage.getItem("dailyMetrics")) || {};
    if (!data[selectedDate]) data[selectedDate] = {};
    data[selectedDate][key] = value;
    localStorage.setItem("dailyMetrics", JSON.stringify(data));
  };

  // 🔹 Quick add / subtract functions
  const quickAddWater = (amount) => {
    const val = Math.max(0, waterIntake + amount);
    setWaterIntake(val);
    saveDailyMetrics("water", val);
  };

  const quickAddSteps = (amount) => {
    const val = Math.max(0, steps + amount);
    setSteps(val);
    saveDailyMetrics("steps", val);
  };

  const quickAddExercise = (amount) => {
    const val = Math.max(0, exerciseMinutes + amount);
    setExerciseMinutes(val);
    saveDailyMetrics("exercise", val);
  };

  const quickAdjustCalories = (amount) => {
    const val = Math.max(0, totalCalories + amount);
    setTotalCalories(val);
    saveDailyMetrics("calories", val);
  };

  // 🔹 Reset all
  const resetAll = () => {
    if (window.confirm("Are you sure you want to reset all trackers?")) {
      setWaterIntake(0);
      setSteps(0);
      setExerciseMinutes(0);
      setTotalCalories(0);

      const data = JSON.parse(localStorage.getItem("dailyMetrics")) || {};
      data[selectedDate] = { calories: 0, water: 0, steps: 0, exercise: 0 };
      localStorage.setItem("dailyMetrics", JSON.stringify(data));

      alert("All trackers reset ✅");
    }
  };

  // 🔹 Motivational tip
  useEffect(() => {
    fetch("https://zenquotes.io/api/random")
      .then((res) => res.json())
      .then((data) => setTip(data[0]?.q || "Stay healthy!"))
      .catch(() => setTip("Stay healthy!"));
  }, [selectedDate]);

  const getProgress = (current, target) =>
    Math.min((current / target) * 100, 100);

  const getBarColor = (current, target) => {
    const percent = (current / target) * 100;
    if (percent >= 100) return "bg-green-600";
    if (percent >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Daily Tracker</h1>

      <p className="italic text-gray-600">Tip of the day: "{tip}"</p>

      {/* Date picker */}
      <div className="mb-4">
        <label className="font-semibold mr-2">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Calories Progress */}
      <div className="mb-4">
        <p className="font-semibold">
          Calories: {totalCalories} / {DAILY_CALORIES_TARGET} kcal
        </p>
        <div className="w-full bg-gray-200 h-5 rounded-full mb-2">
          <div
            className={`h-5 rounded-full ${getBarColor(
              totalCalories,
              DAILY_CALORIES_TARGET
            )}`}
            style={{
              width: `${getProgress(totalCalories, DAILY_CALORIES_TARGET)}%`,
            }}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => quickAdjustCalories(+100)}
            className="bg-green-600 text-white px-3 py-1 rounded-md"
          >
            +100 kcal
          </button>
          <button
            onClick={() => quickAdjustCalories(-100)}
            className="bg-red-600 text-white px-3 py-1 rounded-md"
          >
            -100 kcal
          </button>
        </div>
      </div>

      {/* Quick Logs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Water */}
        <div className="p-4 border rounded-md shadow bg-blue-50">
          <p className="font-semibold mb-2">Water (glasses)</p>
          <p className="mb-2">
            {waterIntake} / {DAILY_WATER_TARGET}
          </p>
          <div className="w-full bg-gray-200 h-4 rounded-full mb-2">
            <div
              className={`h-4 rounded-full ${getBarColor(
                waterIntake,
                DAILY_WATER_TARGET
              )}`}
              style={{
                width: `${getProgress(waterIntake, DAILY_WATER_TARGET)}%`,
              }}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => quickAddWater(+1)}
              className="bg-blue-600 text-white px-3 py-1 rounded-md"
            >
              +1 Glass
            </button>
            <button
              onClick={() => quickAddWater(-1)}
              className="bg-red-600 text-white px-3 py-1 rounded-md"
            >
              -1 Glass
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="p-4 border rounded-md shadow bg-yellow-50">
          <p className="font-semibold mb-2">Steps</p>
          <p className="mb-2">
            {steps} / {DAILY_STEPS_TARGET}
          </p>
          <div className="w-full bg-gray-200 h-4 rounded-full mb-2">
            <div
              className={`h-4 rounded-full ${getBarColor(
                steps,
                DAILY_STEPS_TARGET
              )}`}
              style={{
                width: `${getProgress(steps, DAILY_STEPS_TARGET)}%`,
              }}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => quickAddSteps(+500)}
              className="bg-yellow-600 text-white px-3 py-1 rounded-md"
            >
              +500 Steps
            </button>
            <button
              onClick={() => quickAddSteps(-500)}
              className="bg-red-600 text-white px-3 py-1 rounded-md"
            >
              -500 Steps
            </button>
          </div>
        </div>

        {/* Exercise */}
        <div className="p-4 border rounded-md shadow bg-red-50">
          <p className="font-semibold mb-2">Exercise (min)</p>
          <p className="mb-2">
            {exerciseMinutes} / {DAILY_EXERCISE_TARGET}
          </p>
          <div className="w-full bg-gray-200 h-4 rounded-full mb-2">
            <div
              className={`h-4 rounded-full ${getBarColor(
                exerciseMinutes,
                DAILY_EXERCISE_TARGET
              )}`}
              style={{
                width: `${getProgress(exerciseMinutes, DAILY_EXERCISE_TARGET)}%`,
              }}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => quickAddExercise(+10)}
              className="bg-red-600 text-white px-3 py-1 rounded-md"
            >
              +10 min
            </button>
            <button
              onClick={() => quickAddExercise(-10)}
              className="bg-gray-600 text-white px-3 py-1 rounded-md"
            >
              -10 min
            </button>
          </div>
        </div>
      </div>

      {/* Reset All */}
      <div className="flex justify-center mt-6">
        <button
          onClick={resetAll}
          className="px-6 py-3 bg-gray-700 text-white rounded-xl shadow-md hover:bg-gray-800 transition"
        >
          🔄 Reset All
        </button>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={() => navigate("/tips")}
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
        >
          ⬅ Back to Tips
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
        >
          🏠 Back to Home
        </button>
      </div>
    </div>
  );
};

export default TrackerPage;
