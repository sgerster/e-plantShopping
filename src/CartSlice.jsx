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
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.index === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.index === action.payload);
      if (item.quantity === 1){
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.items.filter((item) => item.id !== action.paylaod);
      state.items = removeItem;
      },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
