
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsSlice';
import cartReducer from './reducers/cartSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
