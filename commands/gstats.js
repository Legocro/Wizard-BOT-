const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{

    let guildIcon;
    let roleNames;

    if(message.guild.roles.map(r => r.name).join(", ").length <= 1024) {
             roleNames = message.guild.roles.map(r => r.name).join(", ");
           } else {
             roleNames = `Too many characters \(${message.guild.roles.map(r => r.name).join(", ").length}\)`;
           }

    if(message.guild.iconURL) {
  guildIcon = `${message.guild.iconURL}`;
} else {
  guildIcon = "https://uploads.disquscdn.com/images/efd36cc100466975c3a56797f4c92efe43598f20095248db88b8f427ec1b5c28.gif";
}

    const serverstatus = new Discord.RichEmbed();
    serverstatus.setThumbnail(guildIcon);
    serverstatus.addField('Guild Name', `${message.guild.name}`);
    serverstatus.addField('Guild ID', `${message.guild.id}`, true);
    serverstatus.addField('Owner', `${message.guild.owner}`, true);
    serverstatus.addField('Owner ID', `${message.guild.owner.user.id}`, true);
    serverstatus.addField('Total Members', `${message.guild.members.size}`, true);
    serverstatus.addField('Humans', `${message.guild.members.filter(u => u.user.bot === false).size}`, true);
    serverstatus.addField('Bots', `${message.guild.members.filter(u => u.user.bot === true).size}`, true);
    serverstatus.addField('Region', `${message.guild.region}`, true);
    serverstatus.addField('Total Channels', `${message.guild.channels.size}`, true);
    serverstatus.addField('Text Channels', `${message.guild.channels.filter(c => c.type === "text").size}`, true);
    serverstatus.addField('Voice Channels', `${message.guild.channels.filter(c => c.type === "voice").size}`, true);
    serverstatus.addField('Total Roles', `${message.guild.roles.size}`, true);
    serverstatus.addField('Role Names', roleNames, true);
    serverstatus.setTimestamp();
    serverstatus.setFooter('Server Stats from', `${message.author.displayAvatarURL}`);

    message.channel.sendEmbed(serverstatus);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['stats'],
  permLevel: 0
};

exports.help = {
  hName: 'Guild Stats',
  name: 'gstats',
  description: 'See your guild stats!',
  usage: 'gstats'
};
