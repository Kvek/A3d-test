import { SearchBox } from "../SearchBox/SearchBox";
import { List, ListCol, ListHeader, ListItem, NoResults } from "./CharactersList.styles";

interface Item {
	"name": string;
	"status": string;
	"species": string;
	"image": string;
	"id": number;
};

interface Props {
	items: Item[];
	onQueryChange: (query: string) => void;
	query: string;
}

export const CharactersList = ({items, query, onQueryChange}:Props) => {
	const setQuery = (q:string) => {
		onQueryChange(q);
	}

	return(
		<>
			<SearchBox query={query} setQuery={setQuery}>Search characters:</SearchBox>
			<List>
				<ListHeader>
					<ListCol width="120">  </ListCol>
					<ListCol>Name</ListCol>
					<ListCol>Species</ListCol>
					<ListCol>Status</ListCol>
				</ListHeader>
				{items.length === 0 && 
					(<ListItem><NoResults> No results found with "<b>{query}</b>"</NoResults></ListItem>)
				}
				{items.map(({id, image, name, species, status })=>
				<ListItem key={id}>
					<ListCol width="120"><img src={image} alt='' width="100px"/></ListCol>
					<ListCol>{name}</ListCol>
					<ListCol>{species}</ListCol>
					<ListCol>{status}</ListCol>
				</ListItem>
				) }
			</List>
		</>
		);
}