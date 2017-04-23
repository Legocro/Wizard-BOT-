const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    var autistico = ["https://cdn.discordapp.com/attachments/299632702087495680/304251094723330048/absolutely_autistic.jpg", "https://cdn.discordapp.com/attachments/299632702087495680/302754519123755018/fuckingautist.png"];
    var rautist = autistico[Math.floor(Math.random() * autistico.length)];
    const mautist = new Discord.RichEmbed();
    mautist.setImage(rautist);
    mautist.setColor('#846BF7');

    message.channel.sendEmbed(mautist);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['autistic'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Autist Meme',
    name: 'autist',
    description: 'Meme',
    usage: 'autist'
  };
