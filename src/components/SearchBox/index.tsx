import { Search } from "../Icons";
import { Container, SearchContainer, SearchInput } from "./SearchBox.styles";

interface SearchProps {
  query: string;
  setQuery: (s: string) => void;
  children?: string | JSX.Element | JSX.Element[];
}

export const SearchBox = ({ query, setQuery, children }: SearchProps) => {
  const onChange = (e: { currentTarget: { value: string } }) => {
    setQuery(e.currentTarget.value);
  };

  return (
    <Container>
      {children}
      <SearchContainer>
        <SearchInput value={query} onChange={onChange} />
        <Search />
      </SearchContainer>
    </Container>
  );
};
