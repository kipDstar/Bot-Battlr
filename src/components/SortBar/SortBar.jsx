// src/components/SortBar/SortBar.jsx
import React from "react";
import "./SortBar.css";

const SortBar = ({ sortOption, setSortOption }) => {
  return (
    <div className="sort-bar">
      <label htmlFor="sortBots">Sort by:</label>
      <select
        id="sortBots"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default SortBar;
// This component allows users to sort the bot collection by different attributes.
// It takes in the current sort option and a function to update it as props.
// The `sortOption` state is used to determine which sorting option is currently selected.
// When the user selects a different sorting option from the dropdown, the `setSortOption` function is called to update the state.
// The available sorting options are "Default", "Health", "Damage", and "Armor".