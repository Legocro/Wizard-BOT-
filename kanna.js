////////////////////////////////////
/*
   BOT DONE BY: Wizardλ#4559
   STEAM: steamcommunity.com/id/gentleman_source
*/
////////////////////////////////////
//////////////CONSTANTS/////////////
const Discord = require('discord.js');
const client = new Discord.Client({fetchAllMembers: true});
const fs = require("fs");
const ddiff = require('return-deep-diff');
const superagent = require('superagent');
const exec = require('child_process').exec;
////////////////////////////////////
//--------------------------------//
///////////CONSOLE LOGS/////////////
client.on('ready', () => {
  console.log("Give me insects... Or i\'ll not start v9.8.0");
});


////////////////////////////////////
//--------------------------------//
//////////////BLOCKS////////////////
let names = JSON.parse(fs.readFileSync('./names.json', 'utf8'));

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
////////////////////////////////////
//--------------------------------//
//////////GUILD EVENTS//////////////

client.on('guildCreate', guild => {
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

      let fuccMe;
      let fuccUs;
      if(guild.iconURL) {
         fuccMe = `${guild.iconURL}`
       };
       if(guild.roles.map(r => r.name).join(", ").length <= 1024) {
         fuccUs = guild.roles.map(r => r.name).join(", ")
       } else if(guild.roles.map(r => r.name).join(", ").length >= 1024) {
         fuccUs = `Too many characters \(${guild.roles.map(r => r.name).join(", ").length}\)`
       };

      const gcreate = new Discord.RichEmbed()
      gcreate.setThumbnail(fuccMe)
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
      gcreate.addField('Role Names', fuccUs, true)
      client.guilds.get('298969150133370880').channels.get('303180857030606849').sendEmbed(gcreate)
      client.users.get('267727230296129536').send(`**I joined a guild and i am now on \`${client.guilds.size}\` guilds!**`)
    });

    client.on('guildDelete', guild => {
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
           fuccMe = `${guild.iconURL}`
         };
         if(guild.roles.map(r => r.name).join(", ").length <= 1024) {
           fuccUs = guild.roles.map(r => r.name).join(", ")
         } else if(guild.roles.map(r => r.name).join(", ").length >= 1024) {
           fuccUs = `Too many characters \(${guild.roles.map(r => r.name).join(", ").length}\)`
         };

      const gleave = new Discord.RichEmbed()
      gleave.setThumbnail(fuccMe)
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
      gleave.addField('Role Names', fuccUs, true)
      client.guilds.get('298969150133370880').channels.get('303180857030606849').sendEmbed(gleave)
      client.users.get('267727230296129536').send(`**I left a guild and i am now on \`${client.guilds.size}\` guilds!**`)
    });

