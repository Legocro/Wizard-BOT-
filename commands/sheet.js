const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const msheet = new Discord.RichEmbed();
    msheet.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302700741574000640/f4d.jpg');
    msheet.setColor('#846BF7');

    message.channel.sendEmbed(msheet);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sh'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Sheet Meme',
    name: 'sheet',
    description: 'Meme',
    usage: 'sheet'
  };
