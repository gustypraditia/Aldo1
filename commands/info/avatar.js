const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {

const user = message.mentions.users.first()


if(!user) {
  const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true })
  
  const embed = new MessageEmbed()
    .setAuthor('The Little Heaven', client.user.displayAvatarURL({ dynamic: true }))
    .setTitle(`${message.author.username} Avatar`)
    .setDescription(`[Avatar Link](${message.author.displayAvatarURL()})`)
    .setImage(avatar)
    .setFooter(`Request By ${message.author.username}`)
    
    message.channel.send(embed)
} else {
    const avatar = user.displayAvatarURL({ size: 4096, dynamic: true })
      
  const embed1 = new MessageEmbed()
    .setAuthor('The Little Heaven', client.user.displayAvatarURL({ dynamic: true }))
    .setTitle(`${user.username} Avatar`)
    .setDescription(`[Avatar Link](${user.displayAvatarURL()})`)
    .setImage(avatar)
    .setFooter(`Request By ${message.author.username}`)

message.channel.send(embed1)
}


};

exports.help = {
  name: "avatar",
  description: "Untuk menglihat list command",
  usage: "tlh!help",
  example: "help"
};

exports.conf = {
  aliases: ["ava"]
};