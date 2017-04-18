.setTitle('This is your title, it can hold 256 characters')
.setAuthor(`${message.author}`, `${message.author.avatarURL}`)
.setColor('#F7C3EF')
.setDescription(false)
.setFooter('This event has started at', 'https://cdn.discordapp.com/avatars/297459926505095180/36d9952998c1a24e3646af1a3e77cda6.jpg?size=1024')
.setImage(qphoto)
.setThumbnail(`${message.guild.iconURL}`)
.setTimestamp()
.setURL('https://discord.js.org/#/docs/main/indev/class/RichEmbed')
.addField('Try to guess who this is!',
'This event will be over in 15 minutes')
.addField(false)
.addField(false)
.addField(false);
