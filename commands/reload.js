exports.run = (client, message, args) => {
  try{
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.sendMessage(`I cannot find the command: ${args[0]}`);
  } else {
    message.channel.sendMessage(`Reloading: ${command}`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`Successfully reloaded: ${command}`);
          })
          .catch(e => {
            m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
}catch(err) {
message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 3
};

exports.help = {
  hName: 'Reload',
  name: 'reload',
  description: 'Reloads the command file, if it\'s been updated or modified.',
  usage: 'reload <commandname>'
};
