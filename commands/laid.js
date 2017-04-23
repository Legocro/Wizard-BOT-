const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mlaid = new Discord.RichEmbed();
    mlaid.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303230078261788674/gettingpaid.jpg');
    mlaid.setColor('#846BF7');

    message.channel.sendEmbed(mlaid);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ld'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Laid Meme',
    name: 'laid',
    description: 'Meme',
    usage: 'laid'
  };
