import { styled } from "styled-components";

export const PaginationContainer = styled.div`
  min-height: 45px;
  background-color: #f2f6fc;
  color: #6b778c;
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

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

export const CtaContainers = styled.span``;
