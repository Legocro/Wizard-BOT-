const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");


client.on('message', message => {

const embed = new Discord.RichEmbed()
embed.setColor('#F7C3EF')
embed.setFooter(`${message.author.username} started this event at`, `${message.author.displayAvatarURL}`)
embed.setImage(qphoto)
embed.setTimestamp()
embed.addField('Try to guess who this is!',
'This event will be over in 15 minutes')


const helpEmbed = new Discord.RichEmbed()
helpEmbed.setAuthor(`DM incoming!`, `${message.author.displayAvatarURL}`)
helpEmbed.setColor('#FB3A9B')
helpEmbed.setDescription(`Have fun ${message.author}!`)
helpEmbed.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg')


const tamerUser = new Discord.RichEmbed()
tamerUser.setTitle(`アホイ\(Ahoi\) ${message.author.username}`)
tamerUser.setAuthor('Click here to join the support server!', `${message.author.displayAvatarURL}`)
tamerUser.setColor('#FB3A9B')
tamerUser.setDescription(`${message.author} don\'t forget to have fun!`)
tamerUser.setFooter('BOT done by Wizardλ#4559', 'https://cdn.discordapp.com/avatars/267727230296129536/d97af37c3284d8c18a7c314c7c3f7174.jpg?size=1024');
tamerUser.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg')
tamerUser.setURL('https://discord.gg/uBdXdE9')
tamerUser.addField('Tamer Commands',
  '\`k!sqphoto <link>\` sets the character photo\n\`k!sfname\` sets the character first name\n\`k!slname\` sets the character last name\n\`k!qstart\` starts the event\n\`k!event\` announces the event with an @here in the default channel')
tamerUser.addField('User Commands', '\`k!ping\` see how long the bot takes to answer commands\n\`k!invite\` gets the bot link invite\n\`k!about\` a bit about **Kanna Kobayashi** and how to set it up', true)
tamerUser.addField('Memes', '\`k!pregnant\`\n\`k!lewd\`\n\`k!hungry\`\n\`k!loli\`\n\`k!dab\`\n\`k!drunk\`\n\`k!triggered\`\n\`k!endme\`', true)


const commonUser = new Discord.RichEmbed()
commonUser.setTitle(`**アホイ\(Ahoi\) ${message.author.username}**`)
commonUser.setAuthor('Click here to join the support server!', `${message.author.displayAvatarURL}`)
commonUser.setColor(0x00AE86)
commonUser.setDescription(`If you want to use Tamer\(Mod\) commands ${message.author} you need the role \`Dragon Tamer\` assigned to yourself on ${message.guild.name}`);
commonUser.setFooter('BOT done by Wizardλ#4559', 'https://cdn.discordapp.com/avatars/267727230296129536/d97af37c3284d8c18a7c314c7c3f7174.jpg?size=1024');
commonUser.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg');
commonUser.setURL('https://discord.gg/uBdXdE9')
commonUser.addField('Commands', '\`k!ping\` see how long the bot takes to answer commands\n\`k!invite\` gets the bot link invite\n\`k!about\` a bit about **Kanna Kobayashi** and how to set it up\n\`k!feedback <message>\` send a feedback to the BOT owner himself!\n');
commonUser.addField('Memes', '\`k!pregnant\`\n\`k!lewd\`\n\`k!hungry\`\n\`k!loli\`\n\`k!dab\`\n\`k!drunk\`\n\`k!triggered\`\n\`k!endme\`', true);

const stats = new Discord.RichEmbed()
stats.setAuthor('Stats for Kanna Kobayashi', 'https://cdn.discordapp.com/avatars/297459926505095180/36d9952998c1a24e3646af1a3e77cda6.jpg?size=1024');
stats.setTitle('Uptime')
stats.setDescription(`${client.user} has been up for ${client.uptime}`)
stats.setFooter('BOT done by Wizardλ#4559', 'https://cdn.discordapp.com/avatars/267727230296129536/d97af37c3284d8c18a7c314c7c3f7174.jpg?size=1024')
stats.setColor('##00FFFD')
})
