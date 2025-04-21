//Detailed Bot info page
// src/pages/BotDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBotById } from "../utils/api"; 

const BotDetails = () => {
  const { id } = useParams();
  const [bot, setBot] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBotById(id)
      .then((data) => setBot(data))
      .catch((error) => setError(error.message));
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!bot) {
    return <div>Loading bot details...</div>;
  }

  return (
    <div>
      <h1>{bot.name}</h1>
      <p>{bot.catchphrase}</p>
      <img src={bot.avatar_url} alt={bot.name} />
    </div>
  );
};

export default BotDetails;
