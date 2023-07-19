import { Container, SearchInput } from "./SearchBox.styles";

interface SearchProps {
	query: string;
	setQuery: (s: string) => void;
	children?: string | JSX.Element | JSX.Element[];
};

export const SearchBox = ({query, setQuery, children}: SearchProps) =>
{
	const onChange = (e: { currentTarget: { value: string; }; }) =>{ 
		setQuery(e.currentTarget.value);
	}

	return(
	<Container>
		{children}
		<SearchInput value={query} onChange={onChange} />
	</Container>);
}
