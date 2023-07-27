import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`
  border: 1px solid #6b778c;
  border-radius: 8px;
  background: white;
  padding: 10px;
  outline: none;
  width: 100%;

  &:focus,
  &:hover,
  &:focus-visible {
    border: 1px solid #00d1c4;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    width: 15px;
    height: 15px;
    position: absolute;
    right: 10px;
    fill: #6b778c;
  }
`;
