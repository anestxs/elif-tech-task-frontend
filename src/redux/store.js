import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./events/eventsSlice";
import participantsReducer from "./participants/participantsSlice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    participants: participantsReducer,
  },
});
