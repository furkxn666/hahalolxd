const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`🎧 = Yardım Menüsü = 🎧
                    
​
✅${prefix}radyo    ➠  Radyoyu Açmanızı Sağlar.
✅${prefix}çal      ➠  Belirtilen müziği oynatmayı sağlar.            
✅${prefix}durdur   ➠  Belirtilen müziği durdurmayı sağlar.           
✅${prefix}geç      ➠  Sıradaki müziğe geçiş yapar.                   
✅${prefix}duraklat ➠  Müziği durkaklatır.                            
✅${prefix}devam    ➠  Müziği devam ettirir.                          
​
>`);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} =
​
Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Botun yardım komutlarını gösterir.',
  usage: 'müzik'
};