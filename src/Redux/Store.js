import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './CartSlice';

const Store = configureStore({
  reducer: {
    name: CartSlice,
  },
});

export default Store;
