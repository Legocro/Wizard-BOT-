////////////////////////////////////
/*
   BOT DONE BY: Wizardλ#4559
   STEAM: steamcommunity.com/id/gentleman_source
*/
////////////////////////////////////
//////////////CONSTANTS/////////////
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const jsonfile = require('jsonfile');
const ddiff = require('return-deep-diff');
////////////////////////////////////
//--------------------------------//
///////////CONSOLE LOGS/////////////
client.on('ready', () => {
  console.log("I want some insects!");
});
////////////////////////////////////
//--------------------------------//
//////////////BLOCKS////////////////
let names = JSON.parse(fs.readFileSync('./names.json', 'utf8'));
////////////////////////////////////
//--------------------------------//
//////////GUILD EVENTS//////////////
client.on('channelPinsUpdate', (channel, time) => {
  channel.guild.defaultChannel.sendMessage(`**The pins of the channel __${channel}__ have been updated!**`);
});
client.on('guildCreate', guild => {
  guild.defaultChannel.sendMessage(`**Thanks for adding me here! I hope __${guild.name}__ have loads of insects!\n\nDo \`k!about\` to know a bit about me!\n\nAlso you can see all commands with \`k!help\`!\n\nJoin my support server if you have any questions!\nhttps://discord.gg/uBdXdE9\n\nOh and add my emoji to your server! \`https://cdn.discordapp.com/emojis/282721376320618497.png\` so i can show myself!**`)
  names[guild.id] = {
    firstName: "Kanna",
    lastName: "Kobayashi",
    quizPhoto: "http://pm1.narvii.com/6366/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg",
  }
  client.users.get('267727230296129536').send(`I have joined ${guild.name}, it\'s ID is ${guild.id}!`)
  })

