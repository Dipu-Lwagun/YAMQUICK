import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterSlice from './features/CounterSlice';
import AuthSlice from './features/AuthSlice';
import ProductSlice from './features/ProductSlice';
import {mealApi} from './services/mealApi';

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//     auth: AuthSlice,
//     meals: ProductSlice,
//   },
// });

const reducers = combineReducers({
  [mealApi.reducerPath]: mealApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([mealApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
