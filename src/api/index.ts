import Axios, {AxiosResponse} from 'axios';
import {Product} from '../types';

const api = {
  getProductsList: async (): Promise<AxiosResponse<Product[]>> =>
    await Axios.get('https://fakestoreapi.com/products'),
};

Axios.interceptors.response.use(
  response => response,
  async error => {
    throw error;
  },
);

export default api;
