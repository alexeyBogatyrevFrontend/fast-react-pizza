import { createSlice } from "@reduxjs/toolkit";
import store from "../../store";
import { PizzaCartType } from "../../types";

const initialState: PizzaCartType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item) {
        item.quantity++;
        item.totalPrice = item?.quantity * item?.unitPrice;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item) {
        item.quantity--;
        item.totalPrice = item?.quantity * item?.unitPrice;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
export type AppDispatch = typeof store.dispatch;

export const getCart = (state: { cart: PizzaCartType }) => state.cart.cart;

export const getCurrentQuantityById =
  (id: number) => (state: { cart: PizzaCartType }) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const getTotalCartQuantity = (state: { cart: PizzaCartType }) =>
  state.cart.cart.reduce((accum, item) => accum + item.quantity, 0);

export const getTotalCartPrice = (state: { cart: PizzaCartType }) =>
  state.cart.cart.reduce((accum, item) => accum + item.totalPrice, 0);
