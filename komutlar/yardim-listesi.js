const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
    .setTitle("Komut Listesi")
    .setDescription("")
    .setColor(0x00ffff)
    .setDescription(
      "<a:ayar:735858351002615910> **!yetkili** Sunucuyu yönetmek için gerekli olan komutlar.\n <a:ayar:735858351002615910> **!eğlence** Eğlenmek için bulunan komutlar.\n <a:ayar:735858351002615910> **!kullanıcı** Kullanıcılar için komutlar.\n <a:ayar:735858351002615910> **!bot** Bot ile alakalı komutları görürsünüz."
    )
    .addField(
      "» Linkler",
      `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=728572839422328884&scope=bot&permissions=8)` +
        "**\n**" +
        `[Botun İnternet Sitesi](https://vikings-helper.glitch.me)` +
        "**\n**" +
        `[Destek Sunucusu](https://discord.gg/mHwgczc)`,
      false
    )
    .setFooter("vikings | Yardım Komutları");

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(
        "asciidoc",
        `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` +
          prefix +
          `${command.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "yardım",
  usage: "yardım "
};
