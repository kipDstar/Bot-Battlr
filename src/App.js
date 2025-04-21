import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BotDetails from './pages/BotDetails';
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';
import { useState } from 'react';
import useFetch from './hooks/useFetch';

function App() {
  const [army, setArmy] = useState([]);
  const { data: bots, loading, error, refetch } = useFetch('http://localhost:8001/bots');

  const enlistBot = (bot) => {
    const isClassInArmy = army.some(b => b.bot_class === bot.bot_class);
    
    if (!isClassInArmy && !army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    } else if (isClassInArmy) {
      alert(`You can only have one ${bot.bot_class} in your army!`);
    }
  };

  const releaseBot = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const dischargeBot = async (botId) => {
    try {
      const response = await fetch(`http://localhost:8001/bots/${botId}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) throw new Error('Failed to discharge bot');
      
      setArmy(army.filter(bot => bot.id !== botId));
      refetch();
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  if (loading) return <div className="loading-screen">Initializing Bot Network...</div>;
  if (error) return <ErrorDisplay error={error} onRetry={refetch} />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home 
            bots={bots} 
            army={army}
            onEnlist={enlistBot}
            onRelease={releaseBot}
            onDischarge={dischargeBot}
          />
        } />
        <Route path="/bots/:id" element={
          <BotDetails 
            bots={bots}
            army={army}
            onEnlist={enlistBot}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;