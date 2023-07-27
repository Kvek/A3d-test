import { ReactNode } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { togggleFilter } from "../../store/reducers/filterSlice";
import { selectTabList } from "../../store/reducers/tabsSlice";
import { TableFilter } from "../Filters";
import { Filter } from "../Icons";
import { Pagination, PaginationProps } from "../Pagination";
import { Table } from "../Table";
import { Tabs } from "../Tabs";
import { Container, CtaContainer, CtaWrapper } from "./listTable.styles";

interface ListTableProps extends PaginationProps {
  headerContent: ReactNode;
  bodyContent: ReactNode;
  showFilters?: boolean;
}

export const ListTable = ({
  headerContent,
  bodyContent,
  showFilters = true,
  ...props
}: ListTableProps) => {
  const dispatch = useAppDispatch();
  const tabs = useAppSelector(selectTabList);

  const displayFilter = useAppSelector(
    ({ filter: { showFilter } }) => showFilter
  );

  return (
    <Container>
      <CtaContainer>
        <CtaWrapper>
          <Tabs tabs={tabs} />

          {showFilters && (
            <Filter
              isActive={displayFilter}
              width={18}
              height={18}
              onClick={() => dispatch(togggleFilter())}
            />
          )}
        </CtaWrapper>
      </CtaContainer>

      {showFilters && <TableFilter />}

      <Table
        tabs={tabs}
        headerContent={headerContent}
        bodyContent={bodyContent}
      />

      <Pagination {...props} />
    </Container>
  );
};
