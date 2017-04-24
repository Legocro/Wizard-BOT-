const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mbrain = new Discord.RichEmbed();
    mbrain.setImage('https://cdn.discordapp.com/attachments/301440738166571009/303395413543878657/eJwVzMENwyAMAMBdGABjDAlkG0QQoQoFYfcVdfeqN8A96rNudahLZPIBcDbOY52aZaxUi65j1Luk2Vjn0SGJpHz18hYGi1swwdnd.jpg');
    mbrain.setColor('#846BF7');

    message.channel.sendEmbed(mbrain);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['br'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Brain Meme',
    name: 'brain',
    description: 'Meme',
    usage: 'brain'
  };
