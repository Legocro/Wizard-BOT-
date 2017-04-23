const fs = require("fs");

let names = JSON.parse(fs.readFileSync('./names.json', 'utf8'));

module.exports = client => {
  console.log("I\'m fully working!");
  client.guilds.map(g => names[g.id] = {
    firstName: "Kanna",
    lastName: "Kobayashi",
    quizPhoto: "http://pm1.narvii.com/6366/2c35594538206f7f598be792bf203b6b638e9c07_hq.jpg"
  });
  fs.writeFile('./names.json', JSON.stringify(names), (err) => {
    if (err) console.error(err);
  });
  client.user.setGame(`k!help on ${client.guilds.size} guilds`);
};
