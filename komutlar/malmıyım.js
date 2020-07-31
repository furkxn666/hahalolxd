const Discord = require('discord.js');

const cevaplar = [                 'Mal Olabilirsin',
                                   '100%100 Malsın!',
                                   'Mal Değilsin'
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Soruyu Sorman gerek **Örnek**: mf!malmıyım *Malmıyım?*')
    else message.channel.send(cevap)

}; 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mallıktesti'],
  permLevel: 0
};

exports.help = {
  name: 'malmıyım',
  description: 'güncel mallık',
  usage: 'malmıyım'
};