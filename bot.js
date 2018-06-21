const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {

  console.log("Mandingo viene!!");

});

client.on("message", message => {

  if(message.content == "polla"){
 
      message.channel.send('Que ricooo!!!', {
            files: [
                "https://2.bp.blogspot.com/-RHGNMuJ7SX8/WytimjR8YzI/AAAAAAAACGk/fMJCAOKcsIkUP5SrkPs9Pz9jFMsP6aWrwCLcBGAs/s320/este.jpg"
            ]
        });
  
  }

});

client.login(process.env.BOT_TOKEN);

