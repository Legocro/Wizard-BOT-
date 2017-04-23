const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mdab = new Discord.RichEmbed();
    mdab.setTitle('Dabbbbbbbb');
    mdab.setImage('https://cdn.discordapp.com/attachments/275135980481150976/299673416712192000/hDrOJlT0GvA.jpg');
    mdab.setColor('#846BF7');

    message.channel.sendEmbed(mdab);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['db'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Dab',
    name: 'dab',
    description: 'Meme',
    usage: 'dab'
  };
