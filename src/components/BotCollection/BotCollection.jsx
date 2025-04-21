// src/components/BotCollection/BotCollection.jsx
import React, { useContext, useEffect, useState } from 'react';
import BotCard from '../BotCard/BotCard';
import { BotContext } from '../../context/BotContext';
import { getBots } from '../../utils/api';
import './BotCollection.css';

const BotCollection = () => {
  const { bots, setBots } = useContext(BotContext); // Ensure setBots is destructured correctly
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Ensure error is defined

  useEffect(() => {
    getBots()
      .then((data) => {
        setBots(data); // Use setBots to update the context
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bots:", err);
        setError(err.message); // Correctly set the error message
        setLoading(false);
      });
  }, []); // Empty dependency array to run only once on mount

  if (loading) {
    return <div>Loading bots...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Render error message
  }

  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} />
      ))}
    </div>
  );
};

export default BotCollection;
