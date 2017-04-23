const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mernie = new Discord.RichEmbed();
    mernie.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303298348016861184/1472108577502.png');
    mernie.setColor('#846BF7');

    message.channel.sendEmbed(mernie);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ern'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Ernie Meme',
    name: 'ernie',
    description: 'Meme',
    usage: 'ernie'
  };
