import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://elif-tech-task-beckend-1.onrender.com";

export const fetchEvents = createAsyncThunk(
  "events/fetchAll",
  async (page = 1, ThunkAPI) => {
    try {
      const response = await axios.get("/api/events", { params: { page } });
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);
