// src/components/FilterBar/FilterBar.jsx
import React from "react";
import "./FilterBar.css";

const FilterBar = ({ filterClass, setFilterClass }) => {
  const botClasses = ["All", "Assault", "Defender", "Support", "Medic", "Witch", "Captain"];

  return (
    <div className="filter-bar">
      <label htmlFor="classFilter">Filter by class:</label>
      <select
        id="classFilter"
        value={filterClass}
        onChange={(e) => setFilterClass(e.target.value)}
      >
        {botClasses.map((botClass) => (
          <option key={botClass} value={botClass}>
            {botClass}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
// This component allows users to filter the bot collection by class.
// It takes in the current filter class and a function to update it as props.
// The `botClasses` array contains the available classes for filtering.
// The `filterClass` state is used to determine which class is currently selected.
// When the user selects a different class from the dropdown, the `setFilterClass` function is called to update the state.