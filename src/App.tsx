import { useEffect, useState } from "react";

import { CharactersList } from "./CharactersList/CharactersList";

import "./App.css";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [apiResult, setApiResult] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setApiResult(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (!apiResult) return;

    setItems(
      apiResult.filter((item) =>
        Object.keys(item).some((key) =>
          (item[key] as string).toUpperCase.includes(query.toUpperCase())
        )
      )
    );
  }, [query, apiResult]);

  return (
    <div className="App">
      <CharactersList items={items} onQueryChange={setQuery} query={query} />
    </div>
  );
}

export default App;
