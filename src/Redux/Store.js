import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './CartSlice';

const Store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});

export default Store;
