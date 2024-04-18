// fetchApi.js
import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com';
const API_KEY = '2mpZYpCdIUAXnJRYixr97YrEbsqcFl5qHSauozapnMk';

const fetchImages = async (query, page = 1, perPage = 10) => {
  try {
    const params = {
      client_id: API_KEY,
      page,
      query,
      per_page: perPage,
    };

    const response = await axios.get(`${BASE_URL}/search/photos`, { params });

    if (!response.data) {
      throw new Error('No data received from Unsplash API');
    }

    return response.data.results;
  } catch (error) {
    console.error('Error fetching images:', error.message);
    throw error;
  }
};

export default fetchImages;
