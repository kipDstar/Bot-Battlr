import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { BotProvider } from "./context/BotContext";

import "./styles/global.css";
import "./styles/themes.css";
import "./styles/animations.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BotProvider>
        <App />
      </BotProvider>
    </BrowserRouter>
  </React.StrictMode>
);
