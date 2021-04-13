const { Message } = require("discord.js")

exports.run = async (client, message, args) => {



let say = args.join(' ')
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("Maaf kamu tidak ada permission **Manage_Messages**")
    if(!say)
    return message.reply("Mohon isi message tersebut !")
    message.channel.bulkDelete(1)
    message.channel.send(say)

}

exports.help = {
  name: "say",
  description: "Say Haloo !",
  usage: "tlh!say",
  example: "say"
};

exports.conf = {
  aliases: []
}

//