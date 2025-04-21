import React from "react";
import "./BotCard.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useBotContext } from "../../context/BotContext";

function BotCard({ bot }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { enlistBot } = useBotContext();

  const handleClick = () => {
    if (location.pathname === "/") {
      enlistBot(bot);
    } else {
      navigate(`/bots/${bot.id}`);
    }
  };

  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
    </div>
  );
}

export default BotCard;
// This component is responsible for displaying individual bot cards.
// It uses the `useNavigate` and `useLocation` hooks from React Router to handle navigation.