const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('Rainbow')
    .setAuthor(`VİKİNGS | Yetkili Komutları`, client.user.avatarURL) 
.setThumbnail(client.user.avatarURL)
      .addField('<a:ayar:735858351002615910> **Genel**', '`kick`, `oylama`, `reboot`, `ban`, `banlist`, `duyuru`, `çekiliş`, `isim`, `fakemesaj`, `uyarı`, `sabitle`, `partner`, `botkontrol`')
      .addField('<a:ayar:735858351002615910> **Gerekli Komutlar**', '`otorol-sistemi`, `seviye-sistemi`, `sunucu-sistemi`')
      .addField('<a:ayar:735858351002615910> **Diğer**', '`herkesten-rol-al`, `herkese-rol-ver`, `unbanall`,`rol-ver`,`rol-al`,`sohbet-kapat`,`sohbet-aç`,`uyar`')
      .addField('<a:ayar:735858351002615910> **Sunucu Komutları**', '`ses-kanal-aç`, `kanal-açıklama`, `rol-liste`, `temizle`, `yaz`, `mesajat`, `güvenlik`, `rol-koruma`, `kanal-koruma`, `reklam-engelleme`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'yetkili',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};