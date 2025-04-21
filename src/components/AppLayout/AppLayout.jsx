import React from "react";
import "./AppLayout.css";

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>🤖 Bot Battlr</h1>
        <p>Build your futuristic bot army!</p>
      </header>

      <main className="app-main">{children}</main>

      <footer className="app-footer">
        <p>&copy; 2025 Galactic Devs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AppLayout;
