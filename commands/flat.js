const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mflat = new Discord.RichEmbed();
    mflat.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303230053225857025/flatisjustice.png');
    mflat.setColor('#846BF7');

    message.channel.sendEmbed(mflat);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['2d'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Flat Meme',
    name: 'flat',
    description: 'Meme',
    usage: 'flat'
  };
