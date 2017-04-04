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
////////////////////////////////////
//--------------------------------//
//////////CLIENT EVENTS/////////////
var prefix = "w!";
client.on('message', message => {
  if (message.author.bot) return;
////////////EVENT HORIZON///////////
  var commandUsed = false;
  var userMod = (message.member.roles.exists('name', 'Magician!'));
////////////////////////////////////
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
//  let firstname = args[0];
  var lastname = args[0];
  var pphoto = args[0];
  let userData = points[message.author.id];
  let firstname = names[message.guild.id];

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
      message.channel.sendMessage(`Konichiwa ${message.author}\n\nThese are the mod commands:\n\`w!restart\`, \`w!squiz\`, \`w!sfname\`, \`w!slname\`, \`w!quiz\`, \`w!event\`, \`w!ss\` and \`w!ss\`\n\nAnd these are the pleb ones:\n\`w!ping\`, \`w!guess <character name>\` and \`w!point1s\``);
    } else if (message.content.startsWith(prefix + 'sg')) {
      if(!argresult) argresult = null;
      client.user.setGame(argresult);
    } else if (message.content.startsWith(prefix + 'ss')) {
      if(!argresult) argresult = 'online';
      client.user.setStatus(argresult);
    } else if (message.content.startsWith(prefix + 'sfname')) {
      message.channel.sendMessage(`Who dis new phone ${message.author}`);
      if (!names[message.guild.id]) names[message.guild.id] = {
        firstName: args[0]
      }
      names[message.guild.id].firstName = args[0];
    };
    break;
  };

  while (!userMod) {
    if (message.content.startsWith(prefix + 'help')) {
      message.channel.sendMessage(`Hello ${message.author}\n\nThese are the commands you can use:\n\`w!ping\`, \`w!guess <character name>\`, \`w!point1s\``);
    }
    break;
  };

  while (!commandUsed) {
    if (message.content.startsWith(prefix + 'guess ' + firstname)) {
      message.channel.sendMessage(`You guessed it right ${message.author}!`);
    }
    break;
  }

  fs.writeFile('./names.json', JSON.stringify(names), (err) => {
    if (err) console.error(err)
  });
////////////////////////////////////
});
console.log(JSON.parse(fs.readFileSync('./points.json')));
////////////////////////////////////
//--------------------------------//
///////////////BOT C////////////////
client.login("");
////////////////////////////////////
