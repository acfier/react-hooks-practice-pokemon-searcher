import React from "react";

function Search({search, setSearch}) {

  function handleSearchChange (e) {
    setSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={handleSearchChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
