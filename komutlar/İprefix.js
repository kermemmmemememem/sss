const Discord = require('discord.js');
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args, func) => {


  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix 
  let aktif = db.has(`lang_${message.guild.id}`) === false;
  
  var seçenek = args[0]
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "Yönetici" yetkisine sahip olmalısın.`);
  
  let preffix = db.fetch(`prefix_${message.guild.id}`)
  
    if(args[0] === "reset") {
    if(!preffix) {
    if (!aktif)   message.channel.send(`You cannot reset what is not set.`)
      return
    }
    
    if (!aktif)db.delete(`prefix_${message.guild.id}`)
     if (!aktif)message.channel.send(`Prefix has been reset successfully. Prefix now ** ${ayarlar.prefix} **`)
    return
  }
  
  if (!args[0])
     if (!aktif)return message.channel.send(`My prefix on this server: **${preffix ? preffix : ayarlar.prefix}**`)
  if (!aktif) db.set(`prefix_${message.guild.id}`, args[0])
    if (!aktif) message.channel.send(`The prefix has been successfully set to **${args[0]}**. \n ${args [0]} You can reset the prefix by typing reset prefix.`)



}                 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['prefix'],
  permLevel: 4
};

exports.help = {
  name: 'prefix',
  kategori: "yetkili",
  description: 'Sunucuya özel prefix ayarlar.',
  usage: 'prefix'
};