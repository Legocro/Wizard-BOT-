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
  .then(names[guild.id] = {
    firstName: "Kanna",
    lastName: "Kobayashi",
    quizPhoto: "http://pm1.narvii.com/6366/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg",
  })
  fs.writeFile('./names.json', JSON.stringify(names), (err) => {
    if (err) console.error(err)
  });
  console.log(`I have joined ${guild.name}, it\'s ID is ${guild.id}!`)
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
      message.channel.sendMessage(`Konichiwa ${message.author}\n\nThese are the mod commands:\n\`k!sqphoto\`, \`k!sfname\`, \`k!slname\`, \`k!qstart\` and \`k!event\`\n\nAnd these are the pleb ones:\n\`k!ping\`, \`k!invite\` and \`k!about\``);
    } else if (message.content.startsWith(prefix + 'sfname')) {
      message.channel.sendMessage(`The first name has changed sucessfully ${message.author}`);
      names[message.guild.id].firstName = args[0];
    } else if (message.content.startsWith(prefix + 'slname')) {
      (message.channel.sendMessage(`The last name has changed sucessfully ${message.author}`));
      names[message.guild.id].lastName = args[0];
    } else if (message.content.startsWith(prefix + 'sqphoto')) {
      (message.channel.sendMessage(`The quiz photo has changed sucessfully ${message.author}`));
      names[message.guild.id].quizPhoto = args[0];
    } else if (message.content.startsWith(prefix + 'event')) {
      (message.guild.defaultChannel.sendMessage("People around @here! There\'s an quiz event coming!"));
    } else if (message.content.startsWith(prefix + 'qstart')) {
      message.channel.sendMessage(`The quiz event has been started by ${message.author}!\nIn 15 minutes the event will be ended!\n\n**Try to guess who this is:**\n` + qphoto)
      .then(() => {
        message.channel.awaitMessages(response => response.content === firstname || response.content === lastname || response.content === lastname.toLowerCase() || response.content === firstname.toLowerCase() || response.content === firstname + ' ' +  lastname || response.content === firstname.toLowerCase() + ' ' +  lastname.toLowerCase(), {
          max: 1,
          time: 900000,
          errors: ['time'],
        })
        .then((collected) => {
          message.channel.sendMessage(`**${collected.first().author} guessed it right!**\n\n**The character was: __${firstname} ${lastname}__**`);
        })
        .catch(() => {
          message.channel.sendMessage('**No one guessed it right! So the event has ended!**');
        });
      });
    };
      break;
    };

  while (!userMod) {
    if (message.content.startsWith(prefix + 'help')) {
      message.channel.sendMessage(`Hello ${message.author}\n\nThese are the commands you can use:\n\`k!ping\`, \`k!invite\` and \`k!about\``);
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
