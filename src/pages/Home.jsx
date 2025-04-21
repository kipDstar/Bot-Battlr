import React from "react";
import "./Home.css";
import FilterBar from "../components/FilterBar/FilterBar";
import SortBar from "../components/SortBar/SortBar";
import BotCollection from "../components/BotCollection/BotCollection";
import YourBotArmy from "../components/YourBotArmy/YourBotArmy";

function Home() {
  return (
    <div className="home-page">
      <YourBotArmy />
      <FilterBar />
      <SortBar />
      <BotCollection />
    </div>
  );
}

export default Home;
// This is the main page of the application, where users can view their bot army,
// filter and sort the bot collection, and manage their bots.
// The Home component imports and uses the YourBotArmy, FilterBar, SortBar, and BotCollection components.