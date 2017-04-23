const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mkawaii = new Discord.RichEmbed();
    mkawaii.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303298068646723584/917363_1661775477443606_58464003_n.jpg');
    mkawaii.setColor('#846BF7');

    message.channel.sendEmbed(mkawaii);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kw'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Kawaii Meme',
    name: 'kawaii',
    description: 'Meme',
    usage: 'kawaii'
  };
