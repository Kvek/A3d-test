import { styled } from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  height: 100%;
`;

export const Tab = styled.button<{ $isActive: boolean }>`
  color: #6b778c;

  ${({ $isActive }) => {
    if ($isActive) {
      return `
      box-shadow: 0px 2px 0px 0px #00d1c4;
      color: #000;
      `;
    }
  }};
  border: none;
  background: none;
  display: flex;
  height: calc(100% - 4px);
  align-items: center;
  box-sizing: border-box;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 0px 0px #00d1c4;
  }
`;
