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
