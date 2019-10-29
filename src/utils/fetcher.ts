import axios from 'axios';
import { getAuthToken } from './auth';

const instance = axios.create({
  baseURL: 'https://api.correctcode.dev',
});

instance.interceptors.request.use(config => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
