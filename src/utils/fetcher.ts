import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.correctcode.dev',
});

export default instance;
