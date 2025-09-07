// src/components/FoodSearchForm.jsx
import React, { useState, useEffect } from "react";

const FoodSearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loggedMeals, setLoggedMeals] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  // Load logged meals from localStorage
  useEffect(() => {
    const savedMeals = JSON.parse(localStorage.getItem("loggedMeals")) || [];
    setLoggedMeals(savedMeals);
  }, []);

  // Update localStorage and calculate total calories
  useEffect(() => {
    localStorage.setItem("loggedMeals", JSON.stringify(loggedMeals));
    const total = loggedMeals.reduce((sum, meal) => sum + meal.calories, 0);
    setTotalCalories(total);
  }, [loggedMeals]);

  // Search meals using CalorieNinja API
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) return;

    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const response = await fetch(
        `https://api.calorieninjas.com/v1/nutrition?query=${searchTerm}`,
        {
          headers: { "X-Api-Key": import.meta.env.VITE_CALORIENINJA_API_KEY },
        }
      );

      if (!response.ok)
        throw new Error(`Failed to fetch nutrition data: ${response.status}`);

      const data = await response.json();
      console.log("API response:", data); // Debug log

      if (!data.items || data.items.length === 0) {
        setError("No meals found. Try another search term.");
        setResults([]);
      } else {
        setResults(data.items);
      }
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Log meal to localStorage with date
  const handleLogMeal = (meal) => {
    const mealWithDate = { ...meal, date: today };
    const isAlreadyLogged = loggedMeals.some(
      (m) => m.name === mealWithDate.name && m.date === today
    );
    if (isAlreadyLogged) {
      alert(`${mealWithDate.name} is already logged today!`);
      return;
    }
    setLoggedMeals((prev) => [...prev, mealWithDate]);
  };

  // Delete a logged meal
  const handleDeleteMeal = (mealName) => {
    const updatedMeals = loggedMeals.filter(
      (m) => !(m.name === mealName && m.date === today)
    );
    setLoggedMeals(updatedMeals);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Search meals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-green-700">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Search Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.length > 0 &&
          results.map((meal, index) => (
            <div key={index} className="p-4 border rounded-md shadow-sm">
              <h3 className="font-bold text-lg">{meal.name}</h3>
              <p>Calories: {meal.calories}</p>
              <p>Carbs: {meal.carbohydrates_total_g}g</p>
              <p>Protein: {meal.protein_g}g</p>
              <p>Fat: {meal.fat_total_g}g</p>

              <button
                onClick={() => handleLogMeal(meal)}
                className="mt-2 bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-500 transition-colors"
              >
                Log Meal
              </button>
            </div>
          ))}
      </div>

      {/* Logged Meals */}
      {loggedMeals.filter((meal) => meal.date === today).length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Today's Logged Meals</h2>
          <p className="mb-2 font-semibold">
            Total Calories Today: {totalCalories} kcal
          </p>
          <ul className="list-disc list-inside space-y-1">
            {loggedMeals
              .filter((meal) => meal.date === today)
              .map((meal, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <span>
                    {meal.name} - {meal.calories} kcal
                  </span>
                  <button
                    onClick={() => handleDeleteMeal(meal.name)}
                    className="text-red-600 hover:text-red-400 ml-4"
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FoodSearchForm;
