const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mpregnant = new Discord.RichEmbed();
    mpregnant.setTitle(`Fear FBI ${message.author.username}`);
    mpregnant.setImage('https://cdn.discordapp.com/attachments/279299921071570958/298142045938122753/memo.png');
    mpregnant.setColor('#846BF7');

    message.channel.sendEmbed(mpregnant);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pgn'],
  permLevel: 0
};

exports.help = {
  hName: 'Pregnant Meme',
  name: 'pregnant',
  description: 'Meme',
  usage: 'pregnant'
};
