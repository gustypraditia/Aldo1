const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

  if (!message.member.hasPermission("BAN_MEMBERS"))
  return message.reply("Maaf kamu tidak ada permission **Ban_members**.")
  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
  return ("Maaf saya tidak ada permission **Ban_members**.")
  if (!user)
  return message.reply("Mohon mentions user tersebut !")
  if (!user.bannable)
  return message.reply("Maaf user tersebut mempunyai roles yang tinggi.")

  let reason = args.slice(1).join(' ')
    if (!reason)
  return message.reply("Mohon masukkan alasan tersebut jika ingin diban !")
  user.ban({reason : reason})
  .catch(error => message.reply(`${error}`))

  

  const embed = new MessageEmbed()
  .setColor("RANDOM")
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription(`User **${user.user.tag}** terkena ban oleh **${message.author.tag}** alasan **${reason}**`)
  .setTimestamp()
  .setFooter("MichiUwU")
  message.channel.send(embed)
}

exports.help = {
  name: "ban",
  description: "Untuk ban user",
  usage: "tlh!ban (user) (reason)",
  example: "ban"
}

exports.conf = {
  aliases : []
}