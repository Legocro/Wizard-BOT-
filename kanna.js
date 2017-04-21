const Discord = require('discord.js');
const bkanna = new Discord.Client({fetchAllMembers: true});
const fs = require("fs");
const superagent = require('superagent');
const exec = require('child_process').exec;
//const cfg = require('./config.js');

let names = JSON.parse(fs.readFileSync('./names.json', 'utf8'));
let guildIcon;
let roleNames;
var prefix = "k!";
var whitelist = "279018121099214848";
var owner = "267727230296129536"
var token = "Mjk3NDU5OTI2NTA1MDk1MTgw.C9riqg.Jp21D6KKsc9v-zg-rUR_eNChSVw"


bkanna.on('ready', () => {
  console.log('Ayy lmao, this is v10');
  bkanna.guilds.map(g => names[g.id] = {
    firstName: "Kanna",
    lastName: "Kobayashi",
    quizPhoto: "http://pm1.narvii.com/6366/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg",
  });
  fs.writeFile('./names.json', JSON.stringify(names), (err) => {
    if (err) console.error(err)
  });
});

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

bkanna.on('guildCreate', guild => {
  guild.defaultChannel.sendMessage(`**Thanks for adding me here! I hope __${guild.name}__ have loads of insects!\n\nDo \`k!about\` to see a bit about me and how to set up\n\nAlso you can see all commands with \`k!help\`!\n\nJoin my support server if you have any questions!\nhttps://discord.gg/uBdXdE9**`)
  bkanna.guilds.map(g => names[g.id] = {
    firstName: "Kanna",
    lastName: "Kobayashi",
    quizPhoto: "http://pm1.narvii.com/6366/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg",
  });
  fs.writeFile('./names.json', JSON.stringify(names), (err) => {
    if (err) console.error(err)
  });
  superagent
      .post(`https://bots.discord.pw/api/bots/${bkanna.user.id}/stats`)
      .set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIyNjc3MjcyMzAyOTYxMjk1MzYiLCJyYW5kIjo2MDUsImlhdCI6MTQ5MTkyMzU0Mn0.70Ihb6mfLmzZz0MiyRYFaqJk7M4ubRL0aGIR32qAKF0")
      .set("Accept", "application/json")
      .send({ server_count: bkanna.guilds.size })
      .then((res) => {
          console.log(`Posted Guild Count to Discord Bots, new count is ${res.body.stats[0].server_count}.`);
      })
      .catch((err) => {
          console.log(err);
      });
      if(guild.iconURL) {
         guildIcon = `${guild.iconURL}`
       };
       if(guild.roles.map(r => r.name).join(", ").length <= 1024) {
         roleNames = guild.roles.map(r => r.name).join(", ")
       } else {
         roleNames = `Too many characters \(${guild.roles.map(r => r.name).join(", ").length}\)`
       };
       const gcreate = new Discord.RichEmbed();
       gcreate.setThumbnail(guildIcon)
       gcreate.setTitle(`I have joined ${guild.name}`)
       gcreate.setDescription(`More information below`)
       gcreate.addField('Guild ID', `${guild.id}`, true)
       gcreate.addField('Owner', `${guild.owner.user.username}#${guild.owner.user.discriminator}`, true)
       gcreate.addField('Total Members', `${guild.members.size}`, true)
       gcreate.addField('Humans', `${guild.members.filter(g => !g.user.bot).size}`, true)
       gcreate.addField('Bots', `${guild.members.filter(g => g.user.bot).size}`, true)
       gcreate.addField('Total Channels', `${guild.channels.size}`, true)
       gcreate.addField('Text Channels', `${guild.channels.filter(c => c.type === "text").size}`, true)
       gcreate.addField('Voice Channels', `${guild.channels.filter(c => c.type === "voice").size}`, true)
       gcreate.addField('Total Roles', `${guild.roles.size}`, true)
       gcreate.addField('Role Names', roleNames, true)
       bkanna.guilds.get('298969150133370880').channels.get('303180857030606849').sendEmbed(gcreate)
       bkanna.users.get('267727230296129536').send(`**I joined a guild and i am now on \`${bkanna.guilds.size}\` guilds!**`);
       bkanna.user.setGame(`k!help on ${bkanna.guilds.size} guilds`);
     });

     bkanna.on('guildDelete', guild => {
     superagent
         .post(`https://bots.discord.pw/api/bots/${bkanna.user.id}/stats`)
         .set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiIyNjc3MjcyMzAyOTYxMjk1MzYiLCJyYW5kIjo2MDUsImlhdCI6MTQ5MTkyMzU0Mn0.70Ihb6mfLmzZz0MiyRYFaqJk7M4ubRL0aGIR32qAKF0")
         .set("Accept", "application/json")
         .send({ server_count: bkanna.guilds.size })
         .then((res) => {
             console.log(`Posted Guild Count to Discord Bots, new count is ${res.body.stats[0].server_count}.`);
         })
         .catch((err) => {
             console.log(err);
         });
         if(guild.iconURL) {
            guildIcon = `${guild.iconURL}`
          };
          if(guild.roles.map(r => r.name).join(", ").length <= 1024) {
            roleNames = guild.roles.map(r => r.name).join(", ")
          } else {
            roleNames = `Too many characters \(${guild.roles.map(r => r.name).join(", ").length}\)`
          };
       const gleave = new Discord.RichEmbed();
       gleave.setThumbnail(guildIcon)
       gleave.setTitle(`I have left ${guild.name}`)
       gleave.setDescription(`More information below`)
       gleave.addField('Guild ID', `${guild.id}`, true)
       gleave.addField('Owner', `${guild.owner.user.username}#${guild.owner.user.discriminator}`, true)
       gleave.addField('Total Members', `${guild.members.size}`, true)
       gleave.addField('Humans', `${guild.members.filter(g => !g.user.bot).size}`, true)
       gleave.addField('Bots', `${guild.members.filter(g => g.user.bot).size}`, true)
       gleave.addField('Total Channels', `${guild.channels.size}`, true)
       gleave.addField('Text Channels', `${guild.channels.filter(c => c.type === "text").size}`, true)
       gleave.addField('Voice Channels', `${guild.channels.filter(c => c.type === "voice").size}`, true)
       gleave.addField('Total Roles', `${guild.roles.size}`, true)
       gleave.addField('Role Names', roleNames, true)
       bkanna.guilds.get('298969150133370880').channels.get('303180857030606849').sendEmbed(gleave)
       bkanna.users.get('267727230296129536').send(`**I left a guild and i am now on \`${bkanna.guilds.size}\` guilds!**`)
     });

     bkanna.on('message', msg => {
       if (msg.author.bot) return;
       if(msg.content.startsWith(prefix)) {
         if(msg.guild.members.filter(m => !m.user.bot).size < msg.guild.members.filter(m => m.user.bot).size && msg.guild.id !== whitelist) {
           msg.channel.sendMessage(`**Hey ${msg.member}, this guild haves more Humans than Bots \(${msg.guild.members.filter(m => !m.user.bot).size} Humans and ${msg.guild.members.filter(m => m.user.bot).size} Bots\)\nIf you want to test the bot please join the support server! \(https://discord.gg/uBdXdE9\)\n\nSorry if this bothers you, but i can\'t let bot collectors spam my API**`);
           return;
         } else {
           var args = msg.content.split(' ').slice(1);
           var argresult = args.join(' ');
           var mention = bkanna.user;
           let firstname = names[msg.guild.id].firstName;
           let lastname = names[msg.guild.id].lastName;
           let qphoto = names[msg.guild.id].quizPhoto;
           let menuser = msg.guild.member(msg.mentions.users.first());
           let guildIcon;
           let roleNames;
           let minutes;
           let hours;
           let seconds;
           const quizemb = new Discord.RichEmbed();
           const helpEmbed = new Discord.RichEmbed();
           const tamerUser = new Discord.RichEmbed();
           const commonUser = new Discord.RichEmbed()
           const stats = new Discord.RichEmbed()
           const fback = new Discord.RichEmbed()
           const request = new Discord.RichEmbed()
           const serverstatus = new Discord.RichEmbed()

           if(msg.guild.iconURL) {
             guildIcon = `${msg.guild.iconURL}`
           } else {
             guildIcon = "https://uploads.disquscdn.com/images/efd36cc100466975c3a56797f4c92efe43598f20095248db88b8f427ec1b5c28.gif"
           };

           if(msg.guild.roles.map(r => r.name).join(", ").length <= 1024) {
             roleNames = msg.guild.roles.map(r => r.name).join(", ")
           } else {
             roleNames = `Too many characters \(${msg.guild.roles.map(r => r.name).join(", ").length}\)`
           };

           if((bkanna.uptime / 60000 % 60).toFixed() == 0) {
             minutes = '';
           } else {
             minutes = `\n` + (bkanna.uptime / 60000 % 60).toFixed() + ' minute(s)'
           };
           if((bkanna.uptime / 3600000 % 24).toFixed() == 0) {
             hours = '';
           } else {
             hours = `\n` + (bkanna.uptime / 3600000 % 24).toFixed() + ' hour(s)'
           };
           if ((bkanna.uptime / 1000 % 60).toFixed() == 0) {
             seconds = '';
           } else {
             seconds = `\n` + (bkanna.uptime / 1000 % 60).toFixed() + ' second(s)'
           };

           quizemb.setColor('#F7C3EF');
           quizemb.setFooter(`${msg.author.username} started this event`, `${msg.author.displayAvatarURL}`);
           quizemb.setImage(qphoto);
           quizemb.setTimestamp();
           quizemb.addField('Try to guess who this is!',
           'This event will be over in 15 minutes');

           helpEmbed.setAuthor(`DM incoming!`, `${msg.author.displayAvatarURL}`);
           helpEmbed.setColor('#FB3A9B');
           helpEmbed.setDescription(`Have fun ${msg.author}!`);
           helpEmbed.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg');

           tamerUser.setTitle(`アホイ\(Ahoi\) ${msg.author.username}`);
           tamerUser.setAuthor('Click here to join the support server!', `${msg.author.displayAvatarURL}`);
           tamerUser.setColor('#FB3A9B');
           tamerUser.setDescription(`${msg.author} don\'t forget to have fun!`)
           tamerUser.setFooter('BOT done by Wizardλ#4559', 'https://cdn.discordapp.com/avatars/267727230296129536/d97af37c3284d8c18a7c314c7c3f7174.jpg?size=1024');
           tamerUser.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg');
           tamerUser.setURL('https://discord.gg/uBdXdE9');
           tamerUser.addField('Prefix', 'Mention or k!');
           tamerUser.addField('Tamer Commands',
             '\`sqphoto <link>\` sets the character photo\n\`sfname <first name>\` sets the character first name\n\`slname <last name>\` sets the character last name\n\`qstart\` starts the event');
           tamerUser.addField('Common Commands', '\`ping\` see how long the bot takes to answer commands\n\`invite\` gets the bot link invite\n\`about\` a bit about **Kanna Kobayashi** and how to set it up\n\`feedback\` sends a feedback to the overlord\n\`request\` request a new feature to Kanna\n\`bstats\` see the bot current stats\n\`gstats\` see the guild stats', true);
           tamerUser.addField('Memes Gen. 1', '\`pregnant\`\n\`lewd\`\n\`hungry\`\n\`loli\`\n\`dab\`\n\`drunk\`\n\`triggered\`\n\`endme\`\n\`shs\`\n\`russia\`\n\`gangsta\`\n\`comfy\`', true);
           tamerUser.addField('Memes Gen. 2', '\n\`rain\`\n\`dance\`\n\`purge\`\n\`ten\`\n\`sheet\`\n\`listen\`\n\`friends\`\n\`autist\`\n\`police\`\n\`doit\`', true);
           tamerUser.addField('Memes Gen. 3 (Current)', '\`delete\`\n\`joke\`\n\`brain\`\n\`cancer\`\n\`wtf\`\n\`100\`\n\`ticc\`\n\`laid\`\n\`flat\`\n\`pussy\`\n\`911\`\n\`dis\`\n\`kawaii\`\n\`ernie\`\n\`capit\`\n\`4ever\`\n\`scream\`\n\`jojoke\`')

           commonUser.setTitle(`**アホイ\(Ahoi\) ${msg.author.username}**`)
           commonUser.setAuthor('Click here to join the support server!', `${msg.author.displayAvatarURL}`)
           commonUser.setColor(0x00AE86)
           commonUser.setDescription(`If you want to use Tamer\(Mod\) commands ${msg.author} you need the role \`Dragon Tamer\` assigned to yourself on ${msg.guild.name}`);
           commonUser.setFooter('BOT done by Wizardλ#4559', 'https://cdn.discordapp.com/avatars/267727230296129536/d97af37c3284d8c18a7c314c7c3f7174.jpg?size=1024');
           commonUser.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg');
           commonUser.setURL('https://discord.gg/uBdXdE9')
           commonUser.addField('Commands', '\`ping\` see how long the bot takes to answer commands\n\`invite\` gets the bot link invite\n\`about\` a bit about **Kanna Kobayashi** and how to set it up\n\`feedback\` sends a feedback to the overlord\n\`request\` request a new feature to Kanna\n\`bstats\` see the bot current stats\n\`gstats\` see the guild stats', true);
           commonUser.addField('Memes Gen. 1', '\`pregnant\`\n\`lewd\`\n\`hungry\`\n\`loli\`\n\`dab\`\n\`drunk\`\n\`triggered\`\n\`endme\`\n\`shs\`\n\`russia\`\n\`gangsta\`\n\`comfy\`', true);
           commonUser.addField('Memes Gen. 2', '\`rain\`\n\`dance\`\n\`purge\`\n\`ten\`\n\`sheet\`\n\`listen\`\n\`friends\`\n\`autist\`\n\`police\`\n\`doit\`', true);
           commonUser.addField('Memes Gen. 3 (Current)', '\`delete\`\n\`joke\`\n\`brain\`\n\`cancer\`\n\`wtf\`\n\`100\`\n\`ticc\`\n\`laid\`\n\`flat\`\n\`pussy\`\n\`911\`\n\`dis\`\n\`kawaii\`\n\`ernie\`\n\`capit\`\n\`4ever\`\n\`scream\`\n\`jojoke\`')

           stats.setAuthor('Stats for Kanna Kobayashi', `${bkanna.user.avatarURL}`);
           stats.addField('Uptime', `${hours}${minutes}${seconds}`);
           stats.setFooter('BOT done by Wizardλ#4559', `${bkanna.users.get('267727230296129536').avatarURL}`);
           stats.setColor('##00FFFD');
           stats.addField('Total Guilds', `${bkanna.guilds.size} Guilds`, true);
           stats.addField('Total Users', `${bkanna.users.filter(u => u.bot === false).size} Humans`, true);
           stats.addField('Current Version', 'v10');
           stats.addField('Last Update', '- Added a ton of new memes to Gen.3\n- Fixed Quiz bugs \(That no one telled me until 04\/20\)\n- Kanna Re-work');
           stats.addField('Special Thanks', '- Mashiro#0948 for being a great friend, and pushing me foward with this project\n- Wolke#6746 the best discord dev i\'ve met so far\n- Discord.js official server for helping me through all this')
           stats.addField('Working On', 'Learning to be a better dev');

           fback.setColor('#ffd750');
           fback.setTimestamp();
           fback.setFooter('Received', `${msg.author.displayAvatarURL}`);
           fback.setTitle(`New feedback`);
           fback.setDescription(`${bkanna.guilds.get('298969150133370880').roles.find('name', 'Support')} check this!`);
           fback.addField('User Feedback', `${msg.content.split(prefix + 'feedback').slice(1).join(" ")}`);
           fback.addField('Informations', `**Username:** ${msg.author}\n**User ID:** ${msg.author.id}\n**Guild Name:** ${msg.guild.name}\n**Guild ID:** ${msg.guild.id}\n**Message ID:** ${msg.id}`);

           request.setColor('#322254');
           request.setTimestamp();
           request.setFooter('Received', `${msg.author.displayAvatarURL}`);
           request.setTitle(`New request`);
           request.setDescription(`${bkanna.guilds.get('298969150133370880').roles.find('name', 'Support')} check this!`);
           request.addField('User Request', `${msg.content.split(prefix + 'request').slice(1).join(" ")}`);
           request.addField('Informations', `**Username:** ${msg.author}\n**User ID:** ${msg.author.id}\n**Guild Name:** ${msg.guild.name}\n**Guild ID:** ${msg.guild.id}\n**Message ID:** ${msg.id}`);

           serverstatus.setThumbnail(guildIcon);
           serverstatus.addField('Guild Name', `${msg.guild.name}`);
           serverstatus.addField('Guild ID', `${msg.guild.id}`, true);
           serverstatus.addField('Owner', `${msg.guild.owner}`, true);
           serverstatus.addField('Owner ID', `${msg.guild.owner.user.id}`, true);
           serverstatus.addField('Total Members', `${msg.guild.members.size}`, true);
           serverstatus.addField('Humans', `${msg.guild.members.filter(u => u.user.bot === false).size}`, true);
           serverstatus.addField('Bots', `${msg.guild.members.filter(u => u.user.bot === true).size}`, true);
           serverstatus.addField('Region', `${msg.guild.region}`, true);
           serverstatus.addField('Total Channels', `${msg.guild.channels.size}`, true);
           serverstatus.addField('Text Channels', `${msg.guild.channels.filter(c => c.type === "text").size}`, true);
           serverstatus.addField('Voice Channels', `${msg.guild.channels.filter(c => c.type === "voice").size}`, true);
           serverstatus.addField('Total Roles', `${msg.guild.roles.size}`, true);
           serverstatus.addField('Role Names', roleNames, true);
           serverstatus.setTimestamp();
           serverstatus.setFooter('Server Stats from', `${msg.author.displayAvatarURL}`);

           const mpregnant = new Discord.RichEmbed();
           mpregnant.setTitle(`Fear FBI ${msg.author.username}`);
           mpregnant.setImage('https://cdn.discordapp.com/attachments/279299921071570958/298142045938122753/memo.png');
           mpregnant.setColor('#846BF7');

           const mhungry = new Discord.RichEmbed();
           mhungry.setTitle('Hoomans taste good as insects?');
           mhungry.setImage('https://cdn.discordapp.com/attachments/269129409888256000/300481191151271946/giphy_9.gif');
           mhungry.setColor('#846BF7');

           var lolies = ['https://images-ext-2.discordapp.net/eyJ1cmwiOiJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy8yNzUxMzU5ODA0ODExNTA5NzYvMjk5MjYzMzIyMTU3NzQ0MTI4L2FLVnZCcDFfNDYwcy5wbmcifQ.QZ7r6tUoDr0KZ_R74SJX4iIuPQM?width=388&height=597', 'https://cdn.discordapp.com/attachments/269129409888256000/300666636946374656/1491677914_giphy_2.gif']
           var rloli = lolies[Math.floor(Math.random() * lolies.length)];
           const mloli = new Discord.RichEmbed();
           mloli.setTitle('Hmm... A hooman');
           mloli.setImage(rloli);
           mloli.setColor('#846BF7');

           const mtriggered = new Discord.RichEmbed();
           mtriggered.setTitle('YYYYYYYYYYYYYYYY');
           mtriggered.setImage('https://cdn.discordapp.com/attachments/299398003486097412/301061190434553856/1491411414847.gif');
           mtriggered.setColor('#846BF7');

           const mendme = new Discord.RichEmbed();
           mendme.setImage('https://cdn.discordapp.com/attachments/299398003486097412/300740618009837571/1491078423557.jpg');
           mendme.setColor('#846BF7');

           const mdab = new Discord.RichEmbed();
           mdab.setTitle('Dabbbbbbbb');
           mdab.setImage('https://cdn.discordapp.com/attachments/275135980481150976/299673416712192000/hDrOJlT0GvA.jpg');
           mdab.setColor('#846BF7');

           const mdunk = new Discord.RichEmbed();
           mdunk.setTitle('You have to be this cute to be drunk');
           mdunk.setImage('https://cdn.discordapp.com/attachments/275135980481150976/299673369706496001/9wl5E10yNqE.jpg');
           mdunk.setColor('#846BF7');

           const mpolice = new Discord.RichEmbed();
           mpolice.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302193800175026177/Sin_titulo.png');
           mpolice.setColor('#846BF7');

           const mdoit = new Discord.RichEmbed();
           mdoit.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302198705929584641/do_it_for_her___kanna_kamui_by_phosphobos-db1xlb1.jpg');
           mdoit.setColor('#846BF7');

           const mdance = new Discord.RichEmbed();
           mdance.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302254759773995008/tumblr_ok24wuFmmK1thzx08o1_400.gif');
           mdance.setColor('#846BF7');

           const mrain = new Discord.RichEmbed();
           mrain.setImage('https://cdn.discordapp.com/attachments/299426899845709826/302292264175271936/tenor.gif');
           mrain.setColor('#846BF7');

           const mpurge = new Discord.RichEmbed()
           mpurge.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302694290730254338/PURGE.jpg');
           mpurge.setColor('#846BF7');

           const mten = new Discord.RichEmbed()
           mten.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302698078924701708/f4d.jpg');
           mten.setColor('#846BF7');

           const msheet = new Discord.RichEmbed()
           msheet.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302700741574000640/f4d.jpg');
           msheet.setColor('#846BF7');

           const mlisten = new Discord.RichEmbed()
           mlisten.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302702758505742336/f4d.jpg');
           mlisten.setColor('#846BF7');

           const mfriends = new Discord.RichEmbed()
           mfriends.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302703313881923584/Sin_titulo.png');
           mfriends.setColor('#846BF7');

           var autistico = ["https://cdn.discordapp.com/attachments/299632702087495680/304251094723330048/absolutely_autistic.jpg", "https://cdn.discordapp.com/attachments/299632702087495680/302754519123755018/fuckingautist.png"]
           var rautist = autistico[Math.floor(Math.random() * autistico.length)];
           const mautist = new Discord.RichEmbed()
           mautist.setImage(rautist);
           mautist.setColor('#846BF7');

           const mdelete = new Discord.RichEmbed()
           mdelete.setImage('https://cdn.discordapp.com/attachments/301440738166571009/303404249222610945/image.jpg');
           mdelete.setColor('#846BF7');

           const mjoke = new Discord.RichEmbed();
           mjoke.setImage('https://cdn.discordapp.com/attachments/299632385547436032/303393572437229568/image.jpg');
           mjoke.setColor('#846BF7');

           const mbrain = new Discord.RichEmbed();
           mbrain.setImage('https://cdn.discordapp.com/attachments/301440738166571009/303395413543878657/eJwVzMENwyAMAMBdGABjDAlkG0QQoQoFYfcVdfeqN8A96rNudahLZPIBcDbOY52aZaxUi65j1Luk2Vjn0SGJpHz18hYGi1swwdnd.jpg');
           mjoke.setColor('#846BF7');

           var jojokes = ['http://i.imgur.com/Pvs7w9y.png', 'https://cdn.discordapp.com/attachments/269129409888256000/304772815981248512/Ineededtheseinmylife_2abdfd6f35331f417d3a2e28f7e0479b.jpg', 'https://images.discordapp.net/.eJwFwdsNwyAMAMBdGACbR4nJNggoSZXUCLtfVXfv3dd81mV2c6hO2QHaKZVXs6K8yuh2MI-rl3mKrXxDUS31uPtbBXzKzueImYj8IyEiBIzb5snFkFJwGB0CPZt9zWF-f3lUIL0.EudCuCv9o41DO07ew3Lj8o84hIo?width=163&height=597', 'https://cdn.discordapp.com/attachments/269129409888256000/304772847262236672/ef8.gif', 'https://cdn.discordapp.com/attachments/269129409888256000/304772847606300672/follow-donald-j-trump-o-greadonald-trump-i-loved-this-2542621.png']
           var rjojokes = jojokes[Math.floor(Math.random() * jojokes.length)];
           const mjojoke = new Discord.RichEmbed();
           mjojoke.setImage(rjojokes);
           mjojoke.setColor('#846BF7');

           const mscream = new Discord.RichEmbed();
           mscream.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303298843523678219/screams.jpg');
           mscream.setColor('#846BF7');

           const mforever = new Discord.RichEmbed();
           mforever.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303298736765796372/FOREVER.png');
           mforever.setColor('#846BF7');

           const mcapitalism = new Discord.RichEmbed();
           mcapitalism.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303298582528917504/9D6.jpg');
           mcapitalism.setColor('#846BF7');

           const mernie = new Discord.RichEmbed();
           mernie.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303298348016861184/1472108577502.png');
           mernie.setColor('#846BF7');

           const mkawaii = new Discord.RichEmbed();
           mkawaii.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303298068646723584/917363_1661775477443606_58464003_n.jpg');
           mkawaii.setColor('#846BF7');

           const mthis = new Discord.RichEmbed();
           mthis.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303297949264510976/hate_this.jpg');
           mthis.setColor('#846BF7');

           const m911 = new Discord.RichEmbed();
           m911.setImage('http://i0.kym-cdn.com/photos/images/original/001/235/181/5f7.gif');
           m911.setColor('#846BF7');

           const mpussy = new Discord.RichEmbed();
           mpussy.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303230020136992768/I_get_pussy.png');
           mpussy.setColor('#846BF7');

           const mflat = new Discord.RichEmbed();
           mflat.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303230053225857025/flatisjustice.png');
           mflat.setColor('#846BF7');

           const mlaid = new Discord.RichEmbed();
           mlaid.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303230078261788674/gettingpaid.jpg');
           mlaid.setColor('#846BF7');

           const mticc = new Discord.RichEmbed();
           mticc.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303230165033418762/Thicc.png');
           mticc.setColor('#846BF7');

           const m100 = new Discord.RichEmbed();
           m100.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303230241483128833/HONDERD.jpg');
           m100.setColor('#846BF7');

           const mwtf = new Discord.RichEmbed();
           mwtf.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303230304620118016/wtf.jpg');
           mwtf.setColor('#846BF7');

           const mcancer = new Discord.RichEmbed();
           mcancer.setImage('https://cdn.discordapp.com/attachments/299632702087495680/303230392184602624/cancer.jpg');
           mcancer.setColor('#846BF7');

          try {
           if (msg.content.startsWith(prefix + 'pregnant')) {
             msg.channel.sendEmbed(mpregnant);
             msg.delete()
           } else if (msg.content.startsWith(prefix + 'shs')) {
             msg.channel.sendmsg('https://www.youtube.com/watch?v=F4Q_AC3N0SA')
             msg.delete()
           } else if (msg.content.startsWith(prefix + 'comfy')) {
             msg.channel.sendmsg('https://www.youtube.com/watch?v=ZyYaSvWikPQ')
             msg.delete()
           } else if (msg.content.startsWith(prefix + 'lewd')) {
             msg.channel.sendmsg('https://streamable.com/npvut');
             msg.delete()
           } else if (msg.content.startsWith(prefix + 'hungry')) {
             msg.channel.sendEmbed(mhungry)
             .then(() => {
               msg.channel.awaitMessages(response => response.content.startsWith('yes'), {
                 max: 1,
                 time: 30000,
                 errors: ['time'],
               })
               .then((collected) => {
                 msg.channel.sendMessage(`**Thank you ${collected.first().author}, i will try a human next time i go to school**`);
               })
             })
             msg.delete()
           } else if (msg.content.startsWith(prefix + 'triggered')) {
             msg.channel.sendEmbed(mtriggered)
             msg.delete()
           } else if (msg.content.startsWith(prefix + 'endme')) {
             msg.channel.sendEmbed(mendme)
             msg.delete()
           } else if (msg.content.startsWith(prefix + 'loli')) {
             msg.channel.sendEmbed(mloli)
             msg.delete()
           } else if (msg.content.startsWith(prefix + 'dab')) {
             msg.channel.sendEmbed(mdab)
             msg.delete()
           } else if (msg.content.startsWith(prefix + 'drunk')) {
             msg.channel.sendEmbed(mdunk)
             msg.delete()
           } else if (msg.content.startsWith(prefix + 'police')) {
             msg.channel.sendEmbed(mpolice)
             msg.delete()
           } else if (msg.content.startsWith(prefix + 'doit')) {
             msg.channel.sendEmbed(mdoit)
             msg.delete()
           } else if(msg.content.startsWith(prefix + 'dance')) {
             msg.channel.sendEmbed(mdance)
             msg.delete()
           } else if(msg.content.startsWith(prefix + 'rain')) {
             msg.channel.sendEmbed(mrain)
             msg.delete()
           } else if(msg.content.startsWith(prefix + 'purge')) {
             msg.channel.sendEmbed(mpurge)
             msg.delete()
           } else if(msg.content.startsWith(prefix + 'ten')) {
             msg.channel.sendEmbed(mten)
             msg.delete()
           } else if(msg.content.startsWith(prefix + 'sheet')) {
             msg.channel.sendEmbed(msheet)
             msg.delete()
           } else if(msg.content.startsWith(prefix + 'listen')) {
             msg.channel.sendEmbed(mlisten)
             msg.delete()
           } else if(msg.content.startsWith(prefix + 'friends')) {
             msg.channel.sendEmbed(mfriends)
             msg.delete()
           } else if(msg.content.startsWith(prefix + 'autist')) {
             msg.channel.sendEmbed(mautist)
             msg.delete()
           } else if (msg.content.startsWith(prefix + 'ping')) {
             return msg.channel.sendMessage('Eating insects...').then(message => {
               message.edit(`I took \`${message.createdTimestamp - msg.createdTimestamp} ms\` to eat all of them!`);
             });
           } else if (msg.content.startsWith(prefix + 'about')) {
             msg.channel.sendmsg(`**こんにちは(Kon'nichiwa) ${msg.author}**\n\nI am **カンナカムイ\(Kanna Kamui\)** i live with Kobayashi-san... So call me **Kanna Kobayashi**!\n\nWell, i am at **Discord** to spread the love for anime and quiz!\nFirst of all, you need to assign to yourself a role called \"Dragon Tamer\"\nAfter you can do \`k!qstart\` to test if everything is good!\n\nTo set up a different character you have to do \`k!sfname <first name>\` to set the character first name, \`k!slname <last name>\` to set up the character last name and \`k!sqphoto <link>\` to set up the character photo, then just do \`k!qstart\`!\n\n**Join my support server if you have any questions!**\nhttps://discord.gg/uBdXdE9`)
           } else if (msg.content.startsWith(prefix + 'invite')) {
             msg.channel.sendMessage(`Invite me to your server ${msg.author}!\nhttps://discordapp.com/oauth2/authorize?permissions=1341643977&scope=bot&client_id=297459926505095180`)
           } else if (msg.content.startsWith(prefix + 'feedback')) {
             bkanna.guilds.get('298969150133370880').channels.get('302982607182888961').sendEmbed(fback)
             msg.channel.sendMessage(`A feedback has been sent to the overlords!`)
           } else if (msg.content.startsWith(prefix + 'request')) {
             bkanna.guilds.get('298969150133370880').channels.get('299632702087495680').sendEmbed(request)
             msg.channel.sendMessage(`A request has been sent to the overlords!`)
           } else if (msg.content.startsWith(prefix + 'bstats')) {
             msg.channel.sendEmbed(stats)
           } else if (msg.content.startsWith(prefix + 'gstats')) {
             msg.channel.sendEmbed(serverstatus)
           } else if(msg.content.startsWith(prefix + 'brain')) {
             msg.channel.sendEmbed(mbrain);
             msg.delete();
           } else if(msg.content.startsWith(prefix + 'joke')) {
             msg.channel.sendEmbed(mjoke);
             msg.delete();
           } else if(msg.content.startsWith(prefix + 'delete')) {
             msg.channel.sendEmbed(mdelete);
             msg.delete();
           } else if(msg.content.startsWith(prefix + 'jojoke')) {
             msg.channel.sendEmbed(mjojoke);
             msg.delete();
           } else if(msg.content.startsWith(prefix + 'scream')) {
             msg.channel.sendEmbed(mscream);
             msg.delete();
           } else if(msg.content.startsWith(prefix + '4ever')) {
             msg.channel.sendEmbed(mforever);
             msg.delete();
           } else if(msg.content.startsWith(prefix + 'capit')) {
             msg.channel.sendEmbed(mcapitalism);
             msg.delete();
           } else if(msg.content.startsWith(prefix + 'ernie')) {
             msg.channel.sendEmbed(mernie);
             msg.delete();
           } else if(msg.content.startsWith(prefix + 'kawaii')) {
             msg.channel.sendEmbed(mkawaii);
             msg.delete();
           } else if(msg.content.startsWith(prefix + 'dis')) {
             msg.channel.sendEmbed(mthis);
             msg.delete();
           } else if(msg.content.startsWith(prefix + '911')) {
             msg.channel.sendEmbed(m911);
             msg.delete();
           } else if(msg.content.startsWith(prefix + 'pussy')) {
             msg.channel.sendEmbed(mpussy);
             msg.delete();
           } else if(msg.content.startsWith(prefix + 'flat')) {
             msg.channel.sendEmbed(mflat);
             msg.delete();
           } else if(msg.content.startsWith(prefix + 'laid')) {
             msg.channel.sendEmbed(mlaid);
             msg.delete();
           } else if(msg.content.startsWith(prefix + 'ticc')) {
             msg.channel.sendEmbed(mticc);
             msg.delete();
           } else if(msg.content.startsWith(prefix + '100')) {
             msg.channel.sendEmbed(m100);
             msg.delete();
           } else if(msg.content.startsWith(prefix + 'wtf')) {
             msg.channel.sendEmbed(mwtf);
             msg.delete();
           } else if(msg.content.startsWith(prefix + 'cancer')) {
             msg.channel.sendEmbed(mcancer);
           };
         }catch (err) {
             msg.channel.sendMessage(`This shouldn\'t happen! Report this to the support guild:\n\`\`\`js\n${err}\`\`\``)
         };

           if (msg.author.id === owner) {
             if (msg.content.startsWith(prefix + 'ss')) {
               if(!argresult) {
                 argresult = 'online';
               };
               bkanna.user.setStatus(argresult);
             } else if (msg.content.startsWith(prefix + "eval")) {
             try {
               var code = args.join(" ");
               var evaled = eval(code);
               const evale = new Discord.RichEmbed()
               evale.addField('Input', `${msg.content.split(prefix + 'eval').slice(1)}`)
               evale.addField('Output', `${clean(evaled)}`)
               evale.setColor('#ffc0cb')

               if (typeof evaled !== "string")
                 evaled = require("util").inspect(evaled);

               msg.channel.sendEmbed(evale);
             } catch (err) {
                const evalet = new Discord.RichEmbed()
                evalet.addField('Input', `${msg.content.split(prefix + 'eval').slice(1)}`)
                evalet.addField('Error', `${clean(err)}`)
                evalet.setColor('#800080')
               msg.channel.sendEmbed(evalet);
             }
           }
         } else {
           if(msg.content.startsWith(prefix + 'ss') || msg.content.startsWith(prefix + 'eval')) {
             msg.channel.sendMessage('Only the owner can do this command!')
           };
         };

         if(msg.member.roles.exists('name', 'Dragon Tamer') || msg.member.id === owner) {
           if (msg.content.startsWith(prefix + 'help')) {
             msg.channel.sendEmbed(helpEmbed);
             msg.author.sendEmbed(tamerUser);
           } else if (msg.content.startsWith(prefix + 'sfname')) {
             msg.channel.sendMessage(`The first name has changed sucessfully ${msg.author}`)
             names[msg.guild.id].firstName = msg.content.split(prefix + 'sfname ').slice(1).join('');
           } else if (msg.content.startsWith(prefix + 'slname')) {
             msg.channel.sendMessage(`The last name has changed sucessfully ${msg.author}`);
             names[msg.guild.id].lastName = msg.content.split(prefix + 'slname ').slice(1).join('');
           } else if (msg.content.startsWith(prefix + 'sqphoto')) {
             msg.channel.sendMessage(`The quiz photo has changed sucessfully ${msg.author}`);
             names[msg.guild.id].quizPhoto = msg.content.split(prefix + 'sqphoto').slice(1).join('');
           } else if (msg.content.startsWith(prefix + 'qstart')) {
             msg.channel.sendEmbed(quizemb)
             msg.delete()
             .then(() => {
               msg.channel.awaitMessages(response => response.content.startsWith(firstname) || response.content === lastname || response.content === lastname.toLowerCase() || response.content.startsWith(firstname.toLowerCase()) || response.content === firstname + ' ' +  lastname || response.content === firstname.toLowerCase() + ' ' + lastname.toLowerCase(), {
                 max: 1,
                 time: 900000,
                 errors: ['time'],
               })
               .then((collected) => {
                 msg.channel.sendMessage(`**${collected.first().author} guessed it right!**\n\n**The character was: __${firstname} ${lastname}__**`);
               })
               .catch(() => {
                 msg.channel.sendMessage('**No one guessed it right! So the event has ended!**');
               })
             })
             .catch(console.error)
           };
         } else {
           if (msg.content.startsWith(prefix + 'help')) {
             msg.channel.sendEmbed(helpEmbed);
             msg.author.sendEmbed(commonUser);
           } else if (msg.content.startsWith(prefix + 'sfname')) {
             msg.channel.sendMessage(`**${msg.author}** you don\'t have the \`Dragon Tamer\` role assigned to yourself!`)
           } else if (msg.content.startsWith(prefix + 'slname')) {
             msg.channel.sendMessage(`**${msg.author}** you don\'t have the \`Dragon Tamer\` role assigned to yourself!`)
           } else if (msg.content.startsWith(prefix + 'sqphoto')) {
             msg.channel.sendMessage(`**${msg.author}** you don\'t have the \`Dragon Tamer\` role assigned to yourself!`)
           } else if (msg.content.startsWith(prefix + 'qstart')) {
             msg.channel.sendMessage(`**${msg.author}** you don\'t have the \`Dragon Tamer\` role assigned to yourself!`)
           }
         };

         if(msg.guild.id === '298969150133370880') {
           if(msg.content.startsWith('i want to be a tester!')) {
             msg.member.addRole('302994196543963136')
             msg.reply('thanks for helping me get improved!')
           };
           if(msg.content.startsWith('i love kanna!')) {
             msg.member.addRole('299634845439492099')
             msg.channel.sendMessage('❤')
           };
         };

         fs.writeFile('./names.json', JSON.stringify(names), (err) => {
           if (err) console.error(err)
         });
         };
       } else return;
     });

     bkanna.login(token);
