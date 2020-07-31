const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  if (
    !message.member.roles.has("İD") &&
    !message.member.roles.has("734142954930831392")
  )
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription(
          "Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!"
        )
        .setColor("RANDOM")
    );
  let kullanıcı = message.mentions.users.first();
  if (!kullanıcı)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription("Bir üye etiketlemelisin!")
        .setColor("Black")
    );
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first();
  let member = message.guild.member(kullanıcı);
  let isim = args[1];
  if (!isim)
    return message.channel
      .send("Lütfen bir isim girin!")
      .then(m => m.delete(5000));
  let yas = args[3];
  let lakap = args[2];
  if (!yas) return message.channel.send("Lütfen bir yaş girin!");
  await member.setNickname(` ${isim} | ${lakap} ◦ ${yas}`);
  member.addRole("734142953735323650"); //erkek rol id
  member.removeRole("734142955719491656"); //kayıtsız rol id
  message.react("734150057640722473"); //Emojiid
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(
      `**Vikings**`,
      `<a:tiik:734150057640722473> ${member.user} **adlı üyeye** <@&734142953735323650> **rolünü verip ismini**  \` ${isim} | ${lakap} ◦ ${yas}\` **olarak kayıt ettim! **`
    )
    .addField("**Kayıt eden yetkili**", message.author);
  return message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["k", "k"],
  kategori: "Yetkili Komutları",
  permLevel: 0
};
exports.help = {
  name: "k",
  description: "k",
  usage: "k"
};
