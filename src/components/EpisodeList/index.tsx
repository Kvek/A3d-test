import { getEpisodesList } from "../../shared/api";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectCurrentPage,
  selectEpisodeInfo,
  setCurrentPage,
  updateEpisodeListData,
} from "../../store/reducers/episodeSlice";
import { ListTable } from "../ListTable";
import { TableBodyCell, TableHeadCell } from "../Table";
import { TRow } from "../Table/Table.styles";
import { Container } from "./EpisodeList.styles";

import { format } from "date-fns";

const listLabels = ["id", "name", "Air Date", "episode", "url", "created"];

export const EpisodeList = () => {
  const dispatch = useAppDispatch();
  const listItems = useAppSelector(({ episode }) => episode.data);
  const currentPage = useAppSelector(selectCurrentPage);
  const nextpage = currentPage + 1;
  const prevPage = currentPage - 1;
  const info = useAppSelector(selectEpisodeInfo);
  const { pages = 0 } = info ?? {};

  const onPaginationClickHandler = async (page: number) => {
    try {
      const data = (await getEpisodesList(page)).data;

      dispatch(updateEpisodeListData(data));

      dispatch(setCurrentPage(page));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <ListTable
        showFilters={false}
        currentPage={currentPage}
        info={info}
        onFinalClick={() => onPaginationClickHandler(pages)}
        onNextClick={() => onPaginationClickHandler(nextpage)}
        onPrevClick={() => onPaginationClickHandler(prevPage)}
        onStartClick={() => onPaginationClickHandler(0)}
        headerContent={listLabels.map((content) => (
          <TableHeadCell key={content} cellContent={content} />
        ))}
        bodyContent={listItems.map(
          ({ id, name, air_date: airDate, episode, url, created }) => (
            <TRow key={id}>
              <TableBodyCell cellContent={id} />
              <TableBodyCell cellContent={name} />
              <TableBodyCell cellContent={airDate} />
              <TableBodyCell cellContent={episode} />
              <TableBodyCell cellContent={url} />
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
