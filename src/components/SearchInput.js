import React from "react";

const SearchInput = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search Robot"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchInput;
