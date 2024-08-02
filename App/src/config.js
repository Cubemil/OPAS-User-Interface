const config = {
    apiUrl: process.env.VUE_APP_API_URL ||
        (process.env.NODE_ENV === 'production'
            ? 'http://webengineering.ins.hs-anhalt.de:11032/api'
            : 'http://localhost:5000/api')
};

console.log('Current API URL:', config.apiUrl);

export default config;