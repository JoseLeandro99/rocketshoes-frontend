import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rocketshoes-backend.herokuapp.com'
});

export default api;
