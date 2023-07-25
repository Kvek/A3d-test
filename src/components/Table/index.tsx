import { ReactNode } from "react";

import { ChevronFinal, ChevronNext } from "../Logos";
import {
  Container,
  PaginationContainer,
  TableContainer,
  TBody,
  TBodyCell,
  THead,
  THeadCell,
  TRow,
} from "./Table.styles";

type TableProps = {
  headerContent: ReactNode;
  bodyContent: ReactNode;
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
  <Container>
    <TableContainer>
      <THead>
        <TableRow rowContent={headerContent} />
      </THead>

      <TBody>{bodyContent}</TBody>
    </TableContainer>

    <PaginationContainer>
      <span>
        <label htmlFor="Rows"> Rows per page:</label>
        <select id="Rows" />
      </span>

      <span />

      <span>
        <ChevronFinal flip />
        <ChevronNext flip />
        <ChevronNext />
        <ChevronFinal />
      </span>
    </PaginationContainer>
  </Container>
);
