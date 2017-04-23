const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mforever = new Discord.RichEmbed();
    mforever.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303298736765796372/FOREVER.png');
    mforever.setColor('#846BF7');

    message.channel.sendEmbed(mforever);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['forever'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Forever Meme',
    name: '4ever',
    description: 'Meme',
    usage: '4ever'
  };
