const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mfriends = new Discord.RichEmbed();
    mfriends.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302703313881923584/Sin_titulo.png');
    mfriends.setColor('#846BF7');

     message.channel.sendEmbed(mfriends);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ff'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Friends Meme',
    name: 'friends',
    description: 'Meme',
    usage: 'friends'
  };
