import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {act} from 'react-test-renderer';
// import Apicalling from '../ApisServices/Apicalling';

// export const fetchproduct = createAsyncThunk('fetchproduct', async () => {
//   const baseurl = 'https://dummyjson.com/products';
//   const res = await Apicalling(baseurl);
//   // console.log('callingdata', res);
//   return res;
// });

// const CartSlice = createSlice({
//   name: 'products',
//   initialState: {
//     data: null,
//     isLoader: false,
//     isError: false,
//   },
//   extraReducers: builder => {
//     builder.addCase(fetchproduct.pending, (state, action) => {
//       state.isLoader = true;
//     });
//     builder.addCase(fetchproduct.fulfilled, (state, action) => {
//       state.isLoader = false;
//       state.data = action.payload;
//     });
//     builder.addCase(fetchproduct.rejected, (state, action) => {
//       state.isLoader = false;
//       state.isError = true;
//     });
//   },
// });

// export default CartSlice.reducer;

const initialState = [];
const CartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addCartItem(state, action) {
      let myindex = -1;

      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
        state.push(action.payload);
      } else {
        // console.log('state inner', state[myindex].id);
        state[myindex].qty = state[myindex].qty + 1;
      }
    },
    removeCartItem(state, action) {
      // state.filter((item, index) => index !== action.payload);
      let myindex = -1;

      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].qty = state[myindex].qty - 1;
      }
    },
    deletitem(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const {addCartItem, removeCartItem, deletitem} = CartSlice.actions;
export default CartSlice.reducer;
