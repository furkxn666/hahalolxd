const express = require('express');
const app = express();
const http = require('http');
    app.get("/",(requesst, response) => {
      console.log(`pingleme işlemi başarılı başarılıysa bu yazıyı loglarda görürsün`);
      response.sendStatus(200);
    });
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const db = require('quick.db')
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};


client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};


 client.on("channelDelete", async channel => {
  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());
  const yetkili = await channel.guild.members.get(entry.executor.id);
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142932776386651") return;
  if (yetkili.id === "734142932776386651") return;
  

   
const sChannel = channel.guild.channels.find(c=> c.id ==="734441110633709718")
  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(
      `<@${yetkili.id}> isimli kişi ${channel.name} adlı kanalı sildi ve sahip olduğu tüm rolleri alarak, kendisine <@&734142955719491656> (Kayıtsız) rolünü verdim.`
    )
    .setTimestamp();
sChannel.send(embed)
  let roles = channel.guild.members.get(yetkili.id).roles.array();
  try {
    channel.guild.members.get(yetkili.id).removeRoles(roles);
  } catch (err) {
    console.log(err);
  }
  setTimeout(function() {
    channel.guild.members.get(yetkili.id).addRole("734142955719491656");

  }, 1500);
});     



 client.on("channelDelete", async channel => {
  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());
  const yetkili = await channel.guild.members.get(entry.executor.id);
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142932776386651") return;
  if (yetkili.id === "734142932776386651") return;
  

   
const sChannel = channel.guild.channels.find(c=> c.id ==="734143025365909514")
  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(
      `<@${yetkili.id}> isimli kişi ${channel.name} adlı kanalı sildi ve sahip olduğu tüm rolleri alarak, kendisine <@&734142955719491656> (Kayıtsız) rolünü verdim.`
    )
    .setTimestamp();
sChannel.send(embed)
  let roles = channel.guild.members.get(yetkili.id).roles.array();
  try {
    channel.guild.members.get(yetkili.id).removeRoles(roles);
  } catch (err) {
    console.log(err);
  }
  setTimeout(function() {
    channel.guild.members.get(yetkili.id).addRole("734142955719491656");

  }, 1500);
});


 client.on("channelDelete", async channel => {
  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());
  const yetkili = await channel.guild.members.get(entry.executor.id);
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142932776386651") return;
  if (yetkili.id === "734142932776386651") return;
  

   
const sChannel = channel.guild.channels.find(c=> c.id ==="734143024514465873")
  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(
      `<@${yetkili.id}> isimli kişi ${channel.name} adlı kanalı sildi ve sahip olduğu tüm rolleri alarak, kendisine <@&734142955719491656> (Kayıtsız) rolünü verdim.`
    )
    .setTimestamp();
sChannel.send(embed)
  let roles = channel.guild.members.get(yetkili.id).roles.array();
  try {
    channel.guild.members.get(yetkili.id).removeRoles(roles);
  } catch (err) {
    console.log(err);
  }
  setTimeout(function() {
    channel.guild.members.get(yetkili.id).addRole("734142955719491656");

  }, 1500);
});

client.on("channelDelete", async channel => {
  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());
  const yetkili = await channel.guild.members.get(entry.executor.id);
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142932776386651") return;
  if (yetkili.id === "734142932776386651") return;
  
//--------------------------------Hg Kanalı---------------------------------\\
client.on("guildMemberAdd", member => {
  const kanal = "734441110633709718";
  let user = client.users.get(member.id);
  require("moment-duration-format");
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  var kontrol;
  if (kurulus < 1296000000)
    kontrol = " <a:hayir:736170502485442602> **__Bu Hesap Güvenilir Değil__** ";
  if (kurulus > 1296000000)
    kontrol =
      " <a:tik:734150057640722473> **__Bu Hesap Güvenilir Gözüküyor__** ";
  moment.locale("tr");
  let buse = client.channels.get(kanal);
  buse.send({
    embed: {
      color: Math.floor(Math.random() * 16777214) + 1,
      description:
        "<a:tacc:736170615999823893> **Hoşgeldin!**"  +
        member +
        " **Seninle `" +
        member.guild.memberCount +
        "` Kişiyiz **\n\n <a:sagg:736170579509510176> **Sunucuya Kayıt Olmak İçin <#734143025365909514> Nick, Isim ve Yaş Yazınız ! **\n\n <a:kilit:736170555807498261> <@&734142954930831392> **Rolündeki yetkililer sizinle ilgilenicektir ** \n\n  <a:_:736170528615694368> **Hesabın Oluşturulma Tarihi:** " +
        moment(member.user.createdAt).format("**__DD MMMM YYYY (hh:mm)__**") +
        "  \n\n" +
        kontrol +
        " \n ",
      }
  });
});
   
const sChannel = channel.guild.channels.find(c=> c.id ==="734143027593084989")
  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(
      `<@${yetkili.id}> isimli kişi ${channel.name} adlı kanalı sildi ve sahip olduğu tüm rolleri alarak, kendisine <@&734142955719491656> (Kayıtsız) rolünü verdim.`
    )
    .setTimestamp();
sChannel.send(embed)
  let roles = channel.guild.members.get(yetkili.id).roles.array();
  try {
    channel.guild.members.get(yetkili.id).removeRoles(roles);
  } catch (err) {
    console.log(err);
  }
  setTimeout(function() {
    channel.guild.members.get(yetkili.id).addRole("734142955719491656");

  }, 1500);
});

