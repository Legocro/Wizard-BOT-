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

/*
var prefix = "w!"
exports.func = async (res, msg, args) => {
    if(message.content.startsWith(prefix + 'ping')) {
        const newMessage = await msg.channel.sendMessage('pinging....');
        return newMessage.edit(`\`${newMessage.createdTimestamp - msg.createdTimestamp} ms\` round-trip ⏱ | \`${Math.round(msg.client.ping)} ms\` heartbeat 💓`);
    }
};

// client.on('','' => {});

//===== Guild Events =====//
client.on('guildDelete',guild => {
  console.log(`I have left ${guild.name} at ${new Date()}`);
});

client.on('guildCreate', guild => {
  guild.defaultChannel.sendMessage(`I have joined ${guild.name}`)
});


// Novo Membro com Menção
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Please welcome ${member.user} to the server!`);
});

// Membro Removido (Saiu, Kikado e Banido) sem Menção
client.on('guildMemberRemove', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`**${member.user.username}** is out!`);
});

// Membro Falando
client.on('guildMemberSpeaking', (member, speaking) => {
  let guild = member.guild;
  if (member.speaking) {
    guild.defaultChannel.sendMessage(`${member.user.username} is speaking!`)
  }
});

// Mudanças de Usuário da Guild
client.on('guildMemberUpdate',(oMember, nMember) => {
  console.log(ddiff(oMember, nMember));
});

// Mudanças da Guild
client.on('guildUpdate',(oGuild, nGuild) => {
  console.log(ddiff(oGuild, nGuild));
});

// Membro Banido
client.on('guildBanAdd', (guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} was just banned!`)
});

// Membro Desbanido
client.on('guildBanRemove', (guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} was unbanned!`)
});

// Atualização Canal
client.on('channelUpdate', (oChannel, nChannel) => {
  console.log(ddiff(oChannel, nChannel));
});
*/
// PINS UPDATE //
client.on('channelPinsUpdate', (channel, time) => {
  channel.guild.defaultChannel.sendMessage(`**The pins of the channel __${channel}__ have been updated!**`);
});

// USAR APENAS EM EVENTOS //
/*
client.on('messageDelete', (msg, client) => {
  msg.guild.defaultChannel.sendMessage(`**Someone tried to hide this: \"__${msg.cleanContent}__\" in ${msg.channel}!**`);
});

//===== Client Events =====//

// CRIAÇÃO DE CANAIS DE TEXTO E VOZ //

client.on('channelCreate', channel => {
  console.log(`A ${channel.type} by the name of ${channel.name} and was created ${channel.createdAt} with the ID of ${channel.id}`);
  if (channel.type === 'text') return channel.sendMessage(`**Why you have created a channel called ${channel}... DURING AN EVENT!?**`);
});

client.on('channelDelete', channel => {
  console.log(`A ${channel.type} by the name of ${channel.name} was deleted during the event!`);
  channel.guild.defaultChannel.sendMessage(`**A fucken channel by the name of __${channel.name}__ got deleted!**`);
});
*/

var prefix = "w!"
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var userData = points[message.author.id]
  var rightAnswer = [];
  rightAnswer[0] = "Uzumaki Naruto";
  rightAnswer[1] = "Naruto";
  var guesslo0 = rightAnswer[0].toLowerCase();
  var guesslo1 = rightAnswer[1].toLowerCase();
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.bot) return;

//////////////////////////////USER////////////////////////////////
  if (message.content.startsWith(prefix + 'ping')) {
   message.channel.sendMessage('Pinging...').then(msg => {
     msg.edit(`This is the time i took: \`${msg.createdTimestamp - message.createdTimestamp} ms\``);
   });
  } else

  if (message.content.startsWith(prefix + 'event')) {
      if (message.member.roles.exists('name', 'Magician!')) {
      client.channels.get('279299921071570958').sendMessage('**Hey everyone there\'s a __Quiz Event__ ongoing!**')
    }
  } else

  if (message.content.startsWith(prefix + 'quiz')) {
     {
      message.guild.defaultChannel.sendMessage('**Try to guess who this is!**')
      message.guild.defaultChannel.sendFile('quiz5.png')
    }
  } else

  //msg.member.roles.exists('name', 'Proficient')
  //if (message.author.id === "267727230296129536" || message.author.id === "139964589440761857" || message.author.id === "246350610222284800" || message.author.id === "262700217521012747" || message.author.id === "214446232506990596" || message.author.id === "217391579156054017");
/*
  if(message.content.startsWith(prefix + 'setgame')) {
    if(!argresult) argresult = null;
    client.user.setGame(argresult)
    } else
    if (message.content.startsWith(prefix + 'setstatus')) {
      if(!argresult) argresult = 'online';
      client.user.setStatus(argresult);
    } else
*/
  if (message.content.startsWith(prefix + 'help')) {
    message.channel.sendMessage(`**Hello ${message.author}!**\n**This is the current commands you can use:** \`w!ping\`, \`w!guess <character name>\`\nOh, and there\' a useless command: \`w!test\``)
  } else

  if (message.content.startsWith(prefix + 'setstatus')) {
    if (message.author.id === '267727230296129536') {
     if(!argresult) argresult = 'online';
     client.user.setStatus(argresult);
     }
  } else

  if(message.content.startsWith(prefix + 'setgame')) {
    if (message.author.id === '267727230296129536') {
      if(!argresult) argresult = null;
      client.user.setGame(argresult);
      }
  } else

  if (message.content.startsWith(prefix + 'test')) {
    message.channel.sendMessage(`**I\'m alive ${message.author}!**`);
  } else

  if (message.content.startsWith(prefix + 'guess ' + guesslo1 && commandUsed != true)) {
     message.channel.sendMessage(`You guessed it right ${message.author}!`);
     if (!points[message.author.id]) points[message.author.id] = {
       points : 0
    }
    userData.points++;
    commandUsed = true;
  } else

  if (message.content.startsWith(prefix + 'guess ' + rightAnswer[1] && commandUsed != true)) {
    message.channel.sendMessage(`You guessed it right ${message.author}!`);
    if (!points[message.author.id]) points[message.author.id] = {
      points : 0
    }
    userData.points++;
    commandUsed = true;
  } else

  if (message.content.startsWith(prefix + 'guess ' + guesslo0) && commandUsed != true) {
    message.channel.sendMessage(`You guessed it right ${message.author}!`);
    if (!points[message.author.id]) points[message.author.id] = {
      points : 0
    }
    userData.points++;
    commandUsed = true;
  } else

  if (message.content.startsWith(prefix + 'guess ' + rightAnswer[0] && commandUsed != true)) {
    message.channel.sendMessage(`You guessed it right ${message.author}!`);
    if (!points[message.author.id]) points[message.author.id] = {
      points : 0
    }
    userData.points++;
    commandUsed = true;
  } else

  if (message.content == prefix + 'guess') {
    message.channel.sendMessage(`The event has ended ${message.author}!\nWait for the next one.`);
    return
  } else

  if (message.content.startsWith(prefix + "points")) {
    message.channel.sendMessage(`**You have currently \`${userData.points}\` points ${message.author}!**`);
  }
  fs.writeFile('./points.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
});

//=======MEMES========//

client.on('message', message => {

  if (message.author.bot) return;

  if (message.content.toLowerCase().includes('pregnant')) {
    message.channel.sendMessage(`You did this ${message.author}`);
    message.channel.sendFile('memo.png');
    return
  }
});

//'this is some pregnant string'.includes('pregnant')


client.login(token);
