const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../config.json');

exports.run = async (client, message, args) => {
	if (!message.member.hasPermission('MANAGE_CHANNELS'))
		return message.channel.send(
			"🇮🇩 : Kamu Tidak Mempunyai Izin Untuk Menggunakan Command ini.\n🇺🇸 : You don't have permissions to use this command."
		);

	let channel =
		message.mentions.channels.first() ||
		message.guild.channels.cache.get(args[0]);
	let title = args[1];
	let msg = args.slice(2).join(' ');
	let embed = new MessageEmbed().setTitle('Announcement').setColor('#F3A537');

	if (!channel || !args.length || !msg) {
		embed.addField(`Aliases`, `• \`${prefix}announce\`\n• \`${prefix}ac\``);
		embed.addField(
			`Usage`,
			`• \`${prefix}announcement <#channel> [title] [message]\``
		);
		embed.addField(
			`Example`,
			`• \`${prefix}announcement #announcement Event Ada event baru nih ges\``
		);
		embed.setFooter(`Made with ♥️ by Mukclay#7130`);
		return message.channel.send(embed);
	} else {
		embed.setThumbnail(
			`${message.guild.iconURL({ size: 4096, dynamic: true })}`
		);
		embed.addField(title, msg);
		embed.setTimestamp();
		embed.setFooter(`${message.author.username} • The Little Heaven`);
		return (
			message.channel.send({
				embed: {
					color: '#F3A537',
					title: 'Announcement',
					thumbnail: {
						url: message.guild.iconURL({ size: 4096, dynamic: true })
					},
					description:
						'<a:9_Style_Check1No:789411267693510686> | Announcement Was Successfully Sent',
					footer: {
						text: `Announce By ${message.author.username}`
					}
				}
			}),
			channel.send('@everyone', embed).catch(() => {})
		);
	}
};

exports.help = {
	name: 'announcement',
	description: 'Announcement',
	usage: 'tlh!announcement <#channel> [title] [message]',
	example: 'tlh!announcement #announcement Event Ada event baru nih ges'
};

exports.conf = {
	aliases: ['ac'] // aliases jangan pake '' pake ""
};
