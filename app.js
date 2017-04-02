const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const token = require('./settings.json').token;
const ddiff = require('return-deep-diff');
client.on('ready', () => {
  console.log('I\'m Online\nAnd\nI need punishment.');
});

let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));
var commandUsed = false;

// PINS UPDATE //
client.on('channelPinsUpdate', (channel, time) => {
  channel.guild.defaultChannel.sendMessage(`**The pins of the channel __${channel}__ have been updated!**`);
});

var prefix = "w!"
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.bot) return;

//////////////////////////////USER////////////////////////////////
  if (message.content.startsWith(prefix + 'ping')) {
   message.channel.sendMessage('Pinging...').then(msg => {
     msg.edit(`This is the time i took: \`${msg.createdTimestamp - message.createdTimestamp} ms\``);
   });
  } else

/////////////////////FUNCTIONS////////////////////////

/////////////////////////////////////////////////////

  if (message.content.startsWith(prefix + 'help')) {
    message.channel.sendMessage(`**Hello ${message.author}!**\n\n**This are the current commands you can use:** \n\`w!ping\`, \`w!guess <character name>\`, \`w!points\``)
  } else

  if (message.content.startsWith(prefix + 'setstatus')) {
    if (message.member.roles.exists('name', 'Magician!')) {
     if(!argresult) argresult = 'online';
     client.user.setStatus(argresult);
     }
  } else

  if(message.content.startsWith(prefix + 'setgame')) {
    if (message.member.roles.exists('name', 'Magician!')) {
      if(!argresult) argresult = null;
      client.user.setGame(argresult);
      }
  } else

  if (message.content.startsWith(prefix + 'test')) {
    message.channel.sendMessage(`**I\'m alive ${message.author}!**`);
  }
});

//=======MEMES========//

client.on('message', message => {

  if (message.author.bot) return;

  if (message.content.toLowerCase().includes('pregnant')) {
    message.channel.sendMessage(`You did this ${message.author}\nhttps://cdn.discordapp.com/attachments/279299921071570958/298142045938122753/memo.png`);
  //  message.channel.sendFile('memo.png');
    return
  }
});

/////////////////QUIZ/////////////////////////

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.bot) return;

////////////VARS/////////////

var charfname = args[0];
var charfiname = args[0];
var quizphoto = args[0];

////////////////////////////

//////////////FUNCTION///////////////



/////////////////////////////////////

  if (message.content.startsWith(prefix + 'qfname')) {
    message.channel.sendMessage(`The full name for the quiz character has sucessfully been changed ${message.author}`);
    let charfname = args[0];
  } else

  if (message.content.startsWith(prefix + 'qfiname')) {
    message.channel.sendMessage(`The first name for the quiz character has sucessfully been changed ${message.author}!`);
    let charfiname = args[0];
  } else

  if (message.content.startsWith(prefix + 'setquiz')) {
    message.channel.sendMessage(`${message.author}, the quiz event photo has been changed!`);
    let quizphoto = args[0];
  } else

  if (message.content.startsWith(prefix + 'log')) {
    console.log(quizphoto)
  } else

  if (message.content.startsWith(prefix + 'event')) {
        if (message.member.roles.exists('name', 'Magician!')) {
        message.guild.defaultChannel.sendMessage('**Hey @everyone, there\'s a __Quiz Event__ ongoing!**')
      }
    } else

    if (message.content.startsWith(prefix + 'quiz')) {
      if (message.member.roles.exists('name', 'Magician!')) {
        message.guild.defaultChannel.sendMessage('**Try to guess who this is!**' + quizphoto);
        //message.guild.defaultChannel.sendFile(quizphoto);
      }
    } else

  if (message.content.startsWith(prefix + 'guess ' + charfname) && commandUsed != true) {
    message.channel.sendMessage(`You guessed it right ${message.author}!`);
    if (!points[message.author.id]) points[message.author.id] = {
      points : 0
    }
    points[message.author.id].points++;
    commandUsed = true;
  } else

  if (message.content.toLowerCase().startsWith(prefix + 'guess ' + charfname) && commandUsed != true) {
    message.channel.sendMessage(`You guessed it right ${message.author}!`);
    if (!points[message.author.id]) points[message.author.id] = {
      points : 0
    }
    points[message.author.id].points++;
    commandUsed = true;
  } else

  if (message.content.toLowerCase().startsWith(prefix + 'guess ' + charfiname) && commandUsed != true) {
    message.channel.sendMessage(`You guessed it right ${message.author}!`);
    if (!points[message.author.id]) points[message.author.id] = {
      points : 0
    }
    points[message.author.id].points++;
    commandUsed = true;
  } else

  if (message.content.startsWith(prefix + 'guess ' + charfiname) && commandUsed != true) {
    message.channel.sendMessage(`You guessed it right ${message.author}!`);
    if (!points[message.author.id]) points[message.author.id] = {
      points : 0
    }
    points[message.author.id].points++;
    commandUsed = true;
  } else

  if (message.content.startsWith(prefix + 'guess')) {
    message.channel.sendMessage(`**There\'s something wrong ${message.author}!**\n\n**Neither someone already said the correct answer...**\n\n**Or you guessed the wrong character!**`);
    return
  } else

  if (message.content.startsWith(prefix + 'restart')) {
    commandUsed = false;
    message.guild.defaultChannel.sendMessage(`**The Quiz has been restarted by ${message.author}!**`)
  } else

  if (message.content.startsWith(prefix + 'modhelp')) {
    if (message.member.roles.exists('name', 'Magician!')) {
      message.channel.sendMessage(`**Hey \'lil ${message.author}...**\n\n**This is what you can do:**\n\`w!restart\`, \`w!setquiz\`, \`w!qfiname\`, \`w!qfname\`, \`w!quiz\` and \`w!event\``);
    }
  } else

  if (message.content.startsWith(prefix + "points")) {
    message.channel.sendMessage(`**You have currently \`${userData.points}\` point(s) ${message.author}!**`);
  }
  fs.writeFile('./points.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
});

client.login(token);
