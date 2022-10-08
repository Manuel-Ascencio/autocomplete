import React, { useState } from "react";
import { useAutocomplete } from "./useAutocomplete";
import { SearchBar } from "./SearchBar";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const autocompleteResults = useAutocomplete(searchQuery);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <main className="main">
      <section className="container">
        <h1>Search the user</h1>
        <SearchBar
          searchQuery={searchQuery}
          handleOnChange={(e) => {
            handleSearchInputChange(e);
          }}
          autocompleteResults={autocompleteResults}
        />
      </section>
    </main>
  );
};

export default App;
