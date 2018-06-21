const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {

  console.log("Mandingo viene!!");

});

client.on("message", message => {

  if(message.content == "!polla"){
 
      message.channel.send('Que ricooo!!!', {
            files: [
                "https://i.ytimg.com/vi/L0rkCahBG1A/maxresdefault.jpg"
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
  
  if(message.content == "!pollo"){
 
      message.channel.send('Cómo te gusta la polla, eh!!!!????', {
            files: [
                "http://hablemosdeaves.com/wp-content/uploads/2017/04/gallinas-leghorn.jpg"
            ]
        });
  
  }
  
  if(message.content == "!puterfull"){
 
      message.channel.send('Cómo te gusta la polla, eh!!!!????', {
            files: [
                "https://i.pinimg.com/originals/a6/c8/f2/a6c8f2204ec0ea84126091914fc98db6.jpg"
            ]
        });
  
  }

});



client.login(process.env.BOT_TOKEN);

