import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/filtersSelectors";

export const selectAllEvents = (state) => state.events.events;
export const selectAllItems = (state) => state.events.items;
export const selectIsLoading = (state) => state.events.isLoading;
export const selectError = (state) => state.events.error;
export const selectFilteredEvents = createSelector(
  [selectAllEvents, selectNameFilter],
  (events, filter) => {
    return events.filter((event) =>
      event.title.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
