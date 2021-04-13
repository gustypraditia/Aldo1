const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
   if (!client.config.owners.includes(message.author.id))
  return;

      let guildlist = client.guilds.cache.map(g => g.name).join("\n");
    let servsize = client.guilds.cache.size;

    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(client.user.displayAvatarURL())
    .addField(`Guilds list`, `
    ${guildlist},`)
    .addField("Total guild :", servsize)
    message.channel.send(embed)
}


exports.help = {
  name: "guild",
  description: ".",
  usage: "tlh!guild",
  example: "guild"
};

exports.conf = {
  aliases: []
};