const settings = require('../settings.json');
const fs = require("fs");

exports.run = function(client, message, args) {
  try{
  let names = JSON.parse(fs.readFileSync('./names.json', 'utf8'));
  if(message.content.includes(args[0])) {
  message.channel.sendMessage(`The first name has changed sucessfully ${message.author}`);
  names[message.guild.id].firstName = message.content.split(' ').slice(1).join(' ');
} else {
  message.channel.sendMessage('**You gotta input a name!**');
}
  fs.writeFile('./names.json', JSON.stringify(names), (err) => {
    if (err) console.error(err);
  });

}catch(err) {
message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sfn'],
  permLevel: 2
};

exports.help = {
  hName: 'Set First Name',
  name: 'sfname',
  description: 'Sets the first name of the character on the quiz',
  usage: 'sfname <character first name>'
};
