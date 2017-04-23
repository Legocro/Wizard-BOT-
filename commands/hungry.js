const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{

    const mhungry = new Discord.RichEmbed();
    mhungry.setTitle('Hoomans taste good as insects?');
    mhungry.setImage('https://cdn.discordapp.com/attachments/269129409888256000/300481191151271946/giphy_9.gif');
    mhungry.setColor('#846BF7');

    message.channel.sendEmbed(mhungry)
                 .then(() => {
                   message.channel.awaitMessages(response => response.content.startsWith('yes'), {
                     max: 1,
                     time: 30000,
                     errors: ['time']
                   })
                   .then((collected) => {
                     message.channel.sendMessage(`**Thank you ${collected.first().author}, i will try a human next time i go to school**`);
                   });
                 });
  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
};

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hg'],
    permLevel: 0
  };

  exports.help = {
    hName: 'Hungry',
    name: 'hungry',
    description: 'Meme',
    usage: 'hungry'
  };
