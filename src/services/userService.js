import axios from 'axios';
import config from "../config.js";

// Function to retrieve token from localStorage
const getToken = () => {
    return localStorage.getItem('authToken');
};

// Create an Axios instance
const apiClient = axios.create({
    baseURL:config.apiBaseUrl, // Use your environment variable or static URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the token in the Authorization header
apiClient.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // Set the token in the header
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default {
    // Example GET method to fetch data from an endpoint
    getUsers() {
        return apiClient.get('/users'); // "/users" is the API endpoint
    },

    // Example POST method to send data
    createUser(userData) {
        return apiClient.post('/users', userData); // "/users" is the API endpoint
    },

    // Example PUT method to update data
    updateUser(userId, userData) {
        return apiClient.patch(`/users/${userId}`, userData);
    },

    // Example DELETE method to delete data
    deleteUser(userId) {
        return apiClient.delete(`/users/${userId}`);
    },

    getUser(userId) {
        return apiClient.get(`/users/${userId}`);
    },
};
