import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import Apicalling from '../ApisServices/Apicalling';

export const fetchproduct = createAsyncThunk('fetchproduct', async () => {
  const baseurl = 'https://dummyjson.com/products';
  const res = await Apicalling(baseurl);
  // console.log('callingdata', res);
  return res;
});

const CartSlice = createSlice({
  name: 'products',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchproduct.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchproduct.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchproduct.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default CartSlice.reducer;
