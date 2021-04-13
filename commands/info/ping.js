const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
    
message.channel.send('**The Ping-inator!**\nPinging...').then((msg) => {
 ping = msg.createdTimestamp - message.createdTimestamp;
 const embed = new Discord.MessageEmbed()
  .setAuthor('The Little Heaven', client.user.displayAvatarURL({ dynamic: true }))
  .setColor(`RANDOM`)
  .setTitle(`
  `)
  .setDescription(
   "**PONG!!**\n<a:Huruf_TLH:798672888592859157>  | `" + ping + 'ms`.\n'
  )
  .setTimestamp()
  .setFooter('by Jesand');
 message.channel.send(embed);
 msg.delete();
});
}

exports.help = {
  name: "ping",
  description: "untuk cek ping !",
  usage: "tlh!ping",
  example: "ping"
};

exports.conf = {
  aliases: ["beep"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};