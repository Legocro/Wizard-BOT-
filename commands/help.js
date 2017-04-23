const settings = require('../settings.json');
const Discord = require('discord.js');

    exports.run = (client, message, params) => {
      try{
      if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        const helpList = new Discord.RichEmbed();
        const helpEmbed = new Discord.RichEmbed();
        helpList.setAuthor('Click here to join the support server!', `${message.author.displayAvatarURL}`);
        helpList.setColor('#FB3A9B');
        helpList.setFooter('BOT done by Wizardλ#4559', 'https://cdn.discordapp.com/avatars/267727230296129536/d97af37c3284d8c18a7c314c7c3f7174.jpg?size=1024');
        helpList.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg');
        helpList.setURL('https://discord.gg/uBdXdE9');
        helpList.addField('Prefix', `${settings.prefix}`);
        helpList.addField(`Type ${settings.prefix} <command> to see how to use it`, 'love u');
        helpList.addField('Dragon Tamer Commands',
        '\`sqphoto\`\n\`sfname\`\n\`slname \`\n\`qstart\`');
        helpList.addField('Common Commands', '\`ping\`\n\`invite\`\n\`about\`\n\`feedback\`\n\`request\` request a new feature to Kanna\n\`bstats\` see the bot current stats\n\`gstats\` see the guild stats');
        helpList.addField('Memes Gen. 1', '\`pregnant\`\n\`lewd\`\n\`hungry\`\n\`loli\`\n\`dab\`\n\`drunk\`\n\`triggered\`\n\`endme\`\n\`shs\`\n\`russia\`\n\`gangsta\`\n\`comfy\`', true);
        helpList.addField('Memes Gen. 2', '\n\`rain\`\n\`dance\`\n\`purge\`\n\`ten\`\n\`sheet\`\n\`listen\`\n\`friends\`\n\`autist\`\n\`police\`\n\`doit\`', true);
        helpList.addField('Memes Gen. 3 (Current)', '\`delete\`\n\`joke\`\n\`brain\`\n\`cancer\`\n\`wtf\`\n\`100\`\n\`ticc\`\n\`laid\`\n\`flat\`\n\`pussy\`\n\`911\`\n\`dis\`\n\`kawaii\`\n\`ernie\`\n\`capit\`\n\`4ever\`\n\`scream\`\n\`jojoke\`', true);
        message.author.sendEmbed(helpList);
        helpEmbed.setAuthor(`DM incoming!`, `${message.author.displayAvatarURL}`);
        helpEmbed.setColor('#FB3A9B');
        helpEmbed.setDescription(`Have fun ${message.author}!`);
        helpEmbed.setThumbnail(`${client.user.displayAvatarURL}`);
        message.channel.sendEmbed(helpEmbed);
      } else {
        let command = params[0];
        if (client.commands.has(command)) {
          command = client.commands.get(command);
          const commandInfo = new Discord.RichEmbed();
          const helpEmbed = new Discord.RichEmbed();
          commandInfo.addField(`${command.help.hName}`, `${command.help.description}`);
          commandInfo.addField('Usage', `${settings.prefix}${command.help.usage}`);
          commandInfo.addField('Aliases', `${settings.prefix}${command.conf.aliases.join('\n')}`);
          commandInfo.setColor('#FB3A9B');
          message.author.sendEmbed(commandInfo);
          helpEmbed.setAuthor(`DM incoming!`, `${message.author.displayAvatarURL}`);
          helpEmbed.setColor('#FB3A9B');
          helpEmbed.setDescription(`Incoming help for the command \`${command.help.hName}\`!`);
          helpEmbed.setThumbnail(`${client.user.displayAvatarURL}`);
          message.channel.sendEmbed(helpEmbed);
        }
      }
    }catch(err) {
    message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
    }
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['halp'],
  permLevel: 0
};

exports.help = {
  hName: 'Help',
  name: 'help',
  description: 'Displays all the available commands.',
  usage: 'help <command>'
};
