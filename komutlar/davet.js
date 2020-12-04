const Discord = require('discord.js')
exports.run = (client, message, args, member) => {
const davet = new Discord.MessageEmbed()
  .setColor("0x36393F")
.addField("<a:ayarlars:773881705013444648>  • Linkler:", "> **• [Davet Et](https://discord.com/oauth2/authorize?client_id=780840708218421299&scope=bot&permissions=123905) • [Destek Sunucusu](https://discord.gg/s3xWUucYTF) • [Web Site (YAKINDA)](https://discord.gg/s3xWUucYTF) •**")
.setFooter("v11 Den v12 Ye", message.author.avatarURL())
.setImage("https://media.discordapp.net/attachments/780773849796313108/780813418197286942/standard_3.gif")
  message.channel.send(davet)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["d", "davet", "Davet", "Invite"],
    permLevel: 0
}

exports.help = {
    name: "invite",
    description: "kodçevirme",
    usage: "kodçevirme"
}