/* eslint-disable @typescript-eslint/no-unused-vars */
import Select from "react-select";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateSearch } from "../../store/reducers/filterSlice";
import { SearchBox } from "../SearchBox";
import {
  Dropdowns,
  FilterContainer,
  Filters,
  SearchContainer,
} from "./Filters.styles";

export const TableFilter = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector(({ filter: { searchQuery } }) => searchQuery);
  const filters = useAppSelector(({ character: { filters } }) => filters);

  const displayFilter = useAppSelector(
    ({ filter: { showFilter } }) => showFilter
  );

  const characters = {
    status: ["alive", "dead", "unknown"],
    gender: ["female", "male", "genderless", "unknown"],
    species: [],
    type: [],
  };

  const locations = {
    type: [],
    dimension: [],
  };

  const episodes = {
    episode: [],
  };

  return (
    <FilterContainer $showFilters={displayFilter}>
      <SearchContainer>
        <SearchBox query={query} setQuery={(e) => dispatch(updateSearch(e))} />
      </SearchContainer>

      <Filters>
        {(Object.keys(filters) as Array<keyof typeof filters>).map((entry) => (
          <Dropdowns key={entry}>
            <label htmlFor={entry}>{entry}</label>

            <Select
              id={entry}
              options={filters[entry]}
              onChange={console.log}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  cursor: "pointer",
                }),
                container: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "100%",
                  margin: 5,
                }),
              }}
            />
          </Dropdowns>
        ))}
      </Filters>
    </FilterContainer>
  );
};
