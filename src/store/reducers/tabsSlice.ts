import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CHARACTER, EPISODE, LOCATION } from "../../shared/api";
import { RootState } from "../store";

export type TabValueType = typeof CHARACTER | typeof LOCATION | typeof EPISODE;

export type TabType = {
  tabName: TabValueType;
  tabId: TabValueType;
};
export interface tabState {
  currentTab: TabValueType;
  tabList: Array<TabType>;
}

const initialState: tabState = {
  currentTab: CHARACTER,
  tabList: [
    { tabName: CHARACTER, tabId: CHARACTER },
    { tabName: LOCATION, tabId: LOCATION },
    { tabName: EPISODE, tabId: EPISODE },
  ],
};

export const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    updateCurrentTab: (state, action: PayloadAction<TabValueType>) => {
      state.currentTab = action.payload;
    },
  },
});

export const { updateCurrentTab } = tabsSlice.actions;

export const selectCurrentTab = (state: RootState) => state.tabs.currentTab;

export const selectTabList = (state: RootState) => state.tabs.tabList;

export default tabsSlice.reducer;
