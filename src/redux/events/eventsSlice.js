import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents } from "./eventsOps";

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    items: [],
    events: [],
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
        const { totalEvents, currentPage, totalPages } = action.payload;
        state.items = {
          totalEvents,
          currentPage,
          totalPages,
        };
        state.events = [...state.events, ...action.payload.events];
        state.isLoading = false;
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      }),
});

export default eventsSlice.reducer;
