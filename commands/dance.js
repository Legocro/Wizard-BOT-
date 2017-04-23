const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mdance = new Discord.RichEmbed();
    mdance.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302254759773995008/tumblr_ok24wuFmmK1thzx08o1_400.gif');
    mdance.setColor('#846BF7');

    message.channel.sendEmbed(mdance);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['dc'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Dance Meme',
    name: 'dance',
    description: 'Meme',
    usage: 'dance'
  };
