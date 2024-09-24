import { createSlice } from "@reduxjs/toolkit";

const participantsSlice = createSlice({
  name: "participants",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => builder,
});

export default participantsSlice.reducer;
