# 🤖 Bot Battlr

Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom-build your own Bot Army. This application allows users to browse a catalog of futuristic bots, view detailed bot specs, and build a personal army by enlisting, releasing, or permanently discharging bots.

> Developed as a learning project to master key React concepts: components, props, state management, event handling, conditional rendering, and data fetching.

## 🚀 Features

### ✅ Core Functionalities

- **View Bot Catalog**: Browse a collection of bots with unique classes, attributes, and personalities.
- **Enlist Bots**: Add bots to your personal army by clicking on them in the main collection.
- **Your Bot Army**: View your selected bots in a separate component.
- **Release Bots**: Remove bots from your army (they return to the main collection).
- **Discharge Bots**: Permanently remove a bot from both your army and the database with a single click.

### 🧠 Advanced (Optional) Functionalities

- **Bot Details View**: View detailed specs of a single bot in a dedicated `BotSpecs` component.
- **Sorting & Filtering**: Sort bots by attributes (health, damage, armor) or filter by class using the `SortBar`.
- **Unique Class Rule**: Limit enlisting to one bot per `bot_class` to maintain a strategic edge.

## 🌐 Live Demo

> _[Not deployed]_ – Run locally using the instructions below.


## 🛠️ Tech Stack

- **Frontend**: React (CRA), JavaScript, HTML, CSS
- **Backend**: JSON Server
- **Version Control**: Git & GitHub
- **Styling**: Custom futuristic UI with glowing effects and bold typography


## ⚙️ Getting Started

### 1. Clone the Repository

bash
git clone https://github.com/YOUR_USERNAME/bot-battlr.git
cd bot-battlr


### 2. Install Dependencies

bash
npm install


### 3. Start the JSON Server

Install globally (if not already):
bash
npm install -g json-server


Start server with:

bash
json-server --watch db.json --port 8001


Visit the data route:

http://localhost:8001/bots


### 4. Start the React Application
npm start

This will open the app in your default browser at:

http://localhost:3000


## 🧩 Project Structure

bash
bot-battlr/
├── public/
├── src/
│   ├── components/
│   │   ├── BotCard.js
│   │   ├── BotCollection.js
│   │   ├── YourBotArmy.js
│   │   ├── BotSpecs.js        # Advanced
│   │   └── SortBar.js         # Advanced
│   ├── styles/
│   │   └── global.css
│   ├── App.js
│   └── index.js
├── db.json                    # JSON Server database
└── README.md

## 📡 API Endpoints

### Base URL
http://localhost:8001

### Endpoints

- `GET /bots` — Returns an array of bot objects.
- `DELETE /bots/:id` — Deletes a bot permanently from the backend.

## 🔮 UI Vision

This app is designed to evoke a **futuristic, digital battlefield** with a sleek and immersive interface:

- **Bold Typography** and **Neon Color Palette**: Reflects energy and technology.
- **Animated Cards**: Bots animate on hover for interactive feedback.
- **Micro Interactions**: Smooth transitions for enlisting/releasing bots.
- **Modular Components**: Each UI section is built using reusable, cleanly written components.

## 🧪 Sample Bot Data

{
  "id": 101,
  "name": "wHz-93",
  "health": 94,
  "damage": 20,
  "armor": 63,
  "bot_class": "Support",
  "catchphrase": "1010010101001101100011000111101",
  "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1"
}

## 📖 Learning Goals

- Apply foundational React concepts: components, props, state, useEffect, event handling
- Handle data fetching and manipulation using a local API
- Design a clean, responsive, and visually engaging UI
- Use conditional rendering and list rendering
- Build modular, reusable, and DRY code

## ✅ Requirements Checklist

- [x] Bots displayed in a catalog (`BotCollection`)
- [x] Enlist bots to your army (`YourBotArmy`)
- [x] Prevent duplicate enlistment
- [x] Ability to release and discharge bots
- [x] Persistent delete using JSON server
- [x] Well-documented README

## 👨‍🚀Author

Jesse Kipsang;  
Built with ❤️ and ☕ in 2025

## 📎 License

This project is for educational purposes only.  
Use, fork, and modify freely – just give credit where it’s due