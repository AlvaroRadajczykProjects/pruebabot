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
 
      message.channel.send('Esto es lo que se hacer:\n\n* !on: si se activa/estaba activado los comandos funcionarán\n\n* !off: si se desactiva/estaba desactivado los comandos no funcionarán\n\n* !polla\n* !cookie\n* !cruelsun\n* !pollo\n* !puterfull\n* !tocar\n* !hack\n* !tonto\n* !regalo\n* !buenosdias\n* !perfecto\n* !cute\n* !miseñora\n* !violasion\n* !peligrosa\n* !kawai\n* !toifumao\n* !loko\n\n*NUEVO: blanco\n*NUEVO: wtf\n*NUEVO: sigue');
  
  }
    
    
  /* ____________________________________________________________________________________________________ */
  /* ____________________________________________________________________________________________________ */
    
  var numero = 100;
    
  var comandos = ["!mierdas", "!pruebas", "!polla", "!cookie", "!cruelsun", "!pollo", "!puterfull", "!tocar",
                  "!hack", "!tonto", "!regalo", "!buenosdias", "!perfecto", "!cute", "!miseñora", "!violasion", 
                  "!peligrosa", "!kawai", "!kiss", "!toifumao", "!loko", "!espacioenblanco", "!WTF", "!sigue", 
                  "!horror"];
    
  var textos = ["menudo cacas", 
                "esto es una prueba", 
                "Que ricooo!!!",
                "Dámelo papi!!",
                "Te voy a quemar el CULOOOOO!!!!", 
                "Cómo te gusta la polla, eh!!!!????",
                "con <3 mister puterfull para tí",
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
                "Ola si toi fumao",
                "Ola y adió loko!",
                "Espacio en blanco nunca pierde, NUUNCAAA",
                "WTF estas diciendo......",
                "Me dejo sin la manga del otro brazo por acariciarte jaja",
                "Ay, dios mío!!"
               ];
    
  var enlaces = ["https://cdn.discordapp.com/attachments/458356424964309003/459340650731798548/unknown.png",
                 "https://1.bp.blogspot.com/-vade0uTKy4g/Wyue4q0ZwgI/AAAAAAAACGw/gNcNEriak_UoSomlb_Qp4GlgfmYaJ963wCLcBGAs/s1600/cookie.png"];
    
  for(var i = 0; i < numero; i++){
    
      if(message.content == comandos[i]){
        
         message.channel.send(textos[i], {
            files: [
                "https://i.ytimg.com/vi/L0rkCahBG1A/maxresdefault.jpg"
            ]
        });
      
      }
  }
     
}

});

client.login(process.env.BOT_TOKEN);

