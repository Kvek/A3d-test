import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Character, CharacterListApiResponse } from "../../shared/interfaces";
import { RootState } from "../store";

export type CharactersFilterType = {
  status: Array<{ value: string; label: string }>;
  gender: Array<{ value: string; label: string }>;
  species: Array<{ value: string; label: string }>;
  type: Array<{ value: string; label: string }>;
};

type InfoType =
  | {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    }
  | undefined;

export interface characterState {
  data: Character[];
  filters: CharactersFilterType;
  info: InfoType;
  currentPage: number;
}

const initialState: characterState = {
  data: [],
  info: undefined,
  filters: {
    status: [],
    gender: [],
    species: [],
    type: [],
  },
  currentPage: 1,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    updateCharacterListData: (
      state,
      action: PayloadAction<CharacterListApiResponse>
    ) => {
      state.data = action.payload.results;
      state.info = action.payload.info;
    },
    updateFilters: (state, action: PayloadAction<CharactersFilterType>) => {
      state.filters = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { updateCharacterListData, updateFilters, setCurrentPage } =
  characterSlice.actions;

export const selectCharacterData = (state: RootState) => state.character.data;

export const selectCurrentPage = (state: RootState) =>
  state.character.currentPage;

export const selectCharacterFilters = (state: RootState) =>
  state.character.filters;

export const selectCharacterListInfo = (state: RootState) =>
  state.character.info;

export default characterSlice.reducer;
