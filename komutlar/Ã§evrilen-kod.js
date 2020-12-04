const Discord = require("discord.js");
const db = require('quick.db')
exports.run = (client, message, args, member) => {
  let çevrilenkod = db.get(`çevrilenkod`);
const embed = new Discord.MessageEmbed()
  .setColor("0x36393F")
  .setDescription(`<a:ayarlars:773881705013444648> \n Toplam Çevrilenrilen Kod: ${çevrilenkod}`)
.setImage("https://media.discordapp.net/attachments/780773849796313108/780813418197286942/standard_3.gif")
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["say"],
    permLevel: 0
}

exports.help = {
    name: "çevrilenkod",
    description: "kodçevirme",
    usage: "kodçevirme"
}
