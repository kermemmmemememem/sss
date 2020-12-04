const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
  let aktif = db.has(`lang_${message.guild.id}`) === true;


let müzike = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
.setTitle("Yorum")
    .setColor("RANDOM")
    .setAuthor(`Yorum`, client.user.avatarURL)
    .setDescription(
      "**Müzik Komutları** \n ``çal`` ``duraklat`` ``devam`` ``tekrar`` ``geç`` ``durdur`` ``ses`` \n \n **Ayarlanabilir Komutlar** \n ``prefix`` ``dil`` \n\n **Eğlence Komutları** \n ``yorum``\n\n ****Bot Komutları**** \n ``istatistik``"
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
  aliases: ["yardım"],
  permLevel: 0
};
exports.help = {
  name: "yardım"
};
