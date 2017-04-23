const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mdunk = new Discord.RichEmbed();
    mdunk.setTitle('You have to be this cute to be drunk');
    mdunk.setImage('https://cdn.discordapp.com/attachments/275135980481150976/299673369706496001/9wl5E10yNqE.jpg');
    mdunk.setColor('#846BF7');

    message.channel.sendEmbed(mdunk);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['dr'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Drunk',
    name: 'drunk',
    description: 'Meme',
    usage: 'drunk'
  };
