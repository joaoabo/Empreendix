import axios from 'axios';
import { URL_CONEXAO } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
    baseURL: 'https://empreendix.onrender.com/api',
    timeout: 5000,
  });
  console.log("URL DA API:", URL_CONEXAO);

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});