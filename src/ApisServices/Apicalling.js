import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products'; // Your API base URL

// Common function for making API calls
const Apicalling = async (endpoint, method = 'GET', data = null) => {
  try {
    const url = `${BASE_URL}`;

    // Axios configuration object
    const config = {
      method,
      url,
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
      data: data ? JSON.stringify(data) : null,
    };

    // Make the API call using Axios
    const response = await axios(config);

    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};

export default Apicalling;
