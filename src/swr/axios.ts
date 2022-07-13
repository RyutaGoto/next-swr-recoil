import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'https://opendata.resas-portal.go.jp/api/v1',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});
