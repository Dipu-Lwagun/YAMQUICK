import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Item {
  id: number;
  name: string;
  description: string;
  image_url: string;
  rate: number;
  price: number;
}

interface ItemSlice {
  selectedItem: Item | null;
}

const initialState: ItemSlice = {
  selectedItem: null,
};
const SelectedItemSlice = createSlice({
  name: 'selectedItem',
  initialState,
  reducers: {
    setSelectedItem: (state, action: PayloadAction<Item>) => {
      state.selectedItem = action.payload;
    },
    clearSelectItem: state => {
      state.selectedItem = null;
    },
  },
});

export const {setSelectedItem, clearSelectItem} = SelectedItemSlice.actions;
export default SelectedItemSlice.reducer;
