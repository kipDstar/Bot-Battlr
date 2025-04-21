import React, { useContext } from "react";
import { BotContext } from "../../context/BotContext";
import "./SearchBar.css";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(BotContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search bots by name..."
      />
    </div>
  );
};

export default SearchBar;
// This component is responsible for the search functionality in the bot collection.