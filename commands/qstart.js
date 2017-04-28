const settings = require('../settings.json');
const fs = require("fs");
const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
  let names = JSON.parse(fs.readFileSync('./names.json', 'utf8'));
  const quizemb = new Discord.RichEmbed();
  let firstname = names[message.guild.id].firstName;
  let lastname = names[message.guild.id].lastName;
  let qphoto = names[message.guild.id].quizPhoto;

  quizemb.setColor('#F7C3EF');
  quizemb.setFooter(`${message.author.username} started this event`, `${message.author.displayAvatarURL}`);
  quizemb.setImage(qphoto);
  quizemb.setTimestamp();
  quizemb.addField('Try to guess who this is!',
  'This event will be over in 15 minutes');

  message.channel.sendEmbed(quizemb);
  message.delete()
  .then(() => {
    message.channel.awaitMessages(response => response.content.startsWith(firstname) || response.content === lastname || response.content === lastname.toLowerCase() || response.content.startsWith(firstname.toLowerCase()) || response.content.startsWith(lastname), {
      max: 1,
      time: 900000,
      errors: ['time']
    })
    .then((collected) => {
      message.channel.sendMessage(`**${collected.first().author} guessed it right!**\n\n**The character was: __${firstname} ${lastname}__**`);
    })
    .catch(() => {
      message.channel.sendMessage('**No one guessed it right! So the event has ended!**');
    });
  })
  .catch (client.users.get(settings.owners[0]).send(`\`\`\`js\n${error}`));
  fs.writeFile('./names.json', JSON.stringify(names), (err) => {		
    if (err) console.error(err);		
 -});
}catch(err) {
message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['qst'],
  permLevel: 2
};

exports.help = {
  hName: 'Quiz Start',
  name: 'qstart',
  description: 'Starts the quiz',
  usage: 'qstart'
};
