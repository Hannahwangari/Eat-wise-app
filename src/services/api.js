import axios from 'axios';

const API_BASE_URL = 'https://api.api-ninjas.com/v1';
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchNutrition = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/nutrition`, {
      params: { query },
      headers: { 'X-Api-Key': API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};