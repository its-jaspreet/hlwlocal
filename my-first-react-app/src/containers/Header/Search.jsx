import React from "react";

function Search() {
  return (
    <div className="search">
      <img src="./src/assets/Header/search-icon.svg" />
      <input 
        type="text" 
        placeholder="Search for salons, services..." 
      />
    </div>
  );
}

export default Search;
