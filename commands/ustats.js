const Discord = require('discord.js');

exports.run = function(client, message, args) {
  try{
    let memberu;
    let user;
    let userinfo = new Discord.RichEmbed();
    if (!message.mentions.users.size){
      memberu = message.member;
      user = message.author;
    }else{
    	memberu = message.guild.member(message.mentions.users.first());
    	user = message.mentions.users.first();
    }
    userinfo.setTitle("User info")
      .setThumbnail(user.avatarURL)
      .addField("\*\*Username:\*\*" , user.username, true);
    if (memberu.displayName != user.username){
          userinfo.addField("\*\*Nickname:\*\*" , memberu.displayName, true);
        }
    userinfo.addField("\*\*Joined at:\*\*" , memberu.joinedAt.toUTCString()
      .addField("\*\*Roles\*\*:" , memberu.roles.map(r => r.name).join(","));
    message.channel.sendEmebed(userinfo);

    console.log(memberu);

  }catch(err) {
  message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ust'],
    permLevel: 0
  };

  exports.help = {
    hName: 'User Status',
    name: 'ustats',
    description: 'See the information about a user.',
    usage: 'ustats'
  };
