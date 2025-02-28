const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';  // Load from .env file

class ServiceFetch {
  async getService(endpoint = '') {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {  // Use template literals here
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);  // Interpolated message string
      }

      return await response.json();
      
    } catch (error) {
      console.error('API Fetch Error:', error);
      return { error: 'Failed to fetch data' };
    }
  }
}

export default new ServiceFetch();
