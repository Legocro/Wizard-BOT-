////////////////////////////////////
/*
   BOT DONE BY: Wizardλ#4559
   STEAM: steamcommunity.com/id/gentleman_source
*/
////////////////////////////////////
//////////////CONSTANTS/////////////
const Discord = require('discord.js');
const client = new Discord.Client({fetchAllMembers:true});
const fs = require("fs");
const jsonfile = require('jsonfile');
const ddiff = require('return-deep-diff');
const superagent = require('superagent');
////////////////////////////////////
//--------------------------------//
///////////CONSOLE LOGS/////////////
client.on('ready', () => {
  console.log("Give me insects... Or i\'ll not start v8.0.0");
});
////////////////////////////////////
//--------------------------------//
//////////////BLOCKS////////////////
let names = JSON.parse(fs.readFileSync('./names.json', 'utf8'));
////////////////////////////////////
//--------------------------------//
//////////GUILD EVENTS//////////////

client.on('guildCreate', guild => {
  guild.defaultChannel.sendMessage(`**Thanks for adding me here! I hope __${guild.name}__ have loads of insects!\n\nDo \`k!about\` to know a bit about me!\n\nAlso you can see all commands with \`k!help\`!\n\nJoin my support server if you have any questions!\nhttps://discord.gg/uBdXdE9**`)
  names[guild.id] = {
    firstName: "Kanna",
    lastName: "Kobayashi",
    quizPhoto: "http://pm1.narvii.com/6366/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg",
  }
  client.users.get('267727230296129536').send(`**I have joined __${guild.name}__**\n**Guild ID**: ${guild.id}!\n**Owner**: ${guild.owner.user.username}#${guild.owner.user.discriminator}, ${guild.ownerID}\n\n**Counts**\nMembers: ${guild.members.size}\nChannels: ${guild.channels.size}\nRoles: ${guild.roles.size}\n\n**Guild Photo**\n${guild.iconURL}`)
  client.user.setGame(`k!help | on ${client.guilds.size} guilds`);
  superagent
      .post(`https://bots.discord.pw/api/bots/${client.user.id}/stats`)
      .set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIyNjc3MjcyMzAyOTYxMjk1MzYiLCJyYW5kIjo2MDUsImlhdCI6MTQ5MTkyMzU0Mn0.70Ihb6mfLmzZz0MiyRYFaqJk7M4ubRL0aGIR32qAKF0")
      .set("Accept", "application/json")
      .send({ server_count: client.guilds.size })
      .then((res) => {
          console.log(`Posted Guild Count to Discord Bots, new count is ${res.body.stats[0].server_count}.`);
      })
      .catch((err) => {
          console.log(err);
      });
  });

  client.on('guildDelete', guild => {
    client.users.get('267727230296129536').send(`**I have left __${guild.name}__**\n**Guild ID**: ${guild.id}!\n**Owner**: ${guild.owner.user.username}#${guild.owner.user.discriminator}, ${guild.ownerID}\n\n**Counts**\nMembers: ${guild.members.size}\nChannels: ${guild.channels.size}\nRoles: ${guild.roles.size}\n\n**Guild Photo**\n${guild.iconURL}`)
    client.user.setGame(`k!help | on ${client.guilds.size} guilds`);
    superagent
        .post(`https://bots.discord.pw/api/bots/${client.user.id}/stats`)
        .set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIyNjc3MjcyMzAyOTYxMjk1MzYiLCJyYW5kIjo2MDUsImlhdCI6MTQ5MTkyMzU0Mn0.70Ihb6mfLmzZz0MiyRYFaqJk7M4ubRL0aGIR32qAKF0")
        .set("Accept", "application/json")
        .send({ server_count: client.guilds.size })
        .then((res) => {
            console.log(`Posted Guild Count to Discord Bots, new count is ${res.body.stats[0].server_count}.`);
        })
        .catch((err) => {
            console.log(err);
        });
    });

