const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {

  console.log("Mandingo viene!!");

});

client.on("message", message => {

  if(message.content == "polla"){
 
      message.reply("Q rico!!");
  
  }

});

client.login(process.env.BOT_TOKEN);

