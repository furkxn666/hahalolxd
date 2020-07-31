const Discord = require('discord.js');
exports.run = (client, message, args) => {
/////FORCEX
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunun için gerekli iznin yok');
  let guild = message.guild

  let user = message.mentions.members.first() 
  let rol = message.mentions.roles.first()
/////FORCEX
  if (!user) return message.reply('**Kime Rol Verceğimi Yazmadın!**')
  if (!rol) return message.reply('**Rol  belirtmedin**')
  /////FORCEX
  message.react("EMOJI ID")
  /////FORCEX
user.addRole(rol)
  /////FORCEX
  const embed = new Discord.RichEmbed()
  .setColor('RED')
  .setTitle(`Başarılı`)
  .setDescription(`**Başarılı ${user} Adlı Kullanıcıya ${rol} Adlı Rolunu Verdim** :white_check_mark: `)
  .setTimestamp()
  message.channel.send(embed)

/////FORCEX
};
/////FORCEX
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rol-ver'],
  permLevel: 0
};

exports.help = {
  name: 'rol-ver',
  description: 'İstediğiniz kişiyi istediğiniz rolü verir.',
  usage: 'rol-ver [kullanıcı] [@rol]'
};