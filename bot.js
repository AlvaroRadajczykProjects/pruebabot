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

client.on("message", message => {

  if(message.content == "polla"){
 
      message.channel.send('Que ricooo!!!', {
            files: [
                "http://static1.squarespace.com/static/57b5da73b3db2b7747f9c3a4/t/58916aaaebbd1ade326d74f2/1529024584681/"
            ]
        });
  
  }

});



client.login(process.env.BOT_TOKEN);

