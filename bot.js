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
    
  /* ____________________________________________________________________________________________________ */
  /* ____________________________________________________________________________________________________ */
    
  var numero = 18;
    
  var comandos = ["!cookie", "!cruelsun", "!tocar", "!hack", "!tonto", "!regalo", "!buenosdias", "!perfecto", 
                  "!cute", "!miseñora", "!violasion", "!peligrosa", "!kawai", "!kiss", "!espacioenblanco", "!WTF", 
                  "!sigue", "!horror"];
    
  var textos = [
                "Dámelo papi!!",
                "Te voy a quemar el CULOOOOO!!!!", 
                "ABRAZO FUERTE!!",
                "Modo hacks activado :V",
                "Más tonto y no naces",
                "Es un regalo de mi pa ti",
                "Cuanto tiempo, leeeeel!!",
                "Soy el puto amo!! Ah, has visto el aro, achanta!",
                "C-U-T-E",
                "Por ti lo que sea, O_O",
                "Que te violo niña, :P",
                "Mira mi flow!!",
                "Mas linda imposible OwO",
                "Tus labios rojos, sabor fresa",
                "Espacio en blanco nunca pierde, NUUNCAAA",
                "WTF estas diciendo......",
                "Me dejo sin la manga del otro brazo por acariciarte jaja",
                "Ay, dios mío!!"
               ];
    
  var enlaces = [
                 "https://1.bp.blogspot.com/-vade0uTKy4g/Wyue4q0ZwgI/AAAAAAAACGw/gNcNEriak_UoSomlb_Qp4GlgfmYaJ963wCLcBGAs/s1600/cookie.png",
                 "https://cdn.discordapp.com/attachments/433718748193488930/459342653176152064/unknown.png",
                 "https://cdn.discordapp.com/attachments/433718748193488930/488710400456523776/unknown.png",
                 "https://cdn.discordapp.com/attachments/433718748193488930/463701785509494784/unknown.png",
                 "https://78.media.tumblr.com/bf301c060766fb6fb56d55bd8d1d40de/tumblr_o2c603Wrm91v1ncd6o1_500.gif",
                 "https://cdn.discordapp.com/attachments/433718748193488930/488710771040190472/tumblr_nckncbfqVD1r2yf1qo1_500.gif",
                 "https://cdn.discordapp.com/attachments/433718748193488930/463702140922101770/giphy.gif",
                 "https://i.pinimg.com/originals/37/d7/92/37d792264b17676cf2db280db81cd69d.gif",
                 "https://cdn.discordapp.com/attachments/433718748193488930/462209732799889419/cute.gif",
                 "https://cdn.discordapp.com/attachments/433718748193488930/463702060886523924/unknown.png",
                 "https://cdn.discordapp.com/attachments/433718748193488930/463701815377133568/unknown.png",
                 "https://cdn.discordapp.com/attachments/433718748193488930/464130567080902667/prueba1.gif",
                 "https://cdn.discordapp.com/attachments/433718748193488930/463702027470635018/Megumin_2.png",
                 "https://cdn.discordapp.com/attachments/433718748193488930/464421765968560139/Kiss_Kirito_and_Asuna.png",
                 "https://cdn.discordapp.com/attachments/433718748193488930/488710598582861824/unknown.png",
                 "https://cdn.discordapp.com/attachments/433718748193488930/488710701775454233/unknown.png",
                 "https://cdn.discordapp.com/attachments/433718748193488930/488710201994641409/unknown.png",
                 "https://cdn.discordapp.com/attachments/457188879276048402/566726973150199809/caca.gif",
                ];
    
  for(var i = 0; i < numero; i++){
    
      if(message.content == comandos[i]){
        
         message.channel.send(textos[i], {
            files: [
                enlaces[i]
            ]
        });
      
      }
  }
    
 //-----------------------------------------
  if(message.content == "!help"){
 
      message.channel.send("Esto es lo que se hacer:\n\n* !on: si se activa/estaba activado los comandos funcionarán\n\n* !off: si se desactiva/estaba desactivado los comandos no funcionarán\n");
    //los que están 
    for(var i = 0; i < numero; i++)
      {
         message.channel.send("Numero " + (i + 1) + ": " + comandos[i]);
      }
    
  }
  //-----------------------------------------
     
}

});

client.login(process.env.BOT_TOKEN);

