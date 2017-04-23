const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mpurge = new Discord.RichEmbed();
    mpurge.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302694290730254338/PURGE.jpg');
    mpurge.setColor('#846BF7');

    message.channel.sendEmbed(mpurge);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pg'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Purge Meme',
    name: 'purge',
    description: 'Meme',
    usage: 'purge'
  };
