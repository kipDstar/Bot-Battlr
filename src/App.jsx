import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./pages/Home";
import BotDetails from "./pages/BotDetails";
import "./App.css"; 

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch bots from JSON Server
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  // Bot logic handlers
  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setArmy(army.filter((b) => b.id !== bot.id));
        setBots(bots.filter((b) => b.id !== bot.id));
      })
      .catch((error) => console.error("Error deleting bot:", error));
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bots/:id" element={<BotDetails />} />
    </Routes>
  );
};

export default App;