client.on('ready', () => {
  client.guilds.map(g => names[g.id] = {
    firstName: "Kanna",
    lastName: "Kobayashi",
    quizPhoto: "http://pm1.narvii.com/6366/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg",
  });
  fs.writeFile('./names.json', JSON.stringify(names), (err) => {
    if (err) console.error(err)
  });
  client.user.setGame(`k!help | on ${client.guilds.size} guilds`)
});
////////////////////////////////////
//--------------------------------//
//////////CLIENT EVENTS/////////////
var prefix = "k!";
client.on('message', message => {
  if (message.author.bot) return;
////////////EVENT HORIZON///////////
  var userMod = (message.member.roles.exists('name', 'Dragon Tamer')) || message.author.id === '267727230296129536';
////////////////////////////////////
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  let firstname = names[message.guild.id].firstName;
  let lastname = names[message.guild.id].lastName;
  let qphoto = names[message.guild.id].quizPhoto;

/////////////////////EMBEDS///////////////////////
  const embed = new Discord.RichEmbed()
  embed.setColor('#F7C3EF')
  embed.setFooter(`${message.author.username} started this event at`, `${message.author.displayAvatarURL}`)
  embed.setImage(qphoto)
  embed.setTimestamp()
  embed.addField('Try to guess who this is!',
  'This event will be over in 15 minutes')

  const helpEmbed = new Discord.RichEmbed()
  helpEmbed.setAuthor(`DM incoming!`, `${message.author.displayAvatarURL}`)
  helpEmbed.setColor('#FB3A9B')
  helpEmbed.setDescription(`Have fun ${message.author}!`)
  helpEmbed.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg')


  const tamerUser = new Discord.RichEmbed()
  tamerUser.setTitle(`アホイ\(Ahoi\) ${message.author.username}`)
  tamerUser.setAuthor('Click here to join the support server!', `${message.author.displayAvatarURL}`)
  tamerUser.setColor('#FB3A9B')
  tamerUser.setDescription(`${message.author} don\'t forget to have fun!`)
  tamerUser.setFooter('BOT done by Wizardλ#4559', 'https://cdn.discordapp.com/avatars/267727230296129536/d97af37c3284d8c18a7c314c7c3f7174.jpg?size=1024');
  tamerUser.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg')
  tamerUser.setURL('https://discord.gg/uBdXdE9')
  tamerUser.addField('Tamer Commands',
    '\`k!sqphoto <link>\` sets the character photo\n\`k!sfname\` sets the character first name\n\`k!slname\` sets the character last name\n\`k!qstart\` starts the event\n\`k!event\` announces the event with an @here in the default channel')
  tamerUser.addField('User Commands', '\`k!ping\` see how long the bot takes to answer commands\n\`k!invite\` gets the bot link invite\n\`k!about\` a bit about **Kanna Kobayashi** and how to set it up\n\`k!feedback\` sends a feedback to the overlord\n\`k!bstats\` see the bot current stats\n\`k!sstats\` see the guild stats', true)
  tamerUser.addField('Memes', '\`k!pregnant\`\n\`k!lewd\`\n\`k!hungry\`\n\`k!loli\`\n\`k!dab\`\n\`k!drunk\`\n\`k!triggered\`\n\`k!endme\`\n\`k!shs\`\n\`k!russia\`\n\`k!gangsta\`\n\`k!comfy\`\n\`k!police\`\n\`k!doit\`', true)

  const commonUser = new Discord.RichEmbed()
  commonUser.setTitle(`**アホイ\(Ahoi\) ${message.author.username}**`)
  commonUser.setAuthor('Click here to join the support server!', `${message.author.displayAvatarURL}`)
  commonUser.setColor(0x00AE86)
  commonUser.setDescription(`If you want to use Tamer\(Mod\) commands ${message.author} you need the role \`Dragon Tamer\` assigned to yourself on ${message.guild.name}`);
  commonUser.setFooter('BOT done by Wizardλ#4559', 'https://cdn.discordapp.com/avatars/267727230296129536/d97af37c3284d8c18a7c314c7c3f7174.jpg?size=1024');
  commonUser.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg');
  commonUser.setURL('https://discord.gg/uBdXdE9')
  commonUser.addField('Commands', '\`k!ping\` see how long the bot takes to answer commands\n\`k!invite\` gets the bot link invite\n\`k!about\` a bit about **Kanna Kobayashi** and how to set it up\n\`k!feedback\` sends a feedback to the overlord\n\`k!bstats\` see the bot current stats\n\`k!sstats\` see the guild stats', true)
  commonUser.addField('Memes', '\`k!pregnant\`\n\`k!lewd\`\n\`k!hungry\`\n\`k!loli\`\n\`k!dab\`\n\`k!drunk\`\n\`k!triggered\`\n\`k!endme\`\n\`k!shs\`\n\`k!russia\`\n\`k!gangsta\`\n\`k!comfy\`\n\`k!police\`\n\`k!doit\`', true)
//////////////////////

  let minutes;
  let hours;
  let seconds;

  if((client.uptime / 60000 % 60).toFixed() == 0) {
    minutes = '';
  } else if((client.uptime / 60000 % 60).toFixed() > 0) {
    minutes = `\n` + (client.uptime / 60000 % 60).toFixed() + ' minute(s)'
  };

  if((client.uptime / 3600000 % 24).toFixed() == 0) {
    hours = '';
  } else if((client.uptime / 3600000 % 24).toFixed() > 0) {
    hours = `\n` + (client.uptime / 3600000 % 24).toFixed() + ' hour(s)'
  };

  if ((client.uptime / 1000 % 60).toFixed() == 0) {
    seconds = '';
  } else if ((client.uptime / 1000 % 60).toFixed()) {
    seconds = `\n` + (client.uptime / 1000 % 60).toFixed() + ' second(s)'
  };

  const stats = new Discord.RichEmbed()
  stats.setAuthor('Stats for Kanna Kobayashi', 'https://cdn.discordapp.com/avatars/297459926505095180/36d9952998c1a24e3646af1a3e77cda6.jpg?size=1024');
  stats.addField('Uptime', `${hours}${minutes}${seconds}`)
  stats.setFooter('BOT done by Wizardλ#4559', 'https://cdn.discordapp.com/avatars/267727230296129536/d97af37c3284d8c18a7c314c7c3f7174.jpg?size=1024')
  stats.setColor('##00FFFD')
  stats.addField('On', `${client.guilds.size} Guilds`)
  stats.addField('With', `${client.users.size} Humans`)
/////////////////////

  const fback = new Discord.RichEmbed()
  fback.setColor('#00FFFD')
  fback.setTimestamp()
  fback.setFooter('Received', `${message.author.displayAvatarURL}`)
  fback.setTitle(`New feedback sent to you my overlord`)
  fback.setDescription(`//-----------//`)
  fback.addField('User Feedback', `${message.content.split(prefix + 'feedback').slice(1)}`)
  fback.addField('Informations', `**Username:** ${message.author}\n**User ID:** ${message.author.id}\n**Guild Name:** ${message.guild.name}\n**Guild ID:** ${message.guild.id}\n**Message ID:** ${message.id}`)

  const serverstatus = new Discord.RichEmbed()
  serverstatus.setThumbnail(`${message.guild.iconURL}`)
  serverstatus.setAuthor(`${message.guild.name} Stats`)
  serverstatus.addField('Owner', `${message.guild.owner}\nID: ${message.guild.owner.user.id}`)
  serverstatus.addField('Guild ID', `${message.guild.id}`)
  serverstatus.addField('Member Count', `${message.guild.members.size}`)
  serverstatus.addField('Region', `${message.guild.region}`)
  serverstatus.addField('Channels', `${message.guild.channels.size}`)
  serverstatus.addField('Roles', `${message.guild.roles.size}`)
  serverstatus.setTimestamp()
  serverstatus.setFooter('Server Stats from', `${message.author.displayAvatarURL}`)

//--------------------------------//
///////////MEME EMBDES//////////////

  const mpregnant = new Discord.RichEmbed()
  mpregnant.setTitle(`Fear FBI ${message.author.username}`)
  mpregnant.setImage('https://cdn.discordapp.com/attachments/279299921071570958/298142045938122753/memo.png')
  mpregnant.setColor('#846BF7')

  const mhungry = new Discord.RichEmbed()
  mhungry.setTitle('Hoomans taste good as insects?')
  mhungry.setImage('https://cdn.discordapp.com/attachments/269129409888256000/300481191151271946/giphy_9.gif')
  mhungry.setColor('#846BF7')

  const mloli = new Discord.RichEmbed()
  mloli.setTitle('Hmm... A hooman')
  mloli.setImage('https://cdn.discordapp.com/attachments/275135980481150976/299263322157744128/aKVvBp1_460s.png')
  mloli.setColor('#846BF7')

  const mtriggered = new Discord.RichEmbed()
  mtriggered.setTitle('YYYYYYYYYYYYYYYY')
  mtriggered.setImage('https://cdn.discordapp.com/attachments/299398003486097412/301061190434553856/1491411414847.gif')
  mtriggered.setColor('#846BF7')

  const mendme = new Discord.RichEmbed()
  mendme.setImage('https://cdn.discordapp.com/attachments/299398003486097412/300740618009837571/1491078423557.jpg')
  mendme.setColor('#846BF7')

  const mdab = new Discord.RichEmbed()
  mdab.setTitle('Dabbbbbbbb')
  mdab.setImage('https://cdn.discordapp.com/attachments/275135980481150976/299673416712192000/hDrOJlT0GvA.jpg')
  mdab.setColor('#846BF7')

  const mdunk = new Discord.RichEmbed()
  mdunk.setTitle('You have to be this cute to be drunk')
  mdunk.setImage('https://cdn.discordapp.com/attachments/275135980481150976/299673369706496001/9wl5E10yNqE.jpg')
  mdunk.setColor('#846BF7')

  const mpolice = new Discord.RichEmbed()
  mpolice.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302193800175026177/Sin_titulo.png')
  mpolice.setColor('#846BF7')

  const mdoit = new Discord.RichEmbed()
  mdoit.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302198705929584641/do_it_for_her___kanna_kamui_by_phosphobos-db1xlb1.jpg')
  mdoit.setColor('#846BF7')
////////////////////////////////////
//--------------------------------//
//////////EVERYONE CAN DO //////////

  if (message.content.startsWith(prefix + 'pregnant')) {
    message.channel.sendEmbed(mpregnant)
  } else if (message.content.startsWith(prefix + 'shs')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=F4Q_AC3N0SA')
  } else if (message.content.startsWith(prefix + 'russia')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=yCYH0ee-qjk')
  } else if (message.content.startsWith(prefix + 'gangsta')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=TdRMxM5208E')
  } else if (message.content.startsWith(prefix + 'comfy')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=ZyYaSvWikPQ')
  } else if (message.content.startsWith(prefix + 'lewd')) {
    message.channel.sendMessage('https://streamable.com/npvut');
  } else if (message.content.startsWith(prefix + 'hungry')) {
    message.channel.sendEmbed(mhungry)
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
  } else if (message.content.startsWith(prefix + 'triggered')) {
    message.channel.sendEmbed(mtriggered)
  } else if (message.content.startsWith(prefix + 'endme')) {
    message.channel.sendEmbed(mendme)
  } else if (message.content.startsWith(prefix + 'loli')) {
    message.channel.sendEmbed(mloli)
  } else if (message.content.startsWith(prefix + 'dab')) {
    message.channel.sendEmbed(mdab)
  } else if (message.content.startsWith(prefix + 'drunk')) {
    message.channel.sendEmbed(mdunk)
  } else if (message.content.startsWith(prefix + 'police')) {
    message.channel.sendEmbed(mpolice)
  } else if (message.content.startsWith(prefix + 'doit')) {
    message.channel.sendEmbed(mdoit)
  } else if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage('Eating insects...').then(msg => {
      msg.edit(`I took \`${msg.createdTimestamp - message.createdTimestamp} ms\` to eat all of them!`);
      return;
    });
  } else if (message.content.startsWith(prefix + 'about')) {
    message.channel.sendMessage(`**こんにちは(Kon'nichiwa) ${message.author}**\n\nI am **カンナカムイ\(Kanna Kamui\)** i live with Kobayashi-san... So call me **Kanna Kobayashi**!\n\nWell, i am at **Discord** to spread the love for anime and quiz!\nFirst of all, you need to assign to yourself a role called \"Dragon Tamer\"\nAfter you can do \`k!qstart\` to test if everything is good!\n\nTo set up a different character you have to do \`k!sfname <first name>\` to set the character first name, \`k!slname <last name>\` to set up the character last name and \`k!sqphoto <link>\` to set up the character photo, then just do \`k!qstart\`!\n\n**Join my support server if you have any questions!**\nhttps://discord.gg/uBdXdE9`)
  } else if (message.content.startsWith(prefix + 'invite')) {
    message.channel.sendMessage(`Invite me to your server ${message.author}!\nhttps://discordapp.com/oauth2/authorize?permissions=1341643977&scope=bot&client_id=297459926505095180`)
  } else if (message.content.startsWith(prefix + 'feedback')) {
    client.users.get('267727230296129536').sendEmbed(fback)
    message.channel.sendMessage(`A feedback has been sent to the overlord!`)
  } else if (message.content.startsWith(prefix + 'bstats')) {
    message.channel.sendEmbed(stats)
  } else if (message.content.startsWith(prefix + 'gstats')) {
    message.channel.sendEmbed(serverstatus)
  } else

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
      client.users.get('267727230296129536').send(`On the guild ${message.guild.name}, ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator} started a quiz event!`)
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
client.login("Mjk3NDU5OTI2NTA1MDk1MTgw.C878jQ.hpOT-Bat3l5fS7nzxKPtAomRhvc");
////////////////////////////////////
