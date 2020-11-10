import axios from 'axios';

const api = axios.create({
    baseURL: 'https://manuarioinformatica.herokuapp.com/'
});

export default api;