const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mrain = new Discord.RichEmbed();
    mrain.setImage('https://cdn.discordapp.com/attachments/299426899845709826/302292264175271936/tenor.gif');
    mrain.setColor('#846BF7');

    message.channel.sendEmbed(mrain);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rr'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Rain Meme',
    name: 'rain',
    description: 'Meme',
    usage: 'rain'
  };
