import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterSlice from './features/CounterSlice';
import AuthSlice from './features/AuthSlice';
import ProductSlice from './features/ProductSlice';
import SelectedItemReducer from './features/SelectedItemSlice';
import CartSlice from './features/CartSlice';

import {mealApi} from './services/mealApi';
import {veganApi} from './services/veganApi';
import {dessertApi} from './services/dessertApi';
import {drinkApi} from './services/drinkApi';

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//     auth: AuthSlice,
//     meals: ProductSlice,
//   },
// });

const reducers = combineReducers({
  counter: counterSlice,
  products: ProductSlice,
  selectitem: SelectedItemReducer,
  cart: CartSlice,

  [mealApi.reducerPath]: mealApi.reducer,
  [veganApi.reducerPath]: veganApi.reducer,
  [dessertApi.reducerPath]: dessertApi.reducer,
  [drinkApi.reducerPath]: drinkApi.reducer,
  selectedItem: SelectedItemReducer, // seletcitem
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      mealApi.middleware,
      veganApi.middleware,
      dessertApi.middleware,
      drinkApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
