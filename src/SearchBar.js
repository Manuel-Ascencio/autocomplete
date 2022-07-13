import React from "react";

const boldPassedPrefix = (text, prefix) => {
  return (
    <span>
      {text.slice(0, prefix.length)}
      <span className="font-bold">{text.slice(prefix.length)}</span>
    </span>
  );
};

const SearchBar = (props) => {
  const hasSearchResults = props.autocompleteResults.length > 0;

  return (
    <>
      <div
        className={`border flex items-center h-12 rounded-3xl searchBar mx-auto mt-7 ${
          hasSearchResults ? "rounded-b-none" : ""
        }`}
      >
        <div className="grid place-items-center z-40"></div>
        <input
          className="enter"
          type="text"
          onChange={(e) => {
            if (props.handleOnChange) {
              props.handleOnChange(e);
            }
          }}
          value={props.searchQuery}
        />
      </div>
      {!hasSearchResults}
      {hasSearchResults && (
        <div className="searchBar mx-auto border border-t-0 rounded-2xl rounded-t-none py-3 shadow-lg">
          <ul className="items">
            {props.autocompleteResults.map((autocompleteResult) => {
              return (
                <li className="results">
                  {boldPassedPrefix(autocompleteResult, props.searchQuery)}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export { SearchBar };
