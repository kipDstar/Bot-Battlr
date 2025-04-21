import React, { createContext, useEffect, useState } from "react";

export const BotContext = createContext();

export const BotProvider = ({ children }) => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const BASE_URL = "http://localhost:8001/bots";

  // Fetch bots on mount
  useEffect(() => {
    const fetchBots = async () => {
      try {
        const res = await fetch(BASE_URL);
        if (!res.ok) throw new Error("Failed to fetch bots");
        const data = await res.json();
        setBots(data);
      } catch (err) {
        setError("Failed to load bots.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBots();
  }, []);

  // Add bot to army (only once)
  const enlistBot = (bot) => {
    const alreadyInArmy = army.find((b) => b.id === bot.id);
    if (!alreadyInArmy) {
      setArmy((prev) => [...prev, bot]);
    }
  };

  // Remove bot from army
  const releaseBot = (botId) => {
    setArmy((prev) => prev.filter((bot) => bot.id !== botId));
  };

  // Delete bot from backend + frontend
  const dischargeBot = async (botId) => {
    try {
      const res = await fetch(`${BASE_URL}/${botId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete bot");
      setArmy((prev) => prev.filter((bot) => bot.id !== botId));
      setBots((prev) => prev.filter((bot) => bot.id !== botId));
    } catch (err) {
      setError("Failed to discharge bot.");
      console.error(err);
    }
  };

  return (
    <BotContext.Provider
      value={{
        bots,
        army,
        loading,
        error,
        enlistBot,
        releaseBot,
        dischargeBot,
      }}
    >
      {children}
    </BotContext.Provider>
  );
};
