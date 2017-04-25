const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mdelete = new Discord.RichEmbed();
    mdelete.setImage('https://cdn.discordapp.com/attachments/301440738166571009/303404249222610945/image.jpg');
    mdelete.setColor('#846BF7');

    message.channel.sendEmbed(mdelete);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['dlt'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Delete Meme',
    name: 'delete',
    description: 'Meme',
    usage: 'delete'
  };
