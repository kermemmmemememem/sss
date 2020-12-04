const Discord = require('discord.js');
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args, func) => {


  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix 
  let aktif = db.has(`lang_${message.guild.id}`) === true;
  
  var seçenek = args[0]
  
 if (!aktif) if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "Yönetici" yetkisine sahip olmalısın.`);
  
  let preffix = db.fetch(`prefix_${message.guild.id}`)
  
    if(args[0] === "sıfırla") {
    if(!preffix) {
    if (!aktif)   message.channel.send(`Ayarlanmayan şeyi sıfırlayamazsın.`)
      return
    }
    
    if (!aktif) db.delete(`prefix_${message.guild.id}`)
     if (!aktif)message.channel.send(`Prefix başarıyla sıfırlandı. Prefix artık **${ayarlar.prefix}**`)
    return
  }
  
  if (!args[0])
     if (!aktif)return message.channel.send(`Bu sunucudaki prefixim: **${preffix ? preffix : ayarlar.prefix}**`)
   if (!aktif)db.set(`prefix_${message.guild.id}`, args[0])
    if (!aktif) message.channel.send(`Prefix başarıyla **${args[0]}** olarak ayarlandı.\n${args[0]}prefix sıfırla yazarak prefixi sıfırlayabilirsiniz.`)



}                 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['prefix-ayarla'],
  permLevel: 4
};

exports.help = {
  name: 'prefix',
  kategori: "yetkili",
  description: 'Sunucuya özel prefix ayarlar.',
  usage: 'prefix'
};