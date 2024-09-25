import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://elif-tech-task-beckend-1.onrender.com";

export const fetchParticipants = createAsyncThunk(
  "participants/fetchAll",
  async (eventId, ThunkAPI) => {
    try {
      const response = await axios.get(`/api/participants/${eventId}`);
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addParticipant = createAsyncThunk(
  "participants/add",
  async ({ eventId, participant }, ThunkAPI) => {
    try {
      const response = await axios.post(
        `/api/participants/register/${eventId}`,
        participant
      );
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);
