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
  console.log("Give me insects... Or i\'ll not start v6.0.0");
});
////////////////////////////////////
//--------------------------------//
//////////////BLOCKS////////////////
let names = JSON.parse(fs.readFileSync('./names.json', 'utf8'));
////////////////////////////////////
//--------------------------------//
//////////GUILD EVENTS//////////////
client.on('channelPinsUpdate', (channel, time) => {
  channel.guild.defaultChannel.sendMessage(`**The pins of __${channel}__ have been updated ${message.guild.emojis.find('name', 'hugme')}**`);
});
client.on('guildCreate', guild => {
  guild.defaultChannel.sendMessage(`**Thanks for adding me here! I hope __${guild.name}__ have loads of insects!\n\nDo \`k!about\` to know a bit about me!\n\nAlso you can see all commands with \`k!help\`!\n\nJoin my support server if you have any questions!\nhttps://discord.gg/uBdXdE9\n\nOh and add my emoji to your server! \`https://cdn.discordapp.com/emojis/282721376320618497.png\` and call it hugme so i can show myself! \(Some commands will appear undefined somewhere because they have that emoji\)**`)
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
  var userMod = (message.member.roles.exists('name', 'Dragon Tamer'));
////////////////////////////////////
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  let firstname = names[message.guild.id].firstName;
  let lastname = names[message.guild.id].lastName;
  let qphoto = names[message.guild.id].quizPhoto;
  const embed = new Discord.RichEmbed()
  embed.setColor('#F7C3EF')
  embed.setFooter(`${message.author.username} started this event at`, `${message.author.avatarURL}`)
  embed.setImage(qphoto)
  embed.setTimestamp()
  embed.addField('Try to guess who this is!',
  'This event will be over in 15 minutes')
  const helpEmbed = new Discord.RichEmbed()
  helpEmbed.setAuthor(`DM incoming!`, `${message.author.avatarURL}`)
  helpEmbed.setColor('#FB3A9B')
  helpEmbed.setDescription(`Have fun ${message.author}!`)
  helpEmbed.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg')
  const tamerUser = new Discord.RichEmbed()
  tamerUser.setTitle(`**アホイ\(Ahoi\) ${message.author.username}**`)
  tamerUser.setAuthor('BOT done by Wizardλ#4559', 'https://cdn.discordapp.com/avatars/267727230296129536/d97af37c3284d8c18a7c314c7c3f7174.jpg?size=1024')
  tamerUser.setColor('#FB3A9B')
  tamerUser.setFooter('Join my support server if you have any more questions \(https://discord.gg/uBdXdE9\)')
  tamerUser.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg')
  tamerUser.addField('Tamer Commands',
    '\`k!sqphoto <link>\` sets the character photo\n\`k!sfname\` sets the character first name\n\`k!slname\` sets the character last name\n\`k!qstart\` starts the event\n\`k!event\` announces the event with an @here in the default channel')
  tamerUser.addField('User Commands', '\`k!ping\` see how long the bot takes to answer commands\n\`k!invite\` gets the bot link invite\n\`k!about\` a bit about **Kanna Kobayashi** and how to set it up', true)
  tamerUser.addField('\u200b', '\u200b', true)
  const commonUser = new Discord.RichEmbed()
  commonUser.setTitle(`**アホイ\(Ahoi\) ${message.author.username}**`)
  commonUser.setAuthor('BOT done by Wizardλ#4559', 'https://cdn.discordapp.com/avatars/267727230296129536/d97af37c3284d8c18a7c314c7c3f7174.jpg?size=1024')
  commonUser.setColor(0x00AE86)
  commonUser.setDescription(`If you want to use Tamer\(Mod\) commands ${message.author} you need the role \`Dragon Tamer\` assigned to yourself on ${message.guild.name}`)
  commonUser.setFooter('Join my support server if you have any more questions \(https://discord.gg/uBdXdE9\)')
  commonUser.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg')
  commonUser.addField('Commands',
    '\`k!ping\` see how long the bot takes to answer commands\n\`k!invite\` gets the bot link invite\n\`k!about\` a bit about **Kanna Kobayashi** and how to set it up')
  commonUser.addField('\u200b', '\u200b', true)

//////////EVERYONE CAN DO //////////
  if (message.content.includes('pregnant')) {
    message.channel.sendMessage(`Fear FBI ${message.author}\nhttps://cdn.discordapp.com/attachments/279299921071570958/298142045938122753/memo.png`);
  };

  if (message.content.includes('lewd')) {
    message.channel.sendMessage('https://streamable.com/npvut');
  };

  if (message.content.includes('hungry')) {
    message.channel.sendMessage('Hoomans taste good as insects?\n\nhttps://cdn.discordapp.com/attachments/269129409888256000/300481191151271946/giphy_9.gif')
    .then(() => {
      message.channel.awaitMessages(response => response.content.startsWith('yes'), {
        max: 1,
        time: 30000,
        errors: ['time'],
      })
      .then((collected) => {
        message.channel.sendMessage(`**Thank you ${collected.first().author}, i will try a human next time i go to school**`);
      })
    })
    .catch(console.error)
  };

  if (message.content.includes('loli')) {
    message.channel.sendMessage(`**Hmm... A hooman**\nhttps://cdn.discordapp.com/attachments/275135980481150976/299263322157744128/aKVvBp1_460s.png`);
  };

  if (message.content.includes('dab' || 'dabs')) {
    message.channel.sendMessage(`**_dabs_**\nhttps://cdn.discordapp.com/attachments/275135980481150976/299673416712192000/hDrOJlT0GvA.jpg`);
  };

  if (message.content.includes('drunk')) {
    message.channel.sendMessage(`**_You have to be this cute to be drunk:_**\n\nhttps://cdn.discordapp.com/attachments/275135980481150976/299673369706496001/9wl5E10yNqE.jpg`);
  };

  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage('Eating insects...').then(msg => {
      msg.edit(`I took \`${msg.createdTimestamp - message.createdTimestamp} ms\` to eat all of them! ${message.guild.emojis.find('name', 'hugme')}`);
      return;
    });
  } else if (message.content.startsWith(prefix + 'about')) {
    message.channel.sendMessage(`**こんにちは(Kon'nichiwa) ${message.author}**\n\nI am **カンナカムイ\(Kanna Kamui\)** i live with Kobayashi-san... So call me **Kanna Kobayashi**!\n\nWell, i am at **Discord** to spread the love for anime and quiz!\nFirst of all, you need to assign to yourself a role called \"Dragon Tamer\"\nAfter you can do \`k!qstart\` to test if everything is good!\n\nTo set up a different character you have to do \`k!sfname <first name>\` to set the character first name, \`k!slname <last name>\` to set up the character last name and \`k!sqphoto <link>\` to set up the character photo, then just do \`k!qstart\`!\n\n**Join my support server if you have any questions!**\nhttps://discord.gg/uBdXdE9`)
  } else if (message.content.startsWith(prefix + 'invite')) {
    message.channel.sendMessage(`Invite me to your server ${message.author}! ${message.guild.emojis.exists('name', 'hugme')}\nhttps://discordapp.com/oauth2/authorize?permissions=1341643977&scope=bot&client_id=297459926505095180`)
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
      message.author.sendEmbed(tamerUser);
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
      message.guild.defaultChannel.sendMessage("**People around @here! There is a quiz event coming!");
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
      message.author.sendEmbed(commonUser);
    } else if (message.content.startsWith(prefix + 'sfname')) {
      message.channel.sendMessage(`**${message.author}** you don\'t have the \`Dragon Tamer\` role assigned to yourself!`)
    } else if (message.content.startsWith(prefix + 'slname')) {
      message.channel.sendMessage(`**${message.author}** you don\'t have the \`Dragon Tamer\` role assigned to yourself!`)
    } else if (message.content.startsWith(prefix + 'sqphoto')) {
      message.channel.sendMessage(`**${message.author}** you don\'t have the \`Dragon Tamer\` role assigned to yourself!`)
    } else if (message.content.startsWith(prefix + 'event')) {
      message.channel.sendMessage(`**${message.author}** you don\'t have the \`Dragon Tamer\` role assigned to yourself!`)
    } else if (message.content.startsWith(prefix + 'qstart')) {
      message.channel.sendMessage(`**${message.author}** you don\'t have the \`Dragon Tamer\` role assigned to yourself!`)
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
client.login("Mjk3NDU5OTI2NTA1MDk1MTgw.C8l-Uw.tjttjQQ_e4YRc0Dq5il48MbKnqg");
////////////////////////////////////
