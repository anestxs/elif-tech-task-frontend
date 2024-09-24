import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents } from "./eventsOps";

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload.events];
        state.isLoading = false;
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      }),
});

export default eventsSlice.reducer;
