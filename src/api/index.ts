import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://10.10.1.253:3000',
});

const baseQueryNoAuth = fetchBaseQuery({
  baseUrl: 'http://10.10.1.253:3000',
  prepareHeaders: async headers => {
    headers.set('Accept', 'application/json');
    return headers;
  },
});

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQueryNoAuth(args, api, extraOptions);

  return result;
};
