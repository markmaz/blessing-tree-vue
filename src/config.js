const config = {
    apiBaseUrl: process.env.NODE_ENV === 'production'
        ? 'https://prod-api.example.com'
        : 'http://localhost:8080/api/v1',
};

export default config;
