import axios from 'axios';
import config from '@/config';

console.log('API URL being used:', config.apiUrl);

const apiClient = axios.create({
    baseURL: config.apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    // Get all offenses (für fallübersicht.vue)
    getAllOffenses() {
        return apiClient.get('/Offense');
    },

    // Get a single offense by ID (für bearbeitungssicht.vue)
    getOffense(id) {
        return apiClient.get(`/Offense/${id}`);
    },

    // Create a new offense (für ersterfassung.vue)
    createOffense(data) {
        console.log('Creating offense with data:', data); // Konsolen-Log hinzufügen
        return apiClient.post('/Offense', data);
    },

    // Update an existing offense (für bearbeitungssicht.vue)
    updateOffense(id, data) {
        console.log('Updating offense with ID:', id, 'and data:', data); // Konsolen-Log hinzufügen
        return apiClient.put(`/Offense/${id}`, data);
    }
};
