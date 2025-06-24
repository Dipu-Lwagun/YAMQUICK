import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API} from '../../api';

const initialState = {
  mealData: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

// Fetch meal data
export const getmealdata = createAsyncThunk(
  'meal/product',
  async (_, thunkApi) => {
    try {
      const response = await API.get('meals');
      console.log('getmeal response:', response.data);
      return response.data; // assuming this is an array
    } catch (error) {
      console.warn('getmealdata error', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);

const ProductSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getmealdata.pending, state => {
        state.isLoading = true;
      })
      .addCase(getmealdata.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.mealData = action.payload;
      })
      .addCase(getmealdata.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default ProductSlice.reducer;
