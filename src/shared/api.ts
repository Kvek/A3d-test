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
export const CHARACTER = "character";
export const LOCATION = "location";
export const EPISODE = "episode";

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

export const getCharacterList = (page?: number) =>
  axios.get<CharacterListApiResponse>(`/${CHARACTER}?page=${page}`);

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

export const getLocationList = (page?: number) =>
  axios.get<LocationListApiResponse>(`/${LOCATION}?page=${page}`);

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

export const getEpisodesList = (page?: number) =>
  axios.get<EpisodeListApiResponse>(`/${EPISODE}?page=${page}`);

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
