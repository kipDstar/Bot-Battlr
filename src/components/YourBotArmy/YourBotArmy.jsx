import React from "react";
import "./YourBotArmy.css";
import { useBotContext } from "../../context/BotContext";

function YourBotArmy() {
  const { botArmy, removeFromArmy } = useBotContext();

  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {botArmy.length === 0 ? (
        <p>No bots enlisted yet.</p>
      ) : (
        <div className="bot-army-list">
          {botArmy.map((bot) => (
            <div key={bot.id} className="army-bot-card">
              <img src={bot.avatar_url} alt={bot.name} />
              <h3>{bot.name}</h3>
              <p>{bot.bot_class}</p>
              <button onClick={() => removeFromArmy(bot.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;
