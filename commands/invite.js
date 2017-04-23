exports.run = function(client, message, args) {
  try{
message.channel.sendMessage(`Invite me to your server ${message.author}!\nhttps://discordapp.com/oauth2/authorize?permissions=1341643977&scope=bot&client_id=297459926505095180`);
}catch(err) {
message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['inv'],
  permLevel: 0
};

exports.help = {
  hName: 'Invite',
  name: 'invite',
  description: 'Invite Kanna to your server!',
  usage: 'invite'
};
