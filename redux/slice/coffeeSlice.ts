import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CAPPUCINO } from "../../_mock/Cappucino";
import { CoffeeCard } from "../../type/HomePage";

type CappuccinoState = {
  cappuchino: CoffeeCard[];
};

const initialState: CappuccinoState = {
  cappuchino: CAPPUCINO,
};

export const cappuccinoSlice = createSlice({
  name: "cappuccino",
  initialState,
  reducers: {
    setCappuchino: (state, action: PayloadAction<CoffeeCard[]>) => {
      state.cappuchino = action.payload;
    },
    toggleFavourite: (state, action: PayloadAction<string>) => {
      const coffeeId = action.payload;
      state.cappuchino = state.cappuchino.map((coffee) => {
        if (coffee.id === coffeeId) {
          coffee.isFavourites = !coffee.isFavourites;
        }
        return coffee;
      });
    },
  },
});

export const { setCappuchino, toggleFavourite } = cappuccinoSlice.actions;

export default cappuccinoSlice.reducer;
