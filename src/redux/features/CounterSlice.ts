import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  Value: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  //actions
  reducers: {
    increment: state => {
      state.Value += 1;
    },
    decrement: state => {
      if (state.Value > 1) {
        state.Value -= 1;
      }
    },
    incrementByAmount: (state, actions) => {
      state.Value = actions.payload;
    },
  },
});
export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
