import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/filtersSelectors";

export const selectAllParticipants = (state) => state.participants.items;
export const selectIsLoading = (state) => state.participants.isLoading;
export const selectError = (state) => state.participants.error;
export const selectFilteredParticipants = createSelector(
  [selectAllParticipants, selectNameFilter],
  (participants, filter) => {
    return participants.filter((participant) =>
      participant.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
