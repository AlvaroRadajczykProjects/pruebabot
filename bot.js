const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {

  console.log("Mandingo viene!!");

});

client.on("message", message => {

  if(message.content == "!polla"){
 
      message.channel.send('Que ricooo!!!', {
            files: [
                "https://2.bp.blogspot.com/-RHGNMuJ7SX8/WytimjR8YzI/AAAAAAAACGk/fMJCAOKcsIkUP5SrkPs9Pz9jFMsP6aWrwCLcBGAs/s320/este.jpg"
            ]
        });
  
  }

});

client.on("message", message => {

  if(message.content == "!cookie"){
 
      message.channel.send('Dámelo papi!!', {
            files: [
                "https://1.bp.blogspot.com/-vade0uTKy4g/Wyue4q0ZwgI/AAAAAAAACGw/gNcNEriak_UoSomlb_Qp4GlgfmYaJ963wCLcBGAs/s1600/cookie.png"
            ]
        });
  
  }
  
  if(message.content == "!cruelsun"){
 
      message.channel.send('Te voy a quemar el CULOOOOO!!!!', {
            files: [
                "https://cdn.discordapp.com/attachments/458356424964309003/459340650731798548/unknown.png"
            ]
        });
  
  }

});



client.login(process.env.BOT_TOKEN);

