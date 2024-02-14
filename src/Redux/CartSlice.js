import {createSlice} from '@reduxjs/toolkit';
import Apicalling from '../ApisServices/Apicalling';

const CartSlice = createSlice({
  name: 'Cart',
  intialState: {
    data: null,
    isLoader: false,
    isError: false,
  },
  reducers: {
    addCartItem(state, action) {
      state.push(action.payload);
    },
    removeCartItem(state, action) {
      state.filter((item, index) => index !== action.payload);
    },
  },
});

export const {addCartItem, removeCartItem} = createSlice.action;
export default CartSlice.reducer;
