import styled from "styled-components/macro";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const CtaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  min-height: 40px;
  background-color: #fff;
  padding: 0 10px;
  border-bottom: 1px solid #f2f6fc;

  svg {
    cursor: pointer;
    fill: #6b778c85;
  }

  svg:hover {
    fill: #6b778c;
  }
`;

export const CtaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;
