const Discord = require('discord.js');
const client= new Discord.Client();
const prefix = ","; //PREFIX
console.log('Loadin....');
console.log('   ');

client.on('ready', () => {
    console.log('Bot laoded.');
    client.user.setGame('Banan is Coding me!');
    client.user.setStatus('dnd');  //status : online : green , idle : orange , dnd : red
  }
);

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;


  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
  } else


  if (message.content.startsWith(prefix + 'setgame')) {
    if (!result) {
      result = null;
    }
    client.user.setGame(result);
  } else

  if (message.content.startsWith(prefix + 'setstatus')) {
    if (!result) {
      result = 'online';
    }
    client.user.setStatus(result);
  } else

);
    
 client.login(process.env.token);
