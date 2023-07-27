export type Status = "Dead" | "Alive" | "unknown";

export type Gender = "Female" | "Male" | "Genderless" | "unknown";

export interface CharacterLocation {
  name: string;
  url: string;
}

export interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

export interface Endpoints {
  character: string;
  location: string;
  episode: string;
}

export interface CharactersFilterParams {
  name?: string;
  type?: string;
  species?: string;
  status?: Status;
  gender?: Gender;
  page?: number;
}

export interface LocationFilterParams
  extends Pick<CharactersFilterParams, "name" | "type" | "page"> {
  dimension?: string;
}

export interface EpisodeFilterParams
  extends Pick<CharactersFilterParams, "name" | "page"> {
  episode?: string;
}

export interface Character extends ResourceBase {
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

export interface Location extends ResourceBase {
  type: string;
  dimension: string;
  residents: string[];
}

export interface Episode extends ResourceBase {
  air_date: string;
  episode: string;
  characters: string[];
}

export interface ApiResponse<T> {
  status: number;
  statusMessage: string;
  data: T;
}

export type ListInfoType = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export interface Info<T> {
  info: ListInfoType;
  results: Array<T>;
}

export type CharacterListApiResponse = Info<Character>;

export type LocationListApiResponse = Info<Location>;

export type EpisodeListApiResponse = Info<Episode>;
