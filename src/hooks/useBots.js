const filtered = bots
  .filter((bot) =>
    filterClass ? bot.bot_class === filterClass : true
  )
  .filter((bot) =>
    searchQuery ? bot.name.toLowerCase().includes(searchQuery.toLowerCase()) : true
  );
