exports.run = function(client, message, args) {
  try{
    message.channel.sendMessage('https://www.youtube.com/watch?v=ZyYaSvWikPQ');
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ck'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Comfy',
    name: 'comfy',
    description: 'Meme',
    usage: 'comfy'
  };
