import axios from 'axios';
import { LS_AUTH_KEY } from 'shared/constants/local-storage';
import { LocalStorage } from 'shared/services/local-storage/local-storage';

export const client = axios.create({
  baseURL: __HOST__,
});

client.interceptors.request.use(
  (config) => {
    const isAuthorized = Boolean(LocalStorage.get(LS_AUTH_KEY)) || false;

    if (isAuthorized) {
      config.headers.Authorization = isAuthorized;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
