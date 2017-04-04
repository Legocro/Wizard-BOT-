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
  var firstname = args[0];
  var lastname = args[0];
  var pphoto = args[0];
  var userData = points[message.author.id];

//////////EVERYONE CAN DO //////////
  if (message.content.includes('pregnant')) {
    message.channel.sendMessage(`Fear FBI ${message.author}\nhttps://cdn.discordapp.com/attachments/279299921071570958/298142045938122753/memo.png`);
  };

  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage('Eating insects...').then(msg => {
      msg.edit(`I took \`${msg.createdTimestamp - message.createdTimestamp} ms\` to eat all of them! ${message.guild.emojis}`)
    });
  };

  switch (userMod) {
    case true:
    if (message.content.startsWith(prefix + 'help')) {
      message.channel.sendMessage(`Konichiwa ${message.author}\n\nThese are the mod commands:\n\`w!restart\`, \`w!squiz\`, \`w!sfname\`, \`w!slname\`, \`w!quiz\`, \`w!event\`, \`w!ss\` and \`w!ss\`\n\nAnd these are the pleb ones:\n\`w!ping\`, \`w!guess <character name>\` and \`w!point1s\``);
    } else if (message.content.startsWith(prefix + 'sg')) {
      if(!argresult) argresult = null;
      client.user.setGame(argresult);
    } else if (message.content.startsWith(prefix + 'ss')) {
      if(!argresult) argresult = 'online';
      client.user.setStatus(argresult);
    };
    break;
    case false:
    if (message.content.startsWith(prefix + 'help')) {
      message.channel.sendMessage(`Hello ${message.author}\n\nThese are the commands you can use:\n\`w!ping\`, \`w!guess <character name>\`, \`w!point1s\``);
    }
    break;
  };


  if(message.content.startsWith(prefix + 'sfname')) {
    message.channel.sendMessage(`Who dis new phone ${message.author}`);
    firstname = args[0];
  } else if (message.content.startsWith(prefix + 'guess' + firstname) && commandUsed != true) {
    message.channel.sendMessage(`You guessed it right ${message.author}!`);
    if (!points[message.author.id]) points[message.author.id] = {
      points : 0
    }
    points[message.author.id].points++;
    commandUsed = true;
  };
////////////////////////////////////
});
////////////////////////////////////
//--------------------------------//
///////////////BOT C////////////////
client.login("");
////////////////////////////////////
