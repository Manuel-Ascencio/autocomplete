import { useEffect, useState } from "react";
import { Trie } from "./Trie";
import { suggestionsDatabase } from "./suggestionsDatabase";

const trie = new Trie(suggestionsDatabase);

const useAutocomplete = (searchQuery) => {
  const [autocompleteResults, setAutocompleteResults] = useState([]);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      setAutocompleteResults(trie.getWords(searchQuery));
    } else {
      setAutocompleteResults([]);
    }
  }, [searchQuery]);

  return autocompleteResults;
};

export { useAutocomplete };
