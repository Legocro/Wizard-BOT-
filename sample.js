const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{

  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
  };

  exports.help = {
    hName: '',
    name: '',
    description: 'Meme',
    usage: ''
  };
