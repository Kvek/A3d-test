import { useEffect } from "react";

import { CharactersList } from "./components";
import { EpisodeList } from "./components/EpisodeList";
import { LocationList } from "./components/LocationList";
import {
  CHARACTER,
  EPISODE,
  getCharacterList,
  getEpisodesList,
  getLocationList,
  LOCATION,
} from "./shared/api";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { updateCharacterListData } from "./store/reducers/characterSlice";
import { updateEpisodeListData } from "./store/reducers/episodeSlice";
import { updateLocationListData } from "./store/reducers/locationSlice";
import { updateCurrentTab } from "./store/reducers/tabsSlice";

import "./App.css";

function App() {
  const currentTab = useAppSelector(({ tabs: { currentTab } }) => currentTab);
  const dispatch = useAppDispatch();

  const getData = async () => {
    try {
      if (currentTab === CHARACTER) {
        const data = (await getCharacterList()).data;

        dispatch(updateCharacterListData(data));
      } else if (currentTab === LOCATION) {
        const data = (await getLocationList()).data;

        dispatch(updateLocationListData(data));
      } else if (currentTab === EPISODE) {
        const data = (await getEpisodesList()).data;
        dispatch(updateEpisodeListData(data));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(updateCurrentTab("character"));
  }, []);

  useEffect(() => {
    getData();
  }, [currentTab]);

  return (
    <div className="App">
      {currentTab === "character" && <CharactersList />}
      {currentTab === "location" && <LocationList />}
      {currentTab === "episode" && <EpisodeList />}
    </div>
  );
}

export default App;
