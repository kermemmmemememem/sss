const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyApi8Z45osNXPksUMiaItOhXsNRyRdDtto');
const db = require("quick.db");
 
exports.run = async (client, message, args) => {

  let aktif = db.has(`lang_${message.guild.id}`) === false;
    const queue = client.queue;
  
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
      const asd1 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`You're not on a voice channel.`)  
     if (!aktif) if (!message.member.voiceChannel) return message.channel.send(asd1);
    const asd2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**He's not playing any songs right now.**`)
   if (!aktif) if (!serverQueue) return message.channel.send(asd2);

   if (!aktif) if (!args[0]) return message.reply("**Write a number to adjust the volume!**");
    serverQueue.volume = args[0];
   if (!aktif) if (args[0] > 10) return message.channel.send(`The volume can be set to a maximum of ** 10**.`)
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0]);
    const volumeLevelEdit = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**Adjusted Volume: ${args[0]}**`)
    if (!aktif) return message.channel.send(volumeLevelEdit);

};

exports.conf = {
    enabled: true,
    aliases: ['volume'],
    permLevel: 0
};

exports.help = {
    name: 'volume',
    description: 'Muziğin sesini ayarlar.',
    usage: 'ses sayı'
};