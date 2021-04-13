const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
	const msg = client.snipes.get(message.channel.id)
	if (!msg){
    const tidakada = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**Maaf tidak ada pesan dihapus !**")
    .setTimestamp()
    .setThumbnail(client.user.displayAvatarURL())
    message.channel.send(tidakada)
  } else {
	const embed = new MessageEmbed()
	.setColor("RANDOM")
	.setAuthor(msg.author, msg.profilepp)
	.setDescription(msg.content)
	.setTimestamp()
  .setFooter("MichiUwU")
	if (msg.image)embed.setImage(msg.image)
		message.channel.send(embed)
}
}

exports.help = {
  name: "snipe",
  description: "Untuk menglihat message yang sudah di hapus",
  usage: "tlh!snipe",
  example: "snipe"
};

exports.conf = {
  aliases: []
}

//