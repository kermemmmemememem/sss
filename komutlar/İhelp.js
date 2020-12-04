const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
  let aktif = db.has(`lang_${message.guild.id}`) === false;


let müzike = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
.setTitle("Yorum")
    .setColor("RANDOM")
    .setAuthor(`Yorum`, client.user.avatarURL)
    .setDescription(
      "**Music Commands** \n ``play`` ``pause`` ``continue`` ``loop`` ``skip`` ``stop`` ``volume`` \n \n **Settings** \n ``prefix`` ``language`` \n\n **Entertainment Commands** \n ``comment`` \n\n **Bot Commands** \n ``statistics``"
    )
   
.setURL("https://discord.com/oauth2/authorize?client_id=780799480484069376&scope=bot&permissions=8")
    .setThumbnail(
      "https://www.resimyukle.link/img/2020/12/02/Yorum2e31da21c5d150d7.png"
    );

if (!aktif) message.channel.send(müzike);
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};
exports.help = {
  name: "help"
};
