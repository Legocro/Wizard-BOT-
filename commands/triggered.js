const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    const mtriggered = new Discord.RichEmbed();
    mtriggered.setTitle('YYYYYYYYYYYYYYYY');
    mtriggered.setImage('https://cdn.discordapp.com/attachments/299398003486097412/301061190434553856/1491411414847.gif');
    mtriggered.setColor('#846BF7');

    message.channel.sendEmbed(mtriggered);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tt'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Triggered',
    name: 'triggered',
    description: 'fuk u',
    usage: 'triggered'
  };
