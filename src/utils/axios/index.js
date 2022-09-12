import axios from 'axios';

export default axios.create({
    baseURL: 'https://62d2a97cafb0b03fc5a974ed.mockapi.io/api/'
});

const client = axios.create({ baseURL: 'https://62d2a97cafb0b03fc5a974ed.mockapi.io/api/' });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`;

  const onSuccess = response => response;
  const onError = error => {
    errorHandler(error);
  };

  return client(options).then(onSuccess).catch(onError);
};