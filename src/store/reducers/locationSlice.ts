import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  ListInfoType,
  Location,
  LocationListApiResponse,
} from "../../shared/interfaces";
import { RootState } from "../store";

export type LocationFilterType = {
  type: Array<{ value: string; label: string }>;
  dimension: Array<{ value: string; label: string }>;
};

type SelectedFiltersType = { name: string; type: string; dimension: string };

export interface LocationState {
  data: Location[];
  filters: LocationFilterType;
  selectedFilters: SelectedFiltersType;
  info?: ListInfoType;
  currentPage: number;
}

const initialState: LocationState = {
  data: [],
  filters: {
    type: [],
    dimension: [],
  },
  selectedFilters: { name: "", type: "", dimension: "" },
  info: undefined,
  currentPage: 1,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateLocationListData: (
      state,
      action: PayloadAction<LocationListApiResponse>
    ) => {
      state.data = action.payload.results;
      state.info = action.payload.info;
    },
    setFilters: (state, action: PayloadAction<LocationFilterType>) => {
      state.filters = action.payload;
    },
    updateFilters: (state, action: PayloadAction<SelectedFiltersType>) => {
      state.selectedFilters = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  updateLocationListData,
  updateFilters,
  setFilters,
  setCurrentPage,
} = locationSlice.actions;

export const selectLocationData = (state: RootState) => state.location.data;

export const selectLocationinfo = (state: RootState) => state.location.info;

export const selectLocationPageFilters = (state: RootState) =>
  state.location.filters;

export const selectSelectedLocationListFilters = (state: RootState) =>
  state.location.selectedFilters;

export const selectCurrentPage = (state: RootState) =>
  state.location.currentPage;

export default locationSlice.reducer;
