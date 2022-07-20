import { Axios } from './axios';

export const fetcher = (url: string, token?: string) =>
  token
    ? Axios.get(url, {
        headers: { 'X-API-KEY': `${token}` },
      }).then((res) => res.data)
    : Axios.get(url).then((res) => res.data);
