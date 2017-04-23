exports.run = function(client, message, args) {
  try{
    message.channel.sendMessage('https://streamable.com/npvut');
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['nuu'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Lewd',
    name: 'lewd',
    description: 'Meme',
    usage: 'lewd'
  };
