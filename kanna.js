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
const token = require('./settings.json').token;
const ddiff = require('return-deep-diff');

var commandUsed = false;
////////////////////////////////////
//--------------------------------//
///////////CONSOLE LOGS/////////////
client.on('ready', () => {
  console.log("I\'m Online\nAnd\nI need punishment.");
});
////////////////////////////////////
//--------------------------------//
//////////////BLOCKS////////////////
let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));
let names = JSON.parse(fs.readFileSync('./names.json', 'utf8'));
////////////////////////////////////
//--------------------------------//
//////////GUILD EVENTS//////////////
client.on('channelPinsUpdate', (channel, time) => {
  channel.guild.defaultChannel.sendMessage(`**The pins of the channel __${channel}__ have been updated!**`);
});
client.on('guildCreate', guild => {
  guild.defaultChannel.sendMessage(`Thanks for adding me here! I hope ${guild.name} haves loads of insects!`);
  if (!names[guild.id]) names[guild.id] = {
    firstName: "Dio",
    lastName: "Brando",
    quizPhoto: "http://vignette3.wikia.nocookie.net/jjba/images/8/87/DioP2.png/revision/latest?cb=20161028235952"
  }
});
////////////////////////////////////
//--------------------------------//
//////////CLIENT EVENTS/////////////
var prefix = "w!";
client.on('message', message => {
  if (message.author.bot) return;
////////////EVENT HORIZON///////////
  var userMod = (message.member.roles.exists('name', 'Magician!'));
////////////////////////////////////
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  let userData = points[message.author.id];
  let firstname = names[message.guild.id].firstName;
  let lastname = names[message.guild.id].lastName;
  let qphoto = names[message.guild.id].quizPhoto;

//////////EVERYONE CAN DO //////////
  if (message.content.includes('pregnant')) {
    message.channel.sendMessage(`Fear FBI ${message.author}\nhttps://cdn.discordapp.com/attachments/279299921071570958/298142045938122753/memo.png`);
  };

  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage('Eating insects...').then(msg => {
      msg.edit(`I took \`${msg.createdTimestamp - message.createdTimestamp} ms\` to eat all of them! ${message.guild.emojis}`)
    });
  } else

  while (userMod) {
    if (message.content.startsWith(prefix + 'help')) {
      message.channel.sendMessage(`Konichiwa ${message.author}\n\nThese are the mod commands:\n\`w!restart\`, \`w!sqphoto\`, \`w!sfname\`, \`w!slname\`, \`w!quiz\`, \`w!event\`, \`w!ss\` and \`w!ss\`\n\nAnd these are the pleb ones:\n\`w!ping\`, \`w!guess <character name>\` and \`w!point1s\``);
    } else if (message.content.startsWith(prefix + 'sg')) {
      if(!argresult) argresult = null;
      client.user.setGame(argresult);
    } else if (message.content.startsWith(prefix + 'ss')) {
      if(!argresult) argresult = 'online';
      client.user.setStatus(argresult);
    } else if (message.content.startsWith(prefix + 'sfname')) {
      message.channel.sendMessage(`The first name has changed sucessfully ${message.author}`);
      if (!names[message.guild.id]) names[message.guild.id] = {
        firstName: args[0]
      }
      names[message.guild.id].firstName = args[0];
    } else if (message.content.startsWith(prefix + 'slname')) {
      (message.channel.sendMessage(`The last name has changed sucessfully ${message.author}`));
      if (!names[message.guild.id]) names[message.guild.id] = {
        lastName: args[0]
      }
    } else if (message.content.startsWith(prefix + 'sqphoto')) {
      (message.channel.sendMessage(`The quiz photo has changed sucessfully ${message.author}`));
      if (!names[message.guild.id]) names[message.guild.id] = {
        quizPhoto: args[0]
      }
    } else if (message.content.startsWith(prefix + 'quiz')) {
        (message.guild.defaultChannel.sendMessage("**Try to guess who is this character!**\n" + qphoto));
    } else if (message.content.startsWith(prefix + 'event')) {
      (message.guild.defaultChannel.sendMessage("People around @here! There\'s an quiz event coming!"))
    } else if (message.content.startsWith(prefix + 'restart')) {
      (message.channel.sendMessage(`The quiz has restarted sucessfully ${message.author}`))
      commandUsed = false
    }
      break;
    };

  while (!userMod) {
    if (message.content.startsWith(prefix + 'help')) {
      message.channel.sendMessage(`Hello ${message.author}\n\nThese are the commands you can use:\n\`w!ping\`, \`w!guess <character name>\`, \`w!point1s\``);
    }
    break;
  };

  switch (commandUsed) {
    case true:
    if (message.content.startsWith(prefix + 'guess')) {
      (message.channel.sendMessage(`The event has ended ${message.author} ${message.guild.emojis.find('name', 'thonk')}`));
    }
    break;
    default:
    if (message.content.startsWith(prefix + 'guess')) {
      (message.channel.sendMessage(`You guessed it wrong ${message.author}!`));
    }
    break;
  };

  while (!commandUsed) {
    if (message.content.startsWith(prefix + 'guess ' + firstname)) {
      message.channel.sendMessage(`You guessed it right ${message.author}!`);
      if (!points[message.author.id]) points[message.author.id] = {
        points : 0
      }
      points[message.author.id].points++;
      commandUsed = true;
    } else if (message.content.toLowerCase().startsWith(prefix + 'guess' + firstname)) {
      message.channel.sendMessage(`You guessed it right ${message.author}!`);
      if (!points[message.author.id]) points[message.author.id] = {
        points : 0
      }
      points[message.author.id].points++;
      commandUsed = true;
    } else if (message.content.startsWith(prefix + 'guess' + lastname)) {
      (message.channel.sendMessage(`You guessed it right ${message.author}!`));
      if (!points[message.author.id]) points[message.author.id] = {
        points : 0
      }
      points[message.author.id].points++;
      commandUsed = true;
    } else if (message.content.toLowerCase().startsWith(prefix + 'guess' + lastname)) {
      (message.channel.sendMessage(`You guessed it right ${message.author}!`));
      if (!points[message.author.id]) points[message.author.id] = {
        points : 0
      }
      points[message.author.id].points++;
      commandUsed = true;
    }
    break;
  };

  if (points[message.author.id] === 5) {
    points[message.author.id] = {
      points: -5
    }
  };

  if (message.content.startsWith(prefix + "points")) {
    message.channel.sendMessage(`**You have currently \`${userData.points}\` point(s) ${message.author}!**`);
  };

  fs.writeFile('./points.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })

  fs.writeFile('./names.json', JSON.stringify(names), (err) => {
    if (err) console.error(err)
  });
////////////////////////////////////
});
//console.log(JSON.parse(fs.readFileSync('./names.json', 'utf8')));
////////////////////////////////////
//--------------------------------//
///////////////BOT C////////////////
client.login("Mjk5Mjg0NzQwMTI3NTg4MzUz.C8bqJw.WT90RSVTAXwMAABU-FWAJoCabYI");
////////////////////////////////////
