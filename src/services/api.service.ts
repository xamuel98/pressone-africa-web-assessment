// Define a base URL for your API
const baseURL = `${window.location.href}/api`;

// Function to make a GET request
export const useApiService = () => {
    const getPricingPlans = async(endpoint: string) => {
        const response = await fetch(`${baseURL}/${endpoint}`); // Proxy api call to localhost to eliminate CORS
        
        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    }

    return {
        getPricingPlans
    }
};