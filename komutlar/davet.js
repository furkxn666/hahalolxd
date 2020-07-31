const Discord = require('discord.js');

let botid = ('702221500035498025') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} İletişim Bilgileri`)
    .addField('BİZ KİMİZ?', 'Discord kullanıcıların sunucularını daha iyi hale getirmek için çabalayan bir ekibiz.')//ne kadar yetkili komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=702221500035498025&scope=bot&permissions=805314622
) **|** [Destek Sunucusu](https://discord.gg/3m7kSPk) **|** [Web Sitesi ( Yakında )]()`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet','davetet'],
  permLevel: 0
};

exports.help = {
  name: 'bizkimiz',
  description: 'bot hakkında bilgi',
  usage: 'davetet'
};
   