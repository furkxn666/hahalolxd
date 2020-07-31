const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":no_entry: mute-yetkili sistemini ayarlamak `Sunucuyu Yönet` yetkisine sahip olmalısın!")

let rol = message.mentions.roles.first()
if(!rol) return message.channel.send('Hata Mute yetkilisini etiketlemedin')
  
message.channel.send(`Başarılı! Mute yetkili rolü ${rol} olarak ayarlandı.`)
db.set(`myetkili_${message.guild.id}`, rol.id)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};
exports.help = {
name: 'mute-yetkili-ayarla',
description: 'Mute sisteminin yetkilisini ayarlar.',
usage: '-mute-yetkili-ayarla @yetkilirol'
};