import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/repos/microsoft/typescript/pulls?state=opened'
});

export default api;