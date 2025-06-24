import {createApi} from '@reduxjs/toolkit/query/react';

import {API, baseQuery} from '../../api';

export const mealApi = createApi({
  reducerPath: 'mealApi',
  baseQuery: baseQuery,
  endpoints: builder => ({
    getMeals: builder.query<any, void>({
      query: () => ({
        url: '/meals',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetMealsQuery, useLazyGetMealsQuery} = mealApi;
