const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mpussy = new Discord.RichEmbed();
    mpussy.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303230020136992768/I_get_pussy.png');
    mpussy.setColor('#846BF7');

    message.channel.sendEmbed(mpussy);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pusseh'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Pussy Meme',
    name: 'pussy',
    description: 'Meme',
    usage: 'pussy'
  };
