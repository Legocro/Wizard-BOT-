const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mnoose = new Discord.RichEmbed();
    mnoose.setTitle(`kys ${message.author.username}`);
    mnoose.setImage('http://i3.kym-cdn.com/photos/images/newsfeed/001/063/811/e8a.jpg');
    mnoose.setColor('#846BF7');

    message.channel.sendEmbed(mnooset);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['no'],
  permLevel: 0
};

exports.help = {
  hName: 'Noose Meme',
  name: 'noose',
  description: 'Meme',
  usage: 'noose'
};
