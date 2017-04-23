const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mjoke = new Discord.RichEmbed();
    mjoke.setImage('https://cdn.discordapp.com/attachments/299632385547436032/303393572437229568/image.jpg');
    mjoke.setColor('#846BF7');

    message.channel.sendEmbed(mjoke);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['jk'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Joke Meme',
    name: 'joke',
    description: 'Meme',
    usage: 'joke'
  };
