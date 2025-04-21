// filepath: /home/jesse/Development/code/Projects/bot-battlr-project/src/utils/api.js

const API_URL = "http://localhost:8001";

export const getBots = async () => {
  const response = await fetch(`${API_URL}/bots`);
  if (!response.ok) {
    throw new Error("Failed to fetch bots");
  }
  return response.json();
};

export const deleteBot = async (botId) => {
  const response = await fetch(`${API_URL}/bots/${botId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete bot");
  }
};