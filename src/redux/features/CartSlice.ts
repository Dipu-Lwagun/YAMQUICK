import {createApi} from '@reduxjs/toolkit/query/react';
import {InitialState} from './../../../node_modules/@react-navigation/routers/lib/typescript/src/types.d';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  rate: number;
  image_url: string;
  quantity: number;
}
interface CartSlice {
  cartItems: CartItem[];
}

const initialState: CartSlice = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const exetingIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id,
      );
      if (exetingIndex !== -1) {
        state.cartItems[exetingIndex].quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
  },
});
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
