import { useState } from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";

function App() {
  const [query, setQuery] = useState("");
  console.log("query:", query);

  const getQuery = (queryText) => {
    console.log("getQuery", queryText);
    setQuery(queryText);
  };

  return (
    <>
      <SearchBar onSetQuery={getQuery} />
    </>
  );
}

export default App;
