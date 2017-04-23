exports.run = function(client, message, args) {
  try{
    message.channel.sendMessage('Eating insects...').then(msg => {
    msg.edit(`I took \`${msg.createdTimestamp - message.createdTimestamp} ms\` to eat all of them!`);
  });
}catch(err) {
message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pong'],
  permLevel: 0
};

exports.help = {
  hName: 'Ping',
  name: 'ping',
  description: 'See how long i take to answer you!',
  usage: 'ping'
};
