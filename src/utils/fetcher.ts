import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://54.180.151.82',
});

export default instance;
