const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    var lolies = ['https://images-ext-2.discordapp.net/eyJ1cmwiOiJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy8yNzUxMzU5ODA0ODExNTA5NzYvMjk5MjYzMzIyMTU3NzQ0MTI4L2FLVnZCcDFfNDYwcy5wbmcifQ.QZ7r6tUoDr0KZ_R74SJX4iIuPQM?width=388&height=597', 'https://cdn.discordapp.com/attachments/269129409888256000/300666636946374656/1491677914_giphy_2.gif'];
    var rloli = lolies[Math.floor(Math.random() * lolies.length)];
    const mloli = new Discord.RichEmbed();
    mloli.setTitle('Hmm... A hooman');
    mloli.setImage(rloli);
    mloli.setColor('#846BF7');


    message.channel.sendEmbed(mloli);
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ll'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Loli',
    name: 'loli',
    description: 'Meme',
    usage: 'loli'
  };
