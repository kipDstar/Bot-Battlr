//Detailed Bot info page
// src/pages/BotDetails.jsx
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BotContext } from '../context/BotContext';
import { fetchBotById } from '../utils/api';

const BotDetails = () => {
  const { id } = useParams();
  const { bots } = useContext(BotContext);
  const [botDetails, setBotDetails] = useState(null);

  useEffect(() => {
    const bot = bots.find((bot) => bot.id === id);
    if (bot) {
      setBotDetails(bot);
    } else {
      fetchBotById(id).then(setBotDetails);
    }
  }, [id, bots]);

  if (!botDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{botDetails.name}</h2>
      <img src={botDetails.imageUrl} alt={botDetails.name} />
      <p>{botDetails.catchphrase}</p>
      <p>{botDetails.description}</p>
      <button>Remove from Army</button>
    </div>
  );
};

export default BotDetails;
