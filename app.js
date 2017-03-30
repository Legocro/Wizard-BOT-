const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;
const ddiff = require('return-deep-diff')
client.on('ready', () => {
  console.log('I\'m Online\nAnd\nI need punishment.');
});

/*
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
//client.on('messageDelete', (msg, client) => {
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

var prefix = "w!"
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
  } else

  if (message.content.startsWith(prefix + 'send')) {
    client.channels.get('296751851603230721').sendMessage('Hello from second channel')
  } else

  if(message.content.startsWith(prefix + 'setgame')) {
    if(!argresult) argresult = null;
    client.user.setGame(argresult)
    } else

    if (message.content.startsWith(prefix + 'setstatus')) {
      if(!argresult) argresult = 'online';
      client.user.setStatus(argresult);
    } else

  if (message.content.startsWith(prefix + 'test1')) {
    message.channel.sendMessage('I\'m alive!');
  }
});

client.login(token);
