import { getCharacterList } from "../../shared/api";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectCurrentPage,
  setCurrentPage,
  updateCharacterListData,
} from "../../store/reducers/characterSlice";
import { selectSearchQuery } from "../../store/reducers/filterSlice";
import { Image } from "../Image";
import { ListTable } from "../ListTable";
import { TableBodyCell, TableHeadCell } from "../Table";
import { TRow } from "../Table/Table.styles";
import { Container } from "./CharactersList.styles";

const listLabels = ["Name", "Species", "Status"];

export const CharactersList = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const nextpage = currentPage + 1;
  const prevPage = currentPage - 1;
  const listItems = useAppSelector(({ character }) => character.data);
  const listInfo = useAppSelector(({ character }) => character.info);
  const { pages = 0 } = listInfo ?? {};
  const searchQuery = useAppSelector(selectSearchQuery);

  const onPaginationClickHandler = async (page: number) => {
    try {
      const data = (await getCharacterList(page)).data;

      dispatch(updateCharacterListData(data));

      dispatch(setCurrentPage(page));
    } catch (error) {
      console.error(error);
    }
  };

  const filteredListData = listItems.filter(({ name, species, status }) => {
    if (searchQuery.trim() === "") return true;

    const searchedTerms = searchQuery.toLowerCase().split(" ");

    return searchedTerms.some(
      (v) =>
        name.toLowerCase().split(" ").includes(v) ||
        status.toLowerCase().split(" ").includes(v) ||
        species.toLowerCase().split(" ").includes(v)
    );
  });

  return (
    <Container>
      <ListTable
        info={listInfo}
        onFinalClick={() => onPaginationClickHandler(pages)}
        onNextClick={() => onPaginationClickHandler(nextpage)}
        onPrevClick={() => onPaginationClickHandler(prevPage)}
        onStartClick={() => onPaginationClickHandler(0)}
        currentPage={currentPage}
        headerContent={listLabels.map((content, index) => (
          <TableHeadCell
            key={content}
            cellContent={content}
            colSpan={index === 0 ? 2 : 1}
            style={{
              paddingLeft: index === 0 ? 150 : 0,
            }}
          />
        ))}
        bodyContent={filteredListData.map(
          ({ id, image, name, species, status }) => (
            <TRow key={id}>
              <TableBodyCell
                width={100}
                cellContent={
                  <Image src={image} alt={name} width="100px" height="100px" />
                }
              />
              <TableBodyCell cellContent={name} style={{ paddingLeft: 50 }} />
              <TableBodyCell cellContent={species} />
              <TableBodyCell cellContent={status} />
            </TRow>
          )
        )}
      />
    </Container>
  );
};
