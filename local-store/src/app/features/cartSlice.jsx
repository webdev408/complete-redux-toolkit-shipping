import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      }
      if (!existingItem) {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
        state.totalPrice += newItem.price;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.products = state.products.filter((item) => item.id !== id);
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
      }
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);
      existingItem.quantity++;
      existingItem.totalPrice += existingItem.price;
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);
      existingItem.quantity--;
      existingItem.totalPrice -= existingItem.price;
    },
    checkout(state) {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, checkout } = cartSlice.actions;
export default cartSlice.reducer;
