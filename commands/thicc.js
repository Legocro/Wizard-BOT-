const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mticc = new Discord.RichEmbed();
    mticc.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303230165033418762/Thicc.png');
    mticc.setColor('#846BF7');

    message.channel.sendEmbed(mticc);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tcc'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Thicc Meme',
    name: 'thicc',
    description: 'Meme',
    usage: 'thicc'
  };
