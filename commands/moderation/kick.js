const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

  if (!message.member.hasPermission("KICK_MEMBERS")) 
  return message.reply("Maaf kamu tidak ada permission **Kick_members**.")
  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
  return message.reply("Maaf saya tidak permission **Kick_members**.")
  if (!user)
  return message.reply("Mohon mentions user tersebut !")
  if (!user.kickable)
  return message.reply("Maaf user tersebut mempunyai roles yang tinggi.")

  let reason = args.slice(1).join(' ')
  if (!reason)
  reason = "Tidak ada"
  user.kick(reason)
  .catch(error => message.reply(`${error}`))
  const embed = new MessageEmbed()
  .setColor("RANDOM")
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription(`Username **${user.user.tag}** terkick oleh **${message.author.tag}** alasan **${reason}**`)
  .setTimestamp()
  .setFooter("MichiUwU")
  message.channel.send(embed)
}

exports.help = {
  name: "kick",
  description: "Untuk kick member",
  usage: "tlh!kick (user)",
  example: "kick"
};

exports.conf = {
  aliases: []
}