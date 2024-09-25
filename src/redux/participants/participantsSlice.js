import { createSlice } from "@reduxjs/toolkit";
import { fetchParticipants } from "./participantsOps";

const participantsSlice = createSlice({
  name: "participants",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchParticipants.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchParticipants.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchParticipants.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      }),
});

export default participantsSlice.reducer;
