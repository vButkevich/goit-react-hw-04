import { useState } from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";

function App() {
  const [query, setQuery] = useState("");
  console.log("App.query:", query);

  const getQuery = (query) => {
    console.log("App.getQuery", query);
    setQuery(query);
  };

  return (
    <>
      <SearchBar onSearch={getQuery} />
    </>
  );
}

export default App;
