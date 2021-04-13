const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  let sayembed = args.slice(0).join(' ')
  if (!sayembed) {
    const non = new MessageEmbed()
    .setDescription("**Mohon isi message tersebut !**")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("MichiUwU")
    message.channel.send(non)
  } else {
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(sayembed)
    message.channel.send(embed)
    message.channel.bulkDelete(1)
  }
}

exports.help = {
  name: "sayembed",
  description: ".",
  usage: "tlh!sayembed (message)",
  example: "sayembed"
};

exports.conf = {
  aliases: []
}