import React, { useEffect, useState } from 'react';
import './App.css';
import { CharactersList } from './CharactersList/CharactersList';
import axios from 'axios';


function App() {
  const [items, setItems] = useState([]);
  const [apiResult, setApiResult] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then((res) => setApiResult); 
  },[]);

  const [query, setQuery] = useState('');
	useEffect(() => {
		setItems(
			apiResult.filter(
				(item) => {
					return  Object.keys(item)
					.some((key) => {
						return (item[key] as string).toUpperCase.includes(query.toUpperCase());
					})
				}
			)
		);
	},[query, apiResult]);

  return (
    <div className="App">
      <CharactersList items={items} onQueryChange={setQuery} query={query} />
    </div>
  );
}

export default App;
