const settings = require('../settings.json');
const fs = require("fs");

exports.run = function(client, message, args) {
  try{
  let names = JSON.parse(fs.readFileSync('./names.json', 'utf8'));
  if(message.content.includes(args[0])) {
  message.channel.sendMessage(`The quiz photo has changed sucessfully ${message.author}`);
  names[message.guild.id].quizPhoto = message.content.split(' ').slice(1).join(' ');
} else {
  message.channel.sendMessage('**You gotta input a link! \(Photo\)**');
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
  aliases: ['sqp'],
  permLevel: 2
};

exports.help = {
  hName: 'Set Quiz Photo',
  name: 'sqphoto',
  description: 'Sets the photo of the character on the quiz',
  usage: 'sqphoto <link>'
};
