const settings = require('../settings.json');
const Discord = require('discord.js');



exports.run = function(client, message, args) {
  try{
  if(message.content.includes(args[0])) {
    const fback = new Discord.RichEmbed();
    fback.setColor('#CB8AFF');
    fback.setTimestamp();
    fback.setFooter('Received', `${message.author.displayAvatarURL}`);
    fback.setTitle('New request');
    fback.setDescription(`${client.guilds.get('298969150133370880').roles.find('name', 'Support')} check this!`);
    fback.addField('User Feedback', `${message.content.split(' ').slice(1).join(' ')}`);
    fback.addField('Informations', `**Username:** ${message.author}\n**User ID:** ${message.author.id}\n**Guild Name:** ${message.guild.name}\n**Guild ID:** ${message.guild.id}\n**Message ID:** ${message.id}`);
    client.guilds.get('298969150133370880').channels.get('299632702087495680').sendEmbed(fback)
    .catch(e => message.channel.sendMessage(e));

    message.channel.sendMessage(`A request has been sent to the overlords!`);

  } else {
    message.channel.sendMessage(`${message.author} you gotta input something!`);
  }
}catch(err) {
message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rq', 'iwant'],
  permLevel: 0
};

exports.help = {
  hName: 'Request',
  name: 'request',
  description: 'Send a request directly to the official server!',
  usage: 'request'
};
