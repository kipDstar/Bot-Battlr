import { createContext, useContext, useEffect, useState } from "react";
import { getBots, deleteBot } from "../utils/api";

const BotContext = createContext();

export function BotProvider({ children }) {
  const [bots, setBots] = useState([]);
  const [filteredBots, setFilteredBots] = useState([]);
  const [sortType, setSortType] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [botArmy, setBotArmy] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBots().then(setBots);
  }, []);

  useEffect(() => {
    let updated = [...bots];

    if (filterClass) {
      updated = updated.filter((bot) => bot.bot_class === filterClass);
    }

    if (searchQuery) {
        updated = updated.filter((bot) =>
          bot.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    if (sortType) {
      updated.sort((a, b) => b[sortType] - a[sortType]);
    }

    setFilteredBots(updated);
  }, [bots, filterClass, sortType, searchQuery]);

  const enlistBot = (bot) => {
    if (botArmy.find((b) => b.id === bot.id)) return;
    setBotArmy((prev) => [...prev, bot]);
  };

  const removeFromArmy = (botId) => {
    setBotArmy((prev) => prev.filter((b) => b.id !== botId));
  };

  const permanentlyDeleteBot = async (botId) => {
    await deleteBot(botId);
    setBots((prev) => prev.filter((b) => b.id !== botId));
    setBotArmy((prev) => prev.filter((b) => b.id !== botId));
  };

  return (
    <BotContext.Provider
      value={{
        bots,
        loading,
        error,
        setError,
        army,
        addToArmy,
        removeFromArmy,
        filteredBots,
        releaseBot,
        sortType,
        setSortType,
        filterClass,
        setFilterClass,
        botArmy,
        enlistBot,
        removeFromArmy,
        permanentlyDeleteBot,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </BotContext.Provider>
  );
}

export function useBotContext() {
  return useContext(BotContext);
}
