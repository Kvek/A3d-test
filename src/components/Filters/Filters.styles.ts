import styled from "styled-components";

export const FilterContainer = styled.div<{ $showFilters: boolean }>`
  display: flex;
  flex-direction: column;
  transition: max-height 0.2s linear;
  height: 100%;
  max-height: ${({ $showFilters }) => ($showFilters ? "140px" : "0")};
  overflow: hidden;
`;

export const SearchContainer = styled.div`
  flex: 3;
  padding: 10px;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0 10px;
`;

export const Dropdowns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 5px;
  font-size: 11px;
  color: #6b778c;
  text-transform: capitalize;

  label {
    margin-bottom: 5px;
  }
`;
