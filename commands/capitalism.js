const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mcapitalism = new Discord.RichEmbed();
    mcapitalism.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303298582528917504/9D6.jpg');
    mcapitalism.setColor('#846BF7');

    message.channel.sendEmbed(mcapitalism);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['capit'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Capitalism Meme',
    name: 'capitalism',
    description: 'Meme',
    usage: 'capitalism'
  };
