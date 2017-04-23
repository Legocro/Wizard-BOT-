const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mscream = new Discord.RichEmbed();
    mscream.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303298843523678219/screams.jpg');
    mscream.setColor('#846BF7');

    message.channel.sendEmbed(mscream);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sm'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Scream Meme',
    name: 'scream',
    description: 'Meme',
    usage: 'scream'
  };
