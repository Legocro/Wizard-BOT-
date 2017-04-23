const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mcancer = new Discord.RichEmbed();
    mcancer.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303230392184602624/cancer.jpg');
    mcancer.setColor('#846BF7');

    message.channel.sendEmbed(mcancer);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['cc'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Cancer Meme',
    name: 'cancer',
    description: 'Meme',
    usage: 'cancer'
  };
