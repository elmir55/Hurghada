import axios from 'axios';

const apiRoot = axios.create({
  baseURL: 'http://192.168.92.40:5000/items',
});

export default apiRoot;
