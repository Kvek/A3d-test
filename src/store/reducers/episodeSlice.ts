import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Episode, EpisodeListApiResponse } from "../../shared/interfaces";
import { RootState } from "../store";

export type EpisodeFilterType = {
  episode: Array<{ value: string; label: string }>;
};

type SelectedFiltersType = { name: string; episode: string };

type InfoType =
  | {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    }
  | undefined;

export interface EpisodeState {
  data: Episode[];
  filters: EpisodeFilterType;
  selectedFilters: SelectedFiltersType;
  info: InfoType;
  currentPage: number;
}

const initialState: EpisodeState = {
  data: [],
  filters: {
    episode: [],
  },
  selectedFilters: { name: "", episode: "" },
  info: undefined,
  currentPage: 1,
};

export const episodeSlice = createSlice({
  name: "episode",
  initialState,
  reducers: {
    updateEpisodeListData: (
      state,
      action: PayloadAction<EpisodeListApiResponse>
    ) => {
      state.data = action.payload.results;
      state.info = action.payload.info;
    },
    setFilters: (state, action: PayloadAction<EpisodeFilterType>) => {
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
  updateEpisodeListData,
  updateFilters,
  setFilters,
  setCurrentPage,
} = episodeSlice.actions;

export const selectEpisodeData = (state: RootState) => state.episode.data;

export const selectEpisodeInfo = (state: RootState) => state.episode.info;

export const selectEpisodePageFilters = (state: RootState) =>
  state.episode.filters;

export const selectSelectedEpisodeListFilters = (state: RootState) =>
  state.episode.selectedFilters;

export const selectCurrentPage = (state: RootState) =>
  state.episode.currentPage;

export default episodeSlice.reducer;
