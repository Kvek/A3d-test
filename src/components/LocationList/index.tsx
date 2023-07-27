import { getLocationList } from "../../shared/api";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectSearchQuery } from "../../store/reducers/filterSlice";
import {
  selectCurrentPage,
  selectLocationinfo,
  setCurrentPage,
  updateLocationListData,
} from "../../store/reducers/locationSlice";
import { ListTable } from "../ListTable";
import { TableBodyCell, TableHeadCell } from "../Table";
import { TRow } from "../Table/Table.styles";
import { Container } from "./LocationList.styles";

import { format } from "date-fns";

const listLabels = ["id", "name", "type", "dimension", "residents", "created"];

export const LocationList = () => {
  const dispatch = useAppDispatch();
  const listItems = useAppSelector(({ location }) => location.data);
  const info = useAppSelector(selectLocationinfo);
  const currentPage = useAppSelector(selectCurrentPage);
  const nextpage = currentPage + 1;
  const prevPage = currentPage - 1;
  const searchQuery = useAppSelector(selectSearchQuery);

  const { pages = 1 } = info ?? {};

  const onPaginationClickHandler = async (page: number) => {
    try {
      const data = (await getLocationList(page)).data;

      dispatch(updateLocationListData(data));

      dispatch(setCurrentPage(page));
    } catch (error) {
      console.error(error);
    }
  };

  const filteredListData = listItems.filter(({ name, type, dimension }) => {
    if (searchQuery.trim() === "") return true;

    const searchedTerms = searchQuery.toLowerCase().split(" ");

    return searchedTerms.some(
      (v) =>
        name.toLowerCase().split(" ").includes(v) ||
        type.toLowerCase().split(" ").includes(v) ||
        dimension.toLowerCase().split(" ").includes(v)
    );
  });

  return (
    <Container>
      <ListTable
        currentPage={currentPage}
        info={info}
        onFinalClick={() => onPaginationClickHandler(pages)}
        onNextClick={() => onPaginationClickHandler(nextpage)}
        onPrevClick={() => onPaginationClickHandler(prevPage)}
        onStartClick={() => onPaginationClickHandler(0)}
        headerContent={listLabels.map((content) => (
          <TableHeadCell key={content} cellContent={content} />
        ))}
        bodyContent={filteredListData.map(
          ({ id, name, type, dimension, created }) => (
            <TRow key={id}>
              <TableBodyCell cellContent={id} />
              <TableBodyCell cellContent={name} />
              <TableBodyCell cellContent={type} />
              <TableBodyCell cellContent={dimension} />
              <TableBodyCell cellContent={"residents"} />
              <TableBodyCell
                cellContent={format(
                  new Date(new Date(created).getTime()),
                  "PPP"
                )}
              />
            </TRow>
          )
        )}
      />
    </Container>
  );
};
