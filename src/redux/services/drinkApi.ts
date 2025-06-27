import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from '../../api';

export const drinkApi = createApi({
  reducerPath: 'drinkApi',
  baseQuery: baseQuery,
  endpoints: builder => ({
    getDrink: builder.query<any, void>({
      query: () => ({
        url: '/drinks',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetDrinkQuery, uselazyGetDrinkQuery} = drinkApi;
