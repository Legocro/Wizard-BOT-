const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mendme = new Discord.RichEmbed();
    mendme.setImage('https://cdn.discordapp.com/attachments/299398003486097412/300740618009837571/1491078423557.jpg');
    mendme.setColor('#846BF7');

    message.channel.sendEmbed(mendme);

  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };


  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['em'],
    permLevel: 0
  };

  exports.help = {
    hName: 'End Me',
    name: 'endme',
    description: 'Meme',
    usage: 'endme'
  };
