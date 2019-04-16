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
    
  var numero = 31;
    
  var comandos = ["!cookie", "!cruelsun", "!tocar", "!hack", "!tonto", "!regalo", "!buenosdias", "!perfecto", 
                  "!cute", "!miseñora", "!violasion", "!peligrosa", "!kawai", "!kiss", "!espacioenblanco", "!WTF", 
                  "!sigue", "!horror", "!feliz", "!hermanito", "!aburrido", "!culpable", "!suave", "!lucha", 
                  "!enlamira", "!ok", "!noexisto", "!dejame", "!ven", "!saber", "!putoamo"];
    
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
                "Ay, dios mío!!",
                "Que felíz soy!!",
                "Hermanito, dónde estás!!??",
                "Ahhhhhhhhhhhhhh",
                "El culpable es... YOO!!",
                "Hay, que suave",
                "No me quitarás a mi Asuna!!"
                "Un paso en falso y te meto un balazo"
                "Ok",
                "Yo no existo xd",
                "Déjame, no me secuestres, secuestrador!!",
                "Ven aquí, tontete",
                "Quiero saber más!!!!!",
                "Mira, soy el puto amo"
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
                 "https://3.bp.blogspot.com/-SAcJlBa0djo/XLRJGZLbpFI/AAAAAAAACN8/4gd9ISUXZ14UIXgFvTy0EDcwSmjFA1omACLcBGAs/s1600/desconocido.gif",
                 "https://cdn.discordapp.com/attachments/457188879276048402/566726973150199809/caca.gif",
                 "https://4.bp.blogspot.com/-oZ8KBbuGDYw/XLWXcJU_JII/AAAAAAAACOg/lh9c-Tw3bZcLD8tRxpchg5iSPhpqLw77wCLcBGAs/s1600/cinco.gif",
                 "https://4.bp.blogspot.com/-d17NC03g8oo/XLWXcGZ4mwI/AAAAAAAACOc/ai5rr7Gl1CkI9SSHbI_hzBtJ_hoWrjjEACLcBGAs/s1600/cuatro.gif",
                 "https://2.bp.blogspot.com/-HoEYSDyf3ck/XLWXcJL0GZI/AAAAAAAACOk/2cpvYr9neO4ozAsAKx3n-e7xxNHijsZGgCLcBGAs/s1600/diez.gif",
                 "https://1.bp.blogspot.com/-50WH97GfXzA/XLWXdLQud9I/AAAAAAAACOo/sL5rHQh73LgTDRDhmTefr-YYFFsLWdSDQCLcBGAs/s1600/doce.gif",
                 "https://1.bp.blogspot.com/-VxKA7OcGVBk/XLWXdKF0DoI/AAAAAAAACOs/a0Shm44FSv4Lpzb-ehLRwg6k6SUv1S_3gCLcBGAs/s1600/dos.gif",
                 "https://1.bp.blogspot.com/-eYJVeKp-IYU/XLWXdk0BwBI/AAAAAAAACOw/ExQ6ena38LURAH79-UGWr6I8gqapL_iNwCLcBGAs/s320/nueve.gif",
                 "https://3.bp.blogspot.com/-8hm2ZQQpyik/XLWXd5jgo_I/AAAAAAAACO0/vYdAvmWwNNEw0HYlRISPqQ6mAgg3_0NFACLcBGAs/s320/ocho.gif",
                 "https://2.bp.blogspot.com/-GxlfpPAUsJA/XLWXeCUbLtI/AAAAAAAACO4/q_09JOMVGUcaRjA1mMfOR37EWs0n6IU_wCLcBGAs/s1600/ok.gif",
                 "https://3.bp.blogspot.com/-e2sbaR2v24Q/XLWXemWPlPI/AAAAAAAACO8/JVdCPqBs5AUdDOywlVm9j8JVB0VfL9p7QCLcBGAs/s1600/once.gif",
                 "https://4.bp.blogspot.com/-vJCdRWPqkmk/XLWXe3nOh9I/AAAAAAAACPA/9fGN5fSKOko5HD3bIggQcRaeeT6AqOrCACLcBGAs/s1600/seis.gif",
                 "https://4.bp.blogspot.com/-hykpQbfX8M4/XLWXfRn9hTI/AAAAAAAACPE/dyCkkKRKjAMqX4Hd0i0E3HqXKVrgosWmQCLcBGAs/s320/siete.gif",
                 "https://3.bp.blogspot.com/-mdKUzg20LFM/XLWXfvHPliI/AAAAAAAACPI/M6QKXqLdb4Ay1HMlH6llVCMPC1Up-_brgCLcBGAs/s1600/tres.gif",
                 "https://2.bp.blogspot.com/-1rLXv1gL-ZQ/XLWXfxtqjgI/AAAAAAAACPM/ls6Eah5Sy8QH6MWuGAlsg523iwFFrA0BACLcBGAs/s1600/uno.gif"          
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
  var varhelp = 0  
  var texto = "";
    
  if(message.content == "!help"){

    if(varhelp == 0){
    
    for(var i = 0; i < numero; i++)
      {
         texto += "Número " + (i + 1) + ": " + comandos[i] + "\n";
      }
      varhelp = 1;
    }
    
    message.channel.send("Esto es lo que se hacer:\n\n* !on: si se activa/estaba activado los comandos funcionarán\n\n* !off: si se desactiva/estaba desactivado los comandos no funcionarán\n\n" + texto);
  }
  //-----------------------------------------
     
}

});

client.login(process.env.BOT_TOKEN);

