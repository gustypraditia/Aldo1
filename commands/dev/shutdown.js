exports.run = async (client, message, args) => {
  if (!client.config.owners.includes(message.author.id))
  return;
  await message.channel.send(`Bot sedang di matikan`)
  process.exit();
}

exports.help = {
  name: "shutdown",
  description: "Untuk mengshutdown bot atau di restart",
  usage: "tlh!shutdown",
  example: "shutdown"
};

exports.conf = {
  aliases: []
};