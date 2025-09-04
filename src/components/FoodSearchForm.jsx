import React, { useState } from 'react';
import { fetchNutrition } from '../Services/api';

function FoodSearchForm({ onSearchResults }) {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert('Please enter a food item to search!');
      return;
    }
    try {
      const data = await fetchNutrition(query);
      if (onSearchResults) onSearchResults(data);
    } catch (error) {
      console.error('Search failed:', error);
      alert('Failed to fetch nutrition data. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search food (e.g., 1 apple)"
          className="flex-1 p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default FoodSearchForm;