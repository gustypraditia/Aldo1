exports.run = async (client, message, args) => {
  if (!client.config.owners.includes(message.author.id))
  return;
	if (!args[0])
		return message.reply("Mohon masukkan nama category !")
	if (!args[1])
		return message.reply("Mohon masukkan nama command !")

	let category = args[0].toLowerCase();
	let command = args[1].toLowerCase();

	try {
		delete require.cache[require.resolve(`../../commands/${category}/${command}.js`)];
		client.commands.delete(command);

		const pull = require(`../../commands/${category}/${command}.js`);
		client.commands.set(command, pull)

		message.channel.send(`Command ${command} sudah berhasil di reload !`)
	} catch (error) {
		return message.reply(`Command ${command} gagal reload karena ${error.message}`)
 }
}

exports.help = {
  name: "reload",
  description: "Untuk restart command",
  usage: "tlh!-reload (category) (command)",
  example: "reload"
}

exports.conf = {
  aliases : []
}