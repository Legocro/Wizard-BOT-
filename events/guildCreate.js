const superagent = require('superagent');
const Discord = require('discord.js');
const fs = require("fs");

let names = JSON.parse(fs.readFileSync('./names.json', 'utf8'));

module.exports = (client, guild) => {
  guild.defaultChannel.sendMessage(`**Thanks for adding me here! I hope __${guild.name}__ have loads of insects!\n\nDo \`k!about\` to know a bit about me!\n\nAlso you can see all commands with \`k!help\`!\n\nJoin my support server if you have any questions!\nhttps://discord.gg/uBdXdE9**`)
  names[guild.id] = {
    firstName: "Kanna",
    lastName: "Kobayashi",
    quizPhoto: "http://pm1.narvii.com/6366/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg",
  }
  client.user.setGame(`k!help | on ${client.guilds.size} guilds`);
  superagent
      .post(`https://bots.discord.pw/api/bots/${client.user.id}/stats`)
      .set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIyNjc3MjcyMzAyOTYxMjk1MzYiLCJyYW5kIjo2MDUsImlhdCI6MTQ5MTkyMzU0Mn0.70Ihb6mfLmzZz0MiyRYFaqJk7M4ubRL0aGIR32qAKF0")
      .set("Accept", "application/json")
      .send({ server_count: client.guilds.size })
      .then((res) => {
          console.log(`Posted Guild Count to Discord Bots, new count is ${res.body.stats[0].server_count}.`);
      })
      .catch((err) => {
          console.log(err);
      });

      let fuccMe, fuccUs;
      if(guild.iconURL) {
         fuccMe = `${guild.iconURL}`;
       }
       if(guild.roles.map(r => r.name).join(", ").length <= 1024) {
         fuccUs = guild.roles.map(r => r.name).join(", ");
       } else {
         fuccUs = `Too many characters! \(${guild.roles.map(r => r.name).join(", ").length}\)`;
       }

      const gcreate = new Discord.RichEmbed();
      gcreate.setThumbnail(fuccMe);
      gcreate.setTitle(`I have joined ${guild.name}`);
      gcreate.setDescription(`More information below`);
      gcreate.addField('Guild ID', `${guild.id}`, true);
      gcreate.addField('Owner', `${guild.owner.user.username}#${guild.owner.user.discriminator}`, true);
      gcreate.addField('Total Members', `${guild.members.size}`, true);
      gcreate.addField('Humans', `${guild.members.filter(g => !g.user.bot).size}`, true);
      gcreate.addField('Bots', `${guild.members.filter(g => g.user.bot).size}`, true);
      gcreate.addField('Total Channels', `${guild.channels.size}`, true);
      gcreate.addField('Text Channels', `${guild.channels.filter(c => c.type === "text").size}`, true);
      gcreate.addField('Voice Channels', `${guild.channels.filter(c => c.type === "voice").size}`, true);
      gcreate.addField('Total Roles', `${guild.roles.size}`, true);
      gcreate.addField('Role Names', fuccUs, true);
      client.guilds.get('298969150133370880').channels.get('303180857030606849').sendEmbed(gcreate);
      client.users.get('267727230296129536').send(`**I joined a guild and i am now on \`${client.guilds.size}\` guilds!**`);

      client.user.setGame(`k!help on ${client.guilds.size} guilds`);
};
