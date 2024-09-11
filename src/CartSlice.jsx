import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
    },
    incrementQuantity: (state, {payload}) => {
      const item = state.items.find((item) => item.id === payload.id);
      item.quantity = item.quantity + 1;
    },
    decrementQuantity: (state, {payload}) => {
      const item = state.items.find((item) => item.id === payload.id);
      if (item.quantity === 1){
        item.quantity = 1
      } else {
        item.quantity = item.quantity - 1;
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
