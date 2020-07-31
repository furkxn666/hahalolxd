const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' DIED')
    .setImage(`https://tenor.com/view/africa-coffin-dance-ghana-funeral-gif-16728820 `)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: ['coffin-dance'],
  permLevel: 0
};

exports.help = {
  name: 'coffindance',
  description: 'Coffin dance gifi atar',
  usage: 'coffindance',
};