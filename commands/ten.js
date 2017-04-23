const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mten = new Discord.RichEmbed();
    mten.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302698078924701708/f4d.jpg');
    mten.setColor('#846BF7');

    message.channel.sendEmbed(mten);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rn'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Ten Meme',
    name: 'ten',
    description: 'Meme',
    usage: 'ten'
  };
