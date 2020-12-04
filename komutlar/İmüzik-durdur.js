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

    var voiceChannel = message.member.voice.channel;
        
    const err1 = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**You're not on a voice channel.**`)  
   if (!aktif)  if (!voiceChannel) return message.channel.send(err1);
    const err2 = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**He's not playing any songs right now.**`)
    if (!aktif) if (!serverQueue) return message.channel.send(err2);
    serverQueue.songs = [];
    const songEnd = new RichEmbed()
    .setColor("B71C1C")
    .setDescription(`**Song closed.**`)
    serverQueue.connection.dispatcher.end('');
    if (!aktif) message.channel.send(songEnd);
};

exports.conf = {
    enabled: true,
    aliases: ['stop'],
    permLevel: 0
};

exports.help = {
    name: 'stop',
    description: 'Oynatılan/çalan şarkıyı kapatır.',
    usage: 'bitir'
};