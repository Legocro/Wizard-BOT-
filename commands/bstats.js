const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{

    if((client.uptime / 60000 % 60).toFixed() === 0) {
  minutes = '';
} else {
  minutes = `\n` + (client.uptime / 60000 % 60).toFixed() + ' minute(s)';
}
if((client.uptime / 3600000 % 24).toFixed() === 0) {
  hours = '';
} else {
  hours = `\n` + (client.uptime / 3600000 % 24).toFixed() + ' hour(s)';
}
if ((client.uptime / 1000 % 60).toFixed() === 0) {
  seconds = '';
} else {
  seconds = `\n` + (client.uptime / 1000 % 60).toFixed() + ' second(s)';
}
    const stats = new Discord.RichEmbed();
    stats.setAuthor('Stats for Kanna Kobayashi', `${client.user.avatarURL}`);
    stats.addField('Uptime', `${hours}${minutes}${seconds}`);
    stats.setFooter('BOT done by Wizardλ#4559', `${client.users.get('267727230296129536').avatarURL}`);
    stats.setColor('##00FFFD');
    stats.addField('Total Guilds', `${client.guilds.size} Guilds`, true);
    stats.addField('Total Users', `${client.users.filter(u => u.bot === false).size} Humans`, true);
    stats.addField('Current Version', 'v11.3');
    stats.addField('Last Update', '- Fixed delete command \n- Added again the unique official server command');
    stats.addField('Special Thanks', '- Mashiro#0948 for being a great friend, and pushing me foward with this project\n\n- Wolke#6746 the best discord dev i\'ve met so far\n\n- Kapparina#9425 for helping me a lot throught this update!\n\n- 🌌 ∫ Lewdcario dx 🐾#9378 for helping me with a huge ass problem\n\n- Vault-Girl#5560 for being the nicest support ever!\n\n- Discord.js official server for helping me through all this');
    stats.addField('Working On', 'Learning to be a better dev');

    message.channel.sendEmbed(stats);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kannastats'],
  permLevel: 0
};

exports.help = {
  hName: 'Bot Stats',
  name: 'bstats',
  description: 'See all about Kanna currently!',
  usage: 'bstats'
};
