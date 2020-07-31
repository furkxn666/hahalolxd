const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client,message,args) => {

 if(!message.member.roles.has('734142934533800109')) return message.channel.send('Bu komutu sadece **<@&734142934533800109>** yetkisine sahip kişiler kullanabilir.').then(message => message.delete(6000));
  message.delete(10)
 let kişi = message.mentions.users.first()
  if(!kişi) return message.channel.send('Lütfen uyarı verilecek bir kullanıcı etiketle!').then(message => message.delete(8000));
  message.delete()
  let sebep =  args.slice(1).join(' ')
  if(!sebep) return message.channel.send('Lütfen sebep belirt!').then(message => message.delete(8000));
  message.delete(10)
    let uyarısayı = db.add(`uyarılar_${kişi.id}`, 1)
  if (uyarısayı === null) uyarısayı = 1;
 const embed = new Discord.RichEmbed()
 .setColor('BLUE')
 .setDescription(`${kişi} **adlı kişiye 1 uyarı eklendi.** \n \n **Veren Yetkili:** <@${message.author.id}> \n **Toplam Uyarı:** \`${uyarısayı}\` \n **Sebebi:** \`${sebep}\``)
client.channels.get('734846172111437895').send(embed)
 
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 2
}; 
exports.help = {
name: "uyar",
description: "Uyarı verir.",
usage: "uyar"
};