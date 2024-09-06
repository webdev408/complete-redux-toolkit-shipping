import { configureStore } from '@reduxjs/toolkit';

import productReducer from './productSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';

const Store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default Store;
