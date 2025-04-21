// src/components/BotCollection/BotCollection.jsx
import React, { useContext, useEffect, useState } from 'react';
import BotCard from '../BotCard/BotCard';
import { BotContext } from '../../context/BotContext';
import { fetchBots } from '../../utils/api';
import './BotCollection.css';

const BotCollection = () => {
  const { bots, setBots } = useContext(BotContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBots = async () => {
      try {
        const botData = await fetchBots();
        setBots(botData);
      } catch (error) {
        console.error('Error fetching bots:', error);
      } finally {
        setLoading(false);
      }
    };

    getBots();
  }, [setBots]);

  if (loading) {
    return <div>Loading bots...</div>;
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
