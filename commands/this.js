const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mthis = new Discord.RichEmbed();
    mthis.setColor('#846BF7');
    mthis.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303297949264510976/hate_this.jpg');

    message.channel.sendEmbed(mthis);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['th'],
    permLevel: 0
  };

  exports.help = {
    hName: 'This Meme',
    name: 'this',
    description: 'Meme',
    usage: 'this'
  };
