const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const m100 = new Discord.RichEmbed();
    m100.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303230241483128833/HONDERD.jpg');
    m100.setColor('#846BF7');

    message.channel.sendEmbed(m100);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['100'],
    permLevel: 0
  };

  exports.help = {
    hName: 'One Hundred Meme',
    name: 'onehundred',
    description: 'Meme',
    usage: 'onehundred'
  };
