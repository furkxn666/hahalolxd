const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

  let user = message.author
  let sebep = args.join(" ")

  if (!sebep) return message.channel.send(`<a:tik:728589907232161863> Bir sebep yazmalısın.`)
  
  message.member.setNickname(`[AFK] ${message.author.username}`);    
  db.set(`afk_${user.id}`, sebep)
  message.channel.send(`:okey: <@${message.author.id}> Artık \`${sebep}\` sebebiyle AFK'sın.`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'afk',
  description: "AFK olmanızı sağlar.",
  usage: 'afk <sebep>'
}