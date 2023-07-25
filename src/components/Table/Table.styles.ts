import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;
  margin: 25px;
  position: relative;
  background-color: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const TableContainer = styled.table`
  width: 100%;
  height: 100%;
  color: #6b778c;
  border-collapse: collapse;
  text-align: left;
`;

export const TRow = styled.tr`
  width: 100%;
`;

export const THead = styled.thead`
  width: 100%;
  font-size: 9px;
  text-transform: uppercase;
  inset-block-start: 0;
  position: sticky;
`;

export const THeadCell = styled.th`
  font-family: Inter, Arial, sans-serif;
  height: 45px;
  min-width: 100px;
  position: sticky;
  top: 0;
  background-color: #f2f6fc;
  padding: 0;
`;

export const TBody = styled.tbody`
  background-color: #fff;
`;

export const TBodyCell = styled.td`
  min-width: 100px;
  padding: 0;
  margin: 0;

  ${({ width }) => {
    if (width) {
      return `${width}px`;
    }
  }};
`;

export const PaginationContainer = styled.div`
  position: sticky;
  bottom: 0;
  height: 45px;
  background-color: #f2f6fc;
  color: #6b778c;
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;

  label {
    margin-right: 5px;
  }

  span {
    margin: 0 20px;
    display: flex;
    align-items: center;
  }

  svg {
    fill: #6b778c85;
    width: 16px;
    height: 16px;
    cursor: pointer;
    margin: 0 10px;
  }

  svg:hover {
    fill: #6b778c;
  }
`;

export const NoResults = styled(THeadCell)`
  border-style: dashed;
  border: 1px solid grey;
  text-align: center;
`;
