import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface OrderState {
  cartItems: any[];
}

const initialState: OrderState = {
  cartItems: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderItems: (state, action: PayloadAction<any[]>) => {
      state.cartItems = action.payload;
    },
    clerOrderItem: state => {
      state.cartItems = [];
    },
  },
});

export const {setOrderItems, clerOrderItem} = orderSlice.actions;
export default orderSlice.reducer;
