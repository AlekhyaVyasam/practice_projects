import axios from "axios";

const API_BASE_URL = "http://localhost:8082";

const fetchChartData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data-endpoint`); // Replace with your actual endpoint
    return response.data;
  } catch (error) {
    console.error("Error fetching chart data:", error);
    throw error;
  }
};

export default {
  fetchChartData,
};
