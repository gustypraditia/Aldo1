const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
  .setColor("RANDOM")
  .setAuthor('The Little Heaven', client.user.displayAvatarURL({ dynamic: true }))
  .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
  .setTitle('Command Lists')
  .addField("<a:NU_BotDeveloper:808584339276693524>  •  Developer", "```\nreload, shutdown, guild, shell,\n```")
  .addField("<:clyde1:808583661830012948>  •  General", "```\nhelp, snipe, avatar, sayembed```")
  .addField("<:Info:792343361381597225>  •  Info", "```\navatar, stats, ping, serverinfo, userinfo```")
  .addField("<:Moderation:792341596686647296>  •  Moderation", "```\nannouncement, say, kick, ban, ```")
  .setImage('https://cdn.discordapp.com/attachments/780728014203781182/791846013908418580/20201225_084441.jpg')
  .setFooter('The Little Heaven © 2021 | Dev → Clay , Michi , Jesand')
  message.channel.send(embed)
};

exports.help = {
  name: "help",
  description: "Untuk menglihat list command",
  usage: "tlh!help",
  example: "help"
};

exports.conf = {
  aliases: ["bantuan"]
};