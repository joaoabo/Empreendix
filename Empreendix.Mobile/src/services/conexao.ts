import axios from 'axios';
import { URL_CONEXAO } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
    baseURL: URL_CONEXAO,
    timeout: 5000,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});