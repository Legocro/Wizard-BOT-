const superagent = require('superagent');
const Discord = require('discord.js');
const fs = require("fs");

let names = JSON.parse(fs.readFileSync('./names.json', 'utf8'));

module.exports = (client, guild) => {
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

    let fuccMe;
    let fuccUs;

    if(guild.iconURL) {
       fuccMe = `${guild.iconURL}`;
     }
     if(guild.roles.map(r => r.name).join(", ").length <= 1024) {
       fuccUs = guild.roles.map(r => r.name).join(", ");
     } else if(guild.roles.map(r => r.name).join(", ").length >= 1024) {
       fuccUs = `Too many characters \(${guild.roles.map(r => r.name).join(", ").length}\)`;
     }

  const gleave = new Discord.RichEmbed();
  gleave.setThumbnail(fuccMe);
  gleave.setTitle(`I have left ${guild.name}`);
  gleave.setDescription(`More information below`);
  gleave.addField('Guild ID', `${guild.id}`, true);
  gleave.addField('Owner', `${guild.owner.user.username}#${guild.owner.user.discriminator}`, true);
  gleave.addField('Total Members', `${guild.members.size}`, true);
  gleave.addField('Humans', `${guild.members.filter(g => !g.user.bot).size}`, true);
  gleave.addField('Bots', `${guild.members.filter(g => g.user.bot).size}`, true);
  gleave.addField('Total Channels', `${guild.channels.size}`, true);
  gleave.addField('Text Channels', `${guild.channels.filter(c => c.type === "text").size}`, true);
  gleave.addField('Voice Channels', `${guild.channels.filter(c => c.type === "voice").size}`, true);
  gleave.addField('Total Roles', `${guild.roles.size}`, true);
  gleave.addField('Role Names', fuccUs, true);
  client.guilds.get('298969150133370880').channels.get('303180857030606849').sendEmbed(gleave);
  client.users.get('267727230296129536').send(`**I left a guild and i am now on \`${client.guilds.size}\` guilds!**`);

};
