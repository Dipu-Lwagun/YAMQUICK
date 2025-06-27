import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from '../../api';

export const dessertApi = createApi({
  reducerPath: 'dessertApi',
  baseQuery: baseQuery,
  endpoints: builder => ({
    getDessert: builder.query<any, void>({
      query: () => ({
        url: '/desserts',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetDessertQuery, useLaZyGetDessertQuery} = dessertApi;
