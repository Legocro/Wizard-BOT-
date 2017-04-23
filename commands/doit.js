const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mdoit = new Discord.RichEmbed();
    mdoit.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302198705929584641/do_it_for_her___kanna_kamui_by_phosphobos-db1xlb1.jpg');
    mdoit.setColor('#846BF7');

    message.channel.sendEmbed(mdoit);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['dt'],
    permLevel: 0
  };

  exports.help = {
    hName: 'DoIt Meme',
    name: 'doit',
    description: 'Meme',
    usage: 'doit'
  };
