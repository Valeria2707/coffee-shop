import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Backet } from "../../type/BacketPage";

type CappuccinoState = {
  backet: Backet[];
  totalPrice: number;
};

const initialState: CappuccinoState = {
  backet: [],
  totalPrice: 0,
};

export const backetSlice = createSlice({
  name: "backet",
  initialState,
  reducers: {
    addItemToBacket: (state, action: PayloadAction<Backet>) => {
      const newItem = action.payload;
      const existingItem = state.backet.find(
        (item) => item.id === newItem.id && item.size === newItem.size,
      );
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.backet.push(newItem);
      }
    },
    increaseItemCount: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.backet.find((item) => item.id === itemId);
      if (item) {
        item.count += 1;
      }
    },
    decreaseItemCount: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.backet.find((item) => item.id === itemId);
      if (item) {
        if (item.count > 1) {
          item.count -= 1;
        } else {
          state.backet = state.backet.filter((item) => item.id !== itemId);
        }
      }
    },
    setTotal: (state, action) => {
      state.totalPrice = action.payload;
    },
    setBacket: (state, action) => {
      state.backet = action.payload;
    },
  },
});

export const {
  addItemToBacket,
  increaseItemCount,
  decreaseItemCount,
  setTotal,
  setBacket,
} = backetSlice.actions;

export default backetSlice.reducer;
