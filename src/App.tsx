import { useEffect, useState } from "react";

import { getCharacterList } from "./Api/endpoints";
import { Character } from "./Api/interfaces";
import { CharactersList } from "./CharactersList/CharactersList";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<Character[]>([]);
  const [apiResult, setApiResult] = useState<Character[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getCharacterList();

        setApiResult(res.data.results);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (!apiResult) return;

    setItems(apiResult);
  }, [query, apiResult]);

  return (
    <div className="App">
      <CharactersList items={items} onQueryChange={setQuery} query={query} />
    </div>
  );
}

export default App;
