const Discord = require("discord.js");
const db = require('quick.db')
exports.run = (client, message, args, member) => {
  let hata = args.slice(0).join(" ");
  let kanal = client.channels.cache.get('782991798741368852')
    if (!hata) {
    return message.channel.send(
      "Hatanı Yazarmısın ?"
    ); }
const embed = new Discord.MessageEmbed()
  .setColor("0x36393F")
  .addField("Bir Hata Bildirildi!", `Bildiren: ${message.author.tag} Bildirdiği Hata: ${hata}`)
kanal.send(embed)
  message.channel.send('Hata Kurucuma Bildirdim En Kısa üre İçerisinde Düzeltilecrk Teşekkürler!')
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bildir"],
    permLevel: 0
}

exports.help = {
    name: "hata-bildir",
    description: "kodçevirme",
    usage: "kodçevirme"
}
