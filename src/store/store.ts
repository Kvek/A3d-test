import logger from "redux-logger";

import { configureStore } from "@reduxjs/toolkit";

import characterSlice from "./reducers/characterSlice";
import episodeSlice from "./reducers/episodeSlice";
import filterSlice from "./reducers/filterSlice";
import locationSlice from "./reducers/locationSlice";
import tabsSlice from "./reducers/tabsSlice";

export const reducer = {
  filter: filterSlice,
  tabs: tabsSlice,
  character: characterSlice,
  location: locationSlice,
  episode: episodeSlice,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
