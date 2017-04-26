exports.run = function(client, message, args) {
  try{
    if(message.guild.id === '298969150133370880') {
    message.channel.sendMessage(`Hello ${message.author}, choose one of these roles to be assigned to you:\n\n\`\[1\]\` \| Kanna Fan \| Show to everyone you are fan of Kanna!\n\`\[2\]\` \| Beta Tester \| Test upcoming updates for Kanna`)
    .then(() => {
      message.channel.awaitMessages(response => response.author === message.author && (response.content === '1' || response.content === '2'), {
        max: 1,
        time: 30000
      })
      .then((collected) => {
        if(collected.first().content === '1') {
          message.channel.sendMessage(`❤`);
          message.member.addRole('299634845439492099');
        } else if(collected.first().content === '2') {
          message.member.addRole('302994196543963136');
          message.channel.sendMessage('Thanks for joining the beta team!');
        } 
      })
      .catch(() => {
        message.channel.sendMessage(`Something went wrong ${message.author}`);
      });
    });
  }

/*
      if(message.content.startsWith('2')) {
        message.member.addRole('302994196543963136');
        message.reply('thanks for helping me get improved!');
      } else if(message.content.startsWith('2')) {
        message.member.addRole('299634845439492099');
        message.channel.sendMessage('❤');
      }

/*
      if(message.content.startsWith('i want to be a tester') || message.content.startsWith('I want to be a tester')) {
        message.member.addRole('302994196543963136');
        message.reply('thanks for helping me get improved!');
      }
      if(message.content.startsWith('i love kanna') || message.content.startsWith('I love Kanna') || message.content.startsWith('i love Kanna')) {
        message.member.addRole('299634845439492099');
        message.channel.sendMessage('❤');
      }
    }
    */
  }catch(err) {
      message.channel.sendMessage(`This should not have happend! Report this to the official server\n\`\`\`js\n${err.stack}\n\`\`\``);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rl'],
  permLevel: 0
};

exports.help = {
  hName: 'Official Server Roles',
  name: 'roles',
  description: 'Get a role in the official server!',
  usage: 'roles'
};