client.on('ready', () => {
  client.guilds.map(g => names[g.id] = {
    firstName: "Kanna",
    lastName: "Kobayashi",
    quizPhoto: "http://pm1.narvii.com/6366/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg",
  });
  fs.writeFile('./names.json', JSON.stringify(names), (err) => {
    if (err) console.error(err)
  });
});
////////////////////////////////////
//--------------------------------//
//////////CLIENT EVENTS/////////////
var prefix = "k!";
client.on('message', message => {
  if (message.author.bot) return;
////////////EVENT HORIZON///////////
  var userMod = (message.member.roles.exists('name', 'Magician!'));
////////////////////////////////////
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  let firstname = names[message.guild.id].firstName;
  let lastname = names[message.guild.id].lastName;
  let qphoto = names[message.guild.id].quizPhoto;
  const embed = new Discord.RichEmbed()
  embed.setDescription(`${message.author} started this event`, `${message.author.avatarURL}`)
  embed.setColor('#F7C3EF')
  embed.setFooter('This event has started at', 'https://cdn.discordapp.com/avatars/297459926505095180/36d9952998c1a24e3646af1a3e77cda6.jpg?size=1024')
  embed.setImage(qphoto)
  embed.setTimestamp()
  embed.addField('Try to guess who this is!',
  'This event will be over in 15 minutes')
  const helpEmbed = new Discord.RichEmbed()
  helpEmbed.setColor('#F7C3EF')
//  helpEmbed.setImage('https://cdn.discordapp.com/attachments/269129409888256000/300480119288365057/tumblr_ojzt52GXw51thzx08o1_500.gif')
  helpEmbed.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg')
  helpEmbed.setDescription(`**I have sent you help ${message.author}**`)
  helpEmbed.addField(``)
  const commonUser = new Discord.RichEmbed()
  .setTitle('Very Nice Title')
  .setAuthor('Author Name', 'https://goo.gl/rHndF5')
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription('The text of the body, essentially')
  .setFooter('Nice text at the bottom', 'https://goo.gl/hkFYh0')
  .setImage('https://goo.gl/D3uKk2')
  .setThumbnail('https://goo.gl/lhc6ke')
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL('https://discord.js.org/#/docs/main/indev/class/RichEmbed')
  .addField('Field Title', 'Field Value')
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField('Inline Field', 'Hmm 🤔', true)
  .addField('\u200b', '\u200b', true)
  .addField('Second (3rd place) Inline Field', 'I\'m in the ZOONE', true);


//////////EVERYONE CAN DO //////////
  if (message.content.includes('pregnant')) {
    message.channel.sendMessage(`Fear FBI ${message.author}\nhttps://cdn.discordapp.com/attachments/279299921071570958/298142045938122753/memo.png`);
  };

  if (message.content.includes('loli')) {
    message.channel.sendMessage(`**Hmm... A hooman**\nhttps://cdn.discordapp.com/attachments/275135980481150976/299263322157744128/aKVvBp1_460s.png`);
  };

  if (message.content.includes('dab' || 'dabs')) {
    message.channel.sendMessage(`**_dabs_**\nhttps://cdn.discordapp.com/attachments/275135980481150976/299673416712192000/hDrOJlT0GvA.jpg`);
  };

  if (message.content.includes('drunk')) {
    message.channel.sendMessage(`**__You have to be this cute to be drunk:__**\nhttps://cdn.discordapp.com/attachments/275135980481150976/299673369706496001/9wl5E10yNqE.jpg`);
  };

  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage('Eating insects...').then(msg => {
      msg.edit(`I took \`${msg.createdTimestamp - message.createdTimestamp} ms\` to eat all of them! ${message.guild.emojis.find('name', 'hugme')}`);
      return;
    });
  } else if (message.content.startsWith(prefix + 'about')) {
    message.channel.sendMessage(`**Who am i?**\n\nWell, i\m **Kanna Kobayashi**! I like insects... I like to fly... Oh and i like Kobayashi-san!\n\n**Join my support server if you have any questions!**\nhttps://discord.gg/uBdXdE9`)
  } else if (message.content.startsWith(prefix + 'invite')) {
    message.channel.sendMessage(`Invite me to your server ${message.author}! ${message.guild.emojis.find('name', 'hugme')}\nhttps://discordapp.com/oauth2/authorize?permissions=1341643977&scope=bot&client_id=297459926505095180`)
  };

  if (message.author.id === '267727230296129536') {
    if (message.content.startsWith(prefix + 'sg')) {
      if(!argresult) argresult = null;
      client.user.setGame(argresult + ` | on ${client.guilds.size} servers`);
    } else if (message.content.startsWith(prefix + 'ss')) {
      if(!argresult) argresult = 'online';
      client.user.setStatus(argresult);
    }
  };


  while (userMod) {
    if (message.content.startsWith(prefix + 'help')) {
      message.channel.sendEmbed(helpEmbed);
      message.author.send(`Hi ${message.author}\n\nThese are the moderator commands:\n\`k!sqphoto\`, \`k!sfname\`, \`k!slname\`, \`k!qstart\` and \`k!event\`\n\nAnd these are the common user commands:\n\`k!ping\`, \`k!invite\` and \`k!about\``);
    } else if (message.content.startsWith(prefix + 'sfname')) {
      message.channel.sendMessage(`The first name has changed sucessfully ${message.author}`)
      names[message.guild.id].firstName = args[0];
    } else if (message.content.startsWith(prefix + 'slname')) {
      message.channel.sendMessage(`The last name has changed sucessfully ${message.author}`);
      names[message.guild.id].lastName = args[0];
    } else if (message.content.startsWith(prefix + 'sqphoto')) {
      message.channel.sendMessage(`The quiz photo has changed sucessfully ${message.author}`);
      names[message.guild.id].quizPhoto = args[0];
    } else if (message.content.startsWith(prefix + 'event')) {
      message.guild.defaultChannel.sendMessage("People around @here! There\'s an quiz event coming!");
    } else if (message.content.startsWith(prefix + 'qstart')) {
      message.channel.sendEmbed(embed)
      .then(() => {
        message.channel.awaitMessages(response => response.content.startsWith(firstname) || response.content === lastname || response.content === lastname.toLowerCase() || response.content.startsWith(firstname.toLowerCase()) || response.content === firstname + ' ' +  lastname || response.content === firstname.toLowerCase() + ' ' + lastname.toLowerCase(), {
          max: 1,
          time: 900000,
          errors: ['time'],
        })
        .then((collected) => {
          message.channel.sendMessage(`**${collected.first().author} guessed it right!**\n\n**The character was: __${firstname} ${lastname}__**`);
        })
        .catch(() => {
          message.channel.sendMessage('**No one guessed it right! So the event has ended!**');
        })
      })
      .catch(console.error)
    };
      break;
    };

  while (!userMod) {
    if (message.content.startsWith(prefix + 'help')) {
      message.channel.sendEmbed(helpEmbed);
      message.author.send(`Hello ${message.author}\n\nThese are the commands you can use:\n\`k!ping\`, \`k!invite\` and \`k!about\``);
    } else if (message.content.startsWith(prefix + 'sfname')) {
      message.channel.sendMessage(`Hey **${message.author.username}** you don\'t have the \"\`Magician!\`\" role assigned to yourself!`)
    } else if (message.content.startsWith(prefix + 'slname')) {
      message.channel.sendMessage(`Hey **${message.author.username}** you don\'t have the \"\`Magician!\`\" role assigned to yourself!`)
    } else if (message.content.startsWith(prefix + 'sqphoto')) {
      message.channel.sendMessage(`Hey **${message.author.username}** you don\'t have the \"\`Magician!\`\" role assigned to yourself!`)
    } else if (message.content.startsWith(prefix + 'event')) {
      message.channel.sendMessage(`Hey **${message.author.username}** you don\'t have the \"\`Magician!\`\" role assigned to yourself!`)
    } else if (message.content.startsWith(prefix + 'qstart')) {
      message.channel.sendMessage(`Hey **${message.author.username}** you don\'t have the \"\`Magician!\`\" role assigned to yourself!`)
    }
    break;
  };

  fs.writeFile('./names.json', JSON.stringify(names), (err) => {
    if (err) console.error(err)
  });
////////////////////////////////////
});
////////////////////////////////////
//--------------------------------//
///////////////BOT C////////////////
client.login("Mjk5Mjg0NzQwMTI3NTg4MzUz.C8mDIQ.W1CTlvWM7EOY0TZbZxH8oJwLlxE");
////////////////////////////////////
