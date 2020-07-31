const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":no_entry: Otorol sistemini ayarlamak `Sunucuyu Yönet` yetkisine sahip olmalısın!")

let rol = message.mentions.roles.first()
if(!rol) return message.channel.send('Hata Muteli rolünü etiklemedin')
  
message.channel.send(`Başarılı! Muteli rolü ${rol} olarak ayarlandı.`)
db.set(`muteli_${message.guild.id}`, rol.id)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};
exports.help = {
name: 'muteli-rol-ayarla',
description: 'Mute sisteminin muteli rolünü ayarlar.',
usage: '-muteli-rol-ayarla @mutelirol'
};