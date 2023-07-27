import { ListInfoType } from "../../shared/interfaces";
import { ChevronFinal, ChevronNext } from "../Icons";
import { CtaContainers, PaginationContainer } from "./pagination.styles";

export interface PaginationProps {
  onNextClick: () => void;
  onFinalClick: () => void;
  onPrevClick: () => void;
  onStartClick: () => void;
  info?: ListInfoType;
  currentPage?: number;
}
export const Pagination = ({
  info,
  onNextClick,
  onFinalClick,
  onPrevClick,
  onStartClick,
  currentPage,
}: PaginationProps) => (
  <PaginationContainer>
    <span>
      {info?.pages && currentPage ? (
        <label htmlFor="pages">
          Page {currentPage} of {info.pages}
        </label>
      ) : (
        <></>
      )}
    </span>

    <CtaContainers>
      {info?.prev && <ChevronFinal flip onClick={onStartClick} />}
      {info?.prev && <ChevronNext flip onClick={onPrevClick} />}
      {info?.next && <ChevronNext onClick={onNextClick} />}
      {info?.next && <ChevronFinal onClick={onFinalClick} />}
    </CtaContainers>
  </PaginationContainer>
);
