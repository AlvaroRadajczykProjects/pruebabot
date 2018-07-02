const Discord = require("discord.js");
const client = new Discord.Client();

var funcionar = 1;


client.on("ready", () => {

  console.log("Mandingo viene!!");

});


client.on("message", message => {
  if(message.content == "!off"){
     message.channel.send('Me voy, ads!!!');
    funcionar = 0;
  }
});

client.on("message", message => {
  if(message.content == "!on"){
     message.channel.send('Hola de nuevo!!!');
    funcionar = 1;
  }
});


client.on("message", message => {
  
  if(funcionar == 1){
  
  if(message.content == "!help"){
 
      message.channel.send('Esto es lo que se hacer:\n\n* !on: si se activa/estaba activado los comandos funcionarán\n\n* !off: si se desactiva/estaba desactivado los comandos no funcionarán\n\n* !polla\n\n* !cookie\n\n* !cruelsun\n\n* !pollo\n\n* !puterfull\n\n* !tocar\n\n* !hack\n\n* !tonto\n\n* !regalo\n\n* !buenosdias\n\n* !perfecto\n\n* !cute\n\n* !miseñora\n\n* !violasion\n\n*NUEVO: !peligrosa\n\n*NUEVO: !kawai');
  
  }

  if(message.content == "!polla"){
 
      message.channel.send('Que ricooo!!!', {
            files: [
                "https://i.ytimg.com/vi/L0rkCahBG1A/maxresdefault.jpg"
            ]
        });
  
  }
  
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
 
      message.channel.send('con <3 mister puterfull para tí', {
            files: [
                "https://i.pinimg.com/originals/a6/c8/f2/a6c8f2204ec0ea84126091914fc98db6.jpg"
            ]
        });
  
  }
  
  if(message.content == "!tocar"){
 
      message.channel.send('ABRAZO FUERTE!!', {
            files: [
                "https://cdn.discordapp.com/attachments/458356424964309003/459385700132061184/unknown.png"
            ]
        });
  
  }
  
  if(message.content == "!hack"){
 
      message.channel.send('Modo hacks activado :V', {
            files: [
                "https://cdn.discordapp.com/attachments/458356424964309003/459970510839742476/unknown.png"
            ]
        });
  
  }
  
  if(message.content == "!tonto"){
 
      message.channel.send('Más tonto y no naces', {
            files: [
                "https://78.media.tumblr.com/bf301c060766fb6fb56d55bd8d1d40de/tumblr_o2c603Wrm91v1ncd6o1_500.gif"
            ]
        });
  
  }
  
  if(message.content == "!regalo"){
 
      message.channel.send('Es un regalo de mi pa ti', {
            files: [
                "http://78.media.tumblr.com/2760e22f084d5f1a32dc0e9cc0c4aa0a/tumblr_nckncbfqVD1r2yf1qo1_500.gif"
            ]
        });
  
  }
  
  if(message.content == "!buenosdias"){
 
      message.channel.send('Cuanto tiempo, leeeeel!!', {
            files: [
                "https://media.giphy.com/media/b5tk2in7FRuw/giphy.gif"
            ]
        });
  
  }
  
  if(message.content == "!perfecto"){
 
      message.channel.send('Soy el puto amo!! Ah, has visto el aro, achanta!', {
            files: [
                "https://i.pinimg.com/originals/37/d7/92/37d792264b17676cf2db280db81cd69d.gif"
            ]
        });
  
  }
  
  if(message.content == "!cute"){
 
      message.channel.send('C-U-T-E', {
            files: [
                "https://2.bp.blogspot.com/-84Tq9yDSK00/WzYPCNVx3oI/AAAAAAAACHY/GCnSErAnvfk8gVahp1ABMTMuIyh88NCpQCLcBGAs/s1600/cute.gif"
            ]
        });
  
}
  
  if(message.content == "!miseñora"){
 
      message.channel.send('Por ti lo que sea, O_O', {
            files: [
                "https://cdn.discordapp.com/attachments/458356424964309003/462593938763808788/unknown.png"
            ]
        });
  
}
  
if(message.content == "!violasion"){
 
      message.channel.send('Que te violo niña, :P', {
            files: [
                "https://cdn.discordapp.com/attachments/458356424964309003/462594605976780809/unknown.png"
            ]
        });
  
}
    
if(message.content == "!peligrosa"){
 
      message.channel.send('Es peligrosa; bailando requetón es una diosa', {
            files: [
                "https://1.bp.blogspot.com/-CHlYLtDbB9g/Wzp3HpNzWsI/AAAAAAAACHw/C9N3y166VqIl4yoi2SC_n6jeCYFFYioEACLcBGAs/s1600/prueba1.gif"
            ]
        });
  
}
    
    if(message.content == "!kawai"){
 
      message.channel.send('Mas linda imposible OwO', {
            files: [
                "https://cdn.discordapp.com/attachments/458356424964309003/463337213716070411/Megumin_2.png"
            ]
        });
      
      var button = document.createElement("button");
      button.innerHTML = "click me!";

      button.addEventListener("click", function() {
      button.innerHTML = "You did it";
      });

      document.body.appendChild(button);
  
}
    
    
}

});

client.login(process.env.BOT_TOKEN);

