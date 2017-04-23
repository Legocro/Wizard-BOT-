const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const m911 = new Discord.RichEmbed();
    m911.setImage('http://i0.kym-cdn.com/photos/images/original/001/235/181/5f7.gif');
    m911.setColor('#846BF7');

    message.channel.sendEmbed(m911);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['twintowers'],
    permLevel: 0
  };

  exports.help = {
    hName: '9\/11 Meme',
    name: '911',
    description: 'Meme',
    usage: '911'
  };
