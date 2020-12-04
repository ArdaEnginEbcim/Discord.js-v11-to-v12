const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
        if (message.author.id !== ayarlar.sahip) return  message.channel.send('Bu Komutu Kullanmak İçin **`Sahibim`** Olman Lazım!')
  try {
    let codein = args.join(" ");
    let code = eval(codein)
    if (codein.length < 1) return message.channel.send('Bir kod girmelisin !')
    if (codein == 'client.token') return message.channel.send('Tokenim yok benim.')
    if (typeof code !== 'string')    
      code = require('util').inspect(code, { depth: 0 });
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addField('Kod', `\`\`\`js\n${codein}\`\`\``)
    .addField('Sonuç', `\`\`\`js\n${code}\n\`\`\``)
    message.channel.send(embed)
  } catch(e) {
    let embed2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addField('Hata', "\`\`\`js\n"+e+"\n\`\`\`")
    message.channel.send(embed2);
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'eval',
    description: 'Kod denemeyi sağlar.',
    usage: 'eval <kod>'
  }