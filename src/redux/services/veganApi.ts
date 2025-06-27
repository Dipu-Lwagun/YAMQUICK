import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from '../../api';

export const veganApi = createApi({
  reducerPath: 'veganApi',
  baseQuery: baseQuery,
  endpoints: builder => ({
    getVegan: builder.query<any, void>({
      query: () => ({
        url: '/vegan',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetVeganQuery, useLazyGetVeganQuery} = veganApi;
