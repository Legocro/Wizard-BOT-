const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mwtf = new Discord.RichEmbed();
    mwtf.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303230304620118016/wtf.jpg');
    mwtf.setColor('#846BF7');

    message.channel.sendEmbed(mwtf);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['dafuk'],
    permLevel: 0
  };

  exports.help = {
    hName: 'What The Fuck Meme',
    name: 'wtf',
    description: 'Meme',
    usage: 'wtf'
  };
