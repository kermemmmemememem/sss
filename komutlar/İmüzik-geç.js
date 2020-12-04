const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyApi8Z45osNXPksUMiaItOhXsNRyRdDtto');


exports.run = async (client, message, args) => {
  const db = require("quick.db");
  let aktif = db.has(`lang_${message.guild.id}`) === false;
  const queue = client.queue;    
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
    const err0 = new RichEmbed()
      .setColor("RANDOM")
      .setDescription(`**You're not on a voice channel.**`) 
    if (!aktif) if (!voiceChannel) return message.channel.send(err0);
    const err05 = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**He's not playing any songs right now.**`)
    if (!aktif)if (!serverQueue) return message.channel.send(err05);
    const songSkip = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`✅ ** Song successfully passed!**`)
    serverQueue.connection.dispatcher.end('');
   if (!aktif) message.channel.send(songSkip)

};

exports.conf = {
    enabled: true,
    aliases: ['skip'],
    permLevel: 0
};

exports.help = {
    name: 'skip',
    description: 'Sıradaki şarkıya geçer. Sırada şarkı yoksa şarkıyı kapatır.',
    usage: 'geç'
};