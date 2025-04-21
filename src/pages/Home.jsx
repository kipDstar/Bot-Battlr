// src/pages/Home.jsx
import React from 'react';
import BotCollection from '../components/BotCollection/BotCollection';
import FilterBar from '../components/FilterBar/FilterBar';
import SortBar from '../components/SortBar/SortBar';

const Home = () => {
  return (
    <div className="home-page">
      <FilterBar />
      <SortBar />
      <BotCollection />
    </div>
  );
};

export default Home;
