import { useId } from "react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaSearch, FaTimes } from "react-icons/fa";

import css from "./SearchBar.module.css";
import "./SearchBar.css";

const SearchBar = ({ onSetQuery }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("f.e", e.target);
    console.log("f.c", e.currentTarget);
    // const query = e.target.query.value;
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    onSetQuery(query);
    setQuery("");
    e.target.reset();
  };

  const clearSearch = (e) => {
    // onSubmit("");
    console.log("e", e);
    console.log("t", e.target);
    console.log("c", e.currentTarget);
    // e.target.query.value = "";
    setQuery("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <div className={css["input-container"]}>
          <input
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search images and photos"
            autoFocus
          />
          <FaSearch className="icon search-icon" />
          {/* {query && ( */}
          <FaTimes className="icon clear-icon" onClick={clearSearch} />
          // )}
        </div>
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
