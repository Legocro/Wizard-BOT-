const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mpolice = new Discord.RichEmbed();
    mpolice.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302193800175026177/Sin_titulo.png');
    mpolice.setColor('#846BF7');

    message.channel.sendEmbed(mpolice);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pl'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Police Meme',
    name: 'police',
    description: 'Meme',
    usage: 'police'
  };
