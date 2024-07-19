import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Make sure this matches your backend port

export const fetchPriceData = async (symbol: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/crypto/${symbol}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching price data:', error);
    throw error;
  }
};
export const fetchAllPriceData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/crypto`);
    return response.data;
  } catch (error) {
    console.error('Error fetching price data:', error);
    throw error;
  }
};