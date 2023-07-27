import { ReactNode } from "react";

import { TabType } from "../../store/reducers/tabsSlice";
import {
  TableContainer,
  TableWrapper,
  TBody,
  TBodyCell,
  THead,
  THeadCell,
  TRow,
} from "./Table.styles";

type TableProps = {
  headerContent: ReactNode;
  bodyContent: ReactNode;
  tabs?: TabType[];
};

export interface CellInterface
  extends React.TdHTMLAttributes<HTMLTableCellElement> {
  cellContent: ReactNode;
}

export const TableHeadCell = ({ cellContent, ...props }: CellInterface) => (
  <THeadCell {...props}>{cellContent}</THeadCell>
);

export const TableBodyCell = ({ cellContent, ...props }: CellInterface) => (
  <TBodyCell {...props}>{cellContent}</TBodyCell>
);

export const TableRow = ({ rowContent }: { rowContent: ReactNode }) => (
  <TRow>{rowContent}</TRow>
);

export const Table = ({ headerContent, bodyContent }: TableProps) => (
  <TableWrapper>
    <TableContainer>
      <THead>
        <TableRow rowContent={headerContent} />
      </THead>

      <TBody>{bodyContent}</TBody>
    </TableContainer>
  </TableWrapper>
);
