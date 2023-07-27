import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface filterState {
  searchQuery: string;
  showFilter: boolean;
}

const initialState: filterState = {
  searchQuery: "",
  showFilter: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateSearch: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    togggleFilter: (state) => {
      state.showFilter = !state.showFilter;
    },
  },
});

export const { updateSearch, togggleFilter } = filterSlice.actions;

export const selectSearchQuery = (state: RootState) => state.filter.searchQuery;

export const selectFilterToggle = (state: RootState) => state.filter.showFilter;

export default filterSlice.reducer;
