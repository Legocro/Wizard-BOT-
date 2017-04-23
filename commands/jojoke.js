const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    var jojokes = ['http://i.imgur.com/Pvs7w9y.png', 'https://cdn.discordapp.com/attachments/269129409888256000/304772815981248512/Ineededtheseinmylife_2abdfd6f35331f417d3a2e28f7e0479b.jpg', 'https://images.discordapp.net/.eJwFwdsNwyAMAMBdGACbR4nJNggoSZXUCLtfVXfv3dd81mV2c6hO2QHaKZVXs6K8yuh2MI-rl3mKrXxDUS31uPtbBXzKzueImYj8IyEiBIzb5snFkFJwGB0CPZt9zWF-f3lUIL0.EudCuCv9o41DO07ew3Lj8o84hIo?width=163&height=597', 'https://cdn.discordapp.com/attachments/269129409888256000/304772847262236672/ef8.gif', 'https://cdn.discordapp.com/attachments/269129409888256000/304772847606300672/follow-donald-j-trump-o-greadonald-trump-i-loved-this-2542621.png'];
    var rjojokes = jojokes[Math.floor(Math.random() * jojokes.length)];
    const mjojoke = new Discord.RichEmbed();
    mjojoke.setImage(rjojokes);
    mjojoke.setColor('#846BF7');


  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['jjk'],
    permLevel: 0
  };

  exports.help = {
    hName: 'JojOOOOOOOOOOOOOkes',
    name: 'jojoke',
    description: 'Meme',
    usage: 'jojoke'
  };
