const Discord = require("discord.js");
const db = require('quick.db')
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  let çevrilenkod = db.get(`çevrilenkod`);
  let msg = message
   const uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const embed = new Discord.MessageEmbed()
    .setColor('0x36393F')
    .addField('```〥Yusuf ♔#0001\n-------------------------\nる`Rawies.#1881```')
    .addField('Çalışma Süresi', `\`\`\`${uptime}\`\`\`` ,true)
    .addField('Ping', `\`\`\`${client.ws.ping} MS\`\`\``,true)
    .addField('Sunucu Sayısı', `\`\`\`${client.guilds.cache.size.toLocaleString()}\`\`\``,true)
    .addField('Kullanıcı Sayısı', `\`\`\`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}\`\`\``,true)
   .addField('Çevrilen Kod Sayısı', `\`\`\`${çevrilenkod}\`\`\``)
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

 return message.channel.send(embed);
  };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i'],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};