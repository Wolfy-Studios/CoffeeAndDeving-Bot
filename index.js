const discord = require('discord.js');
const bot = discord.Client();
const fs = require('fs');


//==Command Handler Below==

bot.commands = new discord.Collection();

fs.readdir('./commands/', (err, files) => {
  if(err) console.error(err);
  

})
