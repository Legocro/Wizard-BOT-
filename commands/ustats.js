const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    let memberu;

    if(message.content.includes('@')) {
      memberu = message.guild.member(message.mentions.users.first());
    } else {
      memberu = message.guild.member(client.users.get(message.content/*.split(' ').slice(1)*/));
    }
    const memberstatus = new Discord.RichEmbed();
    //memberstatus.setThumbnail();
    memberstatus.addField('User Name Test', memberu.user.username);

    console.log(memberu);

  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ust'],
    permLevel: 0
  };

  exports.help = {
    hName: 'User Status',
    name: 'ustats',
    description: 'See the information about a user.',
    usage: 'ustats'
  };
