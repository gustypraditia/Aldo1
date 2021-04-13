const process = require("child_process")

exports.run = async (client, message, args) => {
  if (!client.config.owners.includes(message.author.id))
  return;

  message.channel.send("Sabar ya ......").then(m => m.delete({timeout: 5000}))

  process.exec(args.join(" "), (error,stdout) => {
    let response = (error || stdout)
    message.channel.send(response, {code: "asciidoc", split: "\n"}).catch(err => message.channel.send(err))
  })

  return;
}

exports.help = {
  name: "shell",
  description: ".",
  usage: "tlh!shell (anggap aja cmd)",
  example: "shell"
};

exports.conf = {
  aliases: []
}