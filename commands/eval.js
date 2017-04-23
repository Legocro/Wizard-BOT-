const Discord = require('discord.js');
const settings = require('../settings.json');

function clean(text) {
  if (typeof text === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

exports.run = function(client, message, args) {

try{

               var code = args.join(" ");
               var evaled = eval(code);

               if (typeof evaled !== "string")
                 evaled = require("util").inspect(evaled);
                 const evale = new Discord.RichEmbed();
                 evale.addField('Input', `${message.content.split(' ').slice(1)}`);
                 evale.addField('Output', `${clean(evaled)}`);
                 evale.setColor('#ffc0cb');

               message.channel.sendEmbed(evale);
           } catch (err) {
             const evalet = new Discord.RichEmbed();
             evalet.addField('Input', `${message.content.split(' ').slice(1)}`);
             evalet.addField('Error', `${clean(err)}`);
             evalet.setColor('#800080');

             message.channel.sendEmbed(evalet);
           }
         };

         exports.conf = {
           enabled: true,
           guildOnly: false,
           aliases: ['seeifthisworks'],
           permLevel: 3
         };

         exports.help = {
           hName: 'Evaluate',
           name: 'eval',
           description: 'Ayy lmao',
           usage: 'eval'
         };
