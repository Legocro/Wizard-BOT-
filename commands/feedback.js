const settings = require('../settings.json');
const Discord = require('discord.js');



exports.run = function(client, message, args) {
  try{
  if(message.content.includes(args[0])) {
    const fback = new Discord.RichEmbed();
    fback.setColor('#ffd750');
    fback.setTimestamp();
    fback.setFooter('Received', `${message.author.displayAvatarURL}`);
    fback.setTitle('New feedback');
    fback.setDescription(`${client.guilds.get('298969150133370880').roles.find('name', 'Support')} check this!`);
    fback.addField('User Feedback', `${message.content.split(' ').slice(1).join(' ')}`);
    fback.addField('Informations', `**Username:** ${message.author}\n**User ID:** ${message.author.id}\n**Guild Name:** ${message.guild.name}\n**Guild ID:** ${message.guild.id}\n**Message ID:** ${message.id}`);
    client.guilds.get('298969150133370880').channels.get('302982607182888961').sendEmbed(fback)
    .catch(e => message.channel.sendMessage(e));

    message.channel.sendMessage(`A feedback has been sent to the overlords!`);

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
  aliases: ['fback'],
  permLevel: 0
};

exports.help = {
  hName: 'Feedback',
  name: 'feedback',
  description: 'Send a feedback directly to the official server!',
  usage: 'feedback'
};