client.on("channelDelete", async channel => {
  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());
  const yetkili = await channel.guild.members.get(entry.executor.id);
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142932776386651") return;
  if (yetkili.id === "734142932776386651") return;
  

   
const sChannel = channel.guild.channels.find(c=> c.id ==="734143029111160954")
  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(
      `<@${yetkili.id}> isimli kişi ${channel.name} adlı kanalı sildi ve sahip olduğu tüm rolleri alarak, kendisine <@&734142955719491656> (Kayıtsız) rolünü verdim.`
    )
    .setTimestamp();
sChannel.send(embed)
  let roles = channel.guild.members.get(yetkili.id).roles.array();
  try {
    channel.guild.members.get(yetkili.id).removeRoles(roles);
  } catch (err) {
    console.log(err);
  }
  setTimeout(function() {
    channel.guild.members.get(yetkili.id).addRole("734142955719491656");

  }, 1500);
});

client.on("channelDelete", async channel => {
  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());
  const yetkili = await channel.guild.members.get(entry.executor.id);
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142932776386651") return;
  if (yetkili.id === "734142932776386651") return;
  

   
const sChannel = channel.guild.channels.find(c=> c.id ==="734143030725968003")
  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(
      `<@${yetkili.id}> isimli kişi ${channel.name} adlı kanalı sildi ve sahip olduğu tüm rolleri alarak, kendisine <@&734142955719491656> (Kayıtsız) rolünü verdim.`
    )
    .setTimestamp();
sChannel.send(embed)
  let roles = channel.guild.members.get(yetkili.id).roles.array();
  try {
    channel.guild.members.get(yetkili.id).removeRoles(roles);
  } catch (err) {
    console.log(err);
  }
  setTimeout(function() {
    channel.guild.members.get(yetkili.id).addRole("734142955719491656");

  }, 1500);
});

client.on("channelDelete", async channel => {
  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());
  const yetkili = await channel.guild.members.get(entry.executor.id);
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142932776386651") return;
  if (yetkili.id === "734142932776386651") return;
  

   
const sChannel = channel.guild.channels.find(c=> c.id ==="734143033066389515")
  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(
      `<@${yetkili.id}> isimli kişi ${channel.name} adlı kanalı sildi ve sahip olduğu tüm rolleri alarak, kendisine <@&734142955719491656> (Kayıtsız) rolünü verdim.`
    )
    .setTimestamp();
sChannel.send(embed)
  let roles = channel.guild.members.get(yetkili.id).roles.array();
  try {
    channel.guild.members.get(yetkili.id).removeRoles(roles);
  } catch (err) {
    console.log(err);
  }
  setTimeout(function() {
    channel.guild.members.get(yetkili.id).addRole("734142955719491656");                 

  }, 1500);
});

client.on("channelDelete", async channel => {
  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());
  const yetkili = await channel.guild.members.get(entry.executor.id);
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142934533800109") return;
  if (yetkili.id === "734142932776386651") return;
  if (yetkili.id === "734142932776386651") return;
  

   
const sChannel = channel.guild.channels.find(c=> c.id ==="734846172111437895")
  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(
      `<@${yetkili.id}> isimli kişi ${channel.name} adlı kanalı sildi ve sahip olduğu tüm rolleri alarak, kendisine <@&734142955719491656> (Kayıtsız) rolünü verdim.`
    )
    .setTimestamp();
sChannel.send(embed)
  let roles = channel.guild.members.get(yetkili.id).roles.array();
  try {
    channel.guild.members.get(yetkili.id).removeRoles(roles);
  } catch (err) {
    console.log(err);
  }
  setTimeout(function() {
    channel.guild.members.get(yetkili.id).addRole("734142955719491656");                 

  }, 1500);
});

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
  };

client.on('message', async message => {
 
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
  let kullanıcı = message.mentions.users.first() || message.author
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`)
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)
  let afkkullanıcıı = await db.fetch(`afk_${kullanıcı}`)
  let sebep = afkkullanıcı
 
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.member.setNickname(`${message.author.username}`);
      
      message.channel.send(`:sunny: **<@${message.author.id}>** adlı kullanıcı artık **AFK** değil.`)
      db.delete(`afk_${message.author.id}`)
    }
    if (afkkullanıcı) {
      message.channel.send(`:crescent_moon: **<@${kullanıcı.id}>** adlı Kullanıcı **AFK**. | **SEBEB** : \`${sebep}\``);
      message.author.send(`Sen Mesaj Attında, **<@${kullanıcı.id}>** adlı Kullanıcı **AFK**. | **SEBEB** : \`${sebep}\``);
    }
  }
});



client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  Hoş geldin <a:kelebek:736170367508545566>');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!ip') {
    msg.reply('<a:tik:734150057640722473>  ***IP`miz/Tıkla Bağlan: steam://connect/185.193.165.84***   <a:ylldz:734150011297726535>');
  }
});
client.login(ayarlar.token);

