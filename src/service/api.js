import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app.professordaniloalves.com.br/api/v1/',
});

export default api;
