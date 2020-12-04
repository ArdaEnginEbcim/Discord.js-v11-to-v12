const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Yardım Menüsü`)
  .setColor('#d295a4')
  .setTitle('lie', client.user.avatarURL())
  .setDescription(`bir komut çalıştırmak için lie komut
  Toplam ${client.commands.size + 1} komut bulunuyor.
  :flag_us: I'm so sorry, there is no English language option. Maybe soon ;)
  
  ***Komutlar:***
  yardım, eval, hata-bildir, istatistik, uptime, v11tov12, çevrilenkod, davet
  
 ***Linkler:***
Website: Çok yakında!
Destek Sunucum: [Tıkla](link)!
Invite: [Tıkla!](link)`)
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "kodçevirme",
    usage: "kodçevirme"
}