client.on('ready', () => {
  client.guilds.map(g => names[g.id] = {
    firstName: "Kanna",
    lastName: "Kobayashi",
    quizPhoto: "http://pm1.narvii.com/6366/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg",
  });
  fs.writeFile('./names.json', JSON.stringify(names), (err) => {
    if (err) console.error(err)
  });
  client.user.setGame(`k!help | on ${client.guilds.size} guilds`)
});
////////////////////////////////////
//--------------------------------//
//////////CLIENT EVENTS/////////////
var prefix = "k!";
client.on('message', message => {
  if(client.guilds.get('304031909648793602' || '304031909648793602')) return;
  if (message.author.bot) return;
////////////EVENT HORIZON///////////
  var userMod = (message.member.roles.exists('name', 'Dragon Tamer')) || message.author.id === '267727230296129536';
  var mention = client.user;
////////////////////////////////////
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  let firstname = names[message.guild.id].firstName;
  let lastname = names[message.guild.id].lastName;
  let qphoto = names[message.guild.id].quizPhoto;

  /* From the first mention */
let member = message.guild.member(message.mentions.users.first());

/* From a defined user object */
//let member = message.guild.member(message.users.get("an id"));
/* also users.find() and whatever. */

///////////////////FUNCTIONS//////////////////////
let fuccMe;
let fuccUs;
if(message.guild.iconURL) {
   fuccMe = `${message.guild.iconURL}`
 };
 if(message.guild.roles.map(r => r.name).join(", ").length <= 1024) {
   fuccUs = message.guild.roles.map(r => r.name).join(", ")
 } else if(message.guild.roles.map(r => r.name).join(", ").length >= 1024) {
   fuccUs = `Too many characters \(${message.guild.roles.map(r => r.name).join(", ").length}\)`
 };

//////////////////////////////////////////////////

/////////////////////EMBEDS///////////////////////
  const embed = new Discord.RichEmbed();
  embed.setColor('#F7C3EF');
  embed.setFooter(`${message.author.username} started this event`, `${message.author.displayAvatarURL}`);
  embed.setImage(qphoto);
  embed.setTimestamp();
  embed.addField('Try to guess who this is!',
  'This event will be over in 15 minutes');

  const helpEmbed = new Discord.RichEmbed();
  helpEmbed.setAuthor(`DM incoming!`, `${message.author.displayAvatarURL}`);
  helpEmbed.setColor('#FB3A9B');
  helpEmbed.setDescription(`Have fun ${message.author}!`);
  helpEmbed.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg');


  const tamerUser = new Discord.RichEmbed();
  tamerUser.setTitle(`アホイ\(Ahoi\) ${message.author.username}`);
  tamerUser.setAuthor('Click here to join the support server!', `${message.author.displayAvatarURL}`);
  tamerUser.setColor('#FB3A9B');
  tamerUser.setDescription(`${message.author} don\'t forget to have fun!`)
  tamerUser.setFooter('BOT done by Wizardλ#4559', 'https://cdn.discordapp.com/avatars/267727230296129536/d97af37c3284d8c18a7c314c7c3f7174.jpg?size=1024');
  tamerUser.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg');
  tamerUser.setURL('https://discord.gg/uBdXdE9');
  tamerUser.addField('Prefix', 'Mention or k!');
  tamerUser.addField('Tamer Commands',
    '\`sqphoto <link>\` sets the character photo\n\`sfname <first name>\` sets the character first name\n\`slname <last name>\` sets the character last name\n\`qstart\` starts the event');
  tamerUser.addField('Common Commands', '\`ping\` see how long the bot takes to answer commands\n\`invite\` gets the bot link invite\n\`about\` a bit about **Kanna Kobayashi** and how to set it up\n\`feedback\` sends a feedback to the overlord\n\`request\` request a new feature to Kanna\n\`bstats\` see the bot current stats\n\`gstats\` see the guild stats', true);
  tamerUser.addField('Memes Gen. 1', '\`pregnant\`\n\`lewd\`\n\`hungry\`\n\`loli\`\n\`dab\`\n\`drunk\`\n\`triggered\`\n\`endme\`\n\`shs\`\n\`russia\`\n\`gangsta\`\n\`comfy\`', true);
  tamerUser.addField('Memes Gen. 2', '\n\`rain\`\n\`dance\`\n\`purge\`\n\`ten\`\n\`sheet\`\n\`listen\`\n\`friends\`\n\`autist\`\n\`police\`\n\`doit\`', true);
  tamerUser.addField('Memes Gen. 3 (Current)', '\`delete\`\n\`joke\`\n\`brain\`')

  const commonUser = new Discord.RichEmbed()
  commonUser.setTitle(`**アホイ\(Ahoi\) ${message.author.username}**`)
  commonUser.setAuthor('Click here to join the support server!', `${message.author.displayAvatarURL}`)
  commonUser.setColor(0x00AE86)
  commonUser.setDescription(`If you want to use Tamer\(Mod\) commands ${message.author} you need the role \`Dragon Tamer\` assigned to yourself on ${message.guild.name}`);
  commonUser.setFooter('BOT done by Wizardλ#4559', 'https://cdn.discordapp.com/avatars/267727230296129536/d97af37c3284d8c18a7c314c7c3f7174.jpg?size=1024');
  commonUser.setThumbnail('https://cdn.discordapp.com/attachments/269129409888256000/300482904679645185/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg');
  commonUser.setURL('https://discord.gg/uBdXdE9')
  commonUser.addField('Commands', '\`ping\` see how long the bot takes to answer commands\n\`invite\` gets the bot link invite\n\`about\` a bit about **Kanna Kobayashi** and how to set it up\n\`feedback\` sends a feedback to the overlord\n\`request\` request a new feature to Kanna\n\`bstats\` see the bot current stats\n\`gstats\` see the guild stats', true);
  commonUser.addField('Memes Gen. 1', '\`pregnant\`\n\`lewd\`\n\`hungry\`\n\`loli\`\n\`dab\`\n\`drunk\`\n\`triggered\`\n\`endme\`\n\`shs\`\n\`russia\`\n\`gangsta\`\n\`comfy\`', true);
  commonUser.addField('Memes Gen. 2', '\`rain\`\n\`dance\`\n\`purge\`\n\`ten\`\n\`sheet\`\n\`listen\`\n\`friends\`\n\`autist\`\n\`police\`\n\`doit\`', true);
  commonUser.addField('Memes Gen. 3 (Current)', '\`delete\`\n\`joke\`\n\`brain\`')
//////////////////////

  let minutes;
  let hours;
  let seconds;

  if((client.uptime / 60000 % 60).toFixed() == 0) {
    minutes = '';
  } else if((client.uptime / 60000 % 60).toFixed() > 0) {
    minutes = `\n` + (client.uptime / 60000 % 60).toFixed() + ' minute(s)'
  };

  if((client.uptime / 3600000 % 24).toFixed() == 0) {
    hours = '';
  } else if((client.uptime / 3600000 % 24).toFixed() > 0) {
    hours = `\n` + (client.uptime / 3600000 % 24).toFixed() + ' hour(s)'
  };

  if ((client.uptime / 1000 % 60).toFixed() == 0) {
    seconds = '';
  } else if ((client.uptime / 1000 % 60).toFixed()) {
    seconds = `\n` + (client.uptime / 1000 % 60).toFixed() + ' second(s)'
  };

  const stats = new Discord.RichEmbed()
  stats.setAuthor('Stats for Kanna Kobayashi', 'https://cdn.discordapp.com/avatars/297459926505095180/36d9952998c1a24e3646af1a3e77cda6.jpg?size=1024');
  stats.addField('Uptime', `${hours}${minutes}${seconds}`);
  stats.setFooter('BOT done by Wizardλ#4559', 'https://cdn.discordapp.com/avatars/267727230296129536/d97af37c3284d8c18a7c314c7c3f7174.jpg?size=1024');
  stats.setColor('##00FFFD');
  stats.addField('Total Guilds', `${client.guilds.size} Guilds`, true);
  stats.addField('Total Users', `${client.users.filter(u => u.bot === false).size} Humans`, true);
  stats.addField('Current Version', 'v9.8.0');
  stats.addField('Last Update', '- Added meme generation 3 (\`delete\`, \`joke\` and \`brain\`)');
  stats.addField('Working On', 'Will try to not work in anything \'til next week because of my tests ❤');

/////////////////////

  const fback = new Discord.RichEmbed();
  fback.setColor('#ffd750');
  fback.setTimestamp();
  fback.setFooter('Received', `${message.author.displayAvatarURL}`);
  fback.setTitle(`New feedback`);
  fback.setDescription(`${client.guilds.get('298969150133370880').roles.find('name', 'Support')} check this!`);
  fback.addField('User Feedback', `${message.content.split(prefix + 'feedback').slice(1).join(" ")}`);
  fback.addField('Informations', `**Username:** ${message.author}\n**User ID:** ${message.author.id}\n**Guild Name:** ${message.guild.name}\n**Guild ID:** ${message.guild.id}\n**Message ID:** ${message.id}`);

  const request = new Discord.RichEmbed();
  request.setColor('#322254');
  request.setTimestamp();
  request.setFooter('Received', `${message.author.displayAvatarURL}`);
  request.setTitle(`New request`);
  request.setDescription(`${client.guilds.get('298969150133370880').roles.find('name', 'Support')} check this!`);
  request.addField('User Request', `${message.content.split(prefix + 'request').slice(1).join(" ")}`);
  request.addField('Informations', `**Username:** ${message.author}\n**User ID:** ${message.author.id}\n**Guild Name:** ${message.guild.name}\n**Guild ID:** ${message.guild.id}\n**Message ID:** ${message.id}`);

  const serverstatus = new Discord.RichEmbed();
  serverstatus.setThumbnail(fuccMe);
  serverstatus.addField('Guild Name', `${message.guild.name}`);
  serverstatus.addField('Guild ID', `${message.guild.id}`, true);
  serverstatus.addField('Owner', `${message.guild.owner}`, true);
  serverstatus.addField('Owner ID', `${message.guild.owner.user.id}`, true);
  serverstatus.addField('Total Members', `${message.guild.members.size}`, true);
  serverstatus.addField('Humans', `${message.guild.members.filter(u => u.user.bot === false).size}`, true);
  serverstatus.addField('Bots', `${message.guild.members.filter(u => u.user.bot === true).size}`, true);
  serverstatus.addField('Region', `${message.guild.region}`, true);
  serverstatus.addField('Total Channels', `${message.guild.channels.size}`, true);
  serverstatus.addField('Text Channels', `${message.guild.channels.filter(c => c.type === "text").size}`, true);
  serverstatus.addField('Voice Channels', `${message.guild.channels.filter(c => c.type === "voice").size}`, true);
  serverstatus.addField('Total Roles', `${message.guild.roles.size}`, true);
  serverstatus.addField('Role Names', fuccUs, true);
  serverstatus.setTimestamp();
  serverstatus.setFooter('Server Stats from', `${message.author.displayAvatarURL}`);

//--------------------------------//
//var lolimeme = ['https://cdn.discordapp.com/attachments/269129409888256000/300666636946374656/1491677914_giphy_2.gif', 'https://cdn.discordapp.com/attachments/275135980481150976/299263322157744128/aKVvBp1_460s.png'];
//var randloli = lolimeme[Math.floor(Math.random() * lolimeme.length)];
//var autisticmeme = ['', '']
///////////MEME EMBDES//////////////

  const mpregnant = new Discord.RichEmbed();
  mpregnant.setTitle(`Fear FBI ${message.author.username}`);
  mpregnant.setImage('https://cdn.discordapp.com/attachments/279299921071570958/298142045938122753/memo.png');
  mpregnant.setColor('#846BF7');

  const mhungry = new Discord.RichEmbed();
  mhungry.setTitle('Hoomans taste good as insects?');
  mhungry.setImage('https://cdn.discordapp.com/attachments/269129409888256000/300481191151271946/giphy_9.gif');
  mhungry.setColor('#846BF7');

  const mloli = new Discord.RichEmbed();
  mloli.setTitle('Hmm... A hooman');
  mloli.setImage('https://cdn.discordapp.com/attachments/269129409888256000/300666636946374656/1491677914_giphy_2.gif');
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

  const mautist = new Discord.RichEmbed()
  mautist.setImage('https://cdn.discordapp.com/attachments/299632702087495680/302754519123755018/fuckingautist.png');
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

////////////////////////////////////
//--------------------------------//
//////////EVERYONE CAN DO //////////

  if (message.content.startsWith(prefix + 'pregnant') || message.content.startsWith(mention + ' pregnant')) {
    message.channel.sendEmbed(mpregnant);
    message.delete()
  } else if (message.content.startsWith(prefix + 'shs') || message.content.startsWith(mention + ' shs')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=F4Q_AC3N0SA')
    message.delete()
  } else if (message.content.startsWith(prefix + 'comfy') || message.content.startsWith(mention + ' comfy')) {
    message.channel.sendMessage('https://www.youtube.com/watch?v=ZyYaSvWikPQ')
    message.delete()
  } else if (message.content.startsWith(prefix + 'lewd') || message.content.startsWith(mention + ' lewd')) {
    message.channel.sendMessage('https://streamable.com/npvut');
    message.delete()
  } else if (message.content.startsWith(prefix + 'hungry') || message.content.startsWith(mention + ' hungry')) {
    message.channel.sendEmbed(mhungry)
    .then(() => {
      message.channel.awaitMessages(response => response.content.startsWith('yes'), {
        max: 1,
        time: 30000,
        errors: ['time'],
      })
      .then((collected) => {
        message.channel.sendMessage(`**Thank you ${collected.first().author}, i will try a human next time i go to school**`);
      })
    })
    message.delete()
  } else if (message.content.startsWith(prefix + 'triggered') || message.content.startsWith(mention + ' triggered')) {
    message.channel.sendEmbed(mtriggered)
    message.delete()
  } else if (message.content.startsWith(prefix + 'endme') || message.content.startsWith(mention + ' endme')) {
    message.channel.sendEmbed(mendme)
    message.delete()
  } else if (message.content.startsWith(prefix + 'loli') || message.content.startsWith(mention + ' loli')) {
    message.channel.sendEmbed(mloli)
    message.delete()
  } else if (message.content.startsWith(prefix + 'dab') || message.content.startsWith(mention + ' dab')) {
    message.channel.sendEmbed(mdab)
    message.delete()
  } else if (message.content.startsWith(prefix + 'drunk') || message.content.startsWith(mention + ' drunk')) {
    message.channel.sendEmbed(mdunk)
    message.delete()
  } else if (message.content.startsWith(prefix + 'police') || message.content.startsWith(mention + ' police')) {
    message.channel.sendEmbed(mpolice)
    message.delete()
  } else if (message.content.startsWith(prefix + 'doit') || message.content.startsWith(mention + ' doit')) {
    message.channel.sendEmbed(mdoit)
    message.delete()
  } else if(message.content.startsWith(prefix + 'dance') || message.content.startsWith(mention + ' dance')) {
    message.channel.sendEmbed(mdance)
    message.delete()
  } else if(message.content.startsWith(prefix + 'rain') || message.content.startsWith(mention + ' rain')) {
    message.channel.sendEmbed(mrain)
    message.delete()
  } else if(message.content.startsWith(prefix + 'purge') || message.content.startsWith(mention + ' purge')) {
    message.channel.sendEmbed(mpurge)
    message.delete()
  } else if(message.content.startsWith(prefix + 'ten') || message.content.startsWith(mention + ' ten')) {
    message.channel.sendEmbed(mten)
    message.delete()
  } else if(message.content.startsWith(prefix + 'sheet') || message.content.startsWith(mention + ' sheet')) {
    message.channel.sendEmbed(msheet)
    message.delete()
  } else if(message.content.startsWith(prefix + 'listen') || message.content.startsWith(mention + ' listen')) {
    message.channel.sendEmbed(mlisten)
    message.delete()
  } else if(message.content.startsWith(prefix + 'friends') || message.content.startsWith(mention + ' friends')) {
    message.channel.sendEmbed(mfriends)
    message.delete()
  } else if(message.content.startsWith(prefix + 'autist') || message.content.startsWith(mention + ' autist')) {
    message.channel.sendEmbed(mautist)
    message.delete()
  } else if (message.content.startsWith(prefix + 'ping') || message.content.startsWith(mention + ' ping')) {
    return message.channel.sendMessage('Eating insects...').then(msg => {
      msg.edit(`I took \`${msg.createdTimestamp - message.createdTimestamp} ms\` to eat all of them!`);
    });
  } else if (message.content.startsWith(prefix + 'about') || message.content.startsWith(mention + ' about')) {
    message.channel.sendMessage(`**こんにちは(Kon'nichiwa) ${message.author}**\n\nI am **カンナカムイ\(Kanna Kamui\)** i live with Kobayashi-san... So call me **Kanna Kobayashi**!\n\nWell, i am at **Discord** to spread the love for anime and quiz!\nFirst of all, you need to assign to yourself a role called \"Dragon Tamer\"\nAfter you can do \`k!qstart\` to test if everything is good!\n\nTo set up a different character you have to do \`k!sfname <first name>\` to set the character first name, \`k!slname <last name>\` to set up the character last name and \`k!sqphoto <link>\` to set up the character photo, then just do \`k!qstart\`!\n\n**Join my support server if you have any questions!**\nhttps://discord.gg/uBdXdE9`)
  } else if (message.content.startsWith(prefix + 'invite') || message.content.startsWith(mention + ' invite')) {
    message.channel.sendMessage(`Invite me to your server ${message.author}!\nhttps://discordapp.com/oauth2/authorize?permissions=1341643977&scope=bot&client_id=297459926505095180`)
  } else if (message.content.startsWith(prefix + 'feedback')) {
    client.guilds.get('298969150133370880').channels.get('302982607182888961').sendEmbed(fback)
    message.channel.sendMessage(`A feedback has been sent to the overlords!`)
  } else if (message.content.startsWith(prefix + 'request')) {
    client.guilds.get('298969150133370880').channels.get('299632702087495680').sendEmbed(request)
    message.channel.sendMessage(`A request has been sent to the overlords!`)
  } else if (message.content.startsWith(prefix + 'bstats') || message.content.startsWith(mention + ' bstats')) {
    message.channel.sendEmbed(stats)
  } else if (message.content.startsWith(prefix + 'gstats') || message.content.startsWith(mention + ' gstats')) {
    message.channel.sendEmbed(serverstatus)
  } else if(message.content.startsWith(prefix + 'brain') || message.content.startsWith(mention + ' brain')) {
    message.channel.sendEmbed(mbrain);
    message.delete();
  } else if(message.content.startsWith(prefix + 'joke') || message.content.startsWith(mention + ' joke')) {
    message.channel.sendEmbed(mjoke);
    message.delete();
  } else if(message.content.startsWith(prefix + 'delete') || message.content.startsWith(mention + ' delete')) {
    message.channel.sendEmbed(mdelete);
    message.delete()
  } else

  if (message.author.id === '267727230296129536') {
    if (message.content.startsWith(prefix + 'ss') || message.content.startsWith(mention + ' ss')) {
      if(!argresult) argresult = 'online';
      client.user.setStatus(argresult);
    } else if (message.content.startsWith(prefix + "eval")) {
    try {
      var code = args.join(" ");
      var evaled = eval(code);
      const evale = new Discord.RichEmbed()
      evale.addField('Input', `${message.content.split(prefix + 'eval').slice(1)}`)
      evale.addField('Output', `${clean(evaled)}`)
      evale.setColor('#00FF00')

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendEmbed(evale);
    } catch (err) {
       const evalet = new Discord.RichEmbed()
       evalet.addField('Input', `${message.content.split(prefix + 'eval').slice(1)}`)
       evalet.addField('Error', `${clean(err)}`)
       evalet.setColor('#FF0000')
      message.channel.sendEmbed(evalet);
    }
  } else if(message.content.startsWith(prefix + 'restart')) {
    exec("heroku restart");
    message.channel.sendMessage(`Sucessfully restarting! ${message.author}`);
  }
};

  if(userMod) {
    if (message.content.startsWith(prefix + 'help') || message.content.startsWith(mention + ' help')) {
      message.channel.sendEmbed(helpEmbed);
      message.author.sendEmbed(tamerUser);
    } else if (message.content.startsWith(prefix + 'sfname') || message.content.startsWith(mention + ' sfname')) {
      message.channel.sendMessage(`The first name has changed sucessfully ${message.author}`)
      names[message.guild.id].firstName = message.content.split('k!' || mention).slice(1).join(' ');
    } else if (message.content.startsWith(prefix + 'slname')) {
      message.channel.sendMessage(`The last name has changed sucessfully ${message.author}`);
      names[message.guild.id].lastName = args[0];
    } else if (message.content.startsWith(prefix + 'sqphoto')) {
      message.channel.sendMessage(`The quiz photo has changed sucessfully ${message.author}`);
      names[message.guild.id].quizPhoto = args[0];
    } else if (message.content.startsWith(prefix + 'qstart') || message.content.startsWith(mention + ' qstart')) {
      message.channel.sendEmbed(embed)
      message.delete()
      .then(() => {
        message.channel.awaitMessages(response => response.content.startsWith(firstname) || response.content === lastname || response.content === lastname.toLowerCase() || response.content.startsWith(firstname.toLowerCase()) || response.content === firstname + ' ' +  lastname || response.content === firstname.toLowerCase() + ' ' + lastname.toLowerCase(), {
          max: 1,
          time: 900000,
          errors: ['time'],
        })
        .then((collected) => {
          message.channel.sendMessage(`**${collected.first().author} guessed it right!**\n\n**The character was: __${firstname} ${lastname}__**`);
        })
        .catch(() => {
          message.channel.sendMessage('**No one guessed it right! So the event has ended!**');
        })
      })
      .catch(console.error)
    };
    };

  if(!userMod) {
    if (message.content.startsWith(prefix + 'help') || message.content.startsWith(mention + ' help')) {
      message.channel.sendEmbed(helpEmbed);
      message.author.sendEmbed(commonUser);
    } else if (message.content.startsWith(prefix + 'sfname') || message.content.startsWith(mention + ' sfname')) {
      message.channel.sendMessage(`**${message.author}** you don\'t have the \`Dragon Tamer\` role assigned to yourself!`)
    } else if (message.content.startsWith(prefix + 'slname') || message.content.startsWith(mention + ' slname')) {
      message.channel.sendMessage(`**${message.author}** you don\'t have the \`Dragon Tamer\` role assigned to yourself!`)
    } else if (message.content.startsWith(prefix + 'sqphoto') || message.content.startsWith(mention + 'sqphoto')) {
      message.channel.sendMessage(`**${message.author}** you don\'t have the \`Dragon Tamer\` role assigned to yourself!`)
    } else if (message.content.startsWith(prefix + 'event') || message.content.startsWith(mention + ' event')) {
      message.channel.sendMessage(`**${message.author}** you don\'t have the \`Dragon Tamer\` role assigned to yourself!`)
    } else if (message.content.startsWith(prefix + 'qstart') || message.content.startsWith(mention + ' qstart')) {
      message.channel.sendMessage(`**${message.author}** you don\'t have the \`Dragon Tamer\` role assigned to yourself!`)
    }
  };

    if(message.guild.id === '298969150133370880') {
      if(message.content.startsWith('i want to be a tester!')) {
        message.member.addRole('302994196543963136')
        message.reply('thanks for helping me get improved!')
      };
      if(message.content.startsWith('i love kanna!')) {
        message.member.addRole('299634845439492099')
        message.channel.sendMessage('❤')
      };
    };

  fs.writeFile('./names.json', JSON.stringify(names), (err) => {
    if (err) console.error(err)
  });
////////////////////////////////////
});
////////////////////////////////////
//--------------------------------//
///////////////BOT C////////////////
client.login("Mjk3NDU5OTI2NTA1MDk1MTgw.C9hB3w.C9hoEl2dSUiOL1bVDKRABRIBbDk");
////////////////////////////////////
