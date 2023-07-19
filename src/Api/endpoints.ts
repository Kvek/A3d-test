import {
  CharacterListApiResponse,
  CharactersFilterParams,
  EpisodeFilterParams,
  EpisodeListApiResponse,
  LocationFilterParams,
  LocationListApiResponse,
} from "./interfaces";

import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";
const CHARACTER = "character";
const LOCATION = "location";
const EPISODE = "episode";

axios.defaults.baseURL = BASE_URL;

const getSingleResource = (
  path: typeof CHARACTER | typeof LOCATION | typeof EPISODE,
  id: number
) => axios.get(`/${path}/${id}`);

const getMutlipleResources = (
  path: typeof CHARACTER | typeof LOCATION | typeof EPISODE,
  ids: Array<number>
) => axios.get(`/${path}/${ids.toString()}`);

/**
 * Character endpoints
 **/

export const getCharacter = (id: number) => getSingleResource(CHARACTER, id);

export const getCharacterList = () =>
  axios.get<CharacterListApiResponse>(`/${CHARACTER}`);

export const getMultiCharacters = (ids: Array<number>) =>
  getMutlipleResources(CHARACTER, ids);

export const getFilteredCharactersList = ({
  name,
  status,
  species,
  type,
  gender,
}: CharactersFilterParams) => {
  axios.get(`/${CHARACTER}`, {
    params: { name, status, species, type, gender },
  });
};

/**
 * Location endpoints
 **/
export const getLocation = (id: number) => getSingleResource(LOCATION, id);

export const getLocationList = () =>
  axios.get<LocationListApiResponse>(`/${LOCATION}`);

export const getMultiLocations = (ids: Array<number>) =>
  getMutlipleResources(LOCATION, ids);

export const getFilteredLocationsList = ({
  name,
  type,
  dimension,
}: LocationFilterParams) => {
  axios.get(`/${LOCATION}`, {
    params: { name, type, dimension },
  });
};

/**
 * Episodes endpoints
 **/
export const getEpisode = (id: number) => getSingleResource(EPISODE, id);

export const getEpisodesList = () =>
  axios.get<EpisodeListApiResponse>(`/${EPISODE}`);

export const getMultiEpisodes = (ids: Array<number>) =>
  getMutlipleResources(EPISODE, ids);

export const getFilteredEpisodesList = ({
  name,
  episode,
}: EpisodeFilterParams) => {
  axios.get(`/${EPISODE}`, {
    params: { name, episode },
  });
};
