const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mlisten = new Discord.RichEmbed();
    mlisten.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302702758505742336/f4d.jpg');
    mlisten.setColor('#846BF7');

    message.channel.sendEmbed(mlisten);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ls'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Listen Meme',
    name: 'listen',
    description: 'Meme',
    usage: 'listen'
  };
