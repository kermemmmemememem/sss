const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
  const db = require("quick.db");
 let aktif = db.has(`lang_${message.guild.id}`) === true;
    const duration = moment.duration(client.uptime).format(" D [Gün], H [saat], m [dakika], s [saniye]");
    const istatisdtikozel = new Discord.RichEmbed()
    .setColor(0x36393F)
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
  .addField(` Bot Sahibi`, `! ✮𝕂𝕖𝕣𝕖𝕞◕#1019`, )
    .addField(`Bot Geliştiricisi`, `★『AZE』ꐟ Møøn#0001`, )

    .addField("Bellek Kullanımı ", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField(" Sunucular", `${client.guilds.size.toLocaleString()}`, true)
  .addField(" Toplam Kullanıcı ", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField(` Aktif Zaman `, `${duration}`, true)
  .addField(" Discord.js Version ", `${Discord.version}`, true)  
  .addField(` Davet Et`, `[Click](https://discord.com/oauth2/authorize?client_id=780799480484069376&scope=bot&permissions=8)`, true)
 if (!aktif) message.channel.send(istatisdtikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};