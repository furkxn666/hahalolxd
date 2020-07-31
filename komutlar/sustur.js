const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let yetkili = db.fetch(`myetkili_${message.guild.id}`)
  let rol = db.fetch(`muteli_${message.guild.id}`)
  
  if(!yetkili) return message.channel.send(`Hata! ilk önce mute yetkilisi rolünü ayarlaman gerekli \`-mute-yetkili-rol-ayarla\``)
  if(!rol) return message.channel.send(`Hata! ilk önce muteli rolünü ayarlaman gerekli \`-muteli-rol-ayarlar\``)
     
  if (!message.member.roles.has(yetkili)) {
  } else {
    let muted =
      message.mentions.members.first() ||
      message.guild.members.find(c => c.id === args[0]);
    if (!muted) {
      message.channel.send("Lütfen susturulacak üyeyi etiketleyiniz.");
      } else {
        let mutezaman = args[1]
          .replace("sn", "s")
          .replace("dk", "m")
          .replace("sa", "h")
          .replace("gün", "d");
        if (!mutezaman) {
          message.channel.send("Lütfen bir zaman dilimi belirt.");
        } else {
          let sebep = args.splice(2, args.length).join(" ");
          
       let vakit = mutezaman
            .replace("m", " dakika")
            .replace("s", " saniye")
            .replace("h", " saat")
            .replace("d", " gün");
      muted.addRole(rol);
            const embed = new Discord.RichEmbed()
            .setColor('BLUE')
            .setDescription(`**${muted.user.tag}** adlı kullanıcı susturuldu \n \n **Susturan kişi:** <@${message.author.id}> \n **Süre:** \`${vakit}\``)
            message.channel.send(embed)
     
          setTimeout(async function() {
            muted.removeRole(rol)
            message.channel.send("Susturulma cezası, sürenin bitmesi sebebiyle kaldırıldı.")
          }, ms(mutezaman));
        }
    }
  }
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["mute"],
permLevel: 0
};
exports.help = {
name: "sustur",
description: "Bir kişi susturur",
usage: "sustur"
};