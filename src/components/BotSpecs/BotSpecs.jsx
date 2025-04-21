// display an individual bot's information, such as its name, image, and other relevant details.
import React from 'react';
import { Link } from 'react-router-dom';
import './BotCard.css';

const BotCard = ({ bot }) => {
  return (
    <div className="bot-card">
      <img src={bot.imageUrl} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <Link to={`/bots/${bot.id}`}>View Details</Link>
    </div>
  );
};

export default BotCard;
