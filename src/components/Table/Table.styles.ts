import styled from "styled-components";

export const TableWrapper = styled.div`
  height: 100%;
  overflow: scroll;
  position: relative;
`;

export const TableContainer = styled.table`
  width: 100%;
  color: #6b778c;
  border-collapse: collapse;
  text-align: left;
`;

export const TRow = styled.tr``;

export const THead = styled.thead`
  width: 100%;
  font-size: 11px;
  text-transform: uppercase;
  inset-block-start: 0;
  position: sticky;
`;

export const THeadCell = styled.th`
  padding: 10px;
  min-width: 100px;
  font-family: Inter, Arial, sans-serif;
  background-color: #f2f6fc;
  height: 30px;
`;

export const TBody = styled.tbody`
  background-color: #fff;
`;

export const TBodyCell = styled.td`
  min-width: 100px;
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  height: 30px;

  ${({ width }) => {
    if (width) {
      return `${width}px`;
    }
  }};
`;
