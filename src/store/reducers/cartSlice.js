// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   items: JSON.parse(localStorage.getItem('cart')) || [],
   totalQuantity: JSON.parse(localStorage.getItem('cart')).reduce((total, item) => total + item.quantity, 0) || 0,
   totalPrice: JSON.parse(localStorage.getItem('cart')).reduce((total, item) => total + item.totalPrice, 0) || 0,
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItemToCart(state, action) {
         const newItem = action.payload;
         const existingItem = state.items.find(item => item.id === newItem.id);

         if (!existingItem) {
            state.items.push({
               id: newItem.id,
               title: newItem.title,
               price: newItem.price,
               image: newItem.image,
               quantity: 1,
               totalPrice: newItem.price,
            });
         } else {
            existingItem.quantity++;
            existingItem.totalPrice += newItem.price;
         }

         state.totalQuantity++;
         state.totalPrice += newItem.price;

         console.log('Updating localStorage:', state.items);
         localStorage.setItem('cart', JSON.stringify(state.items));
      },

      removeItemFromCart(state, action) {
         const id = action.payload;
         const existingItem = state.items.find(item => item.id === id);

         if (existingItem) {
            state.totalQuantity -= existingItem.quantity
            state.totalPrice -= existingItem.totalPrice;
            state.items = state.items.filter(item => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(state.items));
         }
      },

      increaseItemQuantity(state, action) {
         const id = action.payload;
         const existingItem = state.items.find(item => item.id === id);

         if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice += existingItem.price;
            state.totalQuantity++;
            state.totalPrice += existingItem.price;
            localStorage.setItem('cart', JSON.stringify(state.items));
         }
      },
      decreaseItemQuantity(state, action) {
         const id = action.payload;
         const existingItem = state.items.find(item => item.id === id);

         if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price;
            state.totalQuantity--;
            state.totalPrice -= existingItem.price;
            localStorage.setItem('cart', JSON.stringify(state.items));
         }
      },
      clearCart(state) {
         state.items = [];
         state.totalQuantity = 0;
         state.totalPrice = 0;
         localStorage.setItem('cart', JSON.stringify(state.items));
      },
   },
});

export const { addItemToCart, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
