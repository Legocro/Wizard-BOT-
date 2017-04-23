exports.run = function(client, message, args) {
  try{
    message.channel.sendMessage('https://www.youtube.com/watch?v=F4Q_AC3N0SA');
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['stars'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Shooting Stars',
    name: 'shs',
    description: 'Meme',
    usage: 'shs'
  };
