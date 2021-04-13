const { MessageEmbed } = require("discord.js")
const { prefix } = require('../../config.json')
const { platform, arch, cpus } = require("os")
const Discord = require("discord.js")
const os = require("os")
const core = os.cpus()[0];

exports.run = async (client, message, args) => {
  let cpu =  cpus()[0].model + " " + arch()
  let memtotal = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)
  let memusage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)

  const embed = new MessageEmbed()
  .setColor("RANDOM")
  .setThumbnail(client.user.displayAvatarURL())
  .addField("Informasi", `
  Username : ${client.user.username}
  Prefix : ${prefix}`)
  .addField("System", `
  Platform : ${platform}
  CPU : ${cpu}
  Core : ${os.cpus().length}
  Memory total : ${memtotal} MB
  Memory usage : ${memusage} MB
  Speed : ${core.speed}
  Nodejs : ${process.version}`)
  .addField("Package", `
  Discord.js : ${Discord.version}`)
  .setTimestamp()
  .setFooter("MichiUwU")
  message.channel.send(embed)
}

exports.help = {
  name: "stats",
  description: "Untuk menglihat status bot",
  usage: "tlh!stats",
  example: "stats"
};

exports.conf = {
  aliases: []
}