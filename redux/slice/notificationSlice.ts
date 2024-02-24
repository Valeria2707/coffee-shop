import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Order } from "../../type/NotificationPage";

type NotificationState = {
  order: Order[];
};

const initialState: NotificationState = {
  order: [],
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.order.push(action.payload);
    },
  },
});

export const { addOrder } = notificationSlice.actions;
export default notificationSlice.reducer;
