import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './CartSlice';

const Store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});

export default Store;